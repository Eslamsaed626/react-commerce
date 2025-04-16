
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/navbar/Nav';

import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopcategory/ShopCategory';

import Cart from './pages/cart/Cart';
import LoginSignup from './pages/loginSignup/LoginSignup';
import Products from './pages/products/Products';
import Footer from './components/footer/Footer';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"></ShopCategory>}></Route>


          <Route path='/product' element={<Products></Products>}>
            <Route path=':productId' element={<Products></Products>}></Route>
          </Route>

          <Route path='/cart' element={<Cart></Cart>}></Route>


          <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
