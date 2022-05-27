import styled from '@emotion/styled';
import { COLOR } from '@styles/color';

export const SInput = styled.input`
  padding: 1rem;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  width: 100%;
  outline: none;
  border: 1px solid ${COLOR.GRAY[2]};
  transition: all 0.2s;
  :focus {
    border: 1px solid ${COLOR.PRIMARY};
  }
`;
