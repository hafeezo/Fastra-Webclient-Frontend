import styled from 'styled-components'
import Reghed from './Reghed'
import RegForm from './RegForm'

export default function MainReg() {
  return (
    <Regcont>
      <Reghed/>
      <RegForm/>
    </Regcont>
  )
}

const Regcont = styled.div`
width: 100%;
height: 100vh;
`