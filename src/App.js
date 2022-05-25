import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App mx-16">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
