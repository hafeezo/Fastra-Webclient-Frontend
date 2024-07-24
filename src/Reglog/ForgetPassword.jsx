import styled from "styled-components";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";

export default function ForgetPassword() {
  return (
    <Fp id="fogpas">
      <Fpn>
        <Navbar />
      </Fpn>
      <Fpg>
        <div className="fpform">
          <label>Email or Username</label>
          <input
            type="mail"
            placeholder="Enter your Email or Username"
            className="fpinput"
          />
          <button className="fpbut">Reset Password</button>
        </div>
      </Fpg>
      <Fpf>
        <Footer />
      </Fpf>
    </Fp>
  );
}

const Fp = styled.div`
  width: 100%;
  height: 100vh;
`;
const Fpn = styled.div`
  width: 100%;
  height: 10%;
`;
const Fpg = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  .fpform {
    width: 25%;
    height: 75%;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 16px 16px 64px 0px #1a1a1a29;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .fpinput {
    width: 80%;
    padding: 8px;
    border-radius: 0.5rem;
    border: 1px solid #aaaaaa;
  }
  .fpbut {
    background: #3b7ced;
    color: #fff;
    padding: 12px;
    // width: 10%;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
  }
`;
const Fpf = styled.div`
  width: 100%;
  height: 50%;
`;
