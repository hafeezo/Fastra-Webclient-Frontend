import styled from "styled-components"
import Logo from '../../image/logo.svg'
import { IoIosArrowDown } from "react-icons/io"

export default function Navbar() {
  return (
    <Nb>
        <Nbwrap>
            <img src={Logo} alt="Fastra Suite" className="log"/>

            <div className="lst">
                <div className="lst2">
                <a href="#home" className="mdnav">Home</a>
                <div className="prodrop">
                    <p className="p2">Products<IoIosArrowDown/></p>
                    <div className="prolst">
                        <a href="#product">Product</a>
                        <a href="#categories">Categories</a>
                    </div>
                </div>
                <a href="#help" className="mdnav">Help</a>
            </div>
            <a href="#contact" className="but">Contact Us</a></div>
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
@media screen and (max-width: 540px){
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.lst2{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -1rem;
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