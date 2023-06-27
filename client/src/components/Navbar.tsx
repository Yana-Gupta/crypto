import { Key, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({
  title,
  classProps,
}: {
  title: String;
  classProps: String;
}): JSX.Element => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title} </li>;
};

const Navbar = (): JSX.Element => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <nav className="w-full flex flex md:justify-center h-20 justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={""} alt="LOGO" className="w-32 cursor-pointer text-white" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Wallet"].map((item: String, index: Key) => {
          return <NavbarItem key={index} title={item} classProps="text-lg" />;
        })}
        <li className="bg-sky-600 py-2 px-7 rounded-full cursor-pointer hover:bg-sky-700 mx-10">
          Login
        </li>
      </ul>
      <div className="item-end">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer right-0"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-2 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-4 text-white cursor-pointer">
              <AiOutlineClose
                fontSize={28}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {["Market", "Exchange", "Wallet"].map(
              (item: String, index: Key) => {
                return (
                  <NavbarItem
                    key={index}
                    title={item}
                    classProps="my-4 text-lg text-white"
                  />
                );
              }
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
