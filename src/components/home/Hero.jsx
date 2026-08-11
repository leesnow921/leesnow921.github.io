import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero__background">
        <div className="hero__grid"></div>
        <div className="hero__planet planet--1"></div>
        <div className="hero__planet planet--2"></div>
      </div>

      <div className="hero__container">

        {/* Left */}
        <div className="hero__content">

          <div className="hero__badge">
            🚀 RUI SPACE LAB
          </div>

          <h1 className="hero__title">
            Welcome to Rui Space Lab 👨‍🚀
          </h1>

          <p className="hero__description">
            This little corner of the universe is 
            <br />
            where I collect the things that matter to me.
            <br />
            <br />
            Projects I build 💻,
            <br />
            Stories I live 📸,
            <br />
            Places I explore ✈️,
            <br />
            Dreams I chase ⭐
            <br />
            and memories I never want to forget.
            <br />
            <br />
            Take your time,
            <br />
            look around,
            <br />
            and enjoy your stay ✨
          </p>

          <div className="hero__buttons">

            <a
              href="#planet"
              className="button button--primary"
            >
              🚀 Explore My Universe
            </a>

            <a
              href="#projects"
              className="button button--secondary"
            >
              💾 Visit Projects
            </a>

          </div>

          <div className="hero__slogan">

            <div className="hero__line"></div>

            <p>
              Every planet tells a story..
            </p>

          </div>

        </div>

        {/* Right */}

      <div className="hero__visual">

          <div className="hero__characters">

            <div className="astronaut">
              👾
            </div>

            <div className="planet">

              <div className="planet__ring"></div>

              <div className="planet__core">
                🪐
              </div>

            </div>

          </div>

          <div className="glass-card">

            <h3>MISSION STATUS</h3>

            <div className="status-online">
                <span className="status-dot" />
                <span className="status-text">ONLINE</span>
            </div>

            <div className="status-list">

              <div className="status-item">
                <span>Lab</span>
                <strong>Rui Space Lab</strong>
              </div>

              <div className="status-item">
                <span>Version</span>
                <strong>v1.0.0</strong>
              </div>

              <div className="status-item">
                <span>Operator</span>
                <strong>SEO RIN</strong>
              </div>

              <div className="status-item">
                <span>Mission</span>
                <strong>Life in Progress</strong>
              </div>

              <div className="status-item">
                <span>Coords</span>
                <strong>LP-37.5665°N · ST-126.9780°E</strong>
              </div>

              <div className="status-item">
                <span>Status</span>
                <strong>Exploring...</strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;