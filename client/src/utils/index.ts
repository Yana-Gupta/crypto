export const getTransactionsForConnectedAccount = async (accounts: any, connectedAccount: string) => {
    const transactions: any = []
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].sender.toLowerCase() == connectedAccount.toLowerCase()) {
            transactions.push({ ...accounts[i], staus: 'sent' })
        }
        if (accounts[i].receiver.toLowerCase() == connectedAccount.toLowerCase()) {
            transactions.push(accounts[i], [{ staus: 'received' }])
        }
    }
    return transactions;
}