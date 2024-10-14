import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage({ productCategories }) {
    const { productId } = useParams();

    // Tìm sản phẩm dựa trên productId
    let product = null;
    for (const category in productCategories) {
        product = productCategories[category].find(item => item.id.toString() === productId);
        if (product) {
            break;
        }
    }

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.productImageContainer}>
                <img src={product.image} alt={product.name} style={styles.productImage} />
            </div>
            <div style={styles.productInfo}>
                <h2 style={styles.productName}>{product.name}</h2>
                <p style={styles.productPrice}>Giá: {product.price.toLocaleString()} VND</p>
                <p style={styles.productDescription}>Mô tả: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                <p style={styles.productRating}>Đánh giá: *****</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    },
    productInfo: {
        flex: '1 1 auto',
        textAlign: 'left',
        marginLeft: '20px',  // Để tách biệt với hình ảnh sản phẩm
    },
    productImageContainer: {
        flex: '0 0 auto',
    },
    productImage: {
        width: '100%',
        maxWidth: '600px',  // Đã làm hình lớn hơn
        height: 'auto',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    productName: {
        fontSize: '32px',  // Chữ bự hơn
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    productPrice: {
        fontSize: '20px',  // Chữ lớn hơn
        color: '#333',
    },
    productDescription: {
        fontSize: '18px',  // Chữ lớn hơn
        lineHeight: '1.5',
    },
    productRating: {
        fontSize: '18px',  // Chữ lớn hơn
        color: 'gold',
    },
};

export default ProductDetailPage;
