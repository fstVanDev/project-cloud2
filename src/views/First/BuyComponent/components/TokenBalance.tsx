import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import Input, { InputProps } from './Input'



interface TokenBalanceProps extends InputProps {
   max: number | string
   symbol: string
   onSelectMax?: () => void
   depositFeeBP?: number
}



const TokenBalance: React.FC<TokenBalanceProps> = ({ max, symbol, onSelectMax, depositFeeBP = 0, value, onChange }) => {

   return (
      <>
         <StyledMaxText>
            {max.toLocaleString()} {symbol} Available
         </StyledMaxText>
         <Input
            endAdornment={
               <StyledTokenAdornmentWrapper>
                  <StyledTokenSymbol>
                     {symbol}
                  </StyledTokenSymbol>
                  <StyledSpacer />
                  <div>
                     <BButton onClick={onSelectMax}>
                        Max
                     </BButton>
                  </div>
               </StyledTokenAdornmentWrapper>
            }
            onChange={onChange}
            placeholder='0'
            value={value}
         />
         {depositFeeBP > 0 ? (
            <StyledMaxText>
               Deposit Fee {new BigNumber(value || 0).times(depositFeeBP / 1000).toString()}{' '}
            </StyledMaxText>) : null
         }
      </>
   )
}

export default TokenBalance


const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledMaxText = styled.div`
  align-items: center;
  color: #4A5A72;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  justify-content: flex-end;
`

const StyledTokenSymbol = styled.span`
  color: #4A5A72;
  font-weight: 700;
`
const StyledSpacer = styled.div`
  width: 200px;
`


export const BButton = styled.button`
  height: 40px;
  width: 140px;
  background: #FB075F;
  border: solid 2px !important};
  border-color: #4A5A72;
  border-radius: 8px;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #4A5A72;
  border: none;
  cursor: pointer;

  &:disabled {
    background: grey;
    color: white;

    cursor: default;
  }
`