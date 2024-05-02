import styled from "styled-components"

export default function RegForm() {
  return (
    <Rf>
        <Rfwrap>
            <h4>Register</h4>
            <p>Enter your details to register</p>
            
        </Rfwrap>
    </Rf>
  )
}

const Rf = styled.div`
width: 100%;
height: 90%;
display: flex;
align-items: center;
justify-content: center;
`
const Rfwrap = styled.div`
width: 20%;
height: 85%;
padding: 40px 0px 0px 0px;
gap: 40px;
border-radius: 16px 0px 0px 0px;
opacity: 0px;
// box-shadow: 16px 16px 64px 0px #1A1A1A29;
box-shadow: 16px 16px 40px 0px #1A1A1A29;

`