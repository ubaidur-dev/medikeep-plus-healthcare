import React from 'react';

const Inventory = () => {
  const stock = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: ["Panadol", "Augmentin", "Softin", "Brufen", "Disprin", "Arinac", "Flagyl", "Calpol"][i % 8] + ` ${Math.floor(i/8 + 1)}`,
    qty: Math.floor(Math.random() * 20) + 1,
    img: `https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&sig=${i}`
  }));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ borderLeft: '6px solid #3498db', paddingLeft: '20px', marginBottom: '30px' }}>Pharmacy Inventory</h2>
      <div className="grid-layout">
        {stock.map(item => (
          <div key={item.id} className="card" style={{ textAlign: 'center' }}>
            <img src={item.img} alt="med" style={{ width: '100%', borderRadius: '12px', height: '150px', objectFit: 'cover' }} />
            <h4 style={{ margin: '10px 0' }}>{item.name}</h4>
            <div style={{ background: item.qty < 5 ? '#fff5f5' : '#f0fff4', color: item.qty < 5 ? '#e53e3e' : '#38a169', padding: '8px', borderRadius: '8px', fontWeight: 'bold' }}>
              Stock: {item.qty} Tablets
            </div>
            <button className="btn-main" style={{ width: '100%', marginTop: '15px' }}>Update Stock</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;