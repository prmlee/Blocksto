import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome';
import Connection from './pages/connection';
import Main from './pages/main';
import Header from './components/header';
import { AuthContext, AuthProvider } from './contexts/auth';
import Register from './pages/register';
import './App.css';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/main"
            element={isAuthenticated ? <Main /> : <Navigate to="/connection" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
