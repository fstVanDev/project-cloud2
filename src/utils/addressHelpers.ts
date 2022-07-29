import addresses from '../config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getBusdAddress = () => {
  return addresses.busd[chainId]
}

export const getReferralStorageAddress = () => {
  return addresses.referralStorage[chainId]
}
export const getPresaleAddress = () => {
  return addresses.presale[chainId]
}

