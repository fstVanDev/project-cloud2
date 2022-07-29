import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import useRefresh from 'hooks/useRefresh'
import {
  
  fetchTotalReferralsDataAsync,
  fetchTotalReferralCommissionsDataAsync,
  
  
} from './actions'
import {  State, Referral, Presale } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)


// Presale

export const usePresaleData = (): Presale => {
  const presale = useSelector((state: State) => state.presale.data)
  return presale
}
