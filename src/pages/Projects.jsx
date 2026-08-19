import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    number: "01",
    slug: "onet",
    type: "Software Development · Automotive",
    title: "ONET",
    description:
      "An automated evaluation tool for analyzing automotive OTA scenarios at the network level using Automotive Ethernet and CAN/FD.",
    stack: [
      "C#",
      "WPF",
      "CAN/FD",
      "Automotive Ethernet",
    ],
    status: "In Progress",
  },
  {
    number: "02",
    slug: "project-02",
    type: "Software Development",
    title: "Project Archive",
    description:
      "A collection of software development projects, engineering work, and technical experiences.",
    stack: [
      "Software",
      "Development",
      "Git",
    ],
    status: "Planning",
  },
  {
    number: "03",
    slug: "project-03",
    type: "Software Development",
    title: "Project 03",
    description:
      "A collection of technical projects and engineering experiences.",
    stack: [
      "Software",
      "Development",
    ],
    status: "Planning",
  },
];

function Projects() {
  return (
    <div className="projects-page">

      {/* ========================= */}
      {/* Page Header */}
      {/* ========================= */}

      <section className="projects-hero">
        <div className="projects-container">

          <div className="projects-hero__label">
            MISSION CONTROL
          </div>

          <h1 className="projects-hero__title">
            Selected Projects
          </h1>

          <p className="projects-hero__description">
            A collection of things I build,
            <br />
            explore, and learn from.
          </p>

          <div className="projects-hero__meta">

            <span>
              <i></i>
              SYSTEM ONLINE
            </span>

            <span>
              Rui Space Lab
            </span>

          </div>

        </div>
      </section>


      {/* ========================= */}
      {/* Featured Project */}
      {/* ========================= */}

      <section className="featured-project">

        <div className="projects-container">

          <div className="section-heading">
            <span>01 / FEATURED</span>
            <h2>Current Mission</h2>
          </div>


          <article className="featured-project__card">

            <div className="featured-project__visual">

              <span className="featured-project__number">
                01
              </span>

              <div className="featured-project__orb">
                <div></div>
              </div>

            </div>


            <div className="featured-project__content">

              <span className="project-type">
                Personal Web Project
              </span>

              <h3>
                Rui Space Lab
              </h3>

              <p>
                A personal digital space designed to bring together
                my projects, daily records, travels, studies, goals,
                and the moments that shape my life.
              </p>


              <div className="tech-stack">

                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Vite</span>
                <span>GitHub Pages</span>

              </div>


              <div className="project-actions">

                <a href="#case-study">
                  View Case Study
                  <span>→</span>
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </a>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ========================= */}
      {/* All Projects */}
      {/* ========================= */}

      <section className="all-projects">

        <div className="projects-container">

          <div className="section-heading">
            <span>02 / PROJECTS</span>
            <h2>All Projects</h2>
          </div>


          <div className="projects-grid">

            {projects.map((project) => (

              <Link
                to={`/projects/${project.slug}`}
                className="project-card"
                key={project.number}
              >

                <div className="project-card__top">

                  <span className="project-card__number">
                    {project.number}
                  </span>

                  <span className="project-card__status">
                    {project.status}
                  </span>

                </div>


                <div className="project-card__content">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>


                <div className="project-card__footer">

                  <div className="tech-stack">

                    {project.stack.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  <span className="project-card__arrow">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* Skills */}
      {/* ========================= */}

      <section className="skills-section">

        <div className="projects-container">

          <div className="section-heading">
            <span>03 / TOOLKIT</span>
            <h2>
              Technologies I Work With
            </h2>
          </div>


          <div className="skills-grid">

            <div className="skill-group">

              <span>
                SOFTWARE DEVELOPMENT
              </span>

              <p>
                C# · WPF · .NET Framework · MVVM
              </p>

            </div>


            <div className="skill-group">

              <span>
                AUTOMOTIVE
              </span>

              <p>
                CAN/FD · Automotive Ethernet · DoIP · UDS
              </p>

            </div>


            <div className="skill-group">

              <span>
                TOOLS
              </span>

              <p>
                Visual Studio · DevExpress WPF · DevOps · Git
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Projects;