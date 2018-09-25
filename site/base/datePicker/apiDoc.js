import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    // ['ghost', '幽灵属性，使按钮背景透明', 'boolean', 'false'],
    //     // ['href', '点击跳转的地址，指定此属性 button 的行为和 a 链接一致', 'string', '-'],
    //     // ['htmlType', '设置 button 原生的 type 值', 'string', 'button'],
    //     // ['icon', '设置按钮的图标类型', 'string', '-'],
    //     // ['loading', '设置按钮载入状态', 'boolean | { delay: number }', 'false'],
    //     // ['shape', '设置按钮形状，可选值为 circle 或者不设', 'string', '-'],
    //     // ['size', '设置按钮大小，可选值为 small large 或者不设', 'string', 'default'],
    //     // ['target', '相当于 a 链接的 target 属性，href 存在时生效', 'string', '-'],
    //     // ['type', '设置按钮类型，可选值为 primary dashed danger或者不设', 'string', '-'],
    //     // ['onClick', 'click 事件的 handler', 'function', '-']
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};