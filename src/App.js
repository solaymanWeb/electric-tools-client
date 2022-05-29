import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './Pages/AllReview/AllReview';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/Signup/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Pages/Dashboard/AddProduct';
import AllProduct from './Pages/Home/AllProduct';
import Payment from './Pages/Dashboard/Payment';
import ManageProducts from './Pages/Dashboard/ManageProducts';


function App() {
  return (
    <div className="App mx-16">
      <Navbar></Navbar>
      <Routes>
        <Route path='' element={<Home/>} ></Route>
        <Route path='purchase/:id' element={<Purchase/>}></Route>
        <Route path='dashboard' element={
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>    
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myreview' element={<MyReview/>}></Route>
          <Route path='myprofile' element={<MyProfile/>}></Route>
          <Route path='addproduct' element={<AddProduct/>}></Route>
          <Route path='manageproducts' element={<ManageProducts/>}></Route>
          
        </Route>
        <Route path='payment' element={<Payment/>} ></Route>
        <Route path='allreview' element={<AllReview/>}></Route>
        <Route path='allproduct' element={<AllProduct/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
