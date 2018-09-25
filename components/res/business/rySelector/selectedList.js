/**
 * Created by Administrator on 2018/5/21.
 */
import React from 'react';
import Icon from '../../../icon'

const stylePrefix = 'rj-rySelector-selectedList';

export default ({selectedRys, onClose}) => {

    const ItemContent = ({nickname, username}) => {
        return (
            <div
                className="item"
                title={nickname}
                onDoubleClick={() => onClose(username)}
            >
                <div className="content">{nickname}</div>
                <div className="close"><Icon type="close" onClick={() => onClose(username)}/></div>
            </div>
        )
    }

    return (
        <div className={stylePrefix}>
            <div className="listBody">
                {
                    selectedRys.map(item => {
                        return <ItemContent key={item.username}
                                            username={item.username}
                                            nickname={item.nickname}
                        />
                    })
                }
            </div>
        </div>
    )

}