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
                    <p>Product</p>
                    <p>Company</p>
                </div>
                    <div className="d12b">
                    <p>Information</p>
                    <p>FastraSuite</p>
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
height: 60%;
display: flex;
align-items: center;
justify-content: center;
font-family: Product Sans;
@media screen and (max-width: 890px){
    width: 100%;
    height: 55%; 
}`
const T1wrap = styled.div`
width: 98%;
height: 95%;
display: flex;
align-items: flex-start;
justify-content: space-between;
background: purple;

.log{
    width: 121.83px;
    height: 40px;
}
.d11{
    font-family: Product Sans Medium;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
    width: 30%;
    height: 100%;
    background: green;
}
.qk{
    font-weight: 700;
    line-height: 15px;
}
.d12{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background: red;
}
.d12a{
    width: 35%;
    height: 95%;
    display: flex;
    justify-content: space-around;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    opacity: 65%;
    gap: 3rem;
}
.d13{
    width: 30%;
    height: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: gold;

// @media screen and (max-width: 890px){
//     width: 10%;
//     // height: 95%;
// }
}
form{
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // margin-left: 9.8rem;
}
.in{
    height: 90%;
    border: none;
    color: red;
}
.btn{
    background: #3B7CED;
    border: none;
    width: 10%;
    height: 96.6%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0px;
    color: #fff;
}
`