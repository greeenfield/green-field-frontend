import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import { SInput } from './Input.style';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = (
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return <SInput ref={ref} {...props} />;
};

export default forwardRef(Input);
