import styled from '@emotion/styled';
import ReactTextareaAutosize from 'react-textarea-autosize';

import { COLOR } from '@/styles/color';

export const Wrapper = styled.div`
  padding: 5rem;
`;

export const Title = styled(ReactTextareaAutosize)`
  font-size: 2rem;
  width: 100%;
  font-weight: bold;
  resize: none;
  border: none;
  outline: none;
  margin-bottom: 1rem;

  ::placeholder {
    color: ${COLOR.GRAY[5]};
    content: attr(placeholder);
  }
`;

export const Body = styled.section`
  outline: none;
  line-height: 1.5rem;
  :empty::after {
    color: ${COLOR.GRAY[5]};
    content: attr(placeholder);
  }
`;
export const Tag = styled.div`
  outline: none;
  line-height: 1.5rem;
`;
