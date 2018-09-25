import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['bordered', '是否展示外边框和列边框', 'boolean', 'false'],
    ['columns', '表格列的配置描述，具体项见下表', 'ColumnProps[]', '-'],
    ['components', '覆盖默认的 table 元素', 'object', '-'],
    ['dataSource', '数据数组', 'any[]', ''],
    ['defaultExpandAllRows', '初始时，是否展开所有行', 'boolean', 'false'],
    ['defaultExpandedRowKeys', '默认展开的行', 'string[]', '-'],
    ['expandedRowKeys', '展开的行，控制属性', 'string[]', '-'],
    ['expandedRowRender', '额外的展开行', 'Function(record):ReactNode', '-'],
    ['expandRowByClick', '通过点击行来展开子行', 'boolean', 'false'],
    ['footer', '表格尾部', 'Function(currentPageData)', ''],
    ['indentSize', '展示树形数据时，每层缩进的宽度，以 px 为单位', 'number', '15'],
    ['loading', '页面是否加载中', 'boolean|object', 'false'],
    ['locale', '默认文案设置，目前包括排序、过滤、空数据文案', 'object', 'filterConfirm: \'确定\' \n' +
        'filterReset: \'重置\' \n' +
        'emptyText: \'暂无数据\''],
    ['pagination', '分页器，配置项参考 pagination，设为 false 时不展示和进行分页', 'object', ''],
    ['rowClassName', '表格行的类名', 'Function(record, index):string', '-'],
    ['rowKey', '表格行 key 的取值，可以是字符串或一个函数', 'string|Function(record):string', '\'key\''],
    ['rowSelection', '列表项是否可选择', 'object', 'null'],
    ['scroll', '横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{{ x: true, y: 300 }}', 'object', '-'],
    ['showHeader', '是否显示表头', 'boolean', 'true'],
    ['size', '正常或迷你类型，default or small', 'string', 'default'],
    ['title', '表格标题', 'Function(currentPageData)', ''],
    ['onChange', '分页、排序、筛选变化时触发', 'Function(pagination, filters, sorter)', ''],
    ['onExpand', '点击展开图标时触发', 'Function(expanded, record)', ''],
    ['onExpandedRowsChange', '展开的行变化时触发', 'Function(expandedRows)', ''],
    ['onHeaderRow', '设置头部行属性', 'Function(column, index)', '-'],
    ['onRow', '设置行属性', 'Function(record, index)', '-'],
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};