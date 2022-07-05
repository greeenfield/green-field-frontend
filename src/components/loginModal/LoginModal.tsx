import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@components/button';
import { Icon } from '@components/icon';
import { Input } from '@components/input';
import { useAuth } from '@hooks/useAuth';

import * as Styled from './LoginModal.style';

import logo from 'public/assets/logo.png';

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
  const { loading, errorMsg: serverErrorMsg, login } = useAuth();
  const errMsg = (() => {
    if (errors.email || errors.password) {
      return '아이디 또는 패스워드를 입력해주세요.';
    }
    if (serverErrorMsg) {
      return serverErrorMsg;
    }
  })();

  useEffect(() => {
    if (visible) {
      setClose(false);
    } else {
      setTimeout(() => {
        setClose(true);
        reset();
      }, 200);
    }
  }, [visible, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const isSuccess = await login(data);
    if (isSuccess) {
      onClose();
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!visible && close) return null;

  return (
    <>
      <Styled.Overlay />
      <Styled.Wrapper visible={visible}>
        <Styled.WhiteBox>
          <Styled.CloseButtonWrapper>
            <Icon name="close" onClick={handleClose} />
          </Styled.CloseButtonWrapper>

          <Styled.LogoWrapper>
            <Image
              src={logo}
              width={logo.width / 1.5}
              height={logo.height / 1.5}
              alt="logo"
            />
          </Styled.LogoWrapper>

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

            <div className="errorMsg">{errMsg}</div>
            <Button type="submit" isLoading={loading}>
              로그인
            </Button>
          </form>

          <Styled.Footer>
            <Link href="/signup">
              <a onClick={handleClose}>회원가입</a>
            </Link>
          </Styled.Footer>
        </Styled.WhiteBox>
      </Styled.Wrapper>
    </>
  );
};

export default LoginModal;
