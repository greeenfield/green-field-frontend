import { Button } from '@components/button';
import { Input } from '@components/input';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { SSignUpForm } from './SignUpForm.style';

interface SignupFormProps {}

interface SignUpState {
  username: string;
  nickname: string;
  email: string;
  password: string;
}

const SignUpForm = ({}: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpState>({
    defaultValues: {
      email: 'tjdwns4850@gmail.com',
      nickname: 'curlyjun',
      password: 'tjdwns12',
      username: '박성준',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <SSignUpForm onSubmit={onSubmit}>
      <div className="form-field-group">
        <div className="form-field">
          <label htmlFor="username">이름</label>
          <Input
            type="text"
            className={classnames({
              error: errors?.username,
            })}
            {...register('username', {
              required: {
                value: true,
                message: '이름을 입력해주세요.',
              },
              minLength: { value: 1, message: '1~20자 사이로 입력해주세요.' },
              maxLength: { value: 20, message: '1~20자 사이로 입력해주세요.' },
            })}
          />
          <div className="form-error-field">{errors?.username?.message}</div>
        </div>

        <div className="form-field">
          <label htmlFor="nickname">닉네임</label>
          <Input
            type="text"
            className={classnames({
              error: errors?.nickname,
            })}
            {...register('nickname', {
              required: {
                value: true,
                message: '닉네임을 입력해주세요.',
              },
              minLength: { value: 1, message: '1~20자 사이로 입력해주세요.' },
              maxLength: { value: 20, message: '1~20자 사이로 입력해주세요.' },
            })}
          />
          <div className="form-error-field">{errors?.nickname?.message}</div>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="email">이메일</label>
        <Input
          type="email"
          className={classnames({
            error: errors?.email,
          })}
          {...register('email', {
            required: {
              value: true,
              message: '이메일을 입력해주세요.',
            },
          })}
        />
        <div className="form-error-field">{errors?.email?.message}</div>
      </div>

      <div className="form-field">
        <label htmlFor="password">비밀번호</label>
        <Input
          type="password"
          placeholder="8자 이상"
          className={classnames({
            error: errors?.password,
          })}
          {...register('password', {
            required: {
              value: true,
              message: '비밀번호를 입력해주세요.',
            },
            minLength: { value: 8, message: '8~20자 사이로 입력해주세요.' },
            maxLength: { value: 20, message: '8~20자 사이로 입력해주세요.' },
          })}
        />
        <div className="form-error-field">{errors?.password?.message}</div>
      </div>

      <Button type="submit">가입하기</Button>

      {/* @todo: 이미 가입했는지 체크 -> 로그인 모달  */}
    </SSignUpForm>
  );
};

export default SignUpForm;
