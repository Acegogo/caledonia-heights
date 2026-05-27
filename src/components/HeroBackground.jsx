import './HeroBackground.css';

const HeroBackground = () => {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-blob hero-blob--cyan" />
      <div className="hero-blob hero-blob--green" />
      <div className="hero-blob hero-blob--purple" />
      <div className="hero-grid" />
      <div className="hero-vignette" />
    </div>
  );
};

export default HeroBackground;

