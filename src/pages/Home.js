import React from 'react';

const Home = ({ startApp }) => {
  return (
    <div className="home-content">
      {/* 1. Hero Section */}
      <section style={{ display: 'flex', alignItems: 'center', gap: '60px', padding: '60px 8%', flexWrap: 'wrap', background: '#fff' }}>
        <div style={{ flex: 1.2, minWidth: '350px' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px', color: '#2d3436' }}>
            Health Tracking For <span style={{ color: '#3498db' }}>Smart Families.</span>
          </h1>
          <p style={{ fontSize: '19px', color: '#636e72', lineHeight: '1.6', marginBottom: '35px' }}>
            Join 10,000+ families using MediKeep+ to manage their daily medical routines. 
            With 8+ years of expertise, we ensure your family's health is never compromised.
          </p>
          <button className="btn-main" onClick={startApp} style={{ fontSize: '18px', padding: '15px 40px' }}>Open Digital Pharmacy →</button>
        </div>
        <div style={{ flex: 1, minWidth: '350px' }}>
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800" alt="Healthcare" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* 2. Groomed About Section */}
      <section style={{ padding: '80px 8%', background: '#fdfdfd', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>Why Families Trust Us</h2>
        <p style={{ color: '#636e72', marginBottom: '40px' }}>Innovating healthcare with 8+ years of technical excellence.</p>
        <div className="grid-layout" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="card" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#3498db' }}>👨‍👩‍👧‍👦 Family Sync</h4>
            <p>Connect your parents' and children's profiles. Get instant notifications in real-time.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#3498db' }}>💊 Stock Alerts</h4>
            <p>Our smart algorithm monitors your medicine box and alerts you before stock ends.</p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#3498db' }}>🔒 Secure Data</h4>
            <p>End-to-end encryption ensures your family's medical history stays private and safe.</p>
          </div>
        </div>
      </section>

      {/* 3. Contact Section (Left Info | Right Form) */}
      <section style={{ padding: '80px 8%', background: '#fff' }}>
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', background: '#fff', padding: '50px', borderRadius: '30px', boxShadow: '0 20px 60px rgba(0,0,0,0.06)', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Get In Touch</h2>
            <p style={{ color: '#636e72', marginBottom: '30px' }}>Our technical support team is available 24/7 to assist you.</p>
            <div style={{ marginBottom: '15px' }}>📍 <b>Address:</b> Shah Faisal Town, Karachi, Pakistan</div>
            <div style={{ marginBottom: '15px' }}>📞 <b>Phone:</b> +92 300 1234567</div>
            <div style={{ marginBottom: '15px' }}>✉️ <b>Email:</b> support@caresync.com</div>
          </div>
          <div style={{ flex: 1.5, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Full Name" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #dfe6e9', background: '#f9f9f9' }} />
            <input type="email" placeholder="Email Address" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #dfe6e9', background: '#f9f9f9' }} />
            <textarea placeholder="How can we help you?" style={{ height: '120px', padding: '15px', borderRadius: '10px', border: '1px solid #dfe6e9', background: '#f9f9f9' }}></textarea>
            <button className="btn-main">Send Message</button>
          </div>
        </div>
      </section>

      {/* 4. Professional Footer */}
      <footer className="footer-pro">
        <p style={{ marginBottom: '10px' }}>© 2026 MediKeep+ | All Rights Reserved</p>
        <p>Designed & Developed by <strong>Ubaid Ur Rehman, Senior Software Developer</strong></p>
      </footer>
    </div>
  );
};

export default Home;