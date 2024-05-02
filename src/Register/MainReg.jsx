import styled from 'styled-components'
import Reghed from './Reghed'

export default function MainReg() {
  return (
    <Regcont>
      <Reghed/>
    </Regcont>
  )
}

const Regcont = styled.div`
width: 100%;
height: 100vh;
`