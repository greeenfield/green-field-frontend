import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

import * as S from './Input.style';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return <S.Wrapper ref={ref} {...props} />;
};

export default forwardRef(Input);
