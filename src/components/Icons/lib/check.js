import React from 'react';
import * as SVG from 'react-native-svg';

export default function Check({color = '#000', ...rest}) {
  return (
    <SVG.Svg viewBox="0 0 13 11" {...rest}>
      <SVG.Path
        fill={color}
        fillRule="nonzero"
        d="M0 6.81l1.5-1.572L4 7.857 11.5 0 13 1.571 4 11z"
      />
    </SVG.Svg>
  );
}
