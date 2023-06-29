import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';


export const TransactionContext = React.createContext<any>({});


const { ethereum } = window as any;

const getEthereumContract = () => {
    const provider = new ethers.JsonRpcProvider(ethereum)
    const signer = provider.getSigner();

    console.log({
        provider,
        signer
    })
}

export const TransactionProvider = ({ children }: any) => {

    const [currentAccount, setcurrentAccount] = useState<string | null>(null);

    const checkIfWalletIsConnected = async () => {
        if (!ethereum) {
            return alert('Make sure you have metamask installed!');
        }
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log(accounts)
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask")
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setcurrentAccount(accounts[0])
        } catch (error) {
            console.error(error)
            throw new Error("No account found")
        }
    }


    useEffect(() => {
        checkIfWalletIsConnected();
    })



    return (
        <TransactionContext.Provider value={{ connectWallet: connectWallet, currentAccount: currentAccount }}>
            {children}
        </TransactionContext.Provider>
    )
}