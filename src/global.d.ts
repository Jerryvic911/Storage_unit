// src/global.d.ts
import { ExternalProvider } from 'ethers';

declare global {
  interface MetaMaskInpageProvider extends ExternalProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: Array<unknown> }) => Promise<unknown>;
  }

  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
