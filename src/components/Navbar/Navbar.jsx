/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import Logo from "../../image/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <Nb>
      <Nbwrap>
        <img src={Logo} alt="Fastra Suite" className="log" />
        <div className="lst">
          <p>Home</p>
          <div className="prodrop">
            <p className="p2">
              Products
              <IoIosArrowDown />
            </p>
            <div className="prolst">
              <a href="">Product</a>
              <a href="">Categories</a>
            </div>
          </div>
          <p>Help</p>
        </div>
        <p className="but">Contact Us</p>
      </Nbwrap>
    </Nb>
  );
}

const Nb = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: fixed;
  // z-index: 1;
`;
const Nbwrap = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Circular Std Book;

  .log {
    width: 121.83px;
    height: 40px;
  }
  .lst {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .prodrop {
    gap: 5px;
    padding: 0;
    position: relative;
    display: inline-block;
    margin-right: 3rem;
  }
  .p2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 10px;
  }
  .prolst {
    display: none;
    position: absolute;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .prolst a {
    color: grey;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
  }
  .prolst a:hover {
    color: #3b7ced;
  }
  .prodrop:hover .prolst {
    display: block;
  }
  .prodrop:hover .p2 {
    color: #3b7ced;
  }
  .but {
    padding: 10px;
    color: #3b7ced;
    border: 2px solid #3b7ced;
    border-radius: 5px;
  }
`;
