export default function Home() {
  return (
    <div className="page">
      <main className="container">
        <header className="hero reveal">
          <div className="hero-card">
            <p className="eyebrow">Personal Website</p>
            <h1 className="display">
              Benson (Yanbo) Xiao
            </h1>
            <p className="subtitle">Computer Science @ University of Waterloo</p>
            <p className="lead">
              Backend-leaning builder who delivers full-stack web apps and
              implements algorithms to solve real problems. Always eager to
              learn new things.
            </p>
            <div className="chip-row">
              <span className="chip">TypeScript</span>
              <span className="chip">Python</span>
              <span className="chip">C++</span>
            </div>
            <div className="button-row">
              <a className="button primary" href="mailto:bensonxiao0721@gmail.com">
                Email Me
              </a>
              <a className="button ghost" href="https://github.com/TractorBenson">
                GitHub
              </a>
              <a
                className="button ghost"
                href="https://linkedin.com/in/yanbo-xiao"
              >
                LinkedIn
              </a>
              <a className="button ghost" href="/assets/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </header>

        <section className="section reveal delay-1" id="summary">
          <div className="section-head">
            <h2 className="section-title">Summary</h2>
            <p className="section-subtitle">
              Backend-focused problem solver who ships full-stack web apps and
              builds algorithmic solutions when performance matters.
            </p>
          </div>
          <div className="summary-grid">
            <div className="summary-card">
              <h3>Signature Strength</h3>
              <p>
                End-to-end delivery from development to deployment, including
                CI/CD and reliable releases.
              </p>
            </div>
            <div className="summary-card">
              <h3>Tech Stack</h3>
              <p>
                C/C++, Python, TypeScript, Next.js, Flask, Node.js, Tailwind CSS,
                Docker.
              </p>
            </div>
            <div className="summary-card">
              <h3>Mindset</h3>
              <p>
                Curious, adaptable, and always learning new tools and patterns
                to improve outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="section reveal delay-2" id="education">
          <div className="section-head">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              Honours Bachelor of Computer Science.
            </p>
          </div>
          <div className="education-list">
            <div className="timeline-item">
              <div>
                <h3>University of Waterloo</h3>
                <p className="timeline-year">Sep 2024 - Apr 2029 (expected)</p>
                <p>Honours Bachelor of Computer Science.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal delay-3" id="experience">
          <div className="section-head">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Roles with measurable outcomes and hands-on tooling.
            </p>
          </div>
          <div className="card-grid experience-grid">
            <article className="card">
              <div className="card-head">
                <h3>Customer Support Agent - Windscribe</h3>
                <span className="card-meta">Sep - Dec 2025</span>
              </div>
              <p>
                Applied networking fundamentals (DNS, protocols) to resolve VPN
                issues and built a JavaScript browser extension that cut
                high-frequency task time by 80%.
              </p>
              <div className="tag-row">
                <span>Networking</span>
                <span>Automation</span>
                <span>JavaScript</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal delay-4" id="projects">
          <div className="section-head">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Selected builds from coursework, automation, and tooling.
            </p>
          </div>
          <div className="card-grid projects-grid">
            <article className="card">
              <div className="card-head">
                <h3>WhoWillPay Expense Tracker</h3>
                <span className="card-meta">Feb - Apr 2025</span>
              </div>
              <p>
                Built a weighted random payer selector in Python, a Chart.js
                dashboard, and Flask + SQLite APIs to manage group expenses.
              </p>
              <div className="tag-row">
                <span>Python</span>
                <span>Flask</span>
                <span>Chart.js</span>
              </div>
            </article>
            <article className="card">
              <div className="card-head">
                <h3>GIToday Discord Bot</h3>
                <span className="card-meta">Sep - Dec 2025</span>
              </div>
              <p>
                TypeScript Discord bot delivering daily GitHub activity reports
                using Octokit and multi-API orchestration.
              </p>
              <div className="tag-row">
                <span>TypeScript</span>
                <span>Discord.js</span>
                <span>Octokit</span>
              </div>
            </article>
            <article className="card">
              <div className="card-head">
                <h3>CI/CD Automation with Drone and Docker</h3>
                <span className="card-meta">Sep - Oct 2025</span>
              </div>
              <p>
                Configured Drone CI pipelines and Docker Compose environments to
                standardize builds and deployments.
              </p>
              <div className="tag-row">
                <span>Drone CI</span>
                <span>Docker</span>
                <span>DevOps</span>
              </div>
            </article>
            <article className="card">
              <div className="card-head">
                <h3>C++ Chess</h3>
                <span className="card-meta">Jul - Aug 2025</span>
              </div>
              <p>
                Built a C++20 chess game using X11 with a custom rendering loop
                and event-driven architecture.
              </p>
              <div className="tag-row">
                <span>C++20</span>
                <span>X11</span>
                <span>Systems</span>
              </div>
            </article>
            <article className="card">
              <div className="card-head">
                <h3>GreenGroup Web Page</h3>
                <span className="card-meta">Dec 2025</span>
              </div>
              <p>
                Designed a responsive Next.js page with Tailwind CSS, focusing
                on clean layout, navigation, and visual consistency.
              </p>
              <div className="tag-row">
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>Frontend</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal delay-5" id="skills">
          <div className="section-head">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
              Languages, frameworks, and tools used in recent work.
            </p>
          </div>
          <div className="summary-grid">
            <div className="summary-card">
              <h3>Languages</h3>
              <div className="tag-row">
                <span>C/C++</span>
                <span>Python</span>
                <span>JavaScript/TypeScript</span>
                <span>HTML/CSS</span>
                <span>Bash</span>
              </div>
            </div>
            <div className="summary-card">
              <h3>Frameworks &amp; Libraries</h3>
              <div className="tag-row">
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>Chart.js</span>
                <span>Discord.js</span>
                <span>Octokit.js</span>
              </div>
            </div>
            <div className="summary-card">
              <h3>Tools &amp; Platforms</h3>
              <div className="tag-row">
                <span>Git</span>
                <span>Docker</span>
                <span>Docker Compose</span>
                <span>Drone CI</span>
                <span>Linux</span>
                <span>X11</span>
                <span>Nginx</span>
                <span>Caddy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal delay-5" id="contact">
          <div className="section-head">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Reach out for internships, collaborations, or project ideas.
            </p>
          </div>
          <div className="contact-panel">
            <div className="button-row">
              <a
                className="button primary"
                href="mailto:bensonxiao0721@gmail.com"
              >
                bensonxiao0721@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
