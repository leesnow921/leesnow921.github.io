import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        {/* Left */}
        <div className="hero__content">
          <span className="hero__badge">
            👋 Welcome to my Personal Hub
          </span>

          <h1 className="hero__title">
            Lee SEO RIN
          </h1>

          <h2 className="hero__subtitle">
            AI Engineer
            <span> · </span>
            Developer
            <span> · </span>
            Researcher
          </h2>

          <p className="hero__description">
            Building AI solutions that help people make
            better decisions.
            <br />
            Passionate about Machine Learning,
            Large Language Models,
            Cloud Computing,
            and Software Engineering.
          </p>

          <div className="hero__buttons">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact
            </a>
          </div>

          <div className="hero__social">
            <a href="#">
              GitHub
            </a>

            <a href="#">
              LinkedIn
            </a>

            <a href="#">
              Resume
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero__visual">

          <div className="hero__circle hero__circle--1"></div>
          <div className="hero__circle hero__circle--2"></div>

          <div className="profile-card">

            <div className="profile-card__avatar">

              <div className="avatar">
                LSR
              </div>

            </div>

            <h3>
              Lee SEO RIN
            </h3>

            <p>
              AI Engineer
            </p>

            <div className="tech-grid">

              <span>Python</span>

              <span>React</span>

              <span>Azure</span>

              <span>LLM</span>

              <span>FastAPI</span>

              <span>Docker</span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;