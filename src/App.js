import './App.css';
import dotenv from "dotenv"

import Header from "./components/common/header";
 import Footer from './components/common/footer';
 import Home from './pages';
import React from 'react';
import About from './pages/about';
import Cart from './pages/cart';
import Blog from './pages/blog';
import Shop from './pages/shop';
import Wishlist from './pages/wishlist';
import ProductDetail from './pages/ProductDetail';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import User from "./pages/Login"
import Register from "./pages/Register"
import Formdata from './pages/formdata';
const currentURL = window.location.pathname;

dotenv.config()

function App() {

  return (
    <>

      <BrowserRouter>
          <Routes>
            
          <Route path='/' element={<Header />}> 
              <Route exact element={ <Home/>} path='/'/>
              <Route element={ <Shop/>} path='/shop'/>
              <Route element={ <Blog/>} path='/blog'/>
              <Route element={ <Wishlist/>} path='/whishlist'/>
              <Route element={ <Cart/>} path='/cart'/>
              <Route element={ <About/>} path='/about'/>
              <Route element={ <ProductDetail/>} path='/product-detail/'/>
              <Route element={<User/>} path = '/login'/>
              <Route element={<Register/>} path = '/register'/>
              <Route element ={<Formdata/>} path='/formdata'/>
          </Route>
              
              

          </Routes>
      </BrowserRouter>
     
      <Footer />
      
      
    </>
  )
} 

export default App;