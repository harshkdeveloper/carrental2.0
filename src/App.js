import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Addcardetails from './components/Addcardetails';
import Buycars from './components/Buycars';
import CarRent from './components/CarRent';
import UpdateCar from './components/UpdateCar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
     
<Routes>

<Route exact path='/' element={<Home/>}/>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/addcar' element={<Addcardetails/>}/>
  <Route path='/buycar' element={<Buycars/>}/>
  <Route path='/updatecar/:id' element={<UpdateCar/>}/>
  <Route path='/agenthome' element={<CarRent/>}/>
  {/* <Route path='/' element={<Buycars/>}/> */}
</Routes>
</BrowserRouter>    </div>
  );
}

export default App;
