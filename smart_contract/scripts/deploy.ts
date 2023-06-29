import { ethers, network } from "hardhat";

import { developmentChains } from "../helper-hardhat-config";

import verify from "./verify";

const DEVELOPMENT_CHAINS = developmentChains

const main = async (): Promise<void> => {
    console.log("Deploying contracts...")
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    console.log("Transactions deployed to 🚀 :", transactions.address);

    if ( !DEVELOPMENT_CHAINS.includes(network.name) ) {
        console.log("Waiting for 5 confirmations...")
        await transactions.deployTransaction.wait(5)
        console.log("Verifying contract on Etherscan...")
        await new Promise(resolve => setTimeout(resolve, 10000));
        await verify(transactions.address as string, [])
    }
}

main()
    .then()
    .catch((error) => {
        console.error(error);
        process.exit(1)
    })
    