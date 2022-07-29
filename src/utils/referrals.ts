/* eslint @typescript-eslint/no-var-requires: "off" */
import { AbiItem } from 'web3-utils'

import referralABI from '../config/abi/referral.json'
import { getReferralStorageAddress } from '../utils/addressHelpers'
import { getWeb3 } from '../utils/web3'
import * as cookieManager from '../lib/cookie-manager'

const CryptoJS = require('crypto-js')

const web3 = getWeb3()
const referralContract = new web3.eth.Contract(referralABI as unknown as AbiItem, getReferralStorageAddress())
const secretKey = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY)

const hexPrefix = '0x'
const zeroAddress = `${hexPrefix}0000000000000000000000000000000000000000`

const martianRefCodeCookieKey = 'martian_finance_referral_code'

export const generateReferralLink = (account) => {
  // const simplifieldAccount = account.replace(hexPrefix, '')
  // const code = CryptoJS.Rabbit.encrypt(simplifieldAccount.toString(), secretKey, {
  //   mode: CryptoJS.mode.ECB,
  //   padding: CryptoJS.pad.NoPadding,
  // })
  //   .toString()
  //   .replace('==', '')

  return `${process.env.REACT_APP_BASE_URL}?ref=${account}`
}

export function getReferralCookie() {
  return cookieManager.getCookie(martianRefCodeCookieKey)
}

export function getDecrypt(referralCode) {
  const decryptedReferrereAddress = CryptoJS.Rabbit.decrypt(referralCode, secretKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding,
  }).toString(CryptoJS.enc.Utf8)

  const referrereAddress = `${hexPrefix}${decryptedReferrereAddress}`

  return (referrereAddress)

}


/**
 * Extract the referral code from the URL
 */
export function extractReferralCode(): string | null {
  const params = new URLSearchParams(window.location.search)

  return params.get('ref') || null
}

export async function setReferralCode(referralCode: string, account: string) {
  if (account === null) {
    return false
  }

  // check if cookie already exist
  if (getReferralCookie()) {
    return false
  }

  const referrerAddress = await referralContract.methods.getReferralAccount(account).call()

  // check if has existing referrer
  if (referrerAddress !== zeroAddress) {
    return false
  }

  // TODO: think later about cookie encryption & hiding the referral address
  // TODO: maybe move it to the cookie manager
  // const decryptedReferrereAddress = CryptoJS.Rabbit.decrypt(cleanedRefCode, secretKey, {
  //   mode: CryptoJS.mode.ECB,
  //   padding: CryptoJS.pad.NoPadding,
  // }).toString(CryptoJS.enc.Utf8)
  // const referrereAddress = `${hexPrefix}${decryptedReferrereAddress}`

  // handle the same account
  if (account === referralCode) {
    return false
  }

  // remember referral code
  cookieManager.setCookie(martianRefCodeCookieKey, referralCode)

  return true
}

export async function getReferralCount(account) {
  const referrerAddress = await referralContract.methods.getReferralAccount(account).call()

  return referrerAddress.referredCount

}

export function getReferralCode() {
  const cookieValue = getReferralCookie()

  if (!cookieValue) {
    return zeroAddress
  }


  const decryptedReferrereAddress = CryptoJS.Rabbit.decrypt(cookieValue, secretKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding,
  }).toString(CryptoJS.enc.Utf8)

  const referrereAddress = `${hexPrefix}${decryptedReferrereAddress}`

  document.cookie = `${martianRefCodeCookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`

  return referrereAddress
}
