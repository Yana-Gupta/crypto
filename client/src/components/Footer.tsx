import Logo from '../../assets/images/Logo.png';

const Footer = (): JSX.Element => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col gradient-bg-footer text-white">
      <div className="w-full flex flex-col md:flex-row justify-center items-center my-4">
        <div className="flex flex-[0.5]  justify-center items-center ">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-center gap-3 lg:gap-8 items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Market
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Exchange
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Wallets
          </p>
        </div>
        <div className="flex justify-center align-center items-center flex-col mt-5 px-4 lg:px-12 xl:mr-32">
          <p className="text-white text-sm text-center">
            Come join us and hear for the unexpected miracle
          </p>
          <p className="text-white text-sm text-center font-medium mt-2">
            info@tradeoff.yanagupta.me
          </p>
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left pl-4  pb-2 text-xs">@tradeoff23</p>
        <p className="text-white text-right text-xs pr-4 pb-2">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
