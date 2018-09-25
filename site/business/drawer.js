import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {ListItemText} from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import {name} from "../../config/info";
import {version} from '../../package';
import * as menus from './menu';
import {getBasicComponentContent} from './content';
import Gitlab from '../svg/gitlab';
import {gitPath} from '../../config/info';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        // height: 430,
        // marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
    menuItem: {
        fontSize: '12px',
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    'menuItem-active': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
            color: theme.palette.common.white,
        }
    },
    primary: {fontSize: '0.8rem',},
    icon: {},
    appName: {
        marginLeft: '20px',
    },
    logo: {
        width: '50px',
        height: '50px',
        background: 'url("/assets/images/logo/80x80.png") center no-repeat',
        backgroundSize: '50px'
    },
    title: {
        flex: 1
    }
});

class PersistentDrawer extends React.Component {
    state = {
        open: true,
        anchor: 'left',
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleMenuItem = (path) => {
        const {history} = this.props;
        history.push(path);
    };

    toHome = () => {
        const {history} = this.props;
        history.push('/');
    };

    toBase = () => {
        const {history} = this.props;
        history.push('/base');
    };

    toAntd = () => {
        window.open('http://205.0.0.19:3003');
    };

    toGitlab = () => {
        window.location.href = gitPath;
    };

    render() {
        const { classes, theme, location } = this.props;
        const { anchor, open } = this.state;
        const { pathname } = location;

        const menuList = () => {
            let menuMap = [];
            for(let i in menus){
                let menu = menus[i];
                menuMap.push(
                    <MenuItem
                        className={classNames(classes.menuItem, classes[`menuItem-${pathname===menu.path?'active':''}`])}
                        onClick={() => this.handleMenuItem(menu.path)} key={i}>
                        <ListItemText classes={{ primary: classes.primary }} primary={menu.name} />
                    </MenuItem>
                );
            }
            return menuMap;
        };

        const drawer = (
            <Drawer
                type="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
                open={open}
            >
                <div className={classes.drawerInner}>
                    <div className={classes.drawerHeader}>
                        <Button color="inherit" onClick={this.toHome}>
                            <div className={classes.logo}/>
                            <div className={classes.appName}>
                                <div>{name}</div>
                                <div>v{version}</div>
                            </div>
                        </Button>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <MenuList>
                        {menuList()};
                    </MenuList>
                </div>
            </Drawer>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                            [classes[`appBarShift-${anchor}`]]: open,
                        })}
                    >
                        <Toolbar disableGutters={!open}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap className={classes.title}>
                                {getBasicComponentContent[pathname].name}
                            </Typography>
                            <Button color="inherit" onClick={this.toBase}>基础组件</Button>
                            <Button color="inherit" onClick={this.toAntd}>ant-design</Button>
                            <Button color="inherit" onClick={this.toGitlab}>
                                <Gitlab/>
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {drawer}
                    <main
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}
                    >
                        {getBasicComponentContent[pathname].component}
                    </main>
                </div>
            </div>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(PersistentDrawer));