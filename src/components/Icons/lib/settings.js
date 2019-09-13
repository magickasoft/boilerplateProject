import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Settings({color = '#000', ...props}) {
  return (
    <Svg viewBox="0 0 110 107" {...props}>
      <Path
        d="M67.148 14.81a40.914 40.914 0 0111.521 5.626l6.832-5.532a6.01 6.01 0 018.454.888l7.566 9.343a6.01 6.01 0 01-.889 8.454l-7.148 5.788a40.879 40.879 0 012.644 12.25l9.067 2.094a6.01 6.01 0 014.504 7.21l-2.704 11.713a6.01 6.01 0 01-7.209 4.504l-9.296-2.146a41.262 41.262 0 01-7.657 9.418l4.225 8.663a6.01 6.01 0 01-2.768 8.037l-10.805 5.27a6.01 6.01 0 01-8.037-2.767l-4.333-8.885a41.413 41.413 0 01-5.989.434c-2.034 0-4.033-.148-5.988-.434l-4.333 8.885a6.01 6.01 0 01-8.037 2.767l-10.805-5.27a6.01 6.01 0 01-2.768-8.037l4.225-8.663a41.262 41.262 0 01-7.658-9.418l-9.295 2.146a6.01 6.01 0 01-7.21-4.504L.555 60.93a6.01 6.01 0 014.504-7.209l9.067-2.093a40.879 40.879 0 012.644-12.25l-7.149-5.79a6.01 6.01 0 01-.888-8.453l7.565-9.343a6.01 6.01 0 018.454-.888l6.833 5.532a40.914 40.914 0 0111.52-5.625v-8.8A6.01 6.01 0 0149.117 0h12.021a6.01 6.01 0 016.011 6.01v8.8zm-5.009 0v-8.8c0-.552-.448-1.001-1.002-1.001H49.116c-.554 0-1.002.449-1.002 1.002v8.8a5.009 5.009 0 01-3.545 4.79 35.904 35.904 0 00-10.111 4.937 5.009 5.009 0 01-6.027-.21L21.6 18.797a1.002 1.002 0 00-1.409.148l-7.565 9.343c-.348.43-.282 1.06.148 1.41l7.148 5.788a5.009 5.009 0 011.524 5.688 35.868 35.868 0 00-2.32 10.751 5.009 5.009 0 01-3.873 4.584l-9.067 2.094c-.54.124-.875.662-.75 1.201l2.704 11.714c.124.539.662.875 1.201.75l9.296-2.145a5.009 5.009 0 015.436 2.327 36.253 36.253 0 006.728 8.274 5.009 5.009 0 011.122 5.893l-4.225 8.663a1.002 1.002 0 00.461 1.34l10.805 5.27a1.002 1.002 0 001.34-.462l4.333-8.884a5.009 5.009 0 015.226-2.761c1.732.253 3.49.38 5.264.38 1.776 0 3.533-.127 5.265-.38a5.009 5.009 0 015.226 2.76l4.333 8.885c.242.497.842.704 1.34.461l10.805-5.27c.497-.242.703-.842.46-1.34l-4.224-8.662a5.009 5.009 0 011.122-5.893 36.253 36.253 0 006.728-8.274 5.009 5.009 0 015.436-2.327l9.296 2.146a1.002 1.002 0 001.201-.751l2.705-11.714a1.002 1.002 0 00-.751-1.201L95 56.508a5.009 5.009 0 01-3.874-4.584 35.868 35.868 0 00-2.319-10.75 5.009 5.009 0 011.524-5.69l7.148-5.788c.43-.348.496-.979.148-1.409l-7.565-9.343a1.002 1.002 0 00-1.41-.148l-6.831 5.533a5.009 5.009 0 01-6.027.21 35.904 35.904 0 00-10.11-4.938 5.009 5.009 0 01-3.546-4.79zM55.1 73.133c-10.513 0-19.035-8.522-19.035-19.034 0-10.513 8.522-19.035 19.035-19.035 10.512 0 19.034 8.522 19.034 19.035 0 10.512-8.522 19.034-19.034 19.034zm0-5.009c7.746 0 14.025-6.28 14.025-14.025 0-7.746-6.28-14.026-14.025-14.026-7.746 0-14.026 6.28-14.026 14.026 0 7.746 6.28 14.025 14.026 14.025z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  );
}