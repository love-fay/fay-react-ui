/**
 * Created by Administrator on 2018/5/21.
 */
import React from "react";
import List from "../../../list";
import ListWithKeyEvent from "./list";

export default ({dataSource, pagination, onClick}) => {
    return <ListWithKeyEvent bordered
                             size="small"
                             dataSource={dataSource}
                             pagination={pagination}
                             renderItem={item => (
                                 <List.Item
                                     onClick={() => onClick(item)}>
                                     {item.nickname}（{item.departmentInfo}）
                                 </List.Item>
                             )}
                             onEnterPress={item => onClick(item)}
    />
}