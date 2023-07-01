import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { getTransactionsForConnectedAccount } from "../utils/index"

import TransactionLoader from "./TransactionLoader";

const TransactionCard = ({ tx }: { tx: any }): JSX.Element => {
    const bgColor: string = tx.status === "sent" ? "bg-[#FFA50080]/20" : "bg-[#00800080]/20";
    console.log(parseInt(tx.amount.toString(16))/10**18)
    return (
        <div className={`${bgColor} m-4 flex flex-1 2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:drop-shadow-2xl`}>
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2">
                    <a
                        href={`https://goerli.etherscan.io/address/${tx.sender}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1">
                        <p className="text-white text-base">
                            From: {tx.sender.slice(0, 6) + "......." + tx.sender.slice(-4)}
                        </p>
                    </a>
                    <a
                        href={`https://goerli.etherscan.io/address/${tx.receiver}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1">
                        <p className="text-white text-base">
                            To: {tx.receiver.slice(0, 6) + "......." + tx.sender.slice(-4)}
                        </p>
                    </a>
                    <p className="text-white text-base">
                        Amount: {parseInt(tx.amount.toString(16))/10**18} ETH
                    </p>
                </div>
            </div>
        </div>
    )
}

const Transaction = (): JSX.Element => {

    const { getAllTransactions, currentAccount } = useContext<any>(TransactionContext);
    const [transactions, setTransactions] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const call = async () => {
            if (currentAccount) {
                setLoading(true)
                const transactions = await getAllTransactions();
                const transaction = await getTransactionsForConnectedAccount(transactions, currentAccount);
                setTransactions(transaction)
                setLoading(false)
                console.log(transactions)
            }
        }
        call();
    }, [currentAccount])

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions min-h-[500px]">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount
                    ? (
                        <h3 className="text-white text-4xl text-center my-2 font-bold">
                            Latest Transactions
                        </h3>
                    )
                    : (
                        <h3 className="text-white text-3xl text-center my-2">
                            Connect Wallet to see transactions
                        </h3>
                    )
                }

                {transactions
                    ? (
                        <div className="flex flex-wrap justify-center items-center mt-10">
                            {
                                transactions.map((tx: any, index: any) => {
                                    return (
                                        <TransactionCard key={index} tx={tx} />
                                    )
                                }
                                )
                            }
                        </div>
                    )
                    : (
                        loading
                            ? (<TransactionLoader />)
                            : (
                                <h3 className="text-white text-center mt-4">
                                    No transactions
                                </h3>
                            )
                    )
                }
            </div>
        </div>
    )
}

export default Transaction;