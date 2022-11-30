import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../Assest/logo.png'
import "./Navbar.css"

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  const menuItem = <>
    <li ><Link to='/'>Home</Link></li>
    <li ><Link to='/dashboard'>Dashboard</Link></li>
    <li >{user ? <button onClick={logout} className="btn btn-ghost text-md pb-1">Log out</button> : <Link to='/login'>Login</Link>}</li>
    <li ><Link to='/signup'>Sign up</Link></li>
  </>
  return (
    <div className="header-main ">
      <div className='navbar-bg container mx-auto'>
      <div className="navbar  text-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 pl-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
        <Link to='/'>
          <div className='logo'>
          <img src={logo} alt="" />
          </div>
        </Link>

      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItem}
        </ul>
      </div>
      <div className='navbar-end lg:hidden '>
        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost  lg:hidden  ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;