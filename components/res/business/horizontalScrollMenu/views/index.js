import React, {Component} from 'react';
import get from 'rj-lib/fetch/get';
import Menu from '../../../../menu';
import Icon from '../../../../icon';
import Spin from '../../../../spin';
import CustomScroll  from '../../../../customScroll';
import {serviceUrl} from '../../../../config';
import '../style/index.less';
const SubMenu = Menu.SubMenu;
import PropTypes from 'prop-types';

class HorizontalScrollMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openKeys: null,
            html: null,
        };
    }

    componentWillMount() {
        this._isMounted = true;
        this.getData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getData = () => {
        const {sn, type} = this.props;
        if (type === 'APP') {
            get(serviceUrl + '/simba-uums-main/v1/uums/menuResource/auth/findMenu', undefined, sn).then((res) => res.json())
                .then((res) => {
                    const data = res.data;
                    let pcMap = {};
                    for (let i in data) {
                        if (data.hasOwnProperty(i)) {
                            let menu = data[i];
                            let parentId = menu.parentId;
                            if (parentId === null) {  //将一级根目录放在pcMap.top
                                let top = pcMap.top;
                                top = top === undefined ? Array.of() : top;
                                top.push(menu);
                                pcMap.top = top;
                            } else {//将有相同的parentId放在统一数组里，parentId做为pcMa的key
                                let children = pcMap[parentId];
                                children = children === undefined ? Array.of() : children;
                                children.push(menu);
                                pcMap[parentId] = children;
                            }
                        }
                    }
                    this.generateMenu(pcMap);
                })
                .catch((err) => {
                    throw err;
                });
        } else if (type === 'MENURESOURCE') {
            get(serviceUrl + '/simba-uums-main/v1/uums/menuResource/auth/findChildMenus/' + sn, undefined).then((res) => res.json())
                .then((res) => {
                    const data = res.data;
                    let pcMap = {};
                    for (let i in data) {
                        if (data.hasOwnProperty(i)) {
                            let menu = data[i];
                            let parentSn = menu.parentSn;
                            let parentId = menu.parentId;
                            if (parentSn === sn) {  //将一级根目录放在pcMap.top
                                let top = pcMap.top;
                                top = top === undefined ? Array.of() : top;
                                top.push(menu);
                                pcMap.top = top;
                            } else {//将有相同的parentId放在统一数组里，parentId做为pcMa的key
                                let children = pcMap[parentId];
                                children = children === undefined ? Array.of() : children;
                                children.push(menu);
                                pcMap[parentId] = children;
                            }
                        }
                    }
                    this.generateMenu(pcMap);
                })
                .catch((err) => {
                    throw err;
                });
        }
    };

    generateMenu = (pcMap)=>{
        let menus = Array.of();
        let navKeyMap = {};
        navKeyMap.firstKeyMap = 0;
        let pcMapTop = pcMap.top;
        for (let i in pcMapTop) {
            if (pcMapTop.hasOwnProperty(i)) {
                let menu = pcMapTop[i];
                let tree = this.recursiveTree(menu, pcMap, Array.of(), navKeyMap);
                menus.push(tree.html);
            }
        }
        let html = menus.map(
            (data, index) => data
        );
        // this.navMap = navKeyMap;
        let openKeys = navKeyMap[this.props.pathname];
        openKeys = openKeys === undefined ? navKeyMap.firstKeyMap : openKeys;
        if (this._isMounted) {
            this.setState({
                openKeys: openKeys,
                html: html,
            });
        }
    };

    recursiveTree(parent, pcMap, navKeyArray, navMap) {
        parent.children = Array.of();
        let map = {};
        let html = '';
        if (pcMap[parent.id] === undefined) {
            let key = parent.menuUrl === null ? "" : parent.menuUrl;
            if (parent.menuIcon === null) {
                html = <Menu.Item key={key}>{parent.menuName}</Menu.Item>;
            } else {
                html = <Menu.Item key={key}><Icon type={parent.menuIcon}/>{parent.menuName}</Menu.Item>;
            }
            let a = [].concat(navKeyArray);
            if (navMap.firstKeyMap === 0) {
                navMap.firstKeyMap = a;
            }
            navMap[parent.menuUrl] = a;
        } else {
            navKeyArray.push(parent.id);
            let pcMapParent = pcMap[parent.id];
            for (let i in pcMapParent) {
                if (pcMapParent.hasOwnProperty(i)) {
                    let child = pcMapParent[i];
                    map = this.recursiveTree(child, pcMap, navKeyArray, navMap);
                    let m = map.html;
                    parent.children.push(m);
                }
            }
            let childrenHtml = parent.children.map(
                (data, index) => data
            );
            if (parent.menuIcon === null) {
                html = <SubMenu key={parent.id} title={<span>{parent.menuName}</span>}>{childrenHtml}</SubMenu>;
            } else {
                html = <SubMenu key={parent.id} title={<span><Icon
                    type={parent.menuIcon}/><span>{parent.menuName}</span></span>}>{childrenHtml}</SubMenu>;
            }
        }
        map.html = html;
        return map;
    }


    render() {
        const stylePrefix = 'rj-horizontal-scroll-menu';
        const {html, openKeys} = this.state;
        const {style, menuClick} = this.props;
        if (html === null) {
            return (
                <div className={stylePrefix} style={{...style}}>
                    <Spin tip='菜单加载中...'/>
                </div>
            );
        } else if (html.length === 0) {
            return (
                <div className={stylePrefix} style={{...style}}>
                    您没有被授予任何菜单权限
                </div>
            );
        } else {
            return (
                <CustomScroll className={stylePrefix} style={{...style}}>
                    <Menu onClick={menuClick}
                          defaultOpenKeys={openKeys}
                          selectedKeys={[this.props.pathname]}
                          mode="inline"
                          style={{width: 'auto'}}
                    >
                        {html}
                    </Menu>
                </CustomScroll>
            );
        }
    }
}

HorizontalScrollMenu.propTypes = {
    sn: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
    menuClick: PropTypes.func
};

export default HorizontalScrollMenu;
