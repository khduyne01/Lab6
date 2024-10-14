import React from 'react';

function NewProducts() {
    const newProducts = [
        {
            id: 1,
            name: 'Điện thoại thông minh XYZ',
            description: 'Điện thoại thông minh XYZ với màn hình tràn viền và camera chất lượng cao, dự kiến ra mắt vào tháng 8/2024.',
            image: 'https://via.placeholder.com/150',
            releaseDate: '08/2024'
        },
        {
            id: 2,
            name: 'Laptop ABC',
            description: 'Laptop ABC siêu mỏng, hiệu năng cao, pin lâu, dự kiến ra mắt vào tháng 9/2024.',
            image: 'https://via.placeholder.com/150',
            releaseDate: '09/2024'
        },
        {
            id: 3,
            name: 'Máy tính bảng 123',
            description: 'Máy tính bảng 123 với màn hình lớn và pin khủng, hỗ trợ 5G, dự kiến ra mắt vào tháng 10/2024.',
            image: 'https://via.placeholder.com/150',
            releaseDate: '10/2024'
        },
    ];

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Sản phẩm mới</h1>
            </header>
            <main style={styles.main}>
                <section style={styles.products}>
                    {newProducts.map(product => (
                        <div key={product.id} style={styles.product}>
                            <img src={product.image} alt={product.name} style={styles.productImage} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p><strong>Ngày ra mắt:</strong> {product.releaseDate}</p>
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
    },
    products: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    product: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        margin: '10px',
        maxWidth: '300px',
        textAlign: 'center',
    },
    productImage: {
        width: '100%',
        height: 'auto',
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '10px',
        marginTop: '20px',
    }
};

export default NewProducts;
