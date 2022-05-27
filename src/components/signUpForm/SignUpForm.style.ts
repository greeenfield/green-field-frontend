import styled from '@emotion/styled';
import { COLOR } from '@styles/color';

export const SSignUpForm = styled.form`
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

  .form-field-group {
    display: flex;
    gap: 1rem;
  }

  .form-field {
    flex: 1;
    padding: 0.5rem 0;
  }

  .form-error-field {
    height: 12px;
    font-size: 0.75rem;
    color: ${COLOR.RED[4]};
  }
`;
