import { useState } from 'react';
import { PrimaryInput } from '../../components/Input';
import { PrimaryDropdown } from '../../components/Input/dropdown';
import { buildingTypes } from '../../constant';
import './index.css';

const Register = () => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [particular, setParticular] = useState<boolean>(false);
  const [professional, setProfessional] = useState<boolean>(false);
  const [buildingType, setBuildingType] = useState<number>(0);
  const [companyName, setCompanyName] = useState<string>('');
  const [sirenNumber, setSirenNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [blockstoId, setBlockstoId] = useState<string>('');
  const [blockstoPassword, setBlockstoPassword] = useState<string>('');

  const onRegister = () => {
    console.log(
      `${firstname}-${lastname}-${particular}-${professional}-${buildingType}-${companyName}-${sirenNumber}-${address}-${email}-${blockstoId}-${blockstoPassword}`,
    );
  };

  return (
    <div className="d-flex flex-column align-items-start register">
      <p>Formulaire d'inscription</p>
      <p>*Champs à remplir obligatoirement:</p>
      <PrimaryInput
        label="Nom"
        required
        value={firstname}
        onChange={(value) =>
          setFirstname(typeof value === 'string' ? value : '')
        }
      />
      <PrimaryInput
        label="Prénom"
        required
        value={lastname}
        onChange={(value) =>
          setLastname(typeof value === 'string' ? value : '')
        }
      />
      <div className="d-flex flex-row align-items-start w-100">
        <div className="col-sm-6 col-xs-12">
          <PrimaryInput
            label="Particulier"
            required
            type="checkbox"
            value={particular}
            onChange={(value) =>
              setParticular(typeof value === 'boolean' ? value : false)
            }
          />
        </div>
        <div className="col-sm-6 col-xs-12">
          <PrimaryInput
            label="Professionel"
            required
            type="checkbox"
            value={professional}
            onChange={(value) =>
              setProfessional(typeof value === 'boolean' ? value : false)
            }
          />
        </div>
      </div>
      <div className="d-flex flex-row align-items-start w-100">
        <div className="col-sm-5 col-xs-12">
          <PrimaryDropdown
            label="Type de logement"
            values={buildingTypes}
            onSelect={(value) =>
              setBuildingType(typeof value === 'number' ? value : 0)
            }
          />
        </div>
        <span className="col-sm-1 col-xs-12">OU</span>
        <div className="col-sm-6 col-xs-12">
          <PrimaryInput
            label="Nom de l'entreprise"
            required
            value={companyName}
            onChange={(value) =>
              setCompanyName(typeof value === 'string' ? value : '')
            }
          />
        </div>
      </div>
      <div className="col-sm-6 col-xs-12 align-self-end">
        <PrimaryInput
          label="Numéro de Siren"
          required
          value={sirenNumber}
          onChange={(value) =>
            setSirenNumber(typeof value === 'string' ? value : '')
          }
        />
      </div>
      <PrimaryInput
        label="Adresse"
        required
        value={address}
        onChange={(value) => setAddress(typeof value === 'string' ? value : '')}
      />
      <PrimaryInput
        label="Email"
        type="email"
        required
        value={email}
        onChange={(value) => setEmail(typeof value === 'string' ? value : '')}
      />
      <PrimaryInput
        label="Identifiant Blocksto"
        required
        value={blockstoId}
        onChange={(value) =>
          setBlockstoId(typeof value === 'string' ? value : '')
        }
      />
      <PrimaryInput
        label="Mot de passe Blocksto"
        type="password"
        required
        value={blockstoPassword}
        onChange={(value) =>
          setBlockstoPassword(typeof value === 'string' ? value : '')
        }
      />
      <div
        className="button"
        role="button"
        onClick={() => {
          onRegister();
        }}
      >
        Valider
      </div>
    </div>
  );
};

export default Register;
