import React from 'react';
import Icon from '../../../icon';
import Scroll from '../../../customScroll';
import './style/index.less';
import classnames from 'classnames';
import {decodeHash} from "rj-lib/location/hash";
import {withRouter} from "react-router-dom";
const stylePrefix = 'rj-back';

class Back extends React.Component{
    shouldComponentUpdate(){
        return false;
    }

    onBack = () => {
        const {location, history} = this.props;
        const backLocation = decodeHash(location.hash).hash;
        if(backLocation === undefined || backLocation === ''){
            console.error('缺少返回地址');
        }else{
            history.push(backLocation);
        }
    };

    render(){
        const {title, children, style, className} = this.props;
        const top = (
            <div className={stylePrefix+'-top'}>
                <div className={stylePrefix+'-top-nav'}>
                    {title}
                </div>
                <div className={stylePrefix+'-top-back'}>
                    <span className={stylePrefix+'-top-back-link'} onClick={this.onBack}><Icon type='close' bold/></span>
                </div>
            </div>
        );
        return (
            children ?
                <div className={classnames(stylePrefix, className)} style={style}>
                    {top}
                    <Scroll className={stylePrefix+'-scroll'}>
                        {children}
                    </Scroll>
                </div>
                :
                <div className={className} style={style}>
                    {top}
                </div>
        )
    }
}

export default withRouter(Back);