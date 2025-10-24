import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import defaultImage from "../src/assets/569109798_1542145253605208_6687226149270206611_n.jpg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const[open,setOpen]=useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Gamehub</Link>

      <nav className="flex items-center gap-6">
         <span className='flex' onClick={()=>setOpen(!open)}>
                {
                    open?
                    <X className='md:hidden'></X>:
                    <Menu className='md:hidden'></Menu>
                }
                 <ul className={`md:hidden absolute  duration-1000 text-black ${open?'top-10' :'-top-40'} bg-[#5f715f]`}>
                 <div className="grid grid-row-2">
                  <Link to="/">Home</Link>
                  <Link to="/developers">Developers</Link>
                </div>
                </ul>
            </span>
            
            <ul className='md:flex gap-5 my-10 hidden'>
                
                 <Link to="/">Home</Link>
                 <Link to="/developers">Developers</Link>
                
            </ul>

        {!user ? (
          <>
            <Link to="/login" className="bg-blue-600 px-3 py-1 rounded">Login</Link>
            <Link to="/register" className="bg-green-600 px-3 py-1 rounded">Register</Link>
          </>
        ) : (
          <>
            <img
              src={user.photoURL || defaultImage}
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => window.location.href = "/my-profile"}
            />
            <button onClick={logout} className="bg-red-600 px-3 py-1 rounded">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;


