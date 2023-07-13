import axios, { AxiosRequestConfig } from 'axios';

export const gitlabRequest = (function () {

  const baseUrl = 'https://gitlab.shushangyun.com';
  const apiVersion = '/api/v4';
  const token = 'VCovdbJ2ZbPqy3j7shg9';
  const prefixUrl = baseUrl + apiVersion;
  const requestInstance = axios.create({
    baseURL: prefixUrl,
    method: 'Get',
    headers: {
      ['PRIVATE-TOKEN']: token,
    }
  });

  requestInstance.interceptors.request.use((value) => {
    console.log('请求地址', value.baseURL! + value.url!)
    return value;
  });

  requestInstance.interceptors.response.use((respose) => {
    console.log('请求状态', respose.status);
    console.log(respose)
    return respose.data;
  });

  const apiWrapper = (url: string, options: AxiosRequestConfig) => {
    const method = (options.method || 'get').toLowerCase();
    return requestInstance.request({
      url: url,
      method,
    })
  };
  return {
    request: apiWrapper,
  }
})();