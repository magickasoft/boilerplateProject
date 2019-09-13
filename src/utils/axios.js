import Axios from 'axios';
import {isPlainObject, pick} from 'lodash';
import config from 'config';
import {camelizeKeys, snakeizeKeys} from './transform';

const createAxiosInstance = (configProps = {}) => {
  const instance = Axios.create({
    headers: config.headers,
    responseType: 'json',
    transformRequest(data) {
      if (isPlainObject(data)) {
        return JSON.stringify(snakeizeKeys(data));
      }

      return data;
    },
    transformResponse(data) {
      return camelizeKeys(data);
    },
    ...configProps,
  });

  instance.interceptors.request.use(conf => {
    if (conf.params) {
      conf.params = snakeizeKeys(conf.params);
    }

    return conf;
  });

  instance.interceptors.response.use(
    response => response,
    err => {
      if (!Axios.isCancel(err)) {
        // ignore request canceling
        throw pick(err.response, ['data', 'status']);
      }
    },
  );

  return instance;
};

export default createAxiosInstance({baseURL: config.url});
