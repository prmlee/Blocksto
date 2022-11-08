import './index.css';

const IntroductionSlide = () => {
  return (
    <div className="row align-items-end intro-slide">
      <div className="col-8 text-start">
        <p>Stockez et</p>
        <p>échangez les</p>
        <p>données de vos</p>
        <p>logements</p>
        <p>Créez les carnets d'information de vos logements</p>
      </div>
      <div className="col-4">
        <img src="./images/house.png" alt="Blocksto House PNG" />
      </div>
    </div>
  );
};

export default IntroductionSlide;
