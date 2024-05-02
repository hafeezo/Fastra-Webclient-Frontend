import styled from "styled-components"

export default function RegForm() {
  return (
    <Rf>
        <Rfwrap>
            Register
        </Rfwrap>
    </Rf>
  )
}

const Rf = styled.div`
width: 100%;
height: 60%;
display: flex;
align-items: center;
justify-content: center;
`
const Rfwrap = styled.div`
width: 25%;
height: 80%;
position: relative;
top: 1rem;
// left: 480px;
padding: 40px 0px 0px 0px;
gap: 40px;
border-radius: 16px 0px 0px 0px;
opacity: 0px;
box-shadow: 16px 16px 64px 0px #1A1A1A29;

`