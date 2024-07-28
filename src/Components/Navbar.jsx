import { useState } from "react";
import { FaPhoneAlt, FaCaretDown, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

const DropdownLinks = [
  { name: "Our Service", link: "/service" },
  { name: "Top Brand", link: "/brand" },
  { name: "Location", link: "/location" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="bg-white shadow-md sticky top-0 w-full text-black z-50">
      <div className="bg-gradient-to-r from-gray-400 to-yellow-100 shadow-lg text-lg hidden sm:block">
        <div className="container p-10 py-[2px]">
          <div className="flex justify-between">
            <p>20% off on all products</p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-gray-600 text-sm mr-2" />
              Mobile: +8801712078977
            </p>
          </div>
        </div>
      </div>
      <div className="px-3 bg-slate-500 sm:py-0">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img className="h-12 w-12 rounded-full p-1" src={logo} alt="Logo" />
          </Link>
          <div className="p-1 flex items-center text-xl">
            <ul className="hidden sm:flex gap-10 items-center">
              <li className="py-4 ">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/blog" onClick={() => window.scrollTo(0, 0)}>
                  Blog
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/places" onClick={() => window.scrollTo(0, 0)}>
                  Best Places
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About
                </NavLink>
              </li>
              <li className="py-4 relative group">
                <div className="flex items-center cursor-pointer">
                  <span>Quick Links</span>
                  <FaCaretDown className="ml-1 transition-all duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute left-0 top-full mt-2 z-50 hidden group-hover:block shadow-md text-black p-2 bg-white w-[150px]">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li
                        key={data.name}
                        className="py-1 border-black  hover:bg-gray-200 last:border-b-0"
                      >
                        <Link className="inline-block w-full" to={data.link}>
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <button className="bg-gradient-to-t from-gray-300 to-yellow-400 rounded-full p-2 font-semibold transform transition-transform duration-300 ease-out hover:scale-110 hover:from-yellow-400 hover:to-gray-300">
                  Book Now
                </button>
              </li>
            </ul>
            <div onClick={toggleMenu} className="cursor-pointer gap-3 p-2">
              {showMenu ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        >
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transition-transform duration-300 transform ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <ul className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <FaUser size={40} />
                  <p className="text-sm">Rafiul Hoque</p>
                </div>
                <hr className="my-2 border-black" />
                <li className="py-2">
                  <NavLink
                    to="/about"
                    onClick={() => {
                      toggleMenu();
                      window.scrollTo(0, 0);
                    }}
                  >
                    About
                  </NavLink>
                </li>
                {DropdownLinks.map((data) => (
                  <li key={data.name} className="py-2">
                    <Link
                      to={data.link}
                      onClick={() => {
                        toggleMenu();
                        window.scrollTo(0, 0);
                      }}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
