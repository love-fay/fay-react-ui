import apiRelativePath from './apiRelativePath';
// import {uumsServer} from './apiServer';
import {serviceUrl} from '../../../../config'

const apiPath = {
    findUserSelectOrg: serviceUrl+ '/simba-uums-main/v1/uums' + apiRelativePath.findUserSelectOrg,
    findOrgByCurrentUser: serviceUrl+'/simba-uums-main/v1/uums' + apiRelativePath.findOrgByCurrentUser,
    findDepartmentByOrgId: serviceUrl+'/simba-uums-main/v1/uums' + apiRelativePath.findDepartmentByOrgId,
    findTreeChildren: serviceUrl+'/simba-uums-main/v1/uums' + apiRelativePath.findTreeChildren,
    findOrgs: serviceUrl+'/simba-uums-main/v1/uums' + apiRelativePath.findOrgs,
    findUsers: serviceUrl+'/simba-uums-main/v1/uums' + apiRelativePath.findUsers,
    findUserDTOPage: serviceUrl+'/simba-uums-main/v1/uums' + apiRelativePath.findUserDTOPage,
};

export default apiPath;
