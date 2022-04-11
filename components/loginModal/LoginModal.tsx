import { Icon } from 'components/icon';
import Link from 'next/link';
import { SLoginModal } from './style';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
}

const LoginModal = ({ visible, onClose }: LoginModalProps) => {
  if (!visible) return null;
  return (
    <SLoginModal>
      <div className="overlay" />

      <div className="wrapper">
        <div className="whiteBox">
          <div className="closeWrapper">
            <Icon name="close" onClick={onClose} />
          </div>
          <div className="logoWrapper">
            <Icon name="logo" />
          </div>
          <h1>로그인</h1>

          <form>
            <input type="email" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">로그인</button>
          </form>

          <div className="footer">
            <Link href="/signup">
              <a onClick={onClose}>회원가입</a>
            </Link>
          </div>
        </div>
      </div>
    </SLoginModal>
  );
};

export default LoginModal;
