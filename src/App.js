import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import NotFound404 from './components/NotFound404/NotFound404'
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div className="">
    <Header></Header>

    <Routes>

      <Route path="/" element={<Shop></Shop>}/>
      <Route path="/shop" element={<Shop></Shop>}/>
      <Route path="/orders" element={<Orders></Orders>}/>
      <Route path="/inventory" element={<Inventory></Inventory>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/signup" element={<SignUp></SignUp>}/>
      <Route path="*" element={<NotFound404></NotFound404>}/>

    </Routes>
    
    </div>
  );
}

export default App;
