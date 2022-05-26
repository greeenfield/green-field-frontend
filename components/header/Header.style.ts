import styled from '@emotion/styled';
import { COLOR } from 'styles/color';

export const SHeader = styled.div`
  height: 3.375rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 126px;
  }

  .loginButton {
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
  }
`;
