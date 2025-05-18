/*import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { fetchData } from './api'; // حذف Data.js
//import products from './Data';

const HomePage = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true); // افتراض أنه جاري التحميل
  const [products, setProducts] = useState([]);

  // تحميل المنتجات من API
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchData('products'); // تأكد من صحة هذا المسار
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('خطأ أثناء تحميل المنتجات:', error);
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // تصفية المنتجات حسب البحث
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    onAddToCart(product);
  };

  if (loading) return <p>جاري تحميل المنتجات...</p>;

  return (
    <div className="main-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="كلمات البحث..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="banner">
        <img src="/images/image websit.jpg" alt="Banner" />
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product._id || product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <div className="price-cart">
                  <span
                    className="cart-icon"
                    onClick={() => addToCart(product)}
                    title="أضف إلى السلة"
                    style={{ cursor: 'pointer' }}
                  >
                    🛒
                  </span>
                  <span className="price">{product.price} شيكل</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">لا توجد نتائج مطابقة</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;*/

import React, { useState } from 'react';
import './HomePage.css';
import products from './Data.jsx';

const HomePage = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="كلمات البحث..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
       <h1>مرحبًا بكم في متجر قطع السيارات</h1>
    <p>نوفر لك أفضل القطع بأفضل الأسعار</p>

      {/* Banner */}
      <div className="banner">
       
        <img src="/images/image websit.jpg" alt="Banner" className="banner-bg" />
  <div className="overlay" />
  <div className="banner-text">
   
  </div>
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <div className="price-cart">
                  <span
                    className="cart-icon"
                    onClick={() => onAddToCart(product)}
                    title="أضف إلى السلة"
                    style={{ cursor: 'pointer' }}
                  >
                    🛒
                  </span>
                  <span className="price">{product.price} شيكل</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">لا توجد نتائج مطابقة</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;