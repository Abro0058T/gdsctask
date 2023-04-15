import logo from './logo.svg';
import './App.css';
import Home from './component/home/Home';
import { Route,Routes } from 'react-router-dom';
import ProductCard from './component/home/ProductCard';
import ProductDetails from './component/product/ProductDetails';
import Cart from "./component/Cart/Cart.js"
import Register from "./component/Register/Register.js"
import Sign from './component/Sign/Sign';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Sign/>}/>
      <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/:userID" element={<Home/>}/>
        <Route exact path="/:userID/product/:id" element={<ProductDetails/>}/>
        <Route exact path="/:userID/cart" element={<Cart/>}/>

      </Routes>
     {/* <Home/> */}
    </div>
  );
}

export default App;
