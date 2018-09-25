import React,{Component} from 'react';
import './style/index.less';
import Scroll from '../customScroll';
import classnames from 'classnames';
import ReactDom from 'react-dom';
import PropTypes from "prop-types";
import Icon from 'rjd/icon';

export default class Dialog extends Component{

    constructor(props){
        super(props);
        const {width=500,height=500,style={}, maxHeight} = props;
        this.state = {
            width,
            height: maxHeight?'auto':height,
            style
        };
        this.dialog = React.createRef();
    }

    currentX;
    currentY;
    move= false;

    onMouseDown = (e) => {
        this.currentX = e.clientX;
        this.currentY = e.clientY;
        this.move = true;
    };

    onMouseMove = (e) => {
        if (this.move) {
            const dialogTop = this.dialog.current.offsetTop;
            const dialogLeft = this.dialog.current.offsetLeft;
            const moveX = e.clientX - this.currentX;
            const moveY = e.clientY - this.currentY;
            const top = dialogTop + moveY;
            const left = dialogLeft + moveX;
            this.currentX = e.clientX;
            this.currentY = e.clientY;
            this.setState({top, left, bottom: 'auto', right: 'auto'});
        }
    };

    onMouseUp = () => {
        this.move = false;
    };

    componentWillReceiveProps(nextProps){
        const {width=500,height=500, maxHeight} = nextProps;
        this.setState({
            width,
            height: maxHeight?'auto':height,
        });
    }

    componentDidMount () {
        document.addEventListener('mousemove', this.onMouseMove,false);
        document.addEventListener('mouseup', this.onMouseUp,false);
    };

    componentWillUnmount () {
        document.removeEventListener('mousemove', this.onMouseMove,false);
        document.addEventListener('mouseup', this.onMouseUp,false);
    }

    render(){
        const stylePrefix = 'rj-dialog';
        const {width,height,style, top, left, bottom, right} = this.state;
        const {visible, title, onCancel, children, className, mod, maxHeight} = this.props;
        const display = visible?'block':'none';
        let body;
        let dialogHeight;
        if(mod==='scrollInline'){
            body = (
                <Scroll style={{width:'100%', height: '100%', maxHeight, padding:'10px 0 0 10px'}} maxHeight={maxHeight}>
                    {children}
                </Scroll>
            );
            dialogHeight = height;
        }else{
            body = children;
            dialogHeight = 'auto';
        }
        let newStyle = {...style, width, height: dialogHeight, display};
        newStyle = (top && left && bottom && right) ? {...newStyle, top, left, bottom, right}: newStyle;
        return ReactDom.createPortal(
            <div className={classnames(stylePrefix, className)}
                 style={newStyle} ref={this.dialog}>
                <div className={stylePrefix+'-header'} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
                    <div className={stylePrefix+'-header-title'}>{title}</div>
                    <div className={stylePrefix+'-header-close'}><Icon type='close' onClick={onCancel}/></div>
                </div>
                <div className={stylePrefix+'-body'}>
                    {body}
                </div>
                {/*<div className={stylePrefix+'-footer'}>腿部</div>*/}
            </div>,
            document.body
        )
    }
}

Dialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.any,
    onCancel: PropTypes.func,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    mod: PropTypes.string,
    maxHeight: PropTypes.number
};