import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVault } from './VaultContext';

const Deposit: React.FC = () => {
  const navigate = useNavigate();
  const { deposit } = useVault();
  const [assetType, setAssetType] = useState<string>('Ethereum');
  const [amount, setAmount] = useState<number | string>('');
  const [timeValue, setTimeValue] = useState<number | string>('');
  const [timeUnit, setTimeUnit] = useState<string>('Days');  // default to days
  const [message, setMessage] = useState<string>('');

  const handleDeposit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0 || !timeValue) {
      setMessage('Please enter a valid amount and lock period.');
      return;
    }

    // Calculate total days based on selected unit
    let totalDays = 0;
    if (timeUnit === 'Days') {
      totalDays = Number(timeValue);
    } else if (timeUnit === 'Months') {
      totalDays = Number(timeValue) * 30;
    } else if (timeUnit === 'Years') {
      totalDays = Number(timeValue) * 365;
    }

    // Update the context with the deposit information
    deposit(Number(amount), '', totalDays.toString());

    setMessage(`Successfully deposited ${amount} ${assetType} for ${totalDays} days!`);
    setAmount('');
    setTimeValue('');
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
          <div className="flex space-x-2 items-center">
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className="mt-1 block w-1/3 border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Days">Days</option>
              <option value="Months">Months</option>
              <option value="Years">Years</option>
            </select>
            <input
              type="number"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
              placeholder="Enter value"
              className="mt-1 block w-2/3 border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
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
