import styled from "styled-components";
import { FaEye } from "react-icons/fa";

export default function LoginForm() {
  return (
    <Lf>
      <Lfwrap>
        <Title>Login</Title>
        <Paragraph>Enter your log in details below</Paragraph>

        <Cont>
          <Inputcont>
            <StyledLabel htmlFor="name">Email</StyledLabel>
            <Input placeholder="Enter your email here" />
          </Inputcont>
          <Inputcont>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <PasswordContainer>
              <PasswordInput placeholder="Enter your password here" />
              <EyeIcon />
            </PasswordContainer>
          </Inputcont>
          <Button>Login</Button>
          <Loglink>
            <p>Don't have an account</p>
            <p>Forget password</p>
          </Loglink>
        </Cont>
      </Lfwrap>
    </Lf>
  );
}

const Lf = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lfwrap = styled.div`
  width: 25%;
  border: 16px solid transparent;
  position: relative;
  padding: 30px;
  gap: 40px;
  box-shadow: 16px 16px 64px 0px #1a1a1a29;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

const Paragraph = styled.p`
  margin-bottom: 35px;
  font-size: 12px;
  color: #7a8a98;
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
`;

const Inputcont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const Input = styled.input`
  padding: 15px;
  color: #7a8a98;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled(Input)`
  width: calc(100% - 30px);
`;

const EyeIcon = styled(FaEye)`
  position: absolute;
  right: 5px;
  top: 65%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: lighter;
  color: #7a8a98;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #3b7ced;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Loglink = styled.div`
  display: flex;
  gap: 45px;
  color: #3b7ced;
  font-weight: semi-bold;
  margin-top: 20px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;
