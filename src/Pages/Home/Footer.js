import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-neutral container mx-auto'>
     <footer className="footer text-xl p-10  text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <Link to='#' className="link link-hover">Branding</Link>
    <Link to='#' className="link link-hover">Design</Link>
    <Link to='#' className="link link-hover">Marketing</Link>
    <Link to='#' className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to='#' className="link link-hover">About us</Link>
    <Link to='#' className="link link-hover">Contact</Link>
    <Link to='#' className="link link-hover">Jobs</Link>
    <Link to='#' className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to='#' className="link link-hover">Terms of use</Link>
    <Link to='#' className="link link-hover">Privacy policy</Link>
    <Link to='#' className="link link-hover">Cookie policy</Link>
  </div>
  
</footer>
<div className=' text-xl text-neutral-content py-5 border-t-2'>copy &copy; solayman khan</div>
        </div>
    );
};

export default Footer;