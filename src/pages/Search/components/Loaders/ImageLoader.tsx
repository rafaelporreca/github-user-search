import React from 'react';
import ContentLoader from 'react-content-loader';

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={284}
    height={331}
    viewBox="0 0 284 331"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="284" height="284" /> 
    <rect x="0" y="295" rx="0" ry="0" width="155" height="36" />
  </ContentLoader>
)

export default ImageLoader