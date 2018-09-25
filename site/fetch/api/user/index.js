/**
 * Created by feichongzheng on 17/9/28.
 */
import {getJsonResData} from '../../getData';
import apiPath from './apiPath';

export const findUsers = cb => getJsonResData(apiPath.findUsers, cb);
export const findUsersByQQ = cb => getJsonResData(apiPath.findUsersByQQ, cb);
export const findUsersByRJ = cb => getJsonResData(apiPath.findUsersByRJ, cb);
export const findUsersOrderByNameAsc = cb => getJsonResData(apiPath.findUsersOrderByNameAsc, cb);
export const findUsersOrderByNameAscAndQQ = cb => getJsonResData(apiPath.findUsersOrderByNameAscAndQQ, cb);
export const findUsersOrderByNameAscAndRJ = cb => getJsonResData(apiPath.findUsersOrderByNameAscAndRJ, cb);
export const findUsersOrderByNameDesc = cb => getJsonResData(apiPath.findUsersOrderByNameDesc, cb);
export const findUsersOrderByNameDescAndQQ = cb => getJsonResData(apiPath.findUsersOrderByNameDescAndQQ, cb);
export const findUsersOrderByNameDescAndRJ = cb => getJsonResData(apiPath.findUsersOrderByNameDescAndRJ, cb);



