import post from 'rj-lib/fetch/post';
import get from 'rj-lib/fetch/get';
import apiPath from './apiPath';

const findOrgByCurrentUser = () => get(apiPath.findOrgByCurrentUser);//获取当前用户所在机构的部门列表
const findTreeChildren = (data) => get(apiPath.findTreeChildren + '/' + data,);//查询部门列表
const findUsers = (data) => get(apiPath.findUsers + '/' + data);
const findUserDTOPage=(data)=>post(apiPath.findUserDTOPage+'?page='+data.page+'&size='+data.size, data);
const findOrgs = (data) => get(apiPath.findOrgs + '/' + data);  //查找本地区/全省
//const findUserSelectOrg = (data) => post(apiPath.findUserSelectOrg, data, appsn);
//const findDepartmentByOrgId=(data)=>get(apiPath.findDepartmentByOrgId+'/'+orgId,{},appsn);
//
export {findOrgByCurrentUser, findOrgs, findTreeChildren,findUsers,findUserDTOPage};
