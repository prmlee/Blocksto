import { useContext } from 'react';
import * as _ from 'lodash';
import { AuthContext } from '../../contexts/auth';
import { NormalInput } from '../Input';
import './index.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const profileViewElements = [
    { title: 'companyName', label: 'Entreprise', required: true },
    { title: 'sirenNumber', label: 'Siren', required: true },
    { title: 'lastname', label: 'Nom', required: false },
    { title: 'firstname', label: 'Prénom', required: false },
    { title: 'address', label: 'Adresse', required: false },
    { title: 'email', label: 'Email', required: false },
  ];

  return (
    <div className="profile">
      <img
        src={user?.avatar || `./images/unknown-avatar.jpg`}
        alt="Avatar Image"
      />
      <div className="form-group">
        {profileViewElements.map((element, index) => (
          <NormalInput
            key={`normal-input-${index}`}
            label={element.label}
            required={element.required}
            value={_.get(user, element.title, '')}
            onChange={(value) => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
