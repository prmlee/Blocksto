import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './index.css';

const Header = () => {
  const { isAuthenticated, disconnect } = useContext(AuthContext);
  const navigate = useNavigate();

  const clickConnectButton = () => {
    if (isAuthenticated) {
      disconnect();
    } else {
      navigate('/connection');
    }
  };

  return (
    <div className="row align-items-center">
      <div className="col">
        <a href="/welcome" className="d-flex align-items-center">
          <img src="./images/logo.png" alt="Blocksto Logo PNG" />
          <span className="logo-title">BLOCKSTO</span>
        </a>
      </div>
      <div className="col d-flex justify-content-end">
        <a href="/welcome" className="button">
          Accueil
        </a>
        <a className="button" role="button" onClick={clickConnectButton}>
          {!isAuthenticated ? 'Connexion' : 'Se déconnecter'}
        </a>
      </div>
    </div>
  );
};

export default Header;
