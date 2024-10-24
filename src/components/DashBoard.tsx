import React, { useEffect, useState } from 'react';
import BottomNav from './Navbar'; // Assuming Navbar is your BottomNav component

// Define types for assets and transactions
interface Asset {
  name: string;
  balance: number;
}

interface Transaction {
  id: number;
  type: string;
  amount: number;
  date: string;
}

const Dashboard: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const loadData = async () => {
      await fetchAssets();
      await fetchTransactions();
      setLoading(false);
    };
    loadData();
  }, []);

  const fetchAssets = async () => {
    try {
      // Replace with your logic to fetch assets
      const fetchedAssets: Asset[] = [
        { name: 'Ethereum', balance: 2.5 },
        { name: 'Bitcoin', balance: 1.0 },
      ];
      setAssets(fetchedAssets);
    } catch (error) {
      console.error('Failed to fetch assets:', error);
    }
  };

  const fetchTransactions = async () => {
    try {
      // Replace with your logic to fetch transactions
      const fetchedTransactions: Transaction[] = [
        { id: 1, type: 'Deposit', amount: 1.0, date: '2023-10-01' },
        { id: 2, type: 'Withdrawal', amount: 0.5, date: '2023-10-02' },
      ];
      setTransactions(fetchedTransactions);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  if (loading) {
    return <div className="text-center text-xl py-20">Loading...</div>; // Loading message
  }

  return (
    <div className="dashboard-container max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Vault Dashboard</h1>
      
      <div className="assets-section mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Assets</h2>
        <ul className="space-y-3">
          {assets.map((asset) => (
            <li
              key={asset.name}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center transition duration-300 ease-in-out hover:shadow-lg"
            >
              <span className="text-gray-800">{asset.name}</span>
              <span className="text-gray-600">{asset.balance} units</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="transactions-section">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Transaction History</h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start transition duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="flex flex-col">
                <span className="font-bold text-gray-800">{transaction.type}</span>
                <span className="text-gray-600">Amount: {transaction.amount}</span>
                <span className="text-gray-600">Date: {transaction.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Dashboard;
