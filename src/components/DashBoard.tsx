import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import BottomNav from './Navbar';
import Logo from "../assets/Logo.png"
import { useVault } from './VaultContext';


const transactionHistory = [
  { id: 1, type: 'Deposit', amount: '+ $500', className: 'text-green-500' },
  { id: 2, type: 'Withdraw', amount: '- $200', className: 'text-red-500' },
  { id: 3, type: 'Withdraw', amount: '- $300', className: 'text-red-500' },
];

const DashBoard: React.FC = () => {
  const { balance, lockTime, lockPeriod, activeStatus } = useVault(); 
  const location = useLocation();
  const { username } = location.state as { username: string } || { username: '' };

  // const [lockedAmount, setLockedAmount] = useState<number>(0);
  // const [lockTime, setLockTime] = useState<string>('');
  // const [lockPeriod, setLockPeriod] = useState<string>('');
  // const [activeStatus, setActiveStatus] = useState<boolean>(false);

  // This function can be called with actual data from a form in a real app
  // const handleLockAmount = () => {
  //   setLockedAmount(12500); // Test amount
  //   setLockTime('2023-12-31'); // Test lock time
  //   setLockPeriod('6 months'); // Test lock period
  //   setActiveStatus(true); // Mark as active
  // };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <motion.header
        className="w-full flex pl-20 items-center bg-[black] text-white text-center uppercase text-xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative inline-flex items-center">
  <motion.div
    className="absolute inset-0 bg-blue-500 rounded-full opacity-50 blur-md"
    animate={{ scale: [1, 1.1, 1] }} // Beating effect
    transition={{ duration: 1.5, repeat: Infinity }} // Repeat infinitely
  />
  <img src={Logo} className="relative h-[70px] w-[70px] z-10" alt="Image" />
</div>

        {username ? `${username}'s gruft Vault ` : ' gruft Vault '}
      </motion.header>

      {/* Vault Balance */}
      <motion.div
        className="mt-6 p-4 w-11/12 bg-[#1E1E3E] rounded-xl shadow-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="mt-6 p-4 w-11/12 bg-[#1E1E3E] rounded-xl shadow-md text-center">
        <h2 className="text-lg text-white">Vault Balance: ${balance.toLocaleString()}</h2>
        {activeStatus && (
          <div className="mt-4">
            <p className="text-white">Lock Time: {lockTime}</p>
            <p className="text-white">Lock Period: {lockPeriod}</p>
            <p className="text-white">Status: {activeStatus ? 'Active' : 'Inactive'}</p>
          </div>
        )}
      </div>


      
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-col">
        <div className="grid grid-cols-2 justify-around mt-6 gap-5">
        <Link to="/Deposit">
            <motion.button
              className="bg-[#0a100d] text-white rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
            >
              Lock
            </motion.button>
          </Link>

          <Link to="/Withdraw">
            <motion.button
              className="bg-[#0a100d] text-white rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
            >
              Withdraw
            </motion.button>
          </Link>
        </div>

        {/* Additional Action Buttons */}
        <div className="grid grid-cols-2 justify-around mt-6 gap-5">
          <motion.button
            className="bg-[#0a100d] text-white p-2 rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Break Lock
          </motion.button>
          <motion.button
            className="bg-[#0a100d] text-white p-2 rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to lock
          </motion.button>
        </div>
      </div>

      {/* Transaction History */}
      <motion.div
        className="mt-6 w-11/12 bg-[#1E1E3E] rounded-xl shadow-md p-4 overflow-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-white text-lg mb-4">Transaction History</h3>
        <ul>
          {transactionHistory.map(transaction => (
            <li key={transaction.id} className="flex justify-between py-2">
              <span className="text-white">{transaction.type}</span>
              <span className={transaction.className}>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <div>
        <BottomNav />
      </div>
    </div>
  );
};

export default DashBoard;
