import React, { useState } from 'react';

// Принимаем currentUserName как prop
function UserProfile({ currentUserName }) { 
  // Имитация локального профиля для гостя или фото
  const defaultProfile = {
    name: 'Программист',
    photo: ''
  };

  // ... (логика загрузки профиля из localStorage остается без изменений) ...

  const [profile, setProfile] = useState(() => {
    try {
      const stored = localStorage.getItem('userProfile');
      return stored ? JSON.parse(stored) : defaultProfile;
    } catch (error) {
      console.error("Ошибка загрузки профиля:", error);
      return defaultProfile;
    }
  });

  const saveProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
  };
  
  const displayUserName = currentUserName || profile.name; 

  const handleNameChange = (e) => {
    saveProfile({ ...profile, name: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveProfile({ ...profile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const imageStyle = {
    // УВЕЛИЧЕННЫЙ РАЗМЕР ФОТО
    width: '150px', 
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '4px solid var(--primary)', // Чуть толще рамка
    display: 'block',
    // ЦЕНТРИРОВАНИЕ ФОТО
    margin: '0 auto 20px auto', 
  };

  return (
    <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
      <h2>👋 Привет, {displayUserName}!</h2>
      
      {/* Отображение фото */}
      {profile.photo ? (
        <img src={profile.photo} alt="Профиль" style={imageStyle} />
      ) : (
        <div style={{...imageStyle, backgroundColor: 'var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem'}}>
          👤
        </div>
      )}

      {/* ... (остальной код для изменения имени и загрузки фото остается без изменений) ... */}
      
      {!currentUserName && (
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px', color: 'var(--text-muted)' }}>
            Изменить имя:
          </label>
          <input 
            type="text" 
            value={profile.name} 
            onChange={handleNameChange} 
            placeholder="Введите имя"
            style={{ textAlign: 'center' }}
          />
        </div>
      )}

      <label style={{ cursor: 'pointer', display: 'inline-block', padding: '8px 16px', borderRadius: '4px', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 'bold' }}>
        Загрузить фото
        <input 
          type="file" 
          accept="image/*" 
          onChange={handlePhotoUpload} 
          style={{ display: 'none' }}
        />
      </label>
    </div>
  );
}

export default UserProfile;