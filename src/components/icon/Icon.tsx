import React from 'react';

import * as svg from './svgs';

type IconType = keyof typeof svg;

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconType;
}

const Icon = ({ name, ...rest }: IconProps) => {
  return React.createElement(svg[name], {
    ...rest,
  });
};

export default Icon;
