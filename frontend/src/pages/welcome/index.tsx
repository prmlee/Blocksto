import IntroductionSlide from '../../components/slide/introduction';

const Welcome = () => {
  return (
    <div
      id="welcome-carousel"
      className="carousel carousel-dark slide"
      data-bs-rid="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#welcome-carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#welcome-carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#welcome-carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100000">
          <IntroductionSlide />
        </div>
        <div className="carousel-item">Slide2</div>
        <div className="carousel-item">Slide3</div>
      </div>
    </div>
  );
};

export default Welcome;
