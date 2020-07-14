import axios from 'axios';
import { proxyUrl } from '../utils/constants';
import { data } from './data';

/**
  * @desc Fetching product categories
  * @param none
  * @return An array of category objects that contains subcategories product variants
  */
export const getCategories = async (): Promise<object[]> => {
  let categories = await axios
    .get(proxyUrl)
    .then(({ data }) => data);

  return categories.categories;
};

export const getDevData = async (): Promise<object[]> => {
  new Promise(() => {}).then();

  return data.categories;
};
