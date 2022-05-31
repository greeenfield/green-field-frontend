import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import * as S from './Button.style';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
};

export default Button;
