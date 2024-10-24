import React, { useState } from 'react';
import './Withdrawal.css'; // Ensure this CSS file is created for styling

const Withdrawal: React.FC = () => {
  const [assetType, setAssetType] = useState<string>('Ethereum'); // Default asset type
  const [amount, setAmount] = useState<number | string>(''); // Amount to withdraw
  const [message, setMessage] = useState<string>(''); // Message for user feedback

  const handleWithdrawal = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    // Logic to handle the withdrawal goes here
    // This is a placeholder for actual withdrawal logic
    console.log(`Withdrawing ${amount} ${assetType}...`);
    setMessage(`Successfully withdrew ${amount} ${assetType}!`);
    
    // Reset fields after withdrawal
    setAmount('');
  };

  return (
    <div className="withdrawal-container">
      <h1>Withdraw Assets</h1>
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
      <button onClick={handleWithdrawal} className="withdrawal-btn">
        Withdraw
      </button>
      {message && <p className="feedback-message">{message}</p>}
      
    </div>
  );
};

export default Withdrawal;