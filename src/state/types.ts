import BigNumber from 'bignumber.js'
import {  ReferralConfig, PresaleConfig } from '../config/constants/types'


export type Referral = ReferralConfig

export type Presale = PresaleConfig

// Slices states

export interface ReferralsState {
  data: Referral
}

export interface PresaleState {
  data: Presale
}

// Global state

export interface State {
  referrals: ReferralsState
  presale: PresaleState
}
