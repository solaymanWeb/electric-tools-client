import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
    const menuItem= <>
        <li className=''><Link to='/'>Home</Link></li>
        <li className=''><Link to='/dashboard'>Dashboard</Link></li>
        <li className=''><Link to='/blog'>Blog</Link></li>
        <li className=''><Link to='/portfolio'>portfolio</Link></li>
        <li className=''>{user? <button onClick={logout} className="btn btn-ghost">Log out</button> :<Link to='/login'>Login</Link>}</li>
        <li className=''><Link to='/signup'>Sign up</Link></li>
    </>
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 pl-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case  text-green-500 font-bold text-2xl">Electric <span className='text-orange-500'>Tools</span></Link>
    
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItem}
    </ul>
  </div>


  <div className='navbar-end '>
  <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
  
  {/* <div className='navbar-end '>
  <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div> */}

</div>


    );
};

export default Navbar;