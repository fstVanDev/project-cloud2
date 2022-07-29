import Buy from './BuyComponent/Buy'
import Claim from './ClaimComponent/Claim'
import { PresaleMainBlock, PresaleHiddenMainBlock } from './styled';
import { useWeb3React } from "@web3-react/core";
import ConnectWallet from '../../components/ConnectWallet/ConnectWallet';




const Presale = () => {

   const { account, deactivate, active } = useWeb3React();

   return (
      <>
         {active ?
            (
               <PresaleMainBlock>
                  <Buy/>
                  <Claim/>
               </PresaleMainBlock>
            ) : (
               <>
                  <PresaleHiddenMainBlock >
                     <ConnectWallet />
                  </PresaleHiddenMainBlock>
               </>
            )
         }
      </>
   )
}

export default Presale