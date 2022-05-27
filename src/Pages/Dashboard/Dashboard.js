import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const Dashboard = () => {
    return (
        <section className='pt-8'>
            <div class="drawer drawer-mobile bg-gray-100">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                
            <Outlet></Outlet>

            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li><Link to='/dashboard'>My Order</Link></li>
                <li><Link to='/dashboard/myreview' >My Review</Link></li>
                <li><Link to='/dashboard/myprofile' >My Profile</Link></li>
   
                </ul>
            
            </div>
            </div>
        </section>
    );
};

export default Dashboard;