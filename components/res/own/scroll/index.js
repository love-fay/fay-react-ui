import React,{Component} from 'react';
import classnames from 'classnames';
import './style/index.less';

class Index extends Component{

    constructor(props){
        super(props);
        this.scrollRef = React.createRef();
        this.renderDataRef = React.createRef();
    }

    state = {
        bar: false,
        top: 0,
        left: 0,
        barYTop: 0,
        barXLeft: 0,
        barYHeight: 0,
        barXWidth: 0,
        mouseDownBarY: undefined,
        mouseDownBarX: undefined,
        scrollWidth: undefined,
        scrollHeight: undefined,
    };

    step = 100;

    onMouseEnter = () => {
        this.setState({
            bar: true
        })
    };

    onMouseLeave = () => {
        this.setState({
            bar: false
        })
    };

    scrollY = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const height = this.renderDataRef.current.offsetHeight;
        const scrollHeight = this.scrollRef.current.offsetHeight;
        if(height>scrollHeight) e.stopPropagation();
        const h = height + this.state.top - scrollHeight;
        if(e.deltaY < 0){
            if(this.state.top<0){
                const top = (this.state.top>(-1*this.step)?0:(this.state.top + this.step));
                const barYTop = (top/height)*(-1)*scrollHeight+this.state.barYHeight-scrollHeight;
                this.setState({top,barYTop});
            }
        }else if(e.deltaY > 0){
            if(h>0){
                const top = this.state.top - (h<this.step?h:this.step);
                const barYTop = (top/height)*(-1)*scrollHeight+this.state.barYHeight-scrollHeight;
                this.setState({top,barYTop});
            }
        }
    };

    mouseDownBarY = (e) => {
        e.preventDefault();
        this.setState({mouseDownBarY: e.clientY});
        document.addEventListener('mousemove', this.moveY, false);
        document.addEventListener('mouseup', this.mouseUpBarY, false);
    };

    mouseUpBarY = () => {
        this.setState({mouseDownBarY: undefined});
        document.removeEventListener('mousemove', this.moveY,false);
        document.removeEventListener('mouseup', this.mouseUpBarY,false);
    };

    moveY = (e) => {
        const {mouseDownBarY, barYTop, barYHeight} = this.state;
        if(mouseDownBarY){
            let moveY = e.clientY - mouseDownBarY + barYTop;
            const height = this.renderDataRef.current.offsetHeight;
            const scrollHeight = this.scrollRef.current.offsetHeight;
            if((-1)*moveY + this.state.barYHeight > scrollHeight){
                moveY = barYHeight-scrollHeight;
            }else if(!(barYTop>0) && moveY>0){
                moveY = 0;
            }
            const top = (height/scrollHeight)*(moveY+scrollHeight-barYHeight)*(-1);
            this.setState({top,barYTop: moveY, mouseDownBarY: e.clientY});
        }
    };

    mouseDownBarX = (e) => {
        e.preventDefault();
        this.setState({mouseDownBarX: e.clientX});
        document.addEventListener('mousemove', this.moveX, false);
        document.addEventListener('mouseup', this.mouseUpBarX, false);
    };

    mouseUpBarX = () => {
        this.setState({mouseDownBarX: undefined});
        document.removeEventListener('mousemove', this.moveX, false);
        document.removeEventListener('mouseup', this.mouseUpBarX, false);
    };

    moveX = (e) => {
        const {mouseDownBarX, barXLeft} = this.state;
        if(mouseDownBarX){
            let moveX = e.clientX - mouseDownBarX + barXLeft;
            const width = this.renderDataRef.current.offsetWidth;
            const scrollWidth = this.scrollRef.current.offsetWidth;
            if(moveX + this.state.barXWidth > scrollWidth){
                moveX = scrollWidth - this.state.barXWidth;
            }else if(!(barXLeft<0) && moveX<0){
                moveX = 0;
            }
            const left = (width/scrollWidth)*moveX*(-1);
            this.setState({left,barXLeft: moveX, mouseDownBarX: e.clientX});
        }
    };

    resize = () => {
        let scrollWidth = 0;
        let scrollHeight = 0;
        let docWidth = 0;
        let docHeight = 0;
        let height = undefined;
        const {maxHeight} = this.props;
        try {
            scrollWidth = this.scrollRef.current.offsetWidth;
            scrollHeight = this.scrollRef.current.offsetHeight;
            docWidth = this.renderDataRef.current.offsetWidth;
            docHeight = this.renderDataRef.current.offsetHeight;
        }catch (e) {
            console.log(e);
        }
        if(scrollWidth > 0 && scrollHeight > 0 && docWidth > 0 && docHeight > 0){
            let barXWidth = (scrollWidth*scrollWidth)/docWidth;
            let barYHeight = (scrollHeight*scrollHeight)/docHeight;
            (barXWidth > docWidth || barXWidth === docWidth) && (barXWidth = 0);
            (barYHeight > docHeight || barYHeight === docHeight) && (barYHeight = 0);
            let barYTop = (this.state.top/docHeight)*(-1)*scrollHeight+barYHeight-scrollHeight;
            let top = this.state.top;
            if(barYTop > 0){
                barYTop = 0;
                top = (barYHeight/scrollHeight-1)*docHeight;
            }
            let barXLeft = (this.state.left/docWidth)*(-1)*scrollWidth;
            let left = this.state.left;
            if(barXLeft>(scrollWidth-barXWidth)){
                barXLeft = scrollWidth-barXWidth;
                left = (barXWidth/scrollWidth-1)*docWidth;
            }
            if(maxHeight){
                if(docHeight > maxHeight){
                    height = maxHeight;
                }else{
                    height = docHeight;
                    barYHeight = 0;
                    barXWidth = 0;
                }
            }

            this.setState({top, barYTop, barYHeight, barXWidth, barXLeft, left, height});
        }
    };

    mount = false;

    resizeWithTime = () => {
        if(this.mount){
            this.resize();
            setTimeout(this.resizeWithTime, 1000);
        }
    };

    componentDidMount(){
        this.mount = true;
        this.resizeWithTime();
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){
        const {bar, top, left, barYTop, barYHeight, barXLeft, barXWidth, height} = this.state;
        const {style, className, children, width} = this.props;
        const stylePrefix = 'rj-scroll';
        const newStyle = height?{...style, height}:style;
        return (
            <div style={{...newStyle}} className={classnames(stylePrefix, className)}>
                <div
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    className={classnames(stylePrefix+'-main',barYHeight===0?stylePrefix+'-main-y-hidden':'',barXWidth===0?stylePrefix+'-main-x-hidden':'')}
                    onWheel={this.scrollY}
                    ref={this.scrollRef}
                >
                    <div style={{top, left, width}} className={stylePrefix+'-main-content'} ref={this.renderDataRef}>
                        {children}
                    </div>
                </div>
                <div
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onMouseDown={this.mouseDownBarY}
                    onMouseOver={this.mouseUpBarY}
                    onMouseMove={this.moveY}
                    style={{top: barYTop, height: barYHeight}}
                    className={classnames(stylePrefix+'-bar-y',bar?(stylePrefix+'-bar-show'):(stylePrefix+'-bar-hidden'))}/>
                <div
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onMouseDown={this.mouseDownBarX}
                    onMouseOver={this.mouseUpBarX}
                    onMouseMove={this.moveX}
                    style={{left: barXLeft, width: barXWidth}}
                    className={classnames(stylePrefix+'-bar-x',bar?(stylePrefix+'-bar-show'):(stylePrefix+'-bar-hidden'))}/>
            </div>
        )
    }
}
//已过期，暂不使用
// export default Index;