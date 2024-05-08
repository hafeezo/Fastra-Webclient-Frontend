import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Lf id="#login">
      <Lfwrap>
        <Title>Login</Title>
        <Paragraph>Enter your log in details below</Paragraph>
        <Cont>
          <Inputcont>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <Input id="email" placeholder="Enter your email here" />
          </Inputcont>
          <Inputcont>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <PasswordContainer>
              <PasswordInput
                placeholder="Enter your password here"
                type={showPassword ? "text" : "password"}
              />
              <Togbut onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Togbut>
            </PasswordContainer>
          </Inputcont>
          <Button>Login</Button>
          <Loglink>
            <p>
              <Link to="/">Don't have an account</Link>
            </p>
            <p>
              <Link to="">Forget password</Link>
            </p>
          </Loglink>
        </Cont>
      </Lfwrap>
    </Lf>
  );
}

const Lf = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Lfwrap = styled.div`
  width: 25%;
  height: 65vh;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 16px 16px 64px 0px #1a1a1a29;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin-left: 1.3rem;
`;
const Paragraph = styled.p`
  font-size: 14px;
  margin-left: 1.3rem;
  margin-top: -1rem;
  opacity: 60%;
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;
const Inputcont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  position: relative;
`;
const Input = styled.input`
  width: 80%;
  padding: 8px;
  border-radius: 0.5rem;
  border: 1px solid #aaaaaa;
`;
const PasswordContainer = styled.div`
  position: relative;
  width: 80%;
`;
const PasswordInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 0.5rem;
  border: 1px solid #aaaaaa;
`;
const Togbut = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Button = styled.button`
  background: #3b7ced;
  color: #fff;
  padding: 12px;
  width: 87%;
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  margin-left: -0.5rem;
  margin-top: 1rem;
`;
const Loglink = styled.div`
  display: flex;
  gap: 45px;
  font-size: 14px;
  color: #3b7ced;
  text-decoration: none;
  margin-top: -0.7rem;
  :link {
    color: #3b7ced;
    text-decoration: none;
  }
  :visited {
    color: #3b7ced;
    text-decoration: none;
  }
  :hover {
    color: #3b7ced;
    text-decoration: none;
  }
`;
const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
