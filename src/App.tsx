import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Bodt';
import Dashboard from './components/DashBoard';
import Deposit from './components/Deposit';
import Withdrawal from './components/Withdrawal';
import TransactionHistory from './components/Transaction';
import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
 const activeChain = "ethereum"

  return (
    <ThirdwebProvider activeChain={activeChain}> 
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdrawal />} />
        <Route path="/Transaction" element={<TransactionHistory />} />
      </Routes>
    </Router>
    </ThirdwebProvider>
  );
}

export default App;
