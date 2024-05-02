import styled from "styled-components"

export default function Footer() {
  return (
    <Ft>
        this is the footer
    </Ft>
  )
}

const Ft = styled.div`
width: 100%;
height: 30vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(180deg, #09285D 0%, #020A17 100%);
position: fixed;
color: #fff;
`