import { Icon } from 'components/icon';
import Link from 'next/link';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SLoginModal } from './style';

interface Inputs {
  email: string;
  password: string;
}
interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
}

const LoginModal = ({ visible, onClose }: LoginModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!visible) return null;

  return (
    <SLoginModal>
      <div className="overlay" />

      <div className="modalWrapper">
        <div className="whiteBox">
          <div className="closeWrapper">
            <Icon name="close" onClick={handleClose} />
          </div>
          <div className="logoWrapper">
            <Icon name="logo" />
          </div>
          <h1>로그인</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="이메일"
              {...register('email', { required: true })}
            />
            <input
              type="password"
              placeholder="비밀번호"
              {...register('password', { required: true })}
            />

            {(errors.email || errors.password) && (
              <div className="errorMsg">
                아이디 또는 패스워드를 입력해주세요.
              </div>
            )}
            <button type="submit">로그인</button>
          </form>

          <div className="footer">
            <Link href="/signup">
              <a onClick={handleClose}>회원가입</a>
            </Link>
          </div>
        </div>
      </div>
    </SLoginModal>
  );
};

export default LoginModal;
