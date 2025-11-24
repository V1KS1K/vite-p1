import React from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000, backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'var(--bg-card)',
        padding: '25px', borderRadius: '10px',
        width: '500px', maxWidth: '90%',
        border: '1px solid var(--primary)',
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)'
      }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <h2 style={{ margin: 0, color: 'var(--primary)' }}>{title}</h2>
          <button onClick={onClose} style={{ border: 'none', fontSize: '1.5rem', padding: 0 }}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;