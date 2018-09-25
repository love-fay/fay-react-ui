/**
 * Created by Administrator on 2018/5/28.
 */
import React from "react";
import MulCheck from "./mulCheck";
import SingleCheck from './singleCheck'

const stylePrefix = 'rj-rySelector-latelyContactorsBox';

export default ({selectedRys, multiple, onChange}) => {

    return (
        <div className={stylePrefix}>
            <div style={{textAlign: "right"}}>
                <a href="javascript:void(0)" onClick={() => onChange([])}>清空</a>
            </div>
            {
                multiple ?
                    <MulCheck
                        selectedRys={selectedRys}
                        onChange={onChange}
                    />
                    :
                    <SingleCheck
                        selectedRys={selectedRys}
                        onChange={onChange}
                    />
            }

        </div>
    )

}