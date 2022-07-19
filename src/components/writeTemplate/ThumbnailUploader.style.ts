import styled from '@emotion/styled';

import { Button } from '@/components/button';

export const Wrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 20rem;
`;

export const Thumbnail = styled.div`
  display: inline-block;
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const ThumbnailUploadButton = styled(Button)`
  display: inline-flex;
  width: auto;
  margin-top: 0;
  svg {
    fill: #fff;
  }
`;

export const ThumbnailInput = styled.input`
  display: none;
`;
