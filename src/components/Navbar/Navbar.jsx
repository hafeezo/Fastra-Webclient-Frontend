import React,{useState} from 'react'
import styled from "styled-components"
import Logo from '../../image/logo.svg'
import { IoIosArrowDown } from "react-icons/io"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
    const [click, setClick] = useState(true);

	const handClick = () => {
		setClick(!click)
	}
  return (
    <Nb>
        <Nbwrap>
            <img src={Logo} alt="Fastra Suite" className="log"/>

            <MobileIcon onClick={handClick}>{click? <FaBars/> : <FaTimes/>}</MobileIcon >

            <div className="lst" onClick={handClick} click={click}>
                <p>Home</p>
                <div className="prodrop">
                    <p className="p2">Products<IoIosArrowDown/></p>
                    <div className="prolst">
                        <a href="#product">Product</a>
                        <a href="#categories">Categories</a>
                    </div>
                </div>
                <p>Help</p>
            </div>
            <a href="#contact" className="but">Contact Us</a>
        </Nbwrap>
    </Nb>
  )
}

const Nb = styled.div`
width: 100%;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;
// position: fixed;
// z-index: 1;
@media screen and (max-width: 450px){
    width: 100%;
    height: 10vh;
}
`
const Nbwrap = styled.div`
width: 85%;
height: 90%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Circular Std Book;
@media screen and (max-width: 450px){
    width: 85%;
    height: 90%;
    margin-top: 10px;
    width: 20%;
}

.log{
    width: 121.83px;
    height: 40px;

}
.lst{
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
@media screen and (max-width: 450px){
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    background: linear-gradient(180deg, #09285D 0%, #020A17 100%);
    height: 70vh;
    width: 150px;
    left: ${({click}) => (click ?  '-100%' : 0)};
    transition: all 2s ease;
    z-index: 1;
  }
}
.prodrop{
    gap: 5px;
    padding: 0;
    position: relative;
    display: inline-block;
    margin-right: 3rem;
}
.p2{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 10px;
}
.prolst{
    display: none;
    position: absolute;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
.prolst a{
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
.but{
    padding: 10px;
    color: #3b7ced;
    border: 2px solid #3b7ced;
    border-radius: 5px;
    text-decoration: none;
}

`
const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 450px){
    background: #3b7ced;
    display: block;
    position: absolute;
    right: 30px;
    color: #fff;
    top: 1rem;
}
`