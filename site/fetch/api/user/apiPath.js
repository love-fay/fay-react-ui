/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findUsers: uumsServer + apiRelativePath.findUsers,
    findUsersByQQ: uumsServer + apiRelativePath.findUsersByQQ,
    findUsersByRJ: uumsServer + apiRelativePath.findUsersByRJ,
    findUsersOrderByNameAsc: uumsServer + apiRelativePath.findUsersOrderByNameAsc,
    findUsersOrderByNameAscAndQQ: uumsServer + apiRelativePath.findUsersOrderByNameAscAndQQ,
    findUsersOrderByNameAscAndRJ: uumsServer + apiRelativePath.findUsersOrderByNameAscAndRJ,
    findUsersOrderByNameDesc: uumsServer + apiRelativePath.findUsersOrderByNameDesc,
    findUsersOrderByNameDescAndQQ: uumsServer + apiRelativePath.findUsersOrderByNameDescAndQQ,
    findUsersOrderByNameDescAndRJ: uumsServer + apiRelativePath.findUsersOrderByNameDescAndRJ,
};

export default apiPath;
