import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Deposit.css'; // Ensure this CSS file is created for styling

const Deposit: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [assetType, setAssetType] = useState<string>('Ethereum'); // Default asset type
  const [amount, setAmount] = useState<number | string>(''); // Amount to deposit
  const [message, setMessage] = useState<string>(''); // Message for user feedback

  const handleDeposit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    // Logic to handle the deposit goes here
    console.log(`Depositing ${amount} ${assetType}...`);
    setMessage(`Successfully deposited ${amount} ${assetType}!`);
    
    // Reset fields after deposit
    setAmount('');
  };

  const handleReturn = () => {
    navigate('/dashboard'); // Navigate back to the dashboard
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

      {/* Return Button */}
      <button onClick={handleReturn} className="return-btn">
        Return to Dashboard
      </button>
    </div>
  );
};

export default Deposit;
