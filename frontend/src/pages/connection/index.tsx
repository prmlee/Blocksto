import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { fetchApi } from '../../utils/backendApi';
import './index.css';

const Connection = () => {
  const { connect, isAuthenticated } = useContext(AuthContext);
  const [blockstoId, setBlockstoId] = useState<string>('');
  const [blockstoPassword, setBlockstoPassword] = useState<string>('');
  const navigate = useNavigate();

  const onConnect = async () => {
    const res = await fetchApi('user/connect', 'POST', {
      blockstoId,
      blockstoPassword,
    });
    if (res) {
      connect(res.data.jwt, res.data.user);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, [isAuthenticated]);

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
        <div className="button" role="button" onClick={() => onConnect()}>
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
