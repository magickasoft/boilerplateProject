/**
 * @format
 */

import {AppRegistry} from 'react-native';
import wrapper from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => wrapper);
