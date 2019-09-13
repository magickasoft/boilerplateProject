import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function Location({color = '#000', ...props}) {
  return (
    <Svg viewBox="0 0 160 160" {...props}>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Path
          d="M80.5,134 C110.047234,134 134,110.047234 134,80.5 C134,50.9527659 110.047234,27 80.5,27 C50.9527659,27 27,50.9527659 27,80.5 C27,110.047234 50.9527659,134 80.5,134 Z M80.5,129 C53.7141896,129 32,107.28581 32,80.5 C32,53.7141896 53.7141896,32 80.5,32 C107.28581,32 129,53.7141896 129,80.5 C129,107.28581 107.28581,129 80.5,129 Z"
          fill={color}
          fillRule="nonzero"
        />
        <Path
          d="M79.3484848,110 C81.5069532,110 102,91.9895799 102,74.0566387 C102,61.3228088 91.7025492,51 79,51 C66.2974508,51 56,61.3228088 56,74.0566387 C56,91.9895799 77.1900165,110 79.3484848,110 Z M78.0491097,103.114084 C75.6905258,101.086532 73.0918204,98.442433 70.7207487,95.5701252 C64.6465264,88.211834 61,80.612451 61,74.0566387 C61,64.0814833 69.0616312,56 79,56 C88.9383688,56 97,64.0814833 97,74.0566387 C97,80.6542773 93.4628003,88.2722043 87.5786722,95.630512 C85.2819175,98.502684 82.7653137,101.143305 80.4849292,103.161208 C80.0707863,103.527682 79.6770302,103.861892 79.3136096,104.157127 C78.9227292,103.84965 78.4973193,103.499387 78.0491097,103.114084 Z"
          fill={color}
          fillRule="nonzero"
        />
        <Path
          d="M79.5,84 C84.4705627,84 88.5,79.9705627 88.5,75 C88.5,70.0294373 84.4705627,66 79.5,66 C74.5294373,66 70.5,70.0294373 70.5,75 C70.5,79.9705627 74.5294373,84 79.5,84 Z M79.5,79 C77.290861,79 75.5,77.209139 75.5,75 C75.5,72.790861 77.290861,71 79.5,71 C81.709139,71 83.5,72.790861 83.5,75 C83.5,77.209139 81.709139,79 79.5,79 Z"
          fill={color}
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}