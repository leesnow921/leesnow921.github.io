import { Link, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const projectData = {
  onet: {
    category: "Software Development · Automotive",

    title: "ONET",

    subtitle: "Automotive OTA Scenario Evaluation Tool",

    summary:
      "An automated evaluation tool for analyzing OTA scenarios at the network level using Automotive Ethernet and CAN/FD. ONET operates on the CCU Test Rack platform to automate scenario execution, network monitoring, analysis, and reporting.",

    role: "Software Developer",

    period: "2022 — Present",

    domain: "Automotive OTA / Network Evaluation",

    team: "Software Development",

    technologies: [
      "C#",
      "WPF",
      ".NET Framework 4.7.2",
      "MVVM",
      "Visual Studio",
      "DevExpress WPF",
      "DevOps",
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

          <p className="project-detail__subtitle">
            {project.subtitle}
          </p>

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


          {/* ========================= */}
          {/* 01 Overview */}
          {/* ========================= */}

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
                ONET is an automated evaluation tool designed
                to evaluate OTA scenarios at the network level.
                The tool operates on the CCU Test Rack hardware
                platform and supports Automotive Ethernet and
                CAN/FD network analysis.
              </p>

              <p>
                Users first register OTA events manually on the
                SUMS server. ONET then monitors vehicle network
                activity and automatically controls the vehicle
                power state at the appropriate point to execute
                the predefined OTA scenario.
              </p>

              <p>
                After the scenario is completed, ONET analyzes
                the collected log data to determine whether the
                OTA procedure was successfully performed and
                generates an evaluation report.
              </p>

            </div>

          </section>


          {/* ========================= */}
          {/* 02 System */}
          {/* ========================= */}

          <section className="case-section">

            <div className="case-section__number">
              02
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                SYSTEM
              </span>

              <h2>
                System Overview
              </h2>

              <p>
                ONET operates as part of the CCU Test Rack
                environment, coordinating OTA scenario execution,
                network monitoring, vehicle power control,
                and result analysis.
              </p>

              <div className="architecture-placeholder">
                <span>
                  System Architecture Diagram
                </span>
              </div>

            </div>

          </section>


          {/* ========================= */}
          {/* 03 Contribution */}
          {/* ========================= */}

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
                I took over the ONET project from the 2024
                upgrade phase and have been responsible for
                the overall OTA evaluation logic, analysis
                functions, and user interface development.
              </p>

              <ul className="case-list">

                <li>
                  Developed and maintained the overall OTA
                  evaluation logic and scenario analysis.
                </li>

                <li>
                  Designed and developed the overall application
                  UI using WPF and DevExpress WPF.
                </li>

                <li>
                  Implemented validation and verification logic
                  for OTA evaluation procedures.
                </li>

                <li>
                  Extended the software to support new vehicle
                  platforms, protocols, and evaluation requirements.
                </li>

                <li>
                  Improved the robustness and reliability of
                  automated OTA evaluation.
                </li>

              </ul>

            </div>

          </section>


          {/* ========================= */}
          {/* 04 Development History */}
          {/* ========================= */}

          <section className="case-section">

            <div className="case-section__number">
              04
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                DEVELOPMENT HISTORY
              </span>

              <h2>
                Project Evolution
              </h2>

              <div className="history-list">


                {/* 2022 */}

                <div className="history-item">

                  <span className="history-year">
                    2022
                  </span>

                  <div>

                    <h3>
                      Initial Development
                    </h3>

                    <p>
                      Initial development of ONET and
                      implementation of automated OTA
                      evaluation scenarios.
                    </p>

                    <ul className="case-list">
                      <li>
                        OTA reprogramming repeated evaluation
                      </li>

                      <li>
                        OTA rollback repeated evaluation
                      </li>

                      <li>
                        Power interruption evaluation
                      </li>

                      <li>
                        CAN Short evaluation
                      </li>

                      <li>
                        Malicious diagnostic transmission evaluation
                      </li>

                      <li>
                        CAN Bus load evaluation
                      </li>
                    </ul>

                  </div>

                </div>


                {/* 2024 */}

                <div className="history-item">

                  <span className="history-year">
                    2024
                  </span>

                  <div>

                    <h3>
                      System Upgrade & Evaluation Robustness
                    </h3>

                    <p>
                      Major system upgrade and expansion of
                      evaluation capabilities.
                    </p>

                    <ul className="case-list">

                      <li>
                        CCU2 system support
                      </li>

                      <li>
                        DoIP diagnostic communication
                      </li>

                      <li>
                        Latest ROM Package support
                      </li>

                      <li>
                        Parallel update support
                      </li>

                      <li>
                        UDS procedure validation enhancement
                      </li>

                      <li>
                        RDBI-based software installation verification
                      </li>

                      <li>
                        Data graph UI
                      </li>

                      <li>
                        DLT functionality
                      </li>

                    </ul>

                  </div>

                </div>


                {/* 2026 */}

                <div className="history-item">

                  <span className="history-year">
                    2026
                  </span>

                  <div>

                    <h3>
                      Automation Expansion
                    </h3>

                    <p>
                      Expansion of automated evaluation capabilities
                      and support for additional hardware and
                      software configurations.
                    </p>

                    <ul className="case-list">

                      <li>
                        SSB mechanical control equipment
                      </li>

                      <li>
                        Multiple source version repeated verification
                      </li>

                      <li>
                        CCS phone app-based automated evaluation
                      </li>

                      <li>
                        Automatic downgrade prevention evaluation
                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* ========================= */}
          {/* 05 Development */}
          {/* ========================= */}

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

                  <h3>
                    Planning
                  </h3>

                  <p>
                    Requirements and technical planning.
                  </p>
                </div>

                <div>
                  <span>02</span>

                  <h3>
                    Implementation
                  </h3>

                  <p>
                    Development and integration.
                  </p>
                </div>

                <div>
                  <span>03</span>

                  <h3>
                    Testing
                  </h3>

                  <p>
                    Verification and validation.
                  </p>
                </div>

                <div>
                  <span>04</span>

                  <h3>
                    Improvement
                  </h3>

                  <p>
                    Optimization and iteration.
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* ========================= */}
          {/* 06 Engineering */}
          {/* ========================= */}

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

                <span>
                  CHALLENGE
                </span>

                <h3>
                  Technical Challenge
                </h3>

                <p>
                  This section will describe a specific
                  technical challenge encountered during
                  ONET development.
                </p>

              </div>

              <div className="challenge-block">

                <span>
                  SOLUTION
                </span>

                <h3>
                  Engineering Approach
                </h3>

                <p>
                  The engineering approach and solution
                  will be documented here.
                </p>

              </div>

            </div>

          </section>


          {/* ========================= */}
          {/* 07 Supporting Features */}
          {/* ========================= */}

          <section className="case-section">

            <div className="case-section__number">
              07
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                SUPPORTING FEATURES
              </span>

              <h2>
                Supporting Tools & Features
              </h2>

              <div className="supporting-feature-grid">


                <div className="supporting-feature">

                  <span className="supporting-feature__number">
                    01
                  </span>

                  <h3>
                    Database Viewer
                  </h3>

                  <p>
                    CAN and Ethernet data inspection.
                  </p>

                </div>


                <div className="supporting-feature">

                  <span className="supporting-feature__number">
                    02
                  </span>

                  <h3>
                    DLT
                  </h3>

                  <p>
                    Diagnostic log analysis.
                  </p>

                </div>


                <div className="supporting-feature">

                  <span className="supporting-feature__number">
                    03
                  </span>

                  <h3>
                    SSH
                  </h3>

                  <p>
                    Remote system access and control.
                  </p>

                </div>


                <div className="supporting-feature">

                  <span className="supporting-feature__number">
                    04
                  </span>

                  <h3>
                    PCAP / Vector ASCII
                  </h3>

                  <p>
                    Network log inspection and analysis.
                  </p>

                </div>


              </div>

            </div>

          </section>


          {/* ========================= */}
          {/* 08 Results */}
          {/* ========================= */}

          <section className="case-section">

            <div className="case-section__number">
              08
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                RESULT
              </span>

              <h2>
                Results & Impact
              </h2>

              <p>
                This section will highlight the measurable
                results and impact achieved through the
                development and continuous improvement of ONET.
              </p>

              <div className="result-grid">

                <div>
                  <strong>—</strong>
                  <span>
                    Performance
                  </span>
                </div>

                <div>
                  <strong>—</strong>
                  <span>
                    Evaluation
                  </span>
                </div>

                <div>
                  <strong>—</strong>
                  <span>
                    Reliability
                  </span>
                </div>

              </div>

            </div>

          </section>


          {/* ========================= */}
          {/* 09 Reflection */}
          {/* ========================= */}

          <section className="case-section">

            <div className="case-section__number">
              09
            </div>

            <div className="case-section__body">

              <span className="case-section__label">
                REFLECTION
              </span>

              <h2>
                What I Learned
              </h2>

              <p>
                This section will describe what I learned
                through the development and continuous
                evolution of ONET, including technical
                insights and engineering experience.
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