import styled from '@emotion/styled';
import { COLOR } from '@styles/color';

export const Wrapper = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  width: 100%;
  outline: none;
  border: none;
  color: #fff;
  background-color: ${COLOR.PRIMARY};
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: ${COLOR.getHoverColor(COLOR.PRIMARY)};
  }
`;
