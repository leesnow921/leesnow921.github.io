import "./UniverseNavigation.css";

const destinations = [
  {
    icon: "🚀",
    title: "Mission Control",
    subtitle: "Projects & Career",
    description: "Things I build, create, and work on.",
    path: "/projects",
    className: "navigation-card--projects",
  },
  {
    icon: "📖",
    title: "Memory Archive",
    subtitle: "Daily & Journal",
    description: "Little moments, thoughts, and everyday stories.",
    path: "/daily",
    className: "navigation-card--daily",
  },
  {
    icon: "🌍",
    title: "Explorer Log",
    subtitle: "Travel Records",
    description: "Places I've been and places I want to explore.",
    path: "/travel",
    className: "navigation-card--travel",
  },
  {
    icon: "🔬",
    title: "Knowledge Lab",
    subtitle: "Study & Learning",
    description: "Things I'm learning, studying, and discovering.",
    path: "/study",
    className: "navigation-card--study",
  },
  {
    icon: "⭐",
    title: "Life Mission",
    subtitle: "Goals & Dreams",
    description: "The things I want to achieve along the way.",
    path: "/goals",
    className: "navigation-card--goals",
  },
];

function UniverseNavigation() {
  return (
    <section className="universe-navigation" id="universe">
      <div className="universe-navigation__container">

        {/* Section Header */}
        <div className="universe-navigation__header">

          <span className="universe-navigation__eyebrow">
            SPACE MAP
          </span>

          <h2 className="universe-navigation__title">
            Explore My Universe
          </h2>

          <p className="universe-navigation__description">
            Every corner has a story.
            <br />
            Choose a destination and take a look around.
          </p>

        </div>

        {/* Navigation Cards */}
        <div className="universe-navigation__grid">

          {destinations.map((destination) => (
            <a
              key={destination.title}
              href={destination.path}
              className={`navigation-card ${destination.className}`}
            >
              <div className="navigation-card__icon">
                {destination.icon}
              </div>

              <div className="navigation-card__content">

                <span className="navigation-card__subtitle">
                  {destination.subtitle}
                </span>

                <h3 className="navigation-card__title">
                  {destination.title}
                </h3>

                <p className="navigation-card__description">
                  {destination.description}
                </p>

              </div>

              <span className="navigation-card__arrow">
                →
              </span>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default UniverseNavigation;