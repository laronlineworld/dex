export interface Wallet {
    address: string;
    balance: string;
    chainId: number;
  }
  
  export interface SwapParams {
    fromToken: string;
    toToken: string;
    amount: string;
  }