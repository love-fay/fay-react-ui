import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['allowClear', '是否支持清除', 'boolean', 'true'],
    ['autoFocus', '自动获取焦点', 'boolean', 'false'],
    ['changeOnSelect', '当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示', 'boolean', 'false'],
    ['className', '自定义类名', 'string', '-'],
    ['defaultValue', '默认的选中项', 'string[]', '[]'],
    ['disabled', '禁用', 'boolean', 'false'],
    ['displayRender', '选择后展示的渲染函数', '(label, selectedOptions) => ReactNode', 'label => label.join(\' / \')'],
    ['expandTrigger', '次级菜单的展开方式，可选 \'click\' 和 \'hover\'', 'string', '\'click\''],
    ['getPopupContainer', '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。', 'Function(triggerNode)', '() => document.body'],
    ['loadData', '用于动态加载选项，无法与 showSearch 一起使用', '(selectedOptions) => void', '-'],
    ['notFoundContent', '当下拉列表为空时显示的内容', 'string', '\'Not Found\''],
    ['options', '可选项数据源', 'object', '-'],
    ['placeholder', '输入框占位文本', 'string', '\'请选择\''],
    ['popupClassName', '自定义浮层类名', 'string', '-'],
    ['popupPlacement', '浮层预设位置：bottomLeft bottomRight topLeft topRight', 'Enum', 'bottomLeft'],
    ['popupVisible', '控制浮层显隐', 'boolean', '-'],
    ['showSearch', '在选择框中显示搜索框', 'boolean', 'false'],
    ['size', '输入框大小，可选 large default small', 'string', 'default'],
    ['style', '自定义样式', 'string', '-'],
    ['value', '指定选中项', 'string[]', '-'],
    ['onChange', '选择完成后的回调', '(value, selectedOptions) => void', '-'],
    ['onPopupVisibleChange', '显示/隐藏浮层的回调', '(value) => void', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};