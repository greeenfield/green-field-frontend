import styled from '@emotion/styled';

import { COLOR } from '@/styles/color';

export const Wrapper = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 10rem;
  margin-top: 1rem;

  background-color: #fff;
  overflow: hidden;
  z-index: 4;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
`;

export const DropDownItem = styled.li`
  padding: 1rem;
  cursor: pointer;
  transition: padding 0.1s;

  :hover {
    background-color: ${COLOR.GRAY[0]};
  }
`;
