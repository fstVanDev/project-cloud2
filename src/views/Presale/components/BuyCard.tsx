import { useState, useEffect } from 'react'
import ConnectWallet from "../../../components/ConnectWallet/ConnectWallet";
import { PresaleBlock, Card, CardBody } from "./styles";
import BuyModal from './BuyModal';
import { useWeb3React } from "@web3-react/core";
import BigNumber from 'bignumber.js'
import { networkParams } from '../../../components/ConnectWallet/networks';
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from "@ethersproject/units"
import { Text } from '@chakra-ui/react'


const BuyCard = () => {

   const [ethBalance, setEthBalance] = useState<number | undefined>(undefined)
   const { account, active, library, chainId } = useWeb3React<Web3Provider>()
   const provider = library


   useEffect(() => {
      if (active && account) {
         provider?.getBalance(account).then((result) => {
            setEthBalance(Number(formatEther(result)))
         })
      }
   })

   // return (
   //    <div>
   //       {active ? (
   //          <Text fontSize="md" w='100%' my='2' align='left'>
   //             ETH in account: {ethBalance?.toFixed(3)} {chainId === 56 ? 'Test' : ' '} ETH
   //          </Text>
   //       ) : (
   //          <Text fontSize="md" w='100%' my='2' align='left'>ETH in account:</Text>
   //       )}
   //    </div>
   // )

   return (
      <PresaleBlock>
         <Card>
            <CardBody>
               Buy 6RMB
               <div >
                  6RMB Price
                  <div>3.00 BUSD</div>
                  <div>
                     Max Per Wallet
                     <div>200 6RMB</div>
                     {!active ? (
                        <ConnectWallet />
                     ) : (

                        < Text fontSize="md" w='100%' my='2' align='left' >
                           {ethBalance?.toFixed(3)} {chainId === 56 ? 'BNB' : ' '}
                        </ Text>
                     )}
                  </div>
               </div>
            </CardBody>

            <CardBody>
               Claim 6RMB
               <div>
                  Unclaimed 6RMB
                  <div>
                     NONE 6RMB
                  </div>
                  <div>
                     Max Per Wallet
                     <div>
                        NONE 6RMB
                     </div>
                     <ConnectWallet />
                  </div>
               </div>
            </CardBody>
         </Card>


      </PresaleBlock>
   );
};

export default BuyCard;
