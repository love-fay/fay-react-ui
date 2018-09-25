import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['fixed', '把选择框列固定在左边', 'boolean', '-'],
    ['getCheckboxProps', '选择框的默认属性配置', 'Function(record)', '-'],
    ['hideDefaultSelections', '去掉『全选』『反选』两个默认选项', 'boolean', 'false'],
    ['selectedRowKeys', '指定选中项的 key 数组，需要和 onChange 进行配合', 'string[]', '[]'],
    ['selections', '自定义选择项 配置项, 设为 true 时使用默认选择项', 'object[]|boolean', 'true'],
    ['type', '多选/单选，checkbox or radio', 'string', 'checkbox'],
    ['onChange', '选中项发生变化的时的回调', 'Function(selectedRowKeys, selectedRows)', '-'],
    ['onSelect', '用户手动选择/取消选择某列的回调', 'Function(record, selected, selectedRows)', '-'],
    ['onSelectAll', '用户手动选择/取消选择所有列的回调', 'Function(selected, selectedRows, changeRows)', '-'],
    ['onSelectInvert', '用户手动选择反选的回调', 'Function(selectedRows)', '-']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};