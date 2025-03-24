import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import logo from "../../images/logo.png";
import { useState } from "react";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`cursor-pointer mx-4 ${classProps}`}>{title}</li>;
};

const Navabar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => {
          return <NavbarItem title={item} key={item + index} />;
        })}
        <NavbarItem
          title="Login"
          classProps="bg-blue-500 px-4 py-2 rounded-lg"
        />
      </ul>
      <div>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {toggleMenu && (
          <div className="absolute top-0 right-0 h-screen w-1/2 blue-glassmorphism flex flex-col justify-center items-center">
            <AiOutlineClose
              fontSize={28}
              color="white"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <ul className="list-none flex-col">
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => {
                  return (
                    <NavbarItem
                      title={item}
                      key={item + index}
                      classProps="text-white"
                    />
                  );
                }
              )}
              <NavbarItem
                title="Login"
                classProps="bg-white text-blue-500 px-4 py-2 rounded-lg"
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navabar;
