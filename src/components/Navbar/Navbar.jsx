import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from "styled-components"
import Logo from '../../image/logo.svg'
import { IoIosArrowDown } from "react-icons/io"

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Nb>
            <Nbwrap>
                <img src={Logo} alt="Fastra Suite" className="log"/>
                
                <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
                </MenuButton>
                <div className={`lst ${menuOpen ? 'open' : ''}`}>
                    <div className="lst2">
                        <a href="#home" className="mdnav">Home</a>
                        <div className="prodrop">
                            <p className="p2">Products<IoIosArrowDown className='ardan'/></p>
                            <div className="prolst">
                                <a href="#product">Product</a>
                                <a href="#categories">Categories</a>
                            </div>
                        </div>
                        <a href="#help" className="mdnav">Help</a>
                    </div>
                    <a href="#contact" className="but">Contact Us</a>
                </div>
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

@media (max-width: 540px) {
    height: 12vh;
}

@media (min-width: 541px) and (max-width: 1024px) {
    height: 12vh;
}
`
const Nbwrap = styled.div`
width: 85%;
height: 90%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Circular Std Book;
@media screen and (max-width: 540px){
    
}

.log{
    width: 121.83px;
    height: 40px;

}
.lst{
    width: 65%;
    
}
.lst {
    display: none;
  }
.lst.open {
    display: block;
}
@media (min-width: 541px) and (max-width: 1700px) {
.lst {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: space-between;
} 
}
@media (max-width: 540px) {
.lst {
    display: none;
} 
.lst.open {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    gap: 1rem;
    height: 100%;
}
}
.lst2{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -1rem;
@media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
}
.mdnav{
    color: #000000;
    text-decoration: none;
}
.mdnav:link{
    color: #000000;
    text-decoration: none;
}
.mdnav:visited{
    color: #000000;
    text-decoration: none;
}
.mdnav:hover{
    color: #3b7ced;
    text-decoration: none;
}
.prodrop{
    gap: 5px;
    padding: 0;
    position: relative;
    display: inline-block;
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
    z-index: 999;
}
.prolst a{
    color: grey;
    padding: 8px 14px;
    text-decoration: none;
    display: block;
    text-align: left;
    z-index: 999;
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
    position: absolute;
    right: 7rem;
    top: 0.7rem;
}
`
const MenuButton = styled.button`
  display: none;

@media (max-width: 540px) {
    display: block;
    border: none;
    background: none;
    color: #3b7ced;
}
`