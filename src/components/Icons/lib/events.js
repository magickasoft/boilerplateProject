import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Events({color = '#000', ...props}) {
  return (
    <Svg viewBox="0 0 104 107" {...props}>
      <Path
        d="M26.75 11.889h49.537V2.477a2.477 2.477 0 014.954 0v9.412h7.926c7.66 0 13.87 6.21 13.87 13.87v67.37c0 7.661-6.21 13.871-13.87 13.871H13.87C6.21 107 0 100.79 0 93.13V25.76c0-7.661 6.21-13.871 13.87-13.871h7.926V2.477a2.477 2.477 0 114.954 0v9.412zm0 4.954V21.3a2.477 2.477 0 11-4.954 0v-4.458H13.87a8.917 8.917 0 00-8.916 8.916v67.37a8.917 8.917 0 008.916 8.917h75.297a8.917 8.917 0 008.916-8.916V25.76a8.917 8.917 0 00-8.916-8.917H81.24V21.3a2.477 2.477 0 11-4.954 0v-4.458H26.75zm30.911 46.651a10.848 10.848 0 01-6.142 1.895c-6.02 0-10.899-4.88-10.899-10.898 0-6.02 4.88-10.898 10.899-10.898 5.698 0 10.376 4.374 10.857 9.948.153.322.239.683.239 1.063v10.672c0 6.36-5.2 11.506-11.603 11.506a11.62 11.62 0 01-8.542-3.72 2.477 2.477 0 013.632-3.367 6.668 6.668 0 004.91 2.134c3.678 0 6.65-2.94 6.65-6.553v-1.782zm-6.142-3.059a5.944 5.944 0 100-11.889 5.944 5.944 0 000 11.89z"
        fillRule="nonzero"
        fill={color}
      />
    </Svg>
  );
}