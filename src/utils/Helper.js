/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { PRODUCTS_ENDPOINT } from './constants';

export const makeRequest = (method, url, data, headers) => axios({
  method,
  url,
  data,
  headers
});

export const buildPath = (demographic, group, value) => {
  if (group === null) {
    return `${PRODUCTS_ENDPOINT}?demographic=${demographic}`;
  }
  return `${PRODUCTS_ENDPOINT}?demographic=${demographic}&${group}=${value}`;
};

export const saveObjToSessionStorage = (key, object) => {
  sessionStorage.setItem(key, JSON.stringify(object));
};
