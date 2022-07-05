import Link from 'next/link';
import { useRef } from 'react';

import { useAuth } from '@hooks/useAuth';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

import * as S from './UserMenuDropdown.style';

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
    <S.Wrapper ref={ref}>
      <S.DropDownItem>
        <Link href="/write">
          <a>노트 작성</a>
        </Link>
      </S.DropDownItem>
      <S.DropDownItem onClick={onClickLogout}>로그아웃</S.DropDownItem>
    </S.Wrapper>
  );
};

export default UserMenuDropdown;
