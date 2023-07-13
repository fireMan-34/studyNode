import { gitlabRequest } from '../util/request';

// 不搞了，被权限限制死了，大体操作懂了

const { request } = gitlabRequest;
// 组 ID 自己建的有权限
const groupId = '246';
// 用户 ID 代表查询对应的用户，但是需要 token 进行鉴权, 找公共请求json
const userId = '161';

// 源代码里面找 project_id
const projectId = '693';

/** 获取模板 */
export const getIgnoreTemplate = () => request('/templates/gitignores', {});
/** 获取所有集成配置 */ 
export const getCIYAML = () => request('/templates/gitlab_ci_ymls', {});

/** 获取用户可用组资源 */
export const getGrouptIdAccessRequest = () => request(`/groups/${groupId}/access_requests`, {});
/** 获取用户可用项目资源 */
export const getProcessIdAccessRequest = () => request(`/projects/${projectId}/access_requests`, {});

/**请求用户可用组资源 */
export const postGrouptIdAccessRequest = () => request(`/groups/${groupId}/access_requests`, { method: 'post' });
/**请求用户可用项目资源 */
export const postProcessIdAccessRequest = () => request(`/projects/${projectId}/access_requests`, { method: 'post' });