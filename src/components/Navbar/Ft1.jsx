import styled from "styled-components"
import Logo from '../../image/logo2.svg'

export default function Ft1() {
  return (
    <T1>
        <div className="d11">
            <img src={Logo} alt="Fastra Suite" className="log"/>
            <p>+234 801 234 5679</p>
            <p>info@fasrasuite.com</p>
        </div>
        <div className="d12">
            <p>Quick Links</p>
            <div className="di2a">
            <div className="d12b">
                <p>Product</p>
                <p>Company</p>
            </div>
            <div className="d12b">
                <p>Information</p>
                <p>FastraSuite</p>
            </div></div>
        </div>
        <div className="d13">
            <p>Subscribe</p>
            <input placeholder="Get product update"/>
        </div>
    </T1>
  )
}

const T1 = styled.div`
width: 100%;
height: 55%;
display: flex;
justify-content: space-between;

.log{
    width: 121.83px;
    height: 40px;
}
.{}
`