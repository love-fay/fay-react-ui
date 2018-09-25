import cookie from 'react-cookie';
import get from "rj-lib/fetch/get";
import post from 'rj-lib/fetch/post';
import {logout, saveUser, loginUser, saveUserLoginInfo} from "rj-lib/user";
import Message from '../../../../message';
import {serviceUrl} from '../../../../config';

import {PROVIDER_CSP, PROVIDER_UNDEFINE, ENCODING_NONE, ENCODING_GBK, CERT_ENCODE_BASE64} from './caConfig';

export const selectCert = (objSignXObject, successLogin, callback) => {
    try {
        let objSelectedCerts = objSignXObject.ListCerts(PROVIDER_CSP);
        if (objSelectedCerts.Count === 0) {
            objSignXObject.LoadEngine(PROVIDER_CSP);
            caLogin(objSignXObject, successLogin, callback);
        } else {
            caLogin(objSignXObject, successLogin, callback);
        }
    } catch (e) {
        if (undefined === objSignXObject || e.message === '对象不支持“LoadEngine”属性或方法' || e.message === '对象不支持“ListCerts”属性或方法') {
            Message.error("您未安装CA认证控件！");
        } else {
            Message.error(e.message);
        }
    }
};

const caLogin = (objSignXObject, successLogin, callback) => {
    let data = "123";//初始化签名原文，需传到后台
    let strStyleJson = "{\"btnCancel\":{\"caption\":\"取消\",\"rect\":{\"height\":22,\"left\":180,\"top\":212,\"width\":87}},\"btnOk\":{\"caption\":\"确定\",\"rect\":{\"height\":22,\"left\":50,\"top\":212,\"width\":87}},\"caption\":\"选择证书\",\"certList\":{\"Subject.CN\":\"姓名\",\"Subject.O\":\"组织\",\"rect\":{\"height\":154,\"left\":12,\"top\":57,\"width\":293}},\"logo\":{\"imagePath\":\"Logo.jpg\",\"rect\":{\"height\":41,\"left\":12,\"top\":12,\"width\":293}},\"size\":{\"height\":279,\"width\":334}}";
    objSignXObject.AddCertFilter("KU", "Sign", PROVIDER_UNDEFINE, ENCODING_NONE);//经对方研发人员确认用"sign"来过滤证书
    let objSelectedCert = objSignXObject.SelectCert(PROVIDER_CSP, strStyleJson);

    let cert, sigValue, result;

    if (objSelectedCert) {
        cert = objSelectedCert.GetContent(CERT_ENCODE_BASE64);
        sigValue = objSelectedCert.SignMessage(data);//签名结果，需传到后台
        result = objSignXObject.VerifySignedMessageEx(sigValue, cert, data);
    }
    try {
        if (result) {
            let params = {
                data: data,
                sigValue: sigValue,
                key_name: objSelectedCert.GetItem(),
                key_sfz: objSelectedCert.GetExtension('1.2.156.10260.4.1.1', ENCODING_GBK),
                key_cert: cert
            };
            userLogin({caAuthenticationModel: params}, undefined, successLogin, callback);
        }
        else {
            if (result !== undefined)
                Message.error("签名验证失败！");
        }
    } catch (e) {
        Message.error("签名失败: " + e.name + ":" + e.message);
    }
};

export const userLogin = (data, remember, successLogin, callback) => {
    post(serviceUrl + '/uaa/user/accessToken', data, undefined, undefined, false).then((res) => res.json())
        .then((res) => {
            if (res.access_token) {
                let resultData = {};
                resultData.bmbs = res["X-FJFY-BMBS"];
                resultData.bmmc = res["X-FJFY-BMMC"];
                resultData.fydm = res["X-FJFY-FYDM"];
                resultData.fyfjm = res["X-FJFY-FYFJM"];
                resultData.fymc = res["X-FJFY-FYMC"];
                resultData.xm = res["X-FJFY-NICKNAME"];
                resultData.userName = res["X-FJFY-USERNAME"];
                resultData.rybs = res["X-FJFY-RYBS"];
                resultData.ryzp = res["X-FJFY-RYZP"];
                resultData.jgId = res["X-FJFY-FYID"];
                resultData.bmId = res["X-FJFY-DEPTID"];
                resultData.unFlag = res["X-FJFY-UPFLAG"];
                resultData.jti = res.jti;
                resultData.scope = res.scope;
                resultData.token = res.access_token;
                saveUser(resultData, remember ? res.expires_in : undefined);
                saveLoginInfo(data, remember ? 30 * 24 * 60 * 60 : undefined);
                callback && callback({});
                successLogin && successLogin();
            } else {
                callback && callback({err: res.message});
            }
        }).catch((err) => {
        if (err && err.status === '404') {
            callback && callback({err: '发生404错误'});
        }
    });
};

export const userLogout = (history, location) => {
    get(serviceUrl + '/logout', undefined).then((res) => {

    });
    logout(history, location);
};

const saveLoginInfo = (data, rememberTime) => {
    const {username, password} = data.usernamePasswordAuthenticationModel;
    const saveData = {username: username.split('&')[0], fyfjm: username.split('&')[1], password};
    saveUserLoginInfo(saveData, rememberTime);
};

export const loadLoginInfo = () => {
    return cookie.load('login-info');
    // return getCookie('login-info')
};

/*
 const saveUser1 = (resultData, expires_in, remember) => {
 //setCookie('current-user', JSON.stringify(resultData), expires_in/60/60/24, remember);
 };
 export const setCookie = (name, value, expiredays, remember) => {
 let exdate = new Date();
 exdate.setDate(exdate.getDate() + expiredays);
 let expires = expiredays && remember ? `;expires=${exdate.toUTCString()}` : '';
 document.cookie = `${name}=${escape(value)}${expires}`
 };
 */

/*export const getCookie = (name) => {
 if (document.cookie.length > 0) {
 let start = document.cookie.indexOf(`${name}=`);
 if (start !== -1) {
 start = start + name.length + 1;
 let end = document.cookie.indexOf(";", start);
 if (end === -1)
 end = document.cookie.length;
 return unescape(document.cookie.substring(start, end));
 }
 }
 return "";
 };*/
