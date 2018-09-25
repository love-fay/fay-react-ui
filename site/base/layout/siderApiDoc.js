import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['breakpoint', '触发响应式布局的断点', 'Enum { \'xs\', \'sm\', \'md\', \'lg\', \'xl\', \'xxl\' }', '-'],
    ['className', '容器 className', 'string', '-'],
    ['collapsed', '当前收起状态', 'boolean', '-'],
    ['collapsedWidth', '收缩宽度，设置为 0 会出现特殊 trigger', 'number', '64'],
    ['collapsible', '是否可收起', 'boolean', 'false'],
    ['defaultCollapsed', '是否默认收起', 'boolean', 'false'],
    ['reverseArrow', '翻转折叠提示箭头的方向，当 Sider 在右边时可以使用', 'boolean', 'false'],
    ['style', '指定样式', 'object', '-'],
    ['trigger', '自定义 trigger，设置为 null 时隐藏 trigger', 'string|ReactNode', '-'],
    ['width', '宽度', 'number|string', '200'],
    ['onCollapse', '展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发', '(collapsed, type) => {}', '-']
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};