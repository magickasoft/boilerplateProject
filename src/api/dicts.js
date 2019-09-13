import {get} from 'utils';
import {processingRequest} from './common';

const METHOD = 'dicts';

const getPerksLabel = () => processingRequest(get(`${METHOD}/perks_label/`));

const getCountries = data =>
  processingRequest(get(`${METHOD}/countries/`, data));

const getLanguages = data =>
  processingRequest(get(`${METHOD}/languages/`, data));

const getCurrencies = data =>
  processingRequest(get(`${METHOD}/currencies/`, data));

const getRegions = data => processingRequest(get(`${METHOD}/regions/`, data));

export default {
  getPerksLabel,
  getCountries,
  getLanguages,
  getCurrencies,
  getRegions,
};
