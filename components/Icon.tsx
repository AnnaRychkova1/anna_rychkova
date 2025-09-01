import React from 'react';

import { IconProps } from '@/types/types';

const Icon = ({ iconName, width = 24, height = 24, className }: IconProps) => (
  <svg width={width} height={height} className={className}>
    <use href={`/icons/symbol-defs.svg#${iconName}`} />
  </svg>
);

export default Icon;
