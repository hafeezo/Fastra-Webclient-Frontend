import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar"
import RegForm from "./RegForm"

export default function Register() {
  return (
    <Regcont id="home">
      <Rn>
        <Navbar/>
      </Rn>
      <Rg>
        <RegForm/>
      </Rg>
    </Regcont>
  )
}

const Regcont = styled.div`
width: 100%;
height: 100vh;
`
const Rn = styled.div`
width: 100%;
height: 10%;
`
const Rg = styled.div`
width: 100%;
height: 90%;
`