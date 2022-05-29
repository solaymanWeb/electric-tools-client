import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const Dashboard = () => {
    return (
        <section className='pt-8'>
            <div className="drawer drawer-mobile bg-gray-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                
            <Outlet></Outlet>

            </div> 
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li><Link to='/dashboard'>My Order</Link></li>
                <li><Link to='/dashboard/myreview' >Add a Review</Link></li>
                <li><Link to='/dashboard/addproduct' >Add a Item</Link></li>
                <li><Link to='/dashboard/manageproducts' >Manage Products</Link></li>
                <li><Link to='/dashboard/myprofile' >My Profile</Link></li>
              
   
                </ul>
            
            </div>
            </div>
        </section>
    );
};

export default Dashboard;