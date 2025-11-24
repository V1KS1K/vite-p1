import React, { useState, useEffect } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Валидация (эффект из задания 21)
    const newErrors = {};
    if (form.name.length < 2) newErrors.name = 'Имя слишком короткое';
    if (!form.email.includes('@')) newErrors.email = 'Некорректный Email';
    if (form.message.length < 10) newErrors.message = 'Сообщение слишком короткое';
    
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0 && form.name && form.email);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) alert('Сообщение отправлено (демо)!');
  };

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <h1>Свяжитесь с нами</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--bg-card)', padding: '30px', borderRadius: '10px' }}>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Имя</label>
          <input 
            value={form.name} 
            onChange={e => setForm({...form, name: e.target.value})} 
            style={{ borderColor: errors.name ? 'var(--danger)' : '' }}
          />
          {errors.name && <small style={{ color: 'var(--danger)' }}>{errors.name}</small>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input 
            value={form.email} 
            onChange={e => setForm({...form, email: e.target.value})} 
            style={{ borderColor: errors.email ? 'var(--danger)' : '' }}
          />
           {errors.email && <small style={{ color: 'var(--danger)' }}>{errors.email}</small>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Сообщение</label>
          <textarea 
            value={form.message} 
            onChange={e => setForm({...form, message: e.target.value})}
            style={{ borderColor: errors.message ? 'var(--danger)' : '' }}
          />
           {errors.message && <small style={{ color: 'var(--danger)' }}>{errors.message}</small>}
        </div>

        <button type="submit" disabled={!isValid} style={{ width: '100%', opacity: isValid ? 1 : 0.5 }}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Contact;