import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { fetchData } from './api';
//import { Link } from 'react-router-dom';
import products from './Data'; // تأكد من المسار الصحيح للملف




const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // 🔍 تخزين كلمة البحث

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`تمت إضافة ${product.name} إلى السلة`);
  };
  const handleCartClick = () => {
    navigate('/cart', { state: { cart } }); // يرسل السلة لصفحة cart
  };

  const handleLoginClick = () => {
    navigate('/login'); // صفحة تسجيل الدخول
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="main-container">
      {/* Header */}
      <div className="header">
        <img src="/images/sclogo.png" alt="Logo" className="logoo" />
        <div className="icons">
          <div className="tooltip-container">
            <button className="icon-btn" onClick={handleCartClick}>🛒</button>
           
          </div>

          <div className="tooltip-container">
            <button className="icon-btn" onClick={handleLoginClick}>👤</button>
            <span className="tooltip">تسجيل الدخول</span>
          </div>
        </div>
      </div>



      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="كلمات البحث..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Banner */}
      <div className="banner">
        <img src="/images/image websit.jpg" alt="Banner" />
      </div>

      {/* Product Cards */}
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



export default HomePage;

/*{/* Search */ 

/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: " بريكات ",
      price: 40,
      quantity: 2,
      image: "/images/Brakes.jpg",
    },
    {
      id: 2,
      name: " دفرنش",
      price: 200,
      quantity: 1,
      image: "/images/Differential.jpg",
    },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 سلة المشتريات</h1>

      <button
        className="back-btn"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate('/');
          }
        }}
      >
        ⬅️ العودة
      </button>


      {cartItems.length === 0 ? (
        <p className="empty-message">السلة فارغة.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>الكمية: {item.quantity}</p>
                  <p>السعر: {item.price} شيكل</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>الإجمالي: {totalPrice} شيكل</h2>
            <button
              className="checkout-btn"
              onClick={() => alert('تم إتمام الشراء بنجاح!')}
            >
              إتمام الشراء
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();

  const initialItems = [
    {
      id: 1,
      name: "بريكات",
      price: 40,
      quantity: 2,
      image: "/images/Brakes.jpg",
    },
    {
      id: 2,
      name: "دفرنش",
      price: 200,
      quantity: 1,
      image: "/images/Differential.jpg",
    },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta), // لا تسمح بكمية أقل من 1
            }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 سلة المشتريات</h1>

      <button
        className="back-btn"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate('/');
          }
        }}
      >
        ➡️ العودة
      </button>

      {cartItems.length === 0 ? (
        <p className="empty-message">السلة فارغة.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <p>السعر: {item.price} شيكل</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>الإجمالي: {totalPrice} شيكل</h2>
            <button
  className="checkout-btn"
  onClick={() =>
    navigate('/Part', {
      state: {
        cartItems,
        totalPrice,
        customerName: 'العميل الكريم', 
      },
    })
  }
>
  إتمام الشراء
</button>
          </div>
        </>
      )}
    </div>
  );
};

//export default Cart;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Part.css';

const Part = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, totalPrice, customerName } = location.state || {
        cartItems: [],
        totalPrice: 0,
        customerName: '',
    };

    return (
        <div className="invoice-container">

            <div className="invoice-header">
                <img src="/images/sclogo.png" alt="شعار الشركة" className="company-logo" />
            </div>
            <h1>🧾 فاتورة الشراء</h1>
            <p><strong>العميل:</strong> {customerName}</p>

            <table className="invoice-table">
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>السعر</th>
                        <th>الكمية</th>
                        <th>الإجمالي</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price} شيكل</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity} شيكل</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="total">المجموع الكلي: {totalPrice} شيكل</h2>

            <button onClick={() => window.print()} className="print-btn">
                طباعة الفاتورة 🖨️
            </button>

            <br></br>

            <button className="back-btn" onClick={() => navigate('/')}>
                العودة للصفحة الرئيسية
            </button>
        </div>
    );
};

//export default Part;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Cart.css';

//const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const passedCartItems = location.state?.cart || [];

  const [cartItems, setCartItems] = useState(
    passedCartItems.map((item) => ({ ...item, quantity: item.quantity || 1 }))
  );

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 سلة المشتريات</h1>

      <button
        className="back-btn"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate('/');
          }
        }}
      >
        ➡️ العودة
      </button>

      {cartItems.length === 0 ? (
        <p className="empty-message">السلة فارغة.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <p>السعر: {item.price} شيكل</p>
                  <button onClick={() => onRemoveFromCart(index)}>🗑️ حذف</button>

                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>الإجمالي: {totalPrice} شيكل</h2>
            <button
              className="checkout-btn"
              onClick={() =>
                navigate('/Part', {
                  state: {
                    cartItems,
                    totalPrice,
                    customerName: 'العميل الكريم',
                  },
                })
              }
            >
              إتمام الشراء
            </button>
          </div>
        </>
      )}
    </div>
  );
//};

//export default Cart;

// ✅ جلب البيانات من API عند تحميل الصفحة
  useEffect(() => {
    fetchData('products') // ← غيّر endpoint إذا كان مختلفاً
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('حدث خطأ أثناء جلب المنتجات:', error);
        setLoading(false);
      });
  }, []);

   /*<Route path="/" element={<HomePage />} />

   
   
 <a href="#products" className="nav-link">
          <span>🔧</span> المنتجات
        </a>
        <a href="#contact" className="nav-link">
          <span>📞</span> اتصل بنا
        </a>*/

          // عند تحميل الصفحة نحدد المنتجات محليًا
          useEffect(() => {
            setProducts(Products); // تحديد المنتجات من Products مباشرةً
            setLoading(false); // إنهاء حالة التحميل بعد تحديد البيانات
          }, []);
        
          // تصفية المنتجات بناءً على ما يكتبه المستخدم في شريط البحث
          const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        
          // إضافة منتج إلى السلة
          const addToCart = (product) => {
            onAddToCart(product); // نمرر المنتج إلى الوظيفة المقررة
          };


        //    <button onClick={() => setShowLogin(false)} className={!showLogin ? 'active' : ''}>إنشاء حساب</button>
            //<button onClick={() => setShowLogin(true)} className={showLogin ? 'active' : ''}>تسجيل الدخول</button>