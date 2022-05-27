import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { SButton } from './Button.style';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <SButton {...rest}>{children}</SButton>;
};

export default Button;
