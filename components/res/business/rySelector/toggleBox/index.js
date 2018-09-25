/**
 * Created by Administrator on 2018/5/24.
 */
import React from "react";

const stylePrefix = 'rj-toggleBox';

export default ({visibale, children}) => {
    return (
        <div
            className={stylePrefix}
            style={{
                border: '1px solid #ddd',
                display: visibale ? 'block' : 'none',
                padding: 0,
                overflowY: "auto",
                maxHeight: 600,
                backgroundColor: "#fff",
            }}>
            {
                React.Children.map(children, (child, i) => {
                    return child;
                })
            }
        </div>
    )
}