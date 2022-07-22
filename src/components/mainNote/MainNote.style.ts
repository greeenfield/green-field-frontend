import styled from '@emotion/styled';

import { COLOR } from '@/styles/color';

export const Wrapper = styled.div`
  width: 296px;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 3px 3px 20px rgb(233 233 233 / 80%);
`;

export const Header = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
`;

export const UserName = styled.div`
  color: ${COLOR.GRAY[6]};
`;

export const Thumbnail = styled.div`
  img {
    border-radius: 1rem;
  }
`;
export const UrlMeta = styled.div``;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: ${COLOR.GRAY[6]};
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Date = styled.div`
  color: ${COLOR.GRAY[6]};
  font-size: 0.875rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
