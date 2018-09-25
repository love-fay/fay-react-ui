function getProxy(rootDir){
    let proxy={
        '/resource':'http://205.0.0.19:8000',
        '/test/api':{
            target: 'http://205.0.0.26:8080',
            pathRewrite: {'^/test/api': ''}
        },
        '/test/uploadFile':{
            target: 'http://205.0.3.119:8081',
            pathRewrite: {'^/test': ''}
        }
    };
    try{
        const {apiServer, imKeepAliveServer, imServer} = require(rootDir + '/app/config.js');

        apiServer && (proxy = {
            ...proxy,
            '/api':{
                target: apiServer,
                pathRewrite: {'^/api': ''}
            }
        });
        imKeepAliveServer && (proxy = {
            ...proxy,
            '/imKeepAliveServer':{
                target: imKeepAliveServer,
                pathRewrite: {'^/imKeepAliveServer': ''}
            }
        });
        imServer && (proxy = {
            ...proxy,
            '/imServer':{
                target: imServer,
                pathRewrite: {'^/imServer': ''}
            }
        });

        console.log('proxy: /api->'+apiServer+' /imKeepAliveServer->'+imKeepAliveServer+' /imServer->'+imServer);
    } catch (e) {
        console.log(e);
    }
    return proxy;
}

module.exports = getProxy;