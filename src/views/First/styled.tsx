import styled from 'styled-components'

export const PresaleHiddenMainBlock = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  max-width: 1400px;
  color: #000;
  background: #fff;
  height: 560px;
  margin: 24px auto;
  border-radius: 14px;
  padding: 24px;
  z-index: 0;
  filter: blur(4px);
`

export const PresaleMainBlock = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  max-width: 1400px;
  color: #000;
  background: #fff;
  z-index: 0;
  height: 460px;
  margin: 24px auto;
  border-radius: 14px;
  padding: 24px;
`

export const PresaleInnerBlock = styled.div`
width: 45%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid red;

button {
   &:hover {
      cursor: pointer;
      border: 1px solid white; 
   }
}

`



export const BuyButton = styled.button`
width: 140px;
height: 40px;
border-radius: 14px;
color: white;
border: none;
background: lightblue;
margin: 10px auto;
`
export const BuyInput = styled.input`
width: 180px;
height: 50px;
border: 1px solid lightblue;
border-radius: 14px;
margin: auto;
color: lightgray;
`
export const BuyBottomBlock = styled.div`
display: flex;
justify-content: space-around;
width: 80%;
height: max-content;
margin: 10px auto;
`
export const BuyMax = styled.button`
width: 50px;
height: 35px;
border-radius: 14px;
color: white;
border: none;
background: lightblue;
margin: auto;
`




export const ClaimButton = styled.button`
width: 140px;
height: 40px;
border-radius: 14px;
color: white;
border: none;
background: pink;
margin: 10px auto;
`

