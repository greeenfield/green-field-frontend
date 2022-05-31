import { Icon } from '@components/icon';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as S from './LoginModal.style';
import { useEffect, useState } from 'react';
import { Input } from '@components/input';
import { Button } from '@components/button';

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
  const [close, setClose] = useState<boolean>(true);

  useEffect(() => {
    if (visible) {
      setClose(false);
    } else {
      setTimeout(() => {
        setClose(true);
      }, 200);
    }
  }, [visible]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!visible && close) return null;

  return (
    <>
      <S.Overlay />
      <S.Wrapper visible={visible}>
        <S.WhiteBox>
          <S.CloseButtonWrapper>
            <Icon name="close" onClick={handleClose} />
          </S.CloseButtonWrapper>

          <S.LogoWrapper>
            <Icon name="logo" />
          </S.LogoWrapper>

          <h1>로그인</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="이메일"
              {...register('email', { required: true })}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              {...register('password', { required: true })}
            />

            {(errors.email || errors.password) && (
              <div className="errorMsg">
                아이디 또는 패스워드를 입력해주세요.
              </div>
            )}
            <Button type="submit">로그인</Button>
          </form>

          <S.Footer>
            <Link href="/signup">
              <a onClick={handleClose}>회원가입</a>
            </Link>
          </S.Footer>
        </S.WhiteBox>
      </S.Wrapper>
    </>
  );
};

export default LoginModal;
