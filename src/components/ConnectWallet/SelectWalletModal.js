import {
   VStack,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalCloseButton,
   Button,
   Text,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";


const SelectWalletModal = ({ isOpen, closeModal }) => {
   const { activate } = useWeb3React();

   const setProvider = (type) => {
      window.localStorage.setItem("provider", type);
   };

   return (
      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
         <ModalOverlay />
         <ModalContent w="300px">
            <ModalHeader>Select Wallet</ModalHeader>
            <ModalCloseButton
               _focus={{
                  boxShadow: "none",
               }}
            />
            <ModalBody paddingBottom="1.5rem">
               <VStack>
                  <Button
                     variant="outline"
                     onClick={() => {
                        activate(connectors.coinbaseWallet);
                        setProvider("coinbaseWallet");
                        closeModal();
                     }}
                     w="100%"
                  >
                     <Text>Coinbase Wallet</Text>
                  </Button>
                  <Button
                     variant="outline"
                     onClick={() => {
                        activate(connectors.walletConnect);
                        setProvider("walletConnect");
                        closeModal();
                     }}
                     w="100%"
                  >
                     <Text>Wallet Connect</Text>
                  </Button>
                  <Button
                     variant="outline"
                     onClick={() => {
                        activate(connectors.injected);
                        setProvider("injected");
                        closeModal();
                     }}
                     w="100%"
                  >
                     <Text>Metamask</Text>
                  </Button>
               </VStack>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
};

export default SelectWalletModal;
