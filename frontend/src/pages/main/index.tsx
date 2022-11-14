import { useState } from 'react';
import { MiniIconButton, PrimaryIconButton } from '../../components/button';
import './styles/index.css';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<string>('house');

  const handleTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const tabContents: { [key: string]: any } = {
    profile: <>Profile</>,
    house: <>House</>,
    envelope: <>Envelope</>,
  };

  return (
    <div className="row main">
      <div className="col-sm-2">
        <PrimaryIconButton
          title="Mon Profil"
          selected={selectedTab === 'profile'}
          src="./images/svg/profile.svg"
          onClick={() => handleTab('profile')}
        />
        <PrimaryIconButton
          title="Mes carnets"
          selected={selectedTab === 'house'}
          src="./images/svg/house.svg"
          onClick={() => handleTab('house')}
        />
        <PrimaryIconButton
          title="Mes échanges"
          selected={selectedTab === 'envelope'}
          src="./images/svg/envelope.svg"
          onClick={() => handleTab('envelope')}
        />
      </div>
      <div className="col-8">{tabContents[selectedTab]}</div>
      <div className="col-2">
        <MiniIconButton
          title="Ajouter un document"
          selected={false}
          src="./images/svg/plus.svg"
          onClick={() => {
            setSelectedTab('house');
          }}
        />
        <MiniIconButton
          title="Partager un document"
          selected={selectedTab === 'send'}
          src="./images/svg/send.svg"
          onClick={() => {
            setSelectedTab('house');
          }}
        />
      </div>
    </div>
  );
};

export default Main;
