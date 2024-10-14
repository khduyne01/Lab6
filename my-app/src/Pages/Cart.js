import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import file CSS

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Lấy dữ liệu từ localStorage khi component được tải
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const saveCartToLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        saveCartToLocalStorage(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        saveCartToLocalStorage(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const product = cart.find(item => item.id === productId);
        if (product.quantity > 1) {
            const updatedCart = cart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
            setCart(updatedCart);
            saveCartToLocalStorage(updatedCart);
        } else {
            removeFromCart(productId);
        }
    };

    const handleCheckout = () => {
        alert('Thanh toán thành công!');
        // Xóa giỏ hàng sau khi thanh toán
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <section className="cart-container">
            <h2>Giỏ hàng</h2>
            {cart.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Giá: {item.price}</p>
                                    <p>Số lượng: {item.quantity}</p>
                                </div>
                                <div className="cart-item-controls">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span className="cart-item-quantity">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Xóa</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <p>Tổng tiền: {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </div>
                    <button className="checkout-button" onClick={handleCheckout}>Thanh toán</button>
                </div>
            )}
        </section>
    );
}

export default Cart;
 