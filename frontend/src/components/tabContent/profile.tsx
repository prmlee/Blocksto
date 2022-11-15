const Profile = () => {
  const userInfo = {
    firstname: 'Zhangnu',
    lastname: 'Daruk',
    address: 'France Parist Drongjang.St No.24',
    email: 'zhangnudaruk@gmail.com',
    company: 'BLOCKSTO',
    siren: 'Siren',
    avatar: null,
  };

  const profileViewElements = [
    { title: 'company', label: 'Entreprise', required: true },
    { title: 'siren', label: 'Siren', required: true },
    { title: 'lastname', label: 'Nom', required: false },
    { title: 'firstname', label: 'Prénom', required: false },
    { title: 'address', label: 'Adresse', required: false },
    { title: 'email', label: 'Email', required: false },
  ];

  return (
    <div className="profile">
      <img
        src={userInfo.avatar || `./images/unknown-avatar.jpg`}
        alt="Avatar Image"
      />
      <div className="form-group">
        {profileViewElements.map((element, index) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};
