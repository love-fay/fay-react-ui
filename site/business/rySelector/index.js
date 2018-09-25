import React from 'react';
import Demo1 from './demo1';
import Demo2 from './demo2';
import ApiDoc from './apiDoc';
import ApiDoc2 from './apiDoc2';
import ApiDoc3 from './apiDoc3';

export default () => {
    return (
        <div>
            <h2>代码演示</h2>
            <Demo1/>
            <br/><br/>
            <Demo2/>
            <br/><br/>
            <h2>支持Modal的所有属性</h2>
            <br/><br/>
            <h2>RySelectModal 人员选择弹窗 Api</h2>
            <ApiDoc/>
            <br/><br/>
            <h2>RySelectSingleModal 人员单选弹窗 Api</h2>
            <ApiDoc3/>
            <br/><br/>
            <h2>RySelectInput 人员选择输入框 Api</h2>
            <ApiDoc2/>
        </div>
    )
}

