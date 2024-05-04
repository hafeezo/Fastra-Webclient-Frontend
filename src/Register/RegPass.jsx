import styled from 'styled-components'

export default function Regpass() {
  return (
    <Info>
      <Infowrap>
      
      </Infowrap>
    </Info>
  )
}

const Info = styled.div`
width: 25%;
height: 85%;
position: relative;
border-radius: 0.5rem;
box-shadow: 16px 16px 64px 0px #1A1A1A29;
display: flex;
justify-content: center;
align-items: center;
`
const Infowrap = styled.div`
width: 90%;
height: 95%;
// background: red;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 2rem;

.reg{
  font-size: 18px;
  font-weight: 500;
}
.reg2{
  font-size: 14px;
  margin-top: -1rem;
}
.form{
  margin-top: -0.5rem;
}
input{
  width: 80%;
  padding: 8px;
  border-radius: 0.5rem;
  border: 1px solid #aaaaaa;
  margin-top: 0.35rem;
}
.cd{
  opacity: 60%;
  margin-top: -0.2rem;
  font-size: 12px;
}
.goin{
  font-size: 12px;
  color: #3b7ced;
}
.btn{
  margin-top: 1.7rem;
  background: #3b7ced;
  color: #fff;
  padding: 12px;
  width: 87%;
  border: none;
  border-radius: 0.5rem;
}
`