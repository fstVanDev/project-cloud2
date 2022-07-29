import React, { useEffect } from "react";
// // import { Route, useRouteMatch } from "react-router-dom";
// import { useDispatch } from "react-redux";
// // import BigNumber from 'bignumber.js'
// import styled from "styled-components";
// import { useWallet } from "use-wallet";
// import { provider } from "web3-core";
import { Card, CardBody, CardFooter, Flex } from "@pancakeswap-libs/uikit";
// // import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from '../../config'
// import FlexLayout from 'components/layout/Flex'
// import Countdown, { zeroPad } from 'react-countdown'
// // import Page from "../layout/Page";
// import { usePresaleData } from "../../state/hooks";
// import useRefresh from "../../hooks/useRefresh";
// import {
//    fetchUserTokensUnclaimedDataAsync,
//    fetchTokensLeftDataAsync,
//    fetchUserPresaleAllowanceDataAsync,
//    fetchUserBalanceDataAsync,
// } from "../../state/actions";
// import { QuoteToken } from 'config/constants/types'
// import useI18n from '../../hooks/useI18n'
// import UnlockButton from 'components/UnlockButton'
// import { getBalanceNumber } from '../../utils/formatBalance'
// import UnlockWalletCard from './components/UnlockWalletCard'
import BuyCard from "./components/BuyCard";
import styled from 'styled-components'
import styles from "./styles/presale.module.css";
// import CountDownCard from './components/CountDownCard';


export interface PresaleProps {
   tokenMode?: boolean;
}

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  padding-top: 20px;
  text-align: center;
`;

// const CountdownText = styled.span`
//   font-size: 16px;
//   color: #fff;
//   background: ${(props) => props.theme.card.background};;
//   padding: 16px;
//   border-radius: 16px;
//   width: 400px;
//   margin-bottom: 16px;
//   display: flex;
//   flex-direction: column;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     margin-right: auto;
//     margin-left: 32px;
//     margin-bottom: 32px;
//   }
// `

// const PresalePage = styled(Page)`
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
//   overflow: scroll;
//   padding-bottom: calc(100vh - 64px);

//   ${({ theme }) => theme.mediaQueries.lg} {
//     background-image: url('/images/egg/referral_banner.png');
//     height: calc(100vh - 64px);
//   }
// `

// const CustomHeading = styled(Heading)`

//   ${({ theme }) => theme.mediaQueries.lg} {
//     font-size: 49px;

//    @media (min-width: 375px) and (max-width:992px){
//       font-size: 36px !important;
//    }
//   }
// `
const Background = styled.div`
  background-image: url("/images/egg/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Presale: React.FC = () => {
   // const { path } = useRouteMatch()
   // const TranslateString = useI18n()




   // const { account, ethereum }: { account: string; ethereum: provider } =
   //    useWallet();
   // const presale = usePresaleData();

   // const dispatch = useDispatch();
   // const { slowRefresh } = useRefresh();
   // useEffect(() => {
   //    if (account) {
   //       dispatch(fetchUserTokensUnclaimedDataAsync(account));
   //       dispatch(fetchUserPresaleAllowanceDataAsync(account));
   //       dispatch(fetchUserBalanceDataAsync(account));
   //    }
   //    dispatch(fetchTokensLeftDataAsync());
   // }, [account, dispatch, slowRefresh]);





   // const [countdownDate, setCountdownDate] = useState(1624071600000)

   // const CountdownTime = ({ days, hours, minutes, seconds, completed }) => {
   //    return (
   //       <CountdownText>
   //          <span style={{ fontSize: '48px', paddingTop: '10px', paddingBottom: '5px', color: '#0080FF', fontWeight: 800 }}>{zeroPad(days * 24 + hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}</span>
   //          <span>Time till Presale Ends</span>
   //       </CountdownText>
   //    )
   // }

   return (
      <Background>
         {/* <Page> */}
         <Header style={{ textAlign: "center" }}>
            <div className={styles.detailsText}>Presale</div>
         </Header>

         <hr
            style={{
               marginTop: "30px",
               marginBottom: "30px",
               width: "100%",
               borderTop: "none",
               borderLeft: "none",
               borderColor: "#fff",
               height: "2px",
               backgroundColor: "#fff",
            }}
         />

         <div style={{ margin: "32px" }}>
            <Flex className={styles.cardContainer}>
               <Card className={styles.cardDetails}>
                  <CardBody className={styles.cardBody}> Details</CardBody>

                  <CardFooter style={{ padding: "0px" }}>
                     <div className={styles.flex}>
                        <div className={styles.item3}>Only 15.000 6RMB available</div>

                        <div className={styles.item4}>
                           Each time you can buy up to 180 6RMB (540 BUSD)
                        </div>
                     </div>
                  </CardFooter>
               </Card>
            </Flex>

            <BuyCard />
         </div>
         {/* </Page> */}
      </Background>
   );
};

export default Presale;
