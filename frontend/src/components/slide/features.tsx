const FeaturesSlide = () => {
  return (
    <div className="features-slide">
      <p className="title">Comment cela marche ?</p>
      <div className="row">
        <div className="col-4 feature-item">
          <img src="./images/svg/profile.svg" alt="Profile SVG" />
          <p>Identifiez-vous</p>
        </div>
        <div className="col-4 feature-item">
          <img src="./images/svg/black-folder.svg" alt="Storage SVG" />
          <p>Créez votre carnet BLOCKSTO</p>
        </div>
        <div className="col-4 feature-item">
          <img src="./images/svg/exchange.svg" alt="Exchange SVG" />
          <p>Stockez et partagez vos informations sans limite</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlide;
