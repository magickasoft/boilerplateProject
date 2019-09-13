import React, {createElement} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import lib from './lib';

const Icon = ({name, size, width, height, color, onPress, ...rest}) => {
  if (!name) {
    return null;
  }

  const svg = lib[name];

  if (!svg) {
    console.error(`Requested unknown icon '${name}'`);
    return null;
  }

  const svgWidth = size || width;
  const svgHeight = size || height;
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component onPress={onPress}>
      {createElement(svg, {
        ...rest,
        color,
        width: svgWidth,
        height: svgHeight,
      })}
    </Component>
  );
};

Icon.defaultProps = {
  height: 22,
  width: 22,
};

Icon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  onPress: PropTypes.func,
};

export default Icon;
