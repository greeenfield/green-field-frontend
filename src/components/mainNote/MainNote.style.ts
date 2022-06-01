import styled from '@emotion/styled';
import { COLOR } from '@styles/color';

export const Wrapper = styled.div`
  width: 296px;
  border-radius: 1rem;
  border: 1px solid ${COLOR.GRAY[3]};
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  padding-right: 0.5rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const Thumbnail = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;
export const UrlMeta = styled.div``;

export const Content = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  font-size: 0.875rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top: 1px solid ${COLOR.GRAY[2]};

  font-size: 0.875rem;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Date = styled.div`
  color: ${COLOR.GRAY[6]};
`;
