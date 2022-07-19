import styled from '@emotion/styled';

import { SignUpForm } from '@/components/signUpForm';

interface SignupProps {}

const Signup = ({}: SignupProps) => {
  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <SignUpForm />
    </SignupWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.div`
  padding: 1rem;
  max-width: 420px;
  margin: 0 auto;

  h1 {
    text-align: center;
    padding-bottom: 1.5rem;

    font-size: 1.4rem;
    font-weight: bold;
  }
`;
