import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { getTransactionsForConnectedAccount } from "../utils/index"

import TransactionLoader from "./TransactionLoader";



const Transaction = (): JSX.Element => {
    const { getAllTransactions, currentAccount } = useContext<any>(TransactionContext);
    const [transactions, setTransactions] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    window.onload = async () => {
        const transactions = await getAllTransactions();
        if (currentAccount) {
            setLoading(true)
            const transaction = await getTransactionsForConnectedAccount(transactions, currentAccount);
            setTransactions(transaction)
            console.log(transactions)
            setLoading(false)
        }
    }

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {
                    currentAccount ?
                        (<h3 className="text-white text-3xl text-center my-2">
                            Latest Transactions
                        </h3>)
                        : (<h3 className="text-white text-3xl text-center my-2">
                            Connect Wallet to see transactions
                        </h3>
                        )
                }
                {transactions ?
                    (<h3 className="text-white">I am here</h3>)
                    : (loading ? (<TransactionLoader />) : (<h3 className="text-white">No transactions</h3>))}
            </div>
        </div>
    )
}

export default Transaction;