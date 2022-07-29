import React, { useContext, useState } from 'react'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import { useWeb3React } from "@web3-react/core";
import { ConnectButton } from '../ConnectWallet/styled';
import { truncateAddress } from '../ConnectWallet/utils';

const NavBar = () => {

   const { account, deactivate, active } = useWeb3React();
   const [network, setNetwork] = useState(undefined);
   const [message, setMessage] = useState("");
   const [verified, setVerified] = useState();
   const [signature, setSignature] = useState("");

   const refreshState = () => {
      window.localStorage.setItem("provider", undefined);
      setNetwork("");
      setMessage("");
      setSignature("");
      setVerified(undefined);
   };


   const disconnect = () => {
      refreshState();
      deactivate();
   };

   return (
      <div>
         {!active ? (
            <ConnectWallet />
         ) : (
            <ConnectButton onClick={disconnect}>
               {truncateAddress(account)}
            </ConnectButton>
         )
         }
      </div>
   )
}

export default NavBar