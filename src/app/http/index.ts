import { BASE_URL } from '../../app/utils/Request';
import Axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
});

export { api };
