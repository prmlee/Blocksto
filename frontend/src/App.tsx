import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome';
import Header from './components/header';
import Connection from './pages/connection';
import './App.css';

const App = () => {
  return (
    <div className="App container-fluid">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/connection" element={<Connection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
