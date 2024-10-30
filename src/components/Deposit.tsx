import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVault } from './VaultContext';

const Deposit: React.FC = () => {
  const navigate = useNavigate();
  const { deposit } = useVault(); // Get deposit function from context
  const [assetType, setAssetType] = useState<string>('Ethereum');
  const [amount, setAmount] = useState<number | string>(''); 
  const [days, setDays] = useState<number | string>(''); 
  const [months, setMonths] = useState<number | string>(''); 
  const [years, setYears] = useState<number | string>(''); 
  const [message, setMessage] = useState<string>('');

  const handleDeposit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0 || (!days && !months && !years)) {
      setMessage('Please enter a valid amount and lock period.');
      return;
    }

    // Convert lock period to total days
    const totalDays = (Number(days) || 0) + (Number(months) || 0) * 30 + (Number(years) || 0) * 365;

    // Update the context with the deposit information
    deposit(Number(amount), '', totalDays.toString()); // Pass total days as a string

    setMessage(`Successfully deposited ${amount} ${assetType} for ${totalDays} days!`);
    setAmount('');
    setDays('');
    setMonths('');
    setYears('');
  };

  const handleReturn = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E3E] text-white p-6">
      <div className="bg-black rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Deposit Assets</h1>
        <div className="mb-4">
          <label htmlFor="assetType" className="block text-sm font-medium">Select Asset Type:</label>
          <select
            id="assetType"
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
            className="mt-1 block w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="Ethereum" className='text-black'>Ethereum</option>
            <option value="Bitcoin" className='text-black'>Bitcoin</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mt-1 block w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Lock Period:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Days"
              className="mt-1 block w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              placeholder="Months"
              className="mt-1 block w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Years"
              className="mt-1 block w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>
        <button onClick={handleDeposit} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
          Lock
        </button>
        {message && <p className="mt-2 text-green-600">{message}</p>}

        <button onClick={handleReturn} className="mt-4 w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300">
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Deposit;
