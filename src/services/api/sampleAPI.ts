import AxiosFactory from 'src/utils/axios';
import { User } from 'services/models';
import errorResponseHandler from 'services/api/error/errorResponseHandler';

const axiosInstance = AxiosFactory.getInstance();

export const sampleApi = async (): Promise<User> => {
  try {
    return axiosInstance.get('/user');
  } catch (err) {
    throw errorResponseHandler(err);
  }
};
