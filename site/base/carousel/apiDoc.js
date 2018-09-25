import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['afterChange', '切换面板的回调', 'function(current)', '无'],
    ['autoplay', '是否自动切换', 'boolean', 'false'],
    ['beforeChange', '切换面板的回调', 'function(from, to)', '无'],
    ['dots', '是否显示面板指示点', 'boolean', 'true'],
    ['easing', '动画效果', 'string', 'linear'],
    ['effect', '动画效果函数，可取 scrollx, fade', 'string', 'scrollx'],
    ['vertical', '垂直显示', 'boolean', 'false'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};