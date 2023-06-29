import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "dotenv/config";

import { resolve } from "path";

const chainIds = {
  goerli: 5,
  hardhat: 31337,
};

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const URL = process.env.ALCHEMY_URL || "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.17" },
    ],
  },
  networks: {
    goerli: {
      url: URL,
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 5,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0
    },
    player: {
      default: 1,
    }
  }
};

export default config;