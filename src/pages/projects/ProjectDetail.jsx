import { Link, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const projectData = {
  "rui-space-lab": {
    category: "Software Development",
    title: "Rui Space Lab",
    summary:
      "A personal software project developed to organize projects, experiences, learning records, and personal growth in one digital space.",

    role: "Software Developer",
    period: "2026 — Present",
    domain: "Web Application",
    team: "Individual Project",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Vite",
      "Git",
    ],
  },
};

function ProjectDetail() {
  const { slug } = useParams();

  const project = projectData[slug];

  if (!project) {
    return (
      <div className="project-detail project-detail--not-found">
        <div className="project-detail__container">
          <span className="project-detail__eyebrow">
            PROJECT NOT FOUND
          </span>

          <h1>Project unavailable</h1>

          <p>
            The project you're looking for doesn't exist.
          </p>

          <Link to="/projects">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">

      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <header className="project-detail__hero">

        <div className="project-detail__container">

          <Link
            to="/projects"
            className="project-detail__back"
          >
            ← Back to Projects
          </Link>

          <div className="project-detail__category">
            {project.category}
          </div>

          <h1 className="project-detail__title">
            {project.title}
          </h1>

          <p className="project-detail__summary">
            {project.summary}
          </p>

        </div>

      </header>

      {/* ========================= */}
      {/* Project Snapshot */}
      {/* ========================= */}

      <section className="project-detail__snapshot">

        <div className="project-detail__container">

          <div className="snapshot-grid">

            <div className="snapshot-item">
              <span>ROLE</span>
              <strong>{project.role}</strong>
            </div>

            <div className="snapshot-item">
              <span>PERIOD</span>
              <strong>{project.period}</strong>
            </div>

            <div className="snapshot-item">
              <span>DOMAIN</span>
              <strong>{project.domain}</strong>
            </div>

            <div className="snapshot-item">
              <span>TEAM</span>
              <strong>{project.team}</strong>
            </div>

          </div>

          <div className="snapshot-item snapshot-item--stack">
            <span>TECHNOLOGIES</span>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* Main Content */}
      {/* ========================= */}

      <main className="project-detail__content">

        <div className="project-detail__container">

          {/* Overview */}

          <section className="case-section">

            <div className="case-section__number">
              01
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                OVERVIEW
              </span>

              <h2>
                Project Overview
              </h2>

              <p>
                Describe the project background, purpose,
                and the overall objective of the work.
              </p>

              <p>
                This section should provide enough context
                for someone unfamiliar with the project to
                understand what was being developed and why.
              </p>

            </div>

          </section>

          {/* Background */}

          <section className="case-section">

            <div className="case-section__number">
              02
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                BACKGROUND
              </span>

              <h2>
                Why This Project?
              </h2>

              <p>
                Describe the business or technical background
                that led to the project.
              </p>

              <div className="case-highlight">
                <span>KEY CONTEXT</span>

                <p>
                  Add the most important background information
                  or project objective here.
                </p>
              </div>

            </div>

          </section>

          {/* Role */}

          <section className="case-section">

            <div className="case-section__number">
              03
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                CONTRIBUTION
              </span>

              <h2>
                My Role & Responsibilities
              </h2>

              <p>
                Clearly describe what you personally owned
                or contributed to within the project.
              </p>

              <ul className="case-list">
                <li>Responsibility or contribution #1</li>
                <li>Responsibility or contribution #2</li>
                <li>Responsibility or contribution #3</li>
                <li>Responsibility or contribution #4</li>
              </ul>

            </div>

          </section>

          {/* Architecture */}

          <section className="case-section">

            <div className="case-section__number">
              04
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                ARCHITECTURE
              </span>

              <h2>
                System Architecture
              </h2>

              <p>
                Add an architecture diagram or system overview
                that explains how the major components interact.
              </p>

              <div className="architecture-placeholder">
                <span>
                  Architecture Diagram
                </span>
              </div>

            </div>

          </section>

          {/* Development */}

          <section className="case-section">

            <div className="case-section__number">
              05
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                DEVELOPMENT
              </span>

              <h2>
                Development Process
              </h2>

              <div className="process-grid">

                <div>
                  <span>01</span>
                  <h3>Planning</h3>
                  <p>
                    Requirements and technical planning.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Implementation</h3>
                  <p>
                    Development and integration.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>Testing</h3>
                  <p>
                    Verification and validation.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <h3>Improvement</h3>
                  <p>
                    Optimization and iteration.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Challenges */}

          <section className="case-section">

            <div className="case-section__number">
              06
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                ENGINEERING
              </span>

              <h2>
                Challenges & Solutions
              </h2>

              <div className="challenge-block">

                <span>CHALLENGE</span>

                <h3>
                  Technical Challenge
                </h3>

                <p>
                  Describe a technical problem,
                  limitation, or constraint.
                </p>

              </div>

              <div className="challenge-block">

                <span>SOLUTION</span>

                <h3>
                  Engineering Approach
                </h3>

                <p>
                  Explain the approach you took,
                  why you chose it, and how it solved
                  the problem.
                </p>

              </div>

            </div>

          </section>

          {/* Result */}

          <section className="case-section">

            <div className="case-section__number">
              07
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                RESULT
              </span>

              <h2>
                Results & Impact
              </h2>

              <p>
                Describe the outcome of the project.
                Whenever possible, use measurable results.
              </p>

              <div className="result-grid">

                <div>
                  <strong>—</strong>
                  <span>Performance</span>
                </div>

                <div>
                  <strong>—</strong>
                  <span>Efficiency</span>
                </div>

                <div>
                  <strong>—</strong>
                  <span>Quality</span>
                </div>

              </div>

            </div>

          </section>

          {/* Reflection */}

          <section className="case-section">

            <div className="case-section__number">
              08
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                REFLECTION
              </span>

              <h2>
                What I Learned
              </h2>

              <p>
                Describe what you learned through the project,
                how your engineering approach evolved, and
                what you would improve in the next iteration.
              </p>

            </div>

          </section>

        </div>

      </main>

      {/* ========================= */}
      {/* Footer */}
      {/* ========================= */}

      <footer className="project-detail__footer">

        <div className="project-detail__container">

          <Link to="/projects">
            ← Back to Projects
          </Link>

        </div>

      </footer>

    </div>
  );
}

export default ProjectDetail;