import styled from '@emotion/styled';

import { COLOR } from '@/styles/color';

export const Wrapper = styled.header`
  height: 3.375rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 126px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Right = styled.div`
  position: relative;
`;

export const LoginButton = styled.button`
  height: 2rem;
  padding: 0 1rem;
  background-color: ${COLOR.PRIMARY};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  color: #fff;
  font-weight: bold;

  :hover {
    background-color: ${COLOR.getHoverColor(COLOR.PRIMARY)};
  }
`;
