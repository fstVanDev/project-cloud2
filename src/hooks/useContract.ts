import { useEffect, useState } from 'react'
import { AbiItem } from 'web3-utils'
import { ContractOptions } from 'web3-eth-contract'
// import useWeb3 from './useWeb3'
import { getWeb3 } from '../utils/web3'
import { getPresaleAddress, getReferralStorageAddress } from '../utils/addressHelpers'
import erc20 from '../config/abi/erc20.json'
import presale from '../config/abi/presale.json'
import referral from '../config/abi/referral.json'

const useContract = (abi: AbiItem, address: string, contractOptions?: ContractOptions) => {
   const web3 = getWeb3()
   const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions))

   useEffect(() => {
      setContract(new web3.eth.Contract(abi, address, contractOptions))
   }, [abi, address, contractOptions, web3])

   return contract
}

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
   const erc20Abi = erc20 as unknown as AbiItem
   return useContract(erc20Abi, address)
}


export const useReferral = () => {
   const abi = referral as unknown as AbiItem
   return useContract(abi, getReferralStorageAddress())
}

export const usePresale = () => {
   const abi = presale as unknown as AbiItem
   return useContract(abi, getPresaleAddress())
}


export default useContract
