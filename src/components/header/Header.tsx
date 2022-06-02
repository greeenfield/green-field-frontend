import { LoginModal } from '@components/loginModal';
import { useModal } from '@hooks/useModal';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './Header.style';
import logo from 'public/assets/logo.png';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const loginModalState = useModal();
  return (
    <S.Wrapper>
      <S.InnerWrapper>
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

        <S.LoginButton onClick={loginModalState.open}>로그인</S.LoginButton>
        <LoginModal
          visible={loginModalState.visible}
          onClose={loginModalState.close}
        />
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Header;
