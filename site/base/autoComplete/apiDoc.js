import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['allowClear', '支持清除, 单选模式有效', 'boolean', 'false'],
    ['autoFocus', '自动获取焦点', 'boolean', 'false'],
    ['backfill', '使用键盘选择选项的时候把选中项回填到输入框中', 'boolean', 'false'],
    ['children (自动完成的数据源)', '自动完成的数据源', 'React.ReactElement / Array<React.ReactElement>', '-'],
    ['children (自定义输入框)', '自定义输入框', 'HTMLInputElement / HTMLTextAreaElement / React.ReactElement', '<Input />'],
    ['dataSource', '自动完成的数据源', 'DataSourceItemType[]', ''],
    ['defaultActiveFirstOption', '是否默认高亮第一个选项。', 'boolean', 'true'],
    ['defaultValue', '指定默认选中的条目', 'string|string[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode}>', '无'],
    ['disabled', '是否禁用', 'boolean', 'false'],
    ['filterOption', '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。', 'boolean or function(inputValue, option)', 'true'],
    ['optionLabelProp', '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。', 'string', 'children'],
    ['placeholder', '输入框提示', 'string', '-'],
    ['value', '指定当前选中的条目', 'string|string[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode }>', '无'],
    ['onChange', '选中 option，或 input 的 value 变化时，调用此函数', 'function(value)', '无'],
    ['onSearch', '搜索补全项的时候调用', 'function(value)', '无'],
    ['onSelect', '被选中时调用，参数为选中项的 value 值', 'function(value, option)', '无'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};