import {
  TimeoutError,
  UnauthorizedError,
  ValidationError,
} from 'src/utils/errors';
import { AxiosError } from 'axios';

export default function errorResponseHandler(error: AxiosError): Error {
  if (error.message.startsWith('timeout')) {
    return new TimeoutError('timeout error');
  }

  if (error.response?.status === 401) {
    return new UnauthorizedError(error.message);
  }

  if (error.response?.data.message.startsWith('Validation error')) {
    throw new ValidationError(error.response.data.message);
  }

  return error;
}
