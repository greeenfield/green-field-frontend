import { Icon } from 'components/icon';
import { LoginModal } from 'components/loginModal';
import { useModal } from 'hooks/useModal';
import Link from 'next/link';
import { SHeader } from './style';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const loginModalState = useModal();
  return (
    <SHeader>
      <div className="wrapper">
        <Link href={'/'}>
          <a>
            <Icon name="logo" className="logo" />
          </a>
        </Link>

        <button className="loginButton" onClick={loginModalState.open}>
          로그인
        </button>
        <LoginModal
          visible={loginModalState.visible}
          onClose={loginModalState.close}
        />
      </div>
    </SHeader>
  );
};

export default Header;
