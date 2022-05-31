import styled from '@emotion/styled';
import { COLOR } from '@styles/color';

export const Wrapper = styled.form`
  label {
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  input {
    margin-bottom: 0.5rem;
    &.error {
      border: 1px solid ${COLOR.RED[4]};
    }
  }
`;

export const FormFieldGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
export const FormField = styled.div`
  flex: 1;
  padding: 0.5rem 0;
`;
export const FormErrorField = styled.div`
  height: 12px;
  font-size: 0.75rem;
  color: ${COLOR.RED[4]};
`;
