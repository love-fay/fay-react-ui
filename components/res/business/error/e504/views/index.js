/**
 * Created by feichongzheng on 17/6/9.
 */
import React from 'react';
import Row from '../../../../../row';
import Col from '../../../../../col';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <Row style={{textAlign: 'center', paddingTop: '100px'}}>
            <Col span={5}> </Col>
            <Col span={14}>
                <div style={{fontSize: '8em'}}>5<img src="/resource/images/error/giphy.jpg" width="80px" style={{border: '3px solid #000', borderRadius: '50px'}} />4</div>
                <div style={{fontSize: '1.5em'}}>非常抱歉，您的访问已超时！</div>
                <div style={{fontSize: '1.5em', marginTop: '50px'}}><Link to="/">返回首页</Link></div>
            </Col>
        </Row>
    );
};
