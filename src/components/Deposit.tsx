import React, { useState } from 'react';
import './Deposit.css'; // Ensure this CSS file is created for styling

const Deposit: React.FC = () => {
  const [assetType, setAssetType] = useState<string>('Ethereum'); // Default asset type
  const [amount, setAmount] = useState<number | string>(''); // Amount to deposit
  const [message, setMessage] = useState<string>(''); // Message for user feedback

  const handleDeposit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    // Logic to handle the deposit goes here
    // This is a placeholder for actual deposit logic
    console.log(`Depositing ${amount} ${assetType}...`);
    setMessage(`Successfully deposited ${amount} ${assetType}!`);
    
    // Reset fields after deposit
    setAmount('');
  };

  return (
    <div className="deposit-container">
      <h1>Deposit Assets</h1>
      <div className="form-group">
        <label htmlFor="assetType">Select Asset Type:</label>
        <select
          id="assetType"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
        >
          <option value="Ethereum">Ethereum</option>
          <option value="Bitcoin">Bitcoin</option>
          {/* Add more asset options as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <button onClick={handleDeposit} className="deposit-btn">
        Deposit
      </button>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default Deposit;