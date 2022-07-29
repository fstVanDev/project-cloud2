import React, { useCallback, useMemo, useState } from 'react'
import TokenBalance from './TokenBalance'
import { getBalanceNumber, getFullDisplayBalance } from '../../../../utils/formatBalance'
import BigNumber from 'bignumber.js'

interface BuyModalProps {
   max: BigNumber
   tokenName?: string
   onConfirm: (amount: string) => void
   onDismiss?: () => void
   tokensUnclaimed?: BigNumber
   tokenBalance?: BigNumber
   tokensLeft?: BigNumber
}

const BuyModal: React.FC<BuyModalProps> = ({ max, tokenName = "", onConfirm, onDismiss, tokensUnclaimed, tokenBalance, tokensLeft }) => {
   const [val, setVal] = useState('')
   const [pendingTx, setPendingTx] = useState(false)

   const fullBalance = useMemo(() => {
      return getFullDisplayBalance(max)
   }, [max])

   const handleChange = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
         setVal(e.currentTarget.value)
      },
      [setVal],
   )

   const renderErrorMessage = () => {
      let error = null;
      if (parseInt(val) > getBalanceNumber(tokensLeft)) {
         error = "Not enough OLYMP left for sale!"
      }
      else if (parseInt(val) + getBalanceNumber(tokenBalance) + getBalanceNumber(tokensUnclaimed) > 1000) {
         error = "You have hit the max cap of 2000 BUSD!"
      }
      else if (parseInt(val) < 10) {
         error = "Minimum buy is 10 BUSD!"
      }
      return error
   }


   const handleSelectMax = useCallback(() => {
      setVal(fullBalance)
   }, [fullBalance, setVal])

   return (
      <>
         <TokenBalance
            value={val}
            onSelectMax={handleSelectMax}
            onChange={handleChange}
            max={fullBalance}
            symbol={tokenName}
         />
         <div style={{ color: '#fff' }}>{renderErrorMessage()}</div>
      </>
   )
}