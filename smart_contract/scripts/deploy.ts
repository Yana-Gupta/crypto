const hardhat = require("hardhat");

const main = async (): Promise<void> => {
    const Transactions = await hardhat.ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    console.log("Transactions deployed to 🚀 :", transactions.address);
}

main()
    .then()
    .catch((error) => {
        console.error(error);
        process.exit(1)
    })
    