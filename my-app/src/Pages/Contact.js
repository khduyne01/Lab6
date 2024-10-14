import React from 'react';

function Contact() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Liên hệ với chúng tôi</h1>
            </header>
            <main style={styles.main}>
                <section style={styles.section}>
                    <h2>Thông tin liên hệ</h2>
                    <p>Email: support@shopelectronics.com</p>
                    <p>Điện thoại: 0123 456 789</p>
                    <p>Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                </section>
                <section style={styles.section}>
                    <h2>Mẫu biểu liên hệ</h2>
                    <form style={styles.form}>
                        <label style={styles.label}>
                            Tên:
                            <input type="text" name="name" style={styles.input} />
                        </label>
                        <label style={styles.label}>
                            Email:
                            <input type="email" name="email" style={styles.input} />
                        </label>
                        <label style={styles.label}>
                            Tin nhắn:
                            <textarea name="message" style={styles.textarea}></textarea>
                        </label>
                        <button type="submit" style={styles.button}>Gửi</button>
                    </form>
                </section>
                <section style={styles.section}>
                    <h2>Bản đồ</h2>
                    <div style={styles.map}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4515552701224!2d106.69767041480099!3d10.77725969232053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efd5a155f6b%3A0x2f76e1fcf8a0af2d!2s123%20%C4%90%C6%B0%E1%BB%9Dng%20ABC%2C%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%20700000%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1623308985660!5m2!1sen!2sus" 
                            width="600" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Google Map">
                        </iframe>
                    </div>
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
    section: {
        margin: '20px 0',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: '0 auto',
    },
    label: {
        margin: '10px 0',
        width: '100%',
        textAlign: 'left',
    },
    input: {
        padding: '10px',
        margin: '5px 0',
        width: '100%',
        boxSizing: 'border-box',
    },
    textarea: {
        padding: '10px',
        margin: '5px 0',
        width: '100%',
        height: '100px',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    map: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '10px',
        marginTop: '20px',
    }
};

export default Contact;
