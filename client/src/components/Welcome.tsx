import React, { useContext, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";


const commanStyles: string =
  "min-h-[70px] sm:px-0 px-3 sm:min-w-[120px] md:min-w-[94px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({
  placeholder,
  name,
  handleChange,
  type,
}: {
  placeholder: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  type: string;
  value: string | number;
}): JSX.Element => (
  <input
    placeholder={placeholder}
    type={type}
    name={name}
    step="0.0001"
    className="w-full rounded-md p-2 bg-transparent text-white border-none font-light text-sm outline-none white-glassmorphism my-3"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, name)}
  />
);

const Welcome = (): JSX.Element => {

  const { connectWallet,
    currentAccount,
    handleChange,
    formData,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(formData.value)
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return alert("Please fill all the fields")
    sendTransaction()
  };

  return (
    <div className="flex w-full items-center">
      <div className="flex md:flex-row flex-col md:p-20 py-12 px-4 w-full ">
        <div className="flex flex-1 flex-col md:mr-10 w-full">
          <h1 className="text-3xl sm:text-5xl text-white font-medium py-1">
            Send Crypto
            <br />
            across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and Sell crypto on Trade-Off.
          </p>
          <button
            type="button"
            onClick={() => {
              connectWallet();
            }}
            className="flex flex-row justify-center items-center my-5 bg-sky-600 p-3 rounded-full cursor-pointer hover:bg-sky-700 text-slate-50"
            disabled={currentAccount ? true : false}
          >
            <p className="text-base">
              {"Connect Wallet"}
            </p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commanStyles}`}>Reliability</div>
            <div className={`sm:rounded-none rounded-tr-2xl ${commanStyles}`}>
              Security
            </div>
            <div className={`sm:rounded-tr-2xl ${commanStyles}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${commanStyles}`}>Web 3.0</div>
            <div className={`sm:rounded-none rounded-bl-2xl ${commanStyles}`}>
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${commanStyles}`}>Blockchain</div>
          </div>
        </div>
        <div
          className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div
            className="p-3 justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full my-5 eth-card white-glassmorphism hover:shadow-2xl shadow-cyan-600">
            <div
              className="flex justify-between flex-col w-full h-full">
              <div
                className="flex justify-between items-start">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum
                    fontSize={24}
                    className="text-white" />
                </div>
                <BsInfoCircle
                  fontSize={17}
                  className="text-white" />
              </div>
              <div>
                <p
                  className="text-white font-md text-sm">{currentAccount
                    ? currentAccount.slice(0, 6) + '.........' + currentAccount.slice(currentAccount.length - 5)
                    : "Not Connected"}
                </p>
                <p
                  className="text-white font-bold text-lg">Ethereum</p>
              </div>
            </div>
          </div>
          <div
            className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              value={""}
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              value={""}
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (GIF)"
              name="keyword"
              type="text"
              value={""}
              handleChange={handleChange}
            />

            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              value={""}
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => await handleSubmit(event)}
                className="text-white w-full mt-2 border-[1px] p-2 border-slate-400 rounded-full cursor-pointor">
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
