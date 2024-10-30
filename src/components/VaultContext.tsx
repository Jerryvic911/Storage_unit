import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VaultContextType {
  balance: number;
  lockTime: string;
  lockPeriod: string;
  activeStatus: boolean;
  deposit: (amount: number, time: string, period: string) => void;
}

const VaultContext = createContext<VaultContextType | undefined>(undefined);

export const VaultProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<number>(0);
  const [lockTime, setLockTime] = useState<string>('');
  const [lockPeriod, setLockPeriod] = useState<string>('');
  const [activeStatus, setActiveStatus] = useState<boolean>(false);

  const deposit = (amount: number, time: string, period: string) => {
    setBalance(prevBalance => prevBalance + amount);
    setLockTime(time);
    setLockPeriod(period);
    setActiveStatus(true);
  };

  return (
    <VaultContext.Provider value={{ balance, lockTime, lockPeriod, activeStatus, deposit }}>
      {children}
    </VaultContext.Provider>
  );
};

export const useVault = () => {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error('useVault must be used within a VaultProvider');
  }
  return context;
};
