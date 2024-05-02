import styled from 'styled-components'
import RegForm from './RegForm'
import RegFoot from './RegFoot'

export default function MainReg() {
  return (
    <Regcont>
      <RegForm/>
      <RegFoot/>
    </Regcont>
  )
}

const Regcont = styled.div`
width: 100%;
height: 90vh;
`