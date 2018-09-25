import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['itemRender', '自定义链接函数，和 react-router 配置使用', '(route, params, routes, paths) => ReactNode', '-'],
    ['params', '路由的参数', 'object', '-'],
    ['routes', 'router 的路由栈信息', 'object[]', '-'],
    ['separator', '分隔符自定义', 'string|ReactNode', '\'/\''],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};