import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome';
import Connection from './pages/connection';
import Main from './pages/main';
import Header from './components/header';
import { AuthContext } from './contexts/auth';
import Register from './pages/register';
import './App.css';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="App container-fluid">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/connection" element={<Connection />} />
          <Route
            path="/main"
            element={
              !isAuthenticated ? <Main /> : <Navigate to="/connection" />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
