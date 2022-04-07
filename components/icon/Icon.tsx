import React from 'react';
import * as svg from './svgs';

type IconType = keyof typeof svg;

interface IconProps {
  name: IconType;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({ name, className, style }: IconProps) => {
  return React.createElement(svg[name], {
    className,
    style,
  });
};
