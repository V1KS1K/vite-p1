import Statistics from './pages/Statistics'; // НОВЫЙ ИМПОРТ
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext'; // НОВЫЙ КОНТЕКСТ
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute'; // НОВЫЙ КОМПОНЕНТ
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import TechDetail from './pages/TechDetail';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Login from './pages/Login'; // НОВАЯ СТРАНИЦА
import Dashboard from './pages/Dashboard'; // НОВАЯ СТРАНИЦА
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      {/* Обертываем все приложение в AuthProvider, чтобы использовать логику авторизации */}
      {/* NOTE: AuthProvider должен находиться внутри Router (main.jsx), но мы его положили здесь, 
         потому что useNavigate() внутри AuthContext требует, чтобы роутер был выше.
         Чтобы избежать проблем, нужно обернуть в Router в main.jsx, а потом использовать AuthProvider здесь. */}
      <AuthProvider>
        <div className="App">
          <Navigation />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/technology/:id" element={<TechDetail />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/statistics" element={<Statistics />} /> {/* <--- НОВЫЙ МАРШРУТ */}

              {/* ЗАЩИЩЕННЫЙ МАРШРУТ (Pract 23) */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;