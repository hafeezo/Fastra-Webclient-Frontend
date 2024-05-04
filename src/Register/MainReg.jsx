import styled from 'styled-components'
import Regform from './Regform'

export default function MainReg() {
  return (
    <Regcont>
      <Regform/>
    </Regcont>
  )
}

const Regcont = styled.div`
width: 100%;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
`