import axios, { AxiosInstance } from 'axios';
import config from 'src/config';
import { getTokenFromLocalStorage } from 'src/utils/localStorage';

export interface ApiConfig {
  baseURL: string;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: config.apiUrl,
};

class AxiosFactory {
  static axiosInstance: AxiosInstance | null = null;

  static getInstance(optionConfig?: ApiConfig) {
    if (this.axiosInstance === null) {
      this.axiosInstance = this.createAxiosInstance(optionConfig);
    }

    return this.axiosInstance;
  }

  static createAxiosInstance(optionConfig?: ApiConfig) {
    const axiosConfig = {
      ...DEFAULT_API_CONFIG,
      ...optionConfig,
    };
    const instance = axios.create(axiosConfig);

    instance.interceptors.request.use(request => {
      const token = getTokenFromLocalStorage();
      request.headers = this.createAuthHeader(token);

      return request;
    });

    return instance;
  }

  static createAuthHeader(token: string | null) {
    return { Authorization: `Bearer ${token}` };
  }
}

export const createMultiPartHeader = () => ({
  'content-type': 'multipart/form-data',
});

export const getFileName = (disposition: string): string => {
  let filename = '';
  if (disposition && disposition.indexOf('attachment') !== -1) {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(disposition);
    if (matches != null && matches[1]) {
      filename = matches[1].replace(/['"]/g, '');
    }
  }

  return filename;
};

export default AxiosFactory;
