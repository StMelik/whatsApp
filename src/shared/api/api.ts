import axios from 'axios';
import { USER_API_LOCAL_STORAGE_KEY, USER_ID_LOCAL_STORAGE_KEY } from '../constants/localStorage';

export const $api = axios.create({
  baseURL: 'https://api.green-api.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

$api.interceptors.request.use((config) => {
  const userId = localStorage.getItem(USER_ID_LOCAL_STORAGE_KEY) ?? '';
  const userApi = localStorage.getItem(USER_API_LOCAL_STORAGE_KEY) ?? '';

  if (userId && userApi) {
    const [method, id] = config.url?.split('/')!;

    config.url = [`waInstance${userId}`, method, userApi, id].filter(Boolean).join('/');
  }

  return config;
});
