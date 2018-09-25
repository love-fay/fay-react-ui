import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['affix', '固定模式', 'boolean', 'true'],
    ['bounds', '锚点区域边界', 'number', '5(px)'],
    ['offsetBottom', '距离窗口底部达到指定偏移量后触发', 'number', ''],
    ['offsetTop', '距离窗口顶部达到指定偏移量后触发', 'number', ''],
    ['showInkInFixed', '固定模式是否显示小圆点', 'boolean', 'false']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};