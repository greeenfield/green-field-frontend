import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR } from '@styles/color';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

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

export const loadingAni = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;

export const LoadingWrapper = styled.span<{ loading: boolean }>`
  ${(p) =>
    !p.loading &&
    css`
      display: none;
    `}
  svg {
    animation: ${loadingAni} 1s infinite linear;
  }
`;
