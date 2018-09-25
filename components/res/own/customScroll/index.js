import React,{Component} from 'react';
import './style/index.less';
import PropTypes from "prop-types";
import classnames from 'classnames';

function getScrollBarWidth(){
    let odiv = document.createElement('div'),
        styles = {
            width: '100px',
            height: '100px',
            overflowY: 'scroll'
        }, i, scrollBarWidth;
    for (i in styles) odiv.style[i] = styles[i];
    document.body.appendChild(odiv);
    scrollBarWidth = odiv.offsetWidth - odiv.clientWidth;
    document.body.removeChild(odiv);
    return scrollBarWidth;
}

const windowScrollBar = getScrollBarWidth();
const customScrollBar = 7;
const diffScrollBar = windowScrollBar - customScrollBar;

class Index extends Component{

    constructor(props){
        super(props);
        this.contentRef = React.createRef();
        this.wrappedRef = React.createRef();
        this.scrollRef = React.createRef();
        this.state = {
            bar: true,
            mouseDownBarY: undefined,
            mouseDownBarX: undefined,
            barX: false,
            barY: false,
            barYHeight: 0,
            barYBackgroundHeight: 0,
            barXWidth: 0,
            barXBackgroundWidth: 0,
            barYTop: 0,
            barXTop: 0,
            barYLeft: 0,
            barXLeft: 0,
            barYBackgroundTop: 0,
            barXBackgroundLeft: 0,
            barYBackgroundLeft: 0,
            scrollStyle: {}, contentStyle: {}, wrappedStyle: {},
            overflowY: props.overflowY === undefined ? true : props.overflowY,
            overflowX: props.overflowX === undefined ? true : props.overflowX,
        };
    }

    scrollCache = {};

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

    mouseDownBarY = (e) => {
        e.preventDefault();
        this.setState({mouseDownBarY: e.clientY, barScrollTop: this.state.barYTop});
        document.addEventListener('mousemove', this.moveY, false);
        document.addEventListener('mouseup', this.mouseUpBarY, false);
    };

    mouseUpBarY = () => {
        this.setState({mouseDownBarY: undefined});
        document.removeEventListener('mousemove', this.moveY,false);
        document.removeEventListener('mouseup', this.mouseUpBarY,false);
    };

    moveY = (e) => {
        const {mouseDownBarY, barYTop, barYHeight, barX} = this.state;
        if(mouseDownBarY){
            let {clientHeight, scrollHeight, style} = this.contentRef.current;
            let borderBottomWidth = parseFloat(style.borderBottomWidth) + (barX?windowScrollBar:0);
            let barMoveY = e.clientY - mouseDownBarY;
            if(barMoveY > 0 && (this.state.barYTop + borderBottomWidth + barYHeight === 0)){
                return false;
            }
            if(barMoveY < 0 && (this.state.barYTop + borderBottomWidth + clientHeight === 0)){
                return false;
            }
            let newBarYTop = barMoveY + barYTop;
            this.contentRef.current.scrollTop = (newBarYTop + clientHeight + borderBottomWidth)*scrollHeight/clientHeight;
            if(newBarYTop + barYHeight + borderBottomWidth> 0){
                newBarYTop = -1*barYHeight - borderBottomWidth;
            }
            if(newBarYTop + clientHeight + borderBottomWidth < 0){
                newBarYTop = -1*clientHeight - borderBottomWidth;
            }
            this.setState({barYTop: newBarYTop, mouseDownBarY: e.clientY});
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
        const {mouseDownBarX, barXLeft, barXWidth} = this.state;
        if(mouseDownBarX){
            let {clientWidth, style, scrollWidth} = this.contentRef.current;
            let borderLeftWidth = parseFloat(style.borderLeftWidth);
            let barMoveX = e.clientX - mouseDownBarX;
            if(barMoveX > 0 && (this.state.barXLeft === clientWidth - barXWidth)){
                return false;
            }
            if(barMoveX < 0 && (this.state.barXLeft === borderLeftWidth)){
                return false;
            }
            let newBarXLeft = barMoveX + barXLeft;
            this.contentRef.current.scrollLeft = newBarXLeft*scrollWidth/clientWidth;
            if(newBarXLeft > clientWidth - barXWidth + borderLeftWidth){
                newBarXLeft = clientWidth - barXWidth + borderLeftWidth;
            }
            if(newBarXLeft < borderLeftWidth){
                newBarXLeft = borderLeftWidth;
            }
            this.setState({barXLeft: newBarXLeft, mouseDownBarX: e.clientX});
        }
    };

    getScrollBarYWidth = () => {
        const {offsetWidth, clientWidth} = this.contentRef.current;
        const style = window.getComputedStyle(this.contentRef.current);
        return offsetWidth - clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
    };

    getScrollBarXHeight = () => {
        let {offsetHeight, clientHeight} = this.contentRef.current;
        const style = window.getComputedStyle(this.contentRef.current);
        return offsetHeight - clientHeight - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth);
    };

    heightChange = () => {
        const {offsetHeightCache, clientHeightCache, scrollHeightCache, barXCache} = this.scrollCache;
        const {offsetHeight, clientHeight, scrollHeight} = this.contentRef.current;
        const {barX} = this.state;
        if(offsetHeight !== offsetHeightCache || clientHeight !== clientHeightCache || scrollHeight !== scrollHeightCache || barX !== barXCache){
            this.scrollCache = {...this.scrollCache, ...{offsetHeightCache: offsetHeight, clientHeightCache: clientHeight, scrollHeightCache: scrollHeight, barXCache: barX}};
            return true;
        }
        return false;
    };

    widthChange = () => {
        const {offsetWidthCache, clientWidthCache, scrollWidthCache, barYCache} = this.scrollCache;
        let {offsetWidth, clientWidth, scrollWidth} = this.contentRef.current;
        const {barY} = this.state;
        if(offsetWidth !== offsetWidthCache || clientWidth !== clientWidthCache || scrollWidth !== scrollWidthCache || barY !== barYCache){
            this.scrollCache = {...this.scrollCache, ...{offsetWidthCache: offsetWidth, clientWidthCache: clientWidth, scrollWidthCache: scrollWidth, barYCache: barY}};
            return true;
        }
        return false;
    };

    resizeScrollBarY = () => {
        let {offsetWidth, clientHeight, scrollHeight, style} = this.contentRef.current;
        let borderRightWidth = parseFloat(style.borderRightWidth);
        let borderBottomWidth = parseFloat(style.borderBottomWidth);
        let rePosition = false;
        let {barX, barY, barYHeight, barYLeft, barYBackgroundHeight, barYBackgroundTop, barYBackgroundLeft, barXTop, barXBackgroundTop, overflowY} = this.state;
        if(this.heightChange()){
            if(overflowY){
                if(this.getScrollBarYWidth() === 0){
                    this.scrollCache.scrollTopCache = undefined;
                    barY = false;
                }else{
                    barYHeight = clientHeight*clientHeight/scrollHeight;
                    barYLeft = offsetWidth-borderRightWidth-windowScrollBar + (barY?0:diffScrollBar);
                    barYBackgroundLeft = offsetWidth-borderRightWidth-windowScrollBar + (barY?0:diffScrollBar);
                    barYBackgroundHeight = clientHeight + borderBottomWidth + (barX?customScrollBar:0);
                    barYBackgroundTop = -1*clientHeight - borderBottomWidth - (barX?windowScrollBar:0);
                    barY = true;
                }
            }
            if(barX){
                barXTop = -1*windowScrollBar - borderBottomWidth;
                barXBackgroundTop = -1*windowScrollBar - borderBottomWidth;
            }
            rePosition = true;
            if(this.mount){
                this.setState({barY, barYHeight, barYLeft, barYBackgroundHeight, barYBackgroundTop, barYBackgroundLeft, barXTop, barXBackgroundTop});
            }
        }
        overflowY && this.resizeScrollBarYPosition(barY, barX, rePosition);
    };

    resizeScrollBarX = () => {
        let {offsetWidth, scrollWidth, clientWidth, style} = this.contentRef.current;
        let borderBottomWidth = parseFloat(style.borderBottomWidth);
        let borderRightWidth = parseFloat(style.borderRightWidth);
        let borderLeftWidth = parseFloat(style.borderLeftWidth);
        let rePosition = false;
        let {barX, barXWidth, barXBackgroundWidth, barXTop, barXBackgroundLeft, barXBackgroundTop, barY, barYLeft, barYBackgroundLeft, overflowX} = this.state;
        if(this.widthChange()){
            if(overflowX){
                if(this.getScrollBarXHeight() === 0){
                    barX = false;
                    this.scrollCache.scrollLeftCache = undefined;
                }else{
                    barX = true;
                    barXWidth = clientWidth*clientWidth/scrollWidth;
                    barXBackgroundWidth = clientWidth;
                    barXTop = -1*windowScrollBar - borderBottomWidth;
                    barXBackgroundTop = -1*windowScrollBar - borderBottomWidth;
                    barXBackgroundLeft = borderLeftWidth;
                }
            }

            if(barY){
                barYLeft = offsetWidth-borderRightWidth-windowScrollBar;
                barYBackgroundLeft = offsetWidth-borderRightWidth-windowScrollBar;
            }
            rePosition = true;
            if(this.mount){
                this.setState({barX, barXWidth, barXBackgroundWidth, barXTop, barXBackgroundLeft, barXBackgroundTop, barYLeft, barYBackgroundLeft});
            }
        }
        overflowX && this.resizeScrollBarXPosition(barX, rePosition);
    };

    resizeScrollBarYPosition = (barY, barX, rePosition) => {
        let {clientHeight, scrollHeight, scrollTop, style} = this.contentRef.current;
        let borderBottomWidth = parseFloat(style.borderBottomWidth);
        const {scrollTopCache, scrollLeftCache, barXPositionCache} = this.scrollCache;
        if(barY && (scrollTop!==scrollTopCache || rePosition)){
            this.scrollCache.scrollTopCache = scrollTop;
            let newBarYTop = scrollTop*clientHeight/scrollHeight - clientHeight - borderBottomWidth - (barX?windowScrollBar:0);
            if(this.mount){
                this.setState({barYTop: newBarYTop});
            }
        }
    };

    resizeScrollBarXPosition = (barX, rePosition) => {
        let {scrollWidth, scrollLeft, style, clientWidth} = this.contentRef.current;
        let borderLeftWidth = parseFloat(style.borderLeftWidth);
        const {scrollLeftCache} = this.scrollCache;
        if(barX && (scrollLeft!==scrollLeftCache || rePosition)){
            this.scrollCache.scrollLeftCache = scrollLeft;
            let newBarXLeft = scrollLeft*clientWidth/scrollWidth + borderLeftWidth;
            if(this.mount){
                this.setState({barXLeft: newBarXLeft});
            }
        }
    };

    resizeHeight = () => {
        const style = window.getComputedStyle(this.wrappedRef.current);
        const {maxHeight, minHeight, maxWidth, minWidth} = style;
        const {clientHeight, clientWidth, offsetHeight, offsetWidth} = this.wrappedRef.current;
        const {barX, barY} = this.state;
        const diffHeight = offsetHeight - clientHeight;
        const diffWidth = offsetWidth - clientWidth;
        let scrollStyle = {};
        let contentStyle = {};
        let wrappedStyle = {};
        if(maxHeight !== 'none') {
            wrappedStyle.height = 'auto';
            scrollStyle.height = this.contentRef.current.scrollHeight + (barX ? customScrollBar : 0);
            scrollStyle.maxHeight = parseFloat(maxHeight) - diffHeight;
            contentStyle.maxHeight = parseFloat(maxHeight) - diffHeight + diffScrollBar;
        }
        if(minHeight !== '0px') {
            scrollStyle.minHeight = parseFloat(minHeight) - diffHeight;
            contentStyle.minHeight = parseFloat(minHeight) - diffHeight + diffScrollBar;
        }
        if(maxWidth !== 'none') {
            scrollStyle.width = this.contentRef.current.scrollWidth + (barY ? customScrollBar : 0);
            scrollStyle.maxWidth = parseFloat(maxWidth) - diffWidth;
            contentStyle.maxWidth = parseFloat(maxWidth) - diffWidth + diffScrollBar;
        }
        if(minWidth !== '0px') {
            scrollStyle.minWidth = parseFloat(minWidth) - diffWidth;
            contentStyle.minWidth = parseFloat(minWidth) - diffWidth + diffScrollBar;
        }
        this.setState({
            scrollStyle, contentStyle, wrappedStyle
        })
    };

    resize = () => {
        this.resizeHeight();
        this.resizeScrollBarX();
        this.resizeScrollBarY();
    };

    mount = false;

    resizeWithTime = () => {
        if(this.mount){
            this.resize();
            setTimeout(this.resizeWithTime, 10);
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
        const {
            bar, barYTop, barYLeft, barYHeight, barXLeft, barXWidth, barX, barY, barXTop,
            barYBackgroundHeight, barXBackgroundLeft, barYBackgroundTop, barYBackgroundLeft, barXBackgroundTop, barXBackgroundWidth,
            scrollStyle, contentStyle, wrappedStyle, overflowX, overflowY
        } = this.state;
        const {style, className, children, backgroundColor} = this.props;
        const stylePrefix = 'rj-custom-scroll';
        return (
            <div className={className} style={{...style, ...wrappedStyle}} ref={this.wrappedRef}>
                <div style={{width: '100%', height: '100%', overflow: 'hidden', ...scrollStyle}} ref={this.scrollRef}>
                    <div key={stylePrefix+'-1'}
                         style={{
                             borderWidth: '0', backgroundColor, width: barY?'calc(100% + '+diffScrollBar+'px)':'100%', height: barX?'calc(100% + '+diffScrollBar+'px)':'100%',
                             ...contentStyle, overflowX: overflowX?'auto': 'hidden', overflowY: overflowY?'auto': 'hidden'
                         }}
                         className={stylePrefix} ref={this.contentRef}
                         onMouseEnter={this.onMouseEnter}
                         onMouseLeave={this.onMouseLeave}>
                        {children}
                    </div>
                    {
                        barY && <div key={stylePrefix+'-y-1'}
                                     onMouseEnter={this.onMouseEnter}
                                     onMouseLeave={this.onMouseLeave}
                                     onMouseDown={this.mouseDownBarY}
                                     onMouseUp={this.mouseUpBarY}
                                     onMouseMove={this.moveY}
                                     style={{marginTop: barYTop, height: barYHeight, marginLeft: barYLeft, width: customScrollBar, zIndex: '2'}}
                                     className={classnames(stylePrefix+'-bar',bar?(stylePrefix+'-bar-show'):(stylePrefix+'-bar-hidden'))}/>
                    }
                    {
                        barY && <div key={stylePrefix+'-y-2'}
                                     onMouseEnter={this.onMouseEnter}
                                     onMouseLeave={this.onMouseLeave}
                                     style={{height: barYBackgroundHeight, marginTop: barYBackgroundTop, marginLeft: barYBackgroundLeft, width: customScrollBar, backgroundColor: backgroundColor||'#FFFFFF', zIndex: '1'}}
                                     className={stylePrefix+'-bar'}/>
                    }
                    {
                        barX && <div key={stylePrefix+'-x-1'}
                                     onMouseEnter={this.onMouseEnter}
                                     onMouseLeave={this.onMouseLeave}
                                     onMouseDown={this.mouseDownBarX}
                                     onMouseUp={this.mouseUpBarX}
                                     onMouseMove={this.moveX}
                                     style={{marginTop: barXTop, marginLeft: barXLeft, width: barXWidth, height: customScrollBar, zIndex: '2'}}
                                     className={classnames(stylePrefix+'-bar',bar?(stylePrefix+'-bar-show'):(stylePrefix+'-bar-hidden'))}/>
                    }
                    {
                        barX && <div key={stylePrefix+'-x-2'}
                                     onMouseEnter={this.onMouseEnter}
                                     onMouseLeave={this.onMouseLeave}
                                     style={{marginTop: barXBackgroundTop, marginLeft: barXBackgroundLeft, width: barXBackgroundWidth, height: customScrollBar, backgroundColor: backgroundColor||'#FFFFFF', zIndex: '1'}}
                                     className={stylePrefix+'-bar'}/>
                    }
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    className: PropTypes.any,
    style: PropTypes.any,
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
    overflowY: PropTypes.bool,
    overflowX: PropTypes.bool
};

export default Index;
