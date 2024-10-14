import React, { useState } from 'react';

// Khai báo Component Store
function Store() {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');

    const products = {
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

    // Lấy danh sách danh mục từ Object keys của products
    const categories = ['Tất cả', ...Object.keys(products)];

    // Lọc sản phẩm theo danh mục
    const filteredProducts = selectedCategory === 'Tất cả' 
        ? Object.values(products).flat()
        : products[selectedCategory];

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        let updatedCart;
        if (existingProduct) {
            updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            const newCartItem = { ...product, quantity: 1, createdAt: new Date() };
            updatedCart = [...cart, newCartItem];
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Lưu vào localStorage
    };

    
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Cửa hàng điện tử</h1>
            </header>
            <main style={styles.main}>
                <section style={styles.leftPanel}>
                    <h2>Tìm kiếm</h2>
                    <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={styles.select}>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </section>
                <section style={styles.products}>
                    {filteredProducts.map(product => (
                        <div key={product.id} style={styles.product}>
                            <img src={product.image} alt={product.name} style={styles.productImage} />
                            <h3>{product.name}</h3>
                            <p>Giá: {product.price.toLocaleString()} VND</p>
                            <button style={styles.button} onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                        </div>
                    ))}
                </section>
            </main>
            <footer style={styles.footer}>
                <p>&copy; 2024 Shop Điện Tử. Mọi quyền được bảo lưu.</p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
    },
    header: {
        backgroundColor: '#4CAF50',
        padding: '10px',
        color: 'white',
    },
    main: {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    leftPanel: {
        flex: '1 1 20%',
        minWidth: '200px',
        marginRight: '20px',
        textAlign: 'left',
    },
    select: {
        padding: '10px',
        fontSize: '16px',
    },
    products: {
        flex: '2 1 60%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    product: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        margin: '10px',
        maxWidth: '200px',
        textAlign: 'center',
    },
    productImage: {
        width: '100%',
        height: 'auto',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '10px',
        marginTop: '20px',
    }
};

export default Store;
