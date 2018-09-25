/**
 * Created by feichongzheng on 17/6/9.
 */
import React from 'react';
import Row from '../../../../row';
import Col from '../../../../col';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <Row style={{textAlign: 'center', paddingTop: '100px'}}>
            <Col span={5}> </Col>
            <Col span={14}>
                <div style={{fontSize: '8em'}}><img src="/resource/images/under-maintenance.png" width="80px"/></div>
                <div style={{fontSize: '1.5em'}}>系统正在维护中...</div>
                <div style={{fontSize: '1.5em', marginTop: '50px'}}><Link to="/">返回首页</Link></div>
            </Col>
        </Row>
    );
};
