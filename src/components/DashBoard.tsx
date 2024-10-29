import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import BottomNav from './Navbar';

const transactionHistory = [
  { id: 1, type: 'Deposit', amount: '+ $500', className: 'text-green-500' },
  { id: 2, type: 'Withdraw', amount: '- $200', className: 'text-red-500' },
  { id: 3, type: 'Withdraw', amount: '- $300', className: 'text-red-500' },
];

const DashBoard: React.FC = () => {
  const location = useLocation();
  const { username } = location.state as { username: string } || { username: '' }; // Extract username

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header with animation */}
      <motion.header
        className="w-full bg-[#0a100d] p-4 text-white text-center uppercase text-xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {username ? `${username}'s gruft Vault Dashboard` : ' gruft Vault Dashboard'}
      </motion.header>

      {/* Vault Balance with animation */}
      <motion.div
        className="mt-6 p-4 w-11/12 bg-[#1E1E3E] rounded-xl shadow-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-lg">Vault Balance</h2>
        <p className="text-2xl font-semibold text-green-500">$12,500</p>
      </motion.div>

      {/* Action Buttons with animations */}
      <div className="flex flex-col">
        <div className="grid grid-cols-2 justify-around mt-6 gap-5">
          <Link to="/Deposit">
            <motion.button
              className="bg-[#0a100d]  text-white rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
              whileHover={{ scale: 1.05 }} // Animation on hover
              whileTap={{ scale: 0.95 }} // Animation on tap
            >
              Lock
            </motion.button>
          </Link>
          <Link to="/Withdraw">
            <motion.button
              className="bg-[#0a100d] text-white rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
              whileHover={{ scale: 1.05 }} // Animation on hover
              whileTap={{ scale: 0.95 }} // Animation on tap
            >
              Withdraw
            </motion.button>
          </Link>
        </div>
        <div className="grid grid-cols-2 justify-around mt-6 gap-5">
          <motion.button
            className="bg-[#0a100d] text-white p-2 rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Break Lock
          </motion.button>
          <motion.button
            className="bg-[#0a100d]  text-white p-2 rounded-lg shadow-lg w-[100%] h-[40px] mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to lock
          </motion.button>
        </div>
      </div>

      {/* Transaction History with animation */}
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
