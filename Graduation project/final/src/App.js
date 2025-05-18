
/*import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./component/HomePage"
//import LoginPage from './component/Login';
//import Product1 from './component/Product1';
//import LoginPage from './component/Login';
//import Product2 from './component/Product2'


function App() {
  return (
    <HomePage/>
   
  );
}*/


//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomePage from './component/HomePage';
//import Cart from './component/Cart';
//import LoginPage from './component/Login';
// ... واستيراد باقي الصفحات



import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import Cart from './component/Cart';
import LoginPage from './component/Login';
import Part from './component/Part';
import Signup from './component/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]); // تخزين السلة

  // إضافة منتج إلى السلة
 const handleAddToCart = (product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    // إذا كان موجود، زوّد الكمية
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    // إذا لم يكن موجود، أضفه مع quantity = 1
    setCartItems((prevItems) => [
      ...prevItems,
      { ...product, quantity: 1 }
    ]);
  }
};

  // إزالة منتج من السلة
  const handleRemoveFromCart = (idToRemove) => {
  const newCart = cartItems.filter((item) => item.id !== idToRemove);
  setCartItems(newCart);
};
  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} /> {/* تمرير السلة إلى Navbar */}
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route  path="/cart"
  element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/part" element={<Part />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;