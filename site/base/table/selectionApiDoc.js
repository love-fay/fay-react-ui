import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['key', 'React 需要的 key，建议设置', 'string', '-'],
    ['text', '选择项显示的文字', 'string|React.ReactNode', '-'],
    ['onSelect', '选择项点击回调', 'Function(changeableRowKeys)', '-']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};