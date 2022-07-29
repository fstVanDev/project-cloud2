import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
// import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { fetchUserPresaleAllowanceDataAsync } from '../state/actions'
import { approve } from '../utils/callHelpers'
import {  usePresale } from './useContract'



export const useApprovePresale = (busdContract: Contract) => {
  const dispatch = useDispatch()
  const { account }: { account: string } = useWallet()
  const presaleContract = usePresale()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(busdContract, presaleContract, account)
      dispatch(fetchUserPresaleAllowanceDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, busdContract, presaleContract])

  return { onApprove: handleApprove }
}

