import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useUserState } from '@atoms/userState';
import { LoginModal } from '@components/loginModal';
import { useModal } from '@hooks/useModal';

import * as S from './Header.style';
import UserMenuDropdown from './UserMenuDropdown';

import logo from 'public/assets/logo.png';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [user] = useUserState();
  const loginModal = useModal();
  const userMenu = useModal();
  const router = useRouter();

  const isSignUpPage = useMemo(() => {
    if (router.pathname === '/signup') return true;
    return false;
  }, [router.pathname]);

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        {/* left */}
        <Link href={'/'}>
          <a>
            <Image
              src={logo}
              width={logo.width / 2}
              height={logo.height / 2}
              alt="logo"
            />
          </a>
        </Link>

        <S.Right>
          {user ? (
            <>
              <div onClick={userMenu.open}>{user.username}</div>
              <UserMenuDropdown
                visible={userMenu.visible}
                onClose={userMenu.close}
              />
            </>
          ) : (
            !isSignUpPage && (
              <S.LoginButton onClick={loginModal.open}>로그인</S.LoginButton>
            )
          )}

          <LoginModal visible={loginModal.visible} onClose={loginModal.close} />
        </S.Right>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Header;
