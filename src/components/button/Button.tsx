import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { Icon } from '@/components/icon';

import * as S from './Button.style';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}

const Button = ({ children, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest} disabled={isLoading}>
      <S.LoadingWrapper loading={isLoading}>
        <Icon name="loading" />
      </S.LoadingWrapper>
      {children}
    </S.Wrapper>
  );
};

export default Button;
