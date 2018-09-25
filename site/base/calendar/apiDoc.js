import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['dateCellRender', '自定义渲染日期单元格，返回内容会被追加到单元格', 'function(date: moment): ReactNode', '无'],
    ['dateFullCellRender', '自定义渲染日期单元格，返回内容覆盖单元格', 'function(date: moment): ReactNode', '无'],
    ['defaultValue', '默认展示的日期', 'moment', '默认日期'],
    ['disabledDate', '不可选择的日期', '(currentDate: moment) => boolean', '无'],
    ['fullscreen', '是否全屏显示', 'boolean', 'true'],
    ['locale', '国际化配置', 'object', '默认配置'],
    ['mode', '初始模式，month/year', 'string', 'month'],
    ['monthCellRender', '自定义渲染月单元格，返回内容会被追加到单元格', 'function(date: moment): ReactNode', '无'],
    ['monthFullCellRender', '自定义渲染月单元格，返回内容覆盖单元格', 'function(date: moment): ReactNode', '无'],
    ['value', '展示日期', 'moment', '当前日期'],
    ['onPanelChange', '日期面板变化回调', 'function(date: moment, mode: string)', '无'],
    ['onSelect', '点击选择日期回调', 'function(date: moment）', '无'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};