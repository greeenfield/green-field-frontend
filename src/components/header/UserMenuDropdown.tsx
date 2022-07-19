import Link from 'next/link';
import { useRef } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import * as Styled from './UserMenuDropdown.style';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const UserMenuDropdown = ({ visible, onClose }: Props) => {
  const ref = useRef<HTMLUListElement>(null);
  const { logout } = useAuth();
  useOnClickOutside(ref, () => onClose());

  const onClickLogout = async () => {
    await logout();
    onClose();
  };

  if (!visible) return null;
  return (
    <Styled.Wrapper ref={ref}>
      <Styled.DropDownItem>
        <Link href="/write">
          <a>노트 작성</a>
        </Link>
      </Styled.DropDownItem>
      <Styled.DropDownItem onClick={onClickLogout}>
        로그아웃
      </Styled.DropDownItem>
    </Styled.Wrapper>
  );
};

export default UserMenuDropdown;
