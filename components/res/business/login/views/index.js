import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from '../../../../form';
import Tabs from '../../../../tabs';
import Icon from '../../../../icon';
import Input from '../../../../input';
import Alert from '../../../../alert';
import Button from '../../../../button';
import Checkbox from '../../../../checkbox';
import Scroll from '../../../own/customScroll';

import '../style/index.less';
import {userLogin, selectCert, loadLoginInfo} from "../api/login";
import {ieVersion} from "../api/ieVersion";
import FyTreeSelect from './fyTreeSelect';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const stylePrefix = 'rj-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            messageType: '',
            showMessage: 'none',

            caLoding: false,
            caMessage: '',
            caMessageType: '',
            caShowMessage: 'none',

            fy: undefined
        };
    }

    mount = false;

    componentDidMount() {
        this.mount = true;
    }

    componentWillUnmount() {
        this.mount = false;
    }

    handleUnifiedUserLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({loading: true, showMessage: 'none', message: '', messageType: ''});
                const {fyfjm, username, password, remember} = values;
                let data = {username: `${username}&${fyfjm}`, password};
                const {successLogin} = this.props;
                userLogin({usernamePasswordAuthenticationModel: data}, remember, successLogin, (loginMessage = {}) => {
                    if (loginMessage.err) {
                        this.setState({
                            showMessage: 'block',
                            message: loginMessage.err,
                            messageType: 'error',
                            loading: false
                        });
                    } else {
                        if (this.mount) {
                            this.setState({
                                loading: false
                            });
                        }
                    }
                });
            } else {
                e.preventDefault();
            }
        });
    };

    onChange = () => {
        this.setState({showMessage: 'none', message: '', messageType: ''});
    };

    handleFyChange = (value) => {
        this.setState({fy: value})
    };

    controlDownload = () => {
        window.open(window.location.origin + '/problem', '_blank');
    };

    caLogin = () => {
        if (window.ActiveXObject || "ActiveXObject" in window) {
            let objSignXObject = ieVersion() === 11 ? this.activex : new ActiveXObject("SignX.SignXObject");
            const {successLogin} = this.props;
            this.setState({caLoding: true, caMessage: '', caMessageType: '', caShowMessage: 'none'});
            selectCert(objSignXObject, successLogin, (loginMessage = {}) => {
                if (loginMessage.err) {
                    this.setState({
                        caShowMessage: 'block',
                        caMessage: loginMessage.err,
                        caMessageType: 'error',
                        caLoding: false
                    });
                } else {
                    if (this.mount) {
                        this.setState({
                            caLoding: false
                        });
                    }
                }
            });
        } else {
            this.setState({
                caShowMessage: 'block',
                caMessage: '请您使用 ie 浏览器，进行CA登录!',
                caMessageType: 'error',
                caLoding: false
            });
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {title} = this.props;
        //let info = loadLoginInfo() !== "" ? JSON.parse(loadLoginInfo()) : undefined;
        let info = loadLoginInfo();

        return (
            <Scroll className={stylePrefix}>
                <h1 className={stylePrefix + '-title'}>{title}</h1>
                <Tabs type="card" className={stylePrefix + '-tabs'}>
                    <TabPane tab="普通登录" key="mima">
                        <Form onSubmit={this.handleUnifiedUserLogin } className={stylePrefix + "-form"}>
                            <FormItem>
                                {getFieldDecorator('fyfjm', {
                                    rules: [{
                                        required: true, message: '请选择法院',
                                    }],
                                    initialValue: info && info.fyfjm,
                                })(
                                    <FyTreeSelect
                                        allowClear={true}
                                        placeholder="法院"
                                        onChange={this.handleFyChange}
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{
                                        required: true, message: '请输入账号',
                                    }],
                                    initialValue: info && info.username,
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{color: '#999', fontSize: 18}}/>}
                                        placeholder="账号"
                                        onChange={this.onChange}
                                    />
                                )}
                            </FormItem>
                            <FormItem style={{marginBottom: 10}}>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: '请输入密码',
                                    }],
                                    initialValue: info && info.password,
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{color: '#999', fontSize: 18}}/>}
                                        type="password"
                                        placeholder="密码"
                                        onChange={this.onChange}
                                    />
                                )}
                            </FormItem>
                            <FormItem style={{marginBottom: 10}}>
                                <Alert
                                    style={{display: this.state.showMessage}}
                                    message={this.state.message}
                                    type={this.state.messageType}
                                    showIcon
                                />
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(
                                    <Checkbox style={{marginLeft: 3}}>记住我</Checkbox>
                                )}
                            </FormItem>
                            <FormItem style={{marginBottom: 0}}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className={stylePrefix + '-loginFormButton'}
                                    loading={this.state.loading}
                                >
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </TabPane>
                    <TabPane tab="CA登录" key="zhengshu">
                        <a
                            href="http://205.0.0.19/feichongzheng/software/raw/master/resourceDownload/caDriver.exe"
                            download="caDriver"
                            className={stylePrefix + '-downloadBtn'}
                        >
                            Ukey驱动下载安装
                        </a>
                        <a
                            href="http://205.0.0.19/feichongzheng/software/raw/master/resourceDownload/caV2.0.2.exe"
                            download="caV2.0.2"
                            className={stylePrefix + '-downloadBtn'}
                        >
                            CA认证控件下载安装
                        </a>
                        <Alert
                            style={{display: this.state.caShowMessage}}
                            message={this.state.caMessage}
                            type={this.state.caMessageType}
                            showIcon
                        />
                        <p className={stylePrefix + '-tip'}>
                            <Icon
                                type="info-circle"
                                style={{fontSize: 16, verticalAlign: 'middle', marginRight: 5}}
                            />
                            <span >安装完成后需要刷新页面</span>
                        </p>
                        <Button
                            type="primary"
                            className={stylePrefix + '-loginFormButton'}
                            loading={this.state.caLoding}
                            onClick={this.caLogin}
                        >
                            登录
                        </Button>
                    </TabPane>
                </Tabs>
                {ieVersion() === 11 ?
                    <object
                        ref={node => this.activex = node}
                        id="activex"
                        classID="clsid:E321B462-A179-40B4-9233-39341547D123"
                        height="0"
                        width="0"
                    >
                    </object> : ''
                }
                <p className={stylePrefix + '-footer'}>
                    <a className={stylePrefix + '-control-download'} onClick={this.controlDownload}> 控件下载</a>
                    <span>技术支持：福建榕基软件股份有限公司</span>
                    <span>服务热线：0591-87087671,87087780</span>
                    <span>运维投诉：0591-87087724</span>
                </p>
            </Scroll>
        );
    }
}

Login.propTypes = {
    successLogin: PropTypes.func.isRequired,
    controlDownload: PropTypes.func,
    title: PropTypes.string.isRequired,
};
Login.defaultProps = {
    title: '福建法院审判信息系统'
};
export default Form.create()(Login);