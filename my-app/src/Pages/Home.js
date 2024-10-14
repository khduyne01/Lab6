import React from 'react';
import { Link } from 'react-router-dom';

function Home({ productCategories }) {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Chào mừng đến với Website</h1>
            </header>
            <main style={styles.main}>
                <section style={styles.section}>
                    <h2>Giới thiệu</h2>
                    <p>Website của chúng tôi cung cấp các sản phẩm công nghệ hàng đầu với chất lượng đảm bảo và giá cả phải chăng.</p>
                </section>
                {/* Hiển thị từng nhóm sản phẩm */}
                {Object.keys(productCategories).map(category => (
                    <section key={category} style={styles.section}>
                        <h2>{category}</h2>
                        <div style={styles.products}>
                            {productCategories[category].map(product => (
                                <div key={product.id} style={styles.product}>
                                    <img src={product.image} alt={product.name} style={styles.productImage}/>
                                    <h3>{product.name}</h3>
                                    <p>Giá: {product.price.toLocaleString()} VND</p>
                                    {/* Sử dụng Link để chuyển hướng đến trang chi tiết sản phẩm */}
                                    <Link to={`/product/${product.id}`} style={styles.link}>
                                        Xem chi tiết
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
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
    },
    section: {
        margin: '10px 0',
    },
    products: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
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
    link: {
        display: 'block',
        marginTop: '10px',
        textDecoration: 'none',
        color: '#007bff',
        cursor: 'pointer',
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '10px',
        marginTop: '20px',
    },
};

export default Home;
