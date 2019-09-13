import {defaultsDeepAll} from 'lodash/fp';

const defaultConfig = require('./default.json');

let localConfig = {};

try {
  const isDev = process.env.NODE_ENV === 'development';
  localConfig = require(isDev ? './development.json' : './production.json');
} catch (e) {
  // pass
}

export default defaultsDeepAll([localConfig, defaultConfig]);
