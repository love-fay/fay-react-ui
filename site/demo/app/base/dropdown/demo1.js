import React from 'react';
import Dropdown from 'rjd/dropdown';
import Input from 'rjd/input';
import Icon from 'rjd/icon';
import Row from 'rjd/row';
import Col from 'rjd/col';
import Checkbox from 'rjd/checkbox';

export default class Demo1 extends React.Component{

    render(){
        const content = (
            <Row>
                <Col span={8}><Checkbox value='A'>A</Checkbox></Col>
                <Col span={8}><Checkbox value='B'>B</Checkbox></Col>
                <Col span={8}><Checkbox value='C'>C</Checkbox></Col>
                <Col span={8}><Checkbox value='D'>D</Checkbox></Col>
                <Col span={8}><Checkbox value='E'>E</Checkbox></Col>
            </Row>
        );

        return (
            <Dropdown overlay={content} trigger={['click']} outClickHidden>
                <Input suffix={<Icon type='down'/>} defaultValue='点击下拉'/>
            </Dropdown>
        );
    }
}
