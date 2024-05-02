import styled from 'styled-components'
import RegForm from './RegForm'

export default function MainReg() {
  return (
    <Regcont>
      <RegForm/>
    </Regcont>
  )
}

const Regcont = styled.div`
width: 100%;
height: 60vh;
`