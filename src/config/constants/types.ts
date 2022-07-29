import BigNumber from "bignumber.js"

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'UST' = 'UST',
}

export interface Address {
  97?: string
  56: string
}

export interface ReferralConfig {
  totalReferrals: number
  totalReferralCommissions: number
}

export interface PresaleConfig {
  tokensLeft: BigNumber
  tokensUnclaimed: BigNumber
  userAllowance: BigNumber
  busdBalance: BigNumber
  cakeBalance: BigNumber
}
