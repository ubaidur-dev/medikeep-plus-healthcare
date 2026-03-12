import React from 'react';

const Dashboard = () => {
  const familyData = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: ["Zubeda Begum", "Aslam Khan", "Ubaid Rehman", "Sana Ali", "Omer Sheikh", "Hina Khan", "Bilal Ahmed", "Rashid Minhas"][i % 8] + ` ${Math.floor(i/8 + 1)}`,
    role: ["Dadi", "Father", "Me", "Sister", "Brother", "Mother", "Cousin", "Uncle"][i % 8],
    status: i % 3 === 0 ? "Taken" : "Pending",
    img: `https://i.pravatar.cc/150?u=${i + 50}`
  }));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ borderLeft: '6px solid #3498db', paddingLeft: '20px', marginBottom: '30px' }}>Family Health Overview</h2>
      <div className="grid-layout">
        {familyData.map(member => (
          <div key={member.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={member.img} alt="pro" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #3498db' }} />
              <div style={{ marginLeft: '15px' }}>
                <h4 style={{ margin: 0 }}>{member.name}</h4>
                <p style={{ margin: 0, color: '#7f8c8d', fontSize: '13px' }}>{member.role}</p>
              </div>
              <span style={{ marginLeft: 'auto', fontWeight: 'bold', color: member.status === 'Taken' ? '#2ecc71' : '#e67e22' }}>{member.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;