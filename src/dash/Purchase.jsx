import styled from 'styled-components'
import Purchead from './Purchead'
import Purchreq from './Purchreq'
import Bg from '../image/bg.svg'
export default function PRQ() {
  return (
    <Purcont id="purchase">
      <Purchead/>
      <Purchreq/>
    </Purcont>
  )
}

const Purcont = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Bg});
  background-size: contain;
  margin: 0;
  padding: 0;
  font-family: Product Sans;
`