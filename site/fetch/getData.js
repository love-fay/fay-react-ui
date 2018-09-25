import {get} from "./request";

export const getJsonResData = (apiPath, cb) => {
    const promise = get(apiPath);
    return promise.then(res => res.json())
        .then(res => cb ? cb(res) : res)
        .catch( err => {
            throw err;
        });
};