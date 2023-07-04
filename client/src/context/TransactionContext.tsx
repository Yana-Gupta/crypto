import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext<any>({});

const { ethereum } = window as any;

const getEthereumContract = (): any => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const TransactionProvider = ({ children }: any) => {
  const [currentAccount, setcurrentAccount] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transactionCount, setTransactionCount] = useState<number>(
    parseInt(
      localStorage.getItem('transactionCount')
        ? (localStorage.getItem('transactionCount') as string)
        : '0'
    )
  );

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      return alert('Make sure you have metamask installed!');
    }
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setcurrentAccount(accounts[0]);
    }
  };

  const handleChange = (e: any, name: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: e.target.value }));
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      await setcurrentAccount(accounts);
      console.log(currentAccount);
    } catch (error) {
      console.error(error);
      throw new Error('No account found');
    }
  };

  const sendTransaction = async (): Promise<void> => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount: ethers.utils.BigNumber =
        ethers.utils.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            value: parsedAmount.toHexString(),
            gas: (21000).toString(16),
          },
        ],
      });

      const transactionHash: any = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Done ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      console.log(transactionCount.toNumber());
    } catch (e) {
      console.error(e);
    }
  };

  const getAllTransactions = async () => {
    const transactionContract = getEthereumContract();
    const transactions = await transactionContract.getAllTransaction();
    return transactions;
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  });

  return (
    <TransactionContext.Provider
      value={{
        connectWallet: connectWallet,
        currentAccount: currentAccount,
        formData: formData,
        setFormData: setFormData,
        handleChange: handleChange,
        sendTransaction: sendTransaction,
        isLoading: isLoading,
        transactionCount: transactionCount,
        getAllTransactions: getAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
