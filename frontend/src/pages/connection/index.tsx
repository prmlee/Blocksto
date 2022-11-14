import { useState } from 'react';
import './index.css';

const Connection = () => {
  const [blockstoId, setBlockstoId] = useState<string>('');
  const [blockstoPassword, setBlockstoPassword] = useState<string>('');

  const onLogin = () => {
    console.log(blockstoId, blockstoPassword);
  };

  return (
    <div className="row align-items-end connection">
      <div className="col-8">
        <div className="text-start">
          <p>Connexion</p>
          <p>Identifiant Blocksto :</p>
          <input
            type="text"
            value={blockstoId}
            onChange={(e) => {
              setBlockstoId(e.target.value);
            }}
          />
          <p>Mot de passe Blocksto :</p>
          <input
            type="password"
            value={blockstoPassword}
            onChange={(e) => {
              setBlockstoPassword(e.target.value);
            }}
          />
          <p>ou</p>
          <a href="/register">Créer un compte</a>
        </div>
        <div className="button" role="button" onClick={() => onLogin()}>
          Valider
        </div>
      </div>
      <div className="col-4">
        <img className="house" src="./images/house.png" alt="House PNG" />
      </div>
    </div>
  );
};

export default Connection;
