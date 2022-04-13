import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR } from 'styles/color';

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(300px) scale(0.75);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  `;

const closeAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(300px) scale(0.75);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.OPAQUE};
`;

export const SLoginModal = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${(p) =>
    p.visible
      ? css`
          animation: ${openAnimation} 0.2s;
        `
      : css`
          animation: ${closeAnimation} 0.2s;
        `}

  .modalWrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .whiteBox {
    width: 30rem;
    height: 33rem;
    background-color: #fff;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);

    padding: 1.5rem;
    text-align: center;

    h1 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
  }

  .closeWrapper {
    display: flex;
    justify-content: flex-end;

    svg {
      cursor: pointer;
      :hover {
        path {
          stroke: ${COLOR.getHoverColor(COLOR.BLACK)};
        }
      }
    }
  }

  .logoWrapper {
    text-align: center;
    padding: 1.25rem 0;

    svg {
      width: 186px;
    }
  }

  form {
    input {
      padding: 1rem;
      font-size: 1.125rem;
      border-radius: 0.5rem;
      width: 100%;
      outline: none;
      border: 1px solid ${COLOR.GRAY[1]};
      :focus {
        border: 1px solid ${COLOR.PRIMARY};
      }
    }

    button {
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

      :hover {
        background-color: ${COLOR.getHoverColor(COLOR.PRIMARY)};
      }
    }

    input + input {
      margin-top: 1rem;
    }

    .errorMsg {
      text-align: left;
      padding: 0.5rem;
      color: ${COLOR.RED[5]};
    }
  }

  .footer {
    text-align: right;
    margin-top: 3rem;
    a {
      color: ${COLOR.PRIMARY};
      :hover {
        color: ${COLOR.getHoverColor(COLOR.PRIMARY)};
      }
    }
  }
`;
