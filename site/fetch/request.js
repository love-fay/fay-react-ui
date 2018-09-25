/**
 * Created by feichongzheng on 17/1/5.
 */
const headers = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return headers;
};

const reqGetBrace = (method) => {
    return {
        method: method,
        headers: headers(),
        mode: 'cors',
        cache: 'default'
    };
};

const reqPostBrace = (method, params = {}) => {
    return {
        method: method,
        headers: headers(),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(params)
    };
};

const promise = (req) => {
    return new Promise(function(resolve, reject) {
                fetch(req).then( (res) => {
                    resolve(res);
                    }).catch( (err) => {
                        reject(err);
                    });
                }
            );
};

const get = (apiPath, data) => {
    const req = new Request(apiPath, reqGetBrace('GET', data));
    return promise(req);
};

const post = (apiPath, data) => {
    const req = new Request(apiPath, reqPostBrace('POST', data));
    return promise(req);
};

export {get, post};
