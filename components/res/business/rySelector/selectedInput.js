/**
 * Created by Administrator on 2018/5/25.
 */
import React from "react";
import QueryInput from "./queryInput";
import Tag from "../../../tag";

const stylePrefix = 'rj-rySelector-selectedInput';

export default ({value,selectedRys,width,onChange,onClose,onBackspace}) => {
    return (
        <div
            className={stylePrefix}
            style={{width}}
        >
            <div className="ant-input">
                {
                    selectedRys.map(item => {
                        return (
                            <div key={item.username} style={{display:"inline-block"}}>
                                <Tag closable onClose={(e) => onClose(item.username)}>
                                    <span className="textOverflow" style={{width:44,float:"left"}}>{item.nickname}</span>
                                </Tag>
                            </div>
                        )
                    })
                }
                <div style={{display:"inline-block"}}>
                    <div style={{display:"inline-block"}}>
                        <QueryInput value={value} onChange={onChange} onBackspace={onBackspace}/>
                    </div>
                </div>
            </div>
        </div>
    )
}