import React, { useEffect, useState } from "react";
import SelectWalletModal from "./SelectWalletModal";
import { useWeb3React } from "@web3-react/core";
import { useDisclosure } from "@chakra-ui/react";
import { networkParams } from "./networks";
import { connectors } from "./connectors";
import { toHex, truncateAddress } from "./utils";
import {
   ActiveBlock,
   ConnectButton,
} from "./styled";



const ConnectWallet = () => {

   const { isOpen, onOpen, onClose } = useDisclosure();
   const { library, chainId, account, activate, deactivate, active } =
      useWeb3React();
   const [signature, setSignature] = useState("");
   const [error, setError] = useState("");
   const [network, setNetwork] = useState(undefined);
   const [message, setMessage] = useState("");
   const [verified, setVerified] = useState();

   const handleNetwork = (e) => {
      const id = e.target.value;
      setNetwork(Number(id));
   };

   const handleInput = (e) => {
      const msg = e.target.value;
      setMessage(msg);
   };

   const switchNetwork = async (e) => {
      const id = e.target.value;
      setNetwork(Number(id));

      try {
         await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: toHex(network) }],
         });
      } catch (switchError) {
         if (switchError.code === 4902) {
            try {
               await library.provider.request({
                  method: "wallet_addEthereumChain",
                  params: [networkParams[toHex(network)]],
               });
            } catch (error) {
               setError(error);
            }
         }
      }
   };

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

   useEffect(() => {
      const provider = window.localStorage.getItem("provider");
      if (provider) activate(connectors[provider]);
   }, []);


   return (
         <ActiveBlock>
            {/* <ConnectButtton1 onClick={() => dropDown()} type="button">
            {!clicked ? (
               <p>Switch Network</p>
            ) : (
               <DropContainer>
                  <DropButton type="button" value="1" onClick={switchNetwork}>
                     Ethereum
                  </DropButton>
                  <DropButton type="button" value="56" onClick={switchNetwork}>
                     BNB Chain
                  </DropButton>
                  <DropButton type="button" value="43114" onClick={switchNetwork}>
                     Avalanche
                  </DropButton>
               </DropContainer>
            )}
         </ConnectButtton1> */}

            {/* {!active ? (
               <ConnectButton onClick={onOpen}>Connect Wallet</ConnectButton>
            ) : (
               <ConnectButton onClick={disconnect}>
                  {truncateAddress(account)}
               </ConnectButton>
         )} */}
         
         <ConnectButton onClick={onOpen}>Connect Wallet</ConnectButton>
            <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
         </ActiveBlock>
   );
};

export default ConnectWallet;



