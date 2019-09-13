import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Spots({color = '#000', ...props}) {
  return (
    <Svg viewBox="0 0 102 110" {...props}>
      <Path
        d="M94.783 104.5L79.769 82.405a2.5 2.5 0 014.136-2.81l17.667 26c1.128 1.66-.061 3.905-2.068 3.905h-97c-1.977 0-3.172-2.186-2.104-3.85l16.686-26a2.5 2.5 0 014.208 2.7L7.079 104.5h87.704zM50.1 55.86c-10.126 0-18.334-8.208-18.334-18.334 0-10.125 8.208-18.333 18.334-18.333 10.125 0 18.333 8.208 18.333 18.333 0 10.126-8.208 18.334-18.333 18.334zm0-4.825c7.46 0 13.508-6.048 13.508-13.509 0-7.46-6.048-13.508-13.508-13.508-7.461 0-13.51 6.048-13.51 13.508 0 7.461 6.049 13.51 13.51 13.51zM50.703 92c-3.317 0-35.278-29.157-35.278-56.65C15.425 15.825 31.252 0 50.775 0c19.522 0 35.349 15.826 35.349 35.35C86.124 62.842 54.02 92 50.703 92zm-3.54-8.677c1.338 1.221 2.556 2.243 3.544 2.984.994-.742 2.22-1.766 3.565-2.99 3.686-3.355 7.748-7.712 11.456-12.424 9.585-12.18 15.396-24.707 15.396-35.544C81.124 18.588 67.536 5 50.774 5 34.013 5 20.425 18.588 20.425 35.35c0 10.842 5.787 23.37 15.33 35.55 3.694 4.714 7.738 9.07 11.408 12.423z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  );
}
