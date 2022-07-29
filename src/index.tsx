import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { Web3Provider } from '@ethersproject/providers'

// const getLibrary = (provider) => {
//    const library = new ethers.providers.Web3Provider(provider);
//    library.pollingInterval = 3000; // frequency provider is polling
//    return library;
// };


function getLibrary(provider: any): Web3Provider {
   const library = new Web3Provider(provider)
   return library
}

ReactDOM.render(
   <StrictMode>
      <ChakraProvider>
         <Web3ReactProvider getLibrary={getLibrary}>
            <App />
         </Web3ReactProvider>
      </ChakraProvider>
   </StrictMode>,
   document.getElementById("root")
);
