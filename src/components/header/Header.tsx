import { Icon } from '@components/icon';
import { LoginModal } from '@components/loginModal';
import { useModal } from '@hooks/useModal';
import Link from 'next/link';
import * as S from './Header.style';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const loginModalState = useModal();
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <Link href={'/'}>
          <a>
            <Icon name="logo" className="logo" />
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
