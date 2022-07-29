import React from 'react'
import NavBar from './components/NavBar/NavBar';
// import BuyCard from './views/Presale/components/BuyCard';
import Presale from './views/First/Presale';

const App: React.FC = () => {


  return (
     <>
        <NavBar />
        <Presale/>
    </>
  );
}

export default App;
