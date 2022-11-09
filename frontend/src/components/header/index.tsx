import './index.css';

const Header = () => {
  const isAuthenticated = false;

  const connect = () => {
    if (isAuthenticated) {
      console.log('// comming soon!');
      return;
    }
    window.location.href = '/connection';
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
        <a className="button" role="button" onClick={connect}>
          {!isAuthenticated ? 'Connexion' : 'Se déconnecter'}
        </a>
      </div>
    </div>
  );
};

export default Header;
