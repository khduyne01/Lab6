import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetailPage from './Pages/ProductDetailPage';
import NewsPage from './Pages/New'; // Đã chỉnh sửa tên file thành 'News'
import ContactPage from './Pages/Contact';
import CartPage from './Pages/Cart';
import StorePage from './Pages/Store';
import logoImage from './Components/Assets/image/OIP.jpg'; // Đảm bảo đường dẫn và phần mở rộng file chính xác

import './App.css';
import LoginForm from './Components/LoginForm/LoginForm'; // Đảm bảo đường dẫn chính xác
import RegisterForm from './Components/LoginForm/RegisterForm'; // Đảm bảo đường dẫn chính xác

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // Navigate to home page with search query
        navigate(`/?search=${event.target.value}`);
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (productId) => {
        const product = cart.find(item => item.id === productId);
        if (product.quantity > 1) {
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            removeFromCart(productId);
        }
    };

    // Dữ liệu sản phẩm
    const productCategories = {
        'Điện thoại': [
            { id: 1, name: 'Iphone 11', price: 8000000, image: 'https://th.bing.com/th/id/OIP.skFtm_-LsxHcb-J8JLwtWQHaHa?rs=1&pid=ImgDetMain/150' },
            { id: 2, name: 'Iphone 11 Pro Max', price: 10000000, image: 'https://th.bing.com/th/id/OIP.Vwti9cUxhM_fFHzbgghbxAHaHa?rs=1&pid=ImgDetMain/150' },
            { id: 3, name: 'Iphone 12', price: 12000000, image: 'https://th.bing.com/th/id/R.968721caf31c01ac9e7c2aa3b9fd1c6a?rik=v8E%2f378bpnTK%2bQ&pid=ImgRaw&r=0/150' },
            { id: 4, name: 'Iphone 13', price: 15000000, image: 'https://th.bing.com/th/id/OIP.sdtpSb2MSbfb9hnGnGeBJQHaHa?rs=1&pid=ImgDetMain/150' },
        ],
        'Laptop & PC': [
            { id: 7, name: 'Laptop Acer Nitro', price: 30000000, image: 'https://th.bing.com/th/id/R.135b21496741ede0deaa493d13617e97?rik=vLgxHnUQ079j6g&pid=ImgRaw&r=0/150' },
            { id: 8, name: 'Laptop Dell  ', price: 40000000, image: 'https://th.bing.com/th/id/OIP.E7s9xyTEf7KV97V81H2w7wHaFU?rs=1&pid=ImgDetMain/150' },
            { id: 9, name: 'Laptop HP ', price: 55000000, image: 'https://th.bing.com/th/id/R.639f4ebbcd0829fa74b547e844b3c99f?rik=s%2bG7ktuGs67whA&pid=ImgRaw&r=0/150' },
            { id: 10, name: 'Laptop Asus TUF ', price: 51000000, image: 'https://th.bing.com/th/id/OIP.LEL0ftfihGQJQDOwyLoraAHaFO?rs=1&pid=ImgDetMain/150' }
        ],
        'Phụ kiện': [
            { id: 13, name: 'Tai nghe', price: 2000000, image: 'https://th.bing.com/th/id/OIP.ph3AZUarDuVQhXgKz1asggAAAA?rs=1&pid=ImgDetMain/150' },
            { id: 14, name: 'Chuột không dây', price: 500000, image: 'https://th.bing.com/th/id/OIP.moagibrrj9Mcff_EWB790AHaHa?rs=1&pid=ImgDetMain/150' },
            { id: 15, name: 'Bàn phím cơ', price: 1500000, image: 'https://th.bing.com/th/id/OIP.d2pIez9QNOAWPaIEx1zcBAHaIv?rs=1&pid=ImgDetMain/150' },
            { id: 16, name: 'Ổ cứng SSD', price: 2500000, image: 'https://th.bing.com/th/id/R.87d618126a1bab04a4bc3874990f8c1c?rik=v6f8o6Ifrjud8Q&pid=ImgRaw&r=0/150' },
        ],
    };

    return (
        <div className="App">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logoImage} alt="Logo" className="logo-image" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/store">Cửa hàng</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>
                    <li>
                        <Link to="/news">Tin tức</Link>
                    </li>
                    <li>
                        <Link to="/cart">Giỏ hàng</Link>
                    </li>
                    <li className="search-item">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                            style={{ width: '300px', padding: '8px', fontSize: '16px' }} // Thay đổi style inline
                        />
                    </li>
                    <li>
                        <Link to="/login">Đăng nhập</Link>
                    </li>
                    <li>
                        <Link to="/register">Đăng ký</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home productCategories={productCategories} searchTerm={searchTerm} />} />
                <Route path="/store" element={<StorePage addToCart={addToCart} />} />
                <Route
                    path="/cart"
                    element={<CartPage cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                {/* Đường dẫn tới ProductDetailPage với productId */}
                <Route path="/product/:productId" element={<ProductDetailPage productCategories={productCategories} />} />
            </Routes>
        </div>
    );
}

export default App;
