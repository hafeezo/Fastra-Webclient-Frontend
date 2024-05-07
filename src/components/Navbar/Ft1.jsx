import styled from "styled-components"
import Logo from '../../image/logo2.svg'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Ft1() {
  return (
    <T1>
        <T1wrap>
        <div className="d11">
            <img src={Logo} alt="Fastra Suite" className="log"/>
            <p>+234 801 234 5679</p>
            <p>info@fasrasuite.com</p>
        </div>
        <div className="d12">
            <p className="qk">Quick Links</p>
            <div className="d12a">
                <div className="d12b">
                    <a href='#product'>Product</a>
                    <a href='#company'>Company</a>
                </div>
                    <div className="d12b">
                    <a href='#info'>Information</a>
                    <a href='#fastrasuites'>FastraSuite</a>
                </div>
            </div>
        </div>
        <div className="d13">
            <p className="qk">Subscribe</p>
            <form action="#">
            <input className="in" type="text" placeholder="Get product update" name="EmailAddress"/>
            <button className="btn"><FaArrowRightLong/></button>
            </form>
            </div></T1wrap>
    </T1>
  )
}

const T1 = styled.div`
width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
`
const T1wrap = styled.div`
width: 98%;
height: 90%;
display: flex;
align-items: center;
justify-content: space-between;
.d11{
    width: 30%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: -0.5rem;
    line-height: 5px;
.log{
    margin-bottom: 1px;
    width: 121.83px;
    height: 40px;
}
p{
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 2px;
}
}
.d12{
    width: 30%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
    margin-left: -5rem;
    margin-top: -1.3rem;
.qk{
    font-size: 1rem;
    font-weight: 500;
}
.d12a{
    width: 65%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    line-height: 1.5rem;
.d12b{
    display: flex;
    flex-direction: column;
a{
    font-size: 0.8rem;
    opacity: 60%;
    text-decoration: none;
    color: #fff;
:link{
    text-decoration: none;
    opacity: 60%;
    color: #fff;
.mdnav:visited{
    text-decoration: none;
    opacity: 60%;
    color: #fff;
:hover{
    text-decoration: none;
    opacity: 60%;
    color: #fff;
}
}
}
}
}
}
}
.d13{
    width: 30%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 5px;
    margin-top: -3rem;
    margin-right: -7.5rem;
@media (min-width: 541px) and (max-width: 1350px) {
    margin-right: -3rem;
    text-align: left;
}
.qk{
    font-size: 1rem;
    font-weight: 500;
@media (min-width: 541px) and (max-width: 1350px) {
    margin-left: -3rem;
}
}
form{
    display: flex;
    align-items: center;
@media (min-width: 541px) and (max-width: 1350px) {
    margin-left: -3rem;
}
.in{
    height: 34px;
    border: none;
    border-radius: 5px;
    padding-left: 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    border-radius: 8px 0px 0px 8px;
}
.btn{
    width: 56px;
    height: 36px;
    background: #3b7ced;
    border: none;
    border-radius: 0px 8px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
}
}
`