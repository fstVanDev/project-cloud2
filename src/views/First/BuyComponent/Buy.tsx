import { useState, useEffect, useMemo, useCallback } from 'react'
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units"

import { PresaleInnerBlock, BuyButton, BuyInput, BuyBottomBlock, BuyMax } from '../styled'


//////////////////////
const Buy = () => {

   const [ethBalance, setEthBalance] = useState<number | undefined>(undefined)
   const { account, active, library, chainId } = useWeb3React()
   const provider = library



   useEffect(() => {
      if (active && account) {
         provider?.getBalance(account).then((result) => {
            setEthBalance(Number(formatEther(result)))
         })
      }
   })

   return (
      <PresaleInnerBlock>
         <p>Buy</p>

         <div>
            <p style={{ textAlign: 'right', width: '80%' }}> Max in wallet {ethBalance?.toFixed(3)} {chainId === 56 ? 'BNB' : ' '}</p>
            <BuyBottomBlock>
               <span style={{ margin: 'auto' }}>
                  <BuyInput />
                  <BuyMax>MAX</BuyMax>
               </span>
               <BuyButton>Buy</BuyButton>
            </BuyBottomBlock>
         </div>
      </PresaleInnerBlock>
   )
}

export default Buy