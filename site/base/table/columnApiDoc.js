import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['className', '列的 className', 'string', '-'],
    ['colSpan', '表头列合并,设置为 0 时，不渲染', 'number', ''],
    ['dataIndex', '列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法', 'string', '-'],
    ['filterDropdown', '可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互', 'ReactNode', '-'],
    ['filterDropdownVisible', '用于控制自定义筛选菜单是否可见', 'boolean', '-'],
    ['filtered', '标识数据是否经过过滤，筛选图标会高亮', 'boolean', 'false'],
    ['filteredValue', '筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组', 'string[]', '-'],
    ['filterIcon', '自定义 fiter 图标', 'ReactNode', 'false'],
    ['filterMultiple', '是否多选', 'boolean', 'true'],
    ['filters', '表头的筛选菜单项', 'object[]', '-'],
    ['fixed', '列是否固定，可选 true(等效于 left) \'left\' \'right\'', 'boolean|string', 'false'],
    ['key', 'React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性', 'string', '-'],
    ['render', '生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格', 'Function(text, record, index) {}', '-'],
    ['sorter', '排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true', 'Function|boolean', '-'],
    ['sortOrder', '排序的受控属性，外界可用此控制列的排序，可设置为 \'ascend\' \'descend\' false', 'boolean|string', '-'],
    ['title', '列头显示文字', 'string|ReactNode', '-'],
    ['width', '列宽度', 'string|number', '-'],
    ['onCell', '设置单元格属性', 'Function(record)', '-'],
    ['onFilter', '本地模式下，确定筛选的运行函数', 'Function', '-'],
    ['onFilterDropdownVisibleChange', '自定义筛选菜单可见变化时调用', 'function(visible) {}', '-'],
    ['onHeaderCell', '设置头部单元格属性', 'Function(column)', '-']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};