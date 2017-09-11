import axios from 'axios'

import JWT from '../utils/JWT'
import { API_URL } from '../utils/api_url'

configureHttp();

export default class ApiGroup {
  constructor({name}){
    this._httpClient = axios;
    this._baseURL = API_URL;
    this._name = name;
    this._basePath = `/${name}`;
  }

  get httpClient(){
    return this._httpClient
  }

  get name(){
    return this._name
  }

  get baseURL(){
    return this._baseURL
  }

  get basePath(){
    return this._basePath
  }

  post({endpoint, data}, config={}){
    return this.httpClient({
      ...config,
      method: 'POST',
      url: `${this.basePath}${endpoint}`,
      data,
    });
  }

  get(endpoint, params={}, config={}){
    return this.httpClient({
      ...config,
      method: 'GET',
      url: `${this.basePath}${endpoint}`,
      params,
    });
  }

}

function configureHttp(){

  axios.defaults.baseURL = API_URL;

  axios.interceptors.request.use(
    config => {
      config.headers.common['authorization'] = JWT.fetch();
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
}