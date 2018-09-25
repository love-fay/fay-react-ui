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
                <div style={{fontSize: '8em'}}><img src="http://205.0.0.19:8000/assets/images/coming-soon.png" width="80px"/></div>
                <div style={{fontSize: '1.5em'}}>敬请期待！</div>
                <div style={{fontSize: '1.5em', marginTop: '50px'}}><Link to="/">返回首页</Link></div>
            </Col>
        </Row>
    );
};
