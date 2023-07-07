export const getTransactionsForConnectedAccount = async (
  accounts: any,
  connectedAccount: string
) => {
  const transactions: any = [];
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].sender.toLowerCase() == connectedAccount.toLowerCase()) {
      transactions.push({ ...accounts[i], status: 'sent' });
    }
    if (accounts[i].receiver.toLowerCase() == connectedAccount.toLowerCase()) {
      transactions.push({ ...accounts[i], status: 'recieved' });
    }
  }
  return transactions;
};
