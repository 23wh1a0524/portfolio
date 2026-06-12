import './App.css';

function App() {
  return (
    <div className="portfolio">

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">PA</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-name">
            Pradeepthi<br /><span>Ammana</span>
          </h1>
          <p className="hero-desc">
            CS undergrad at BVRIT Hyderabad, building full-stack apps and sharpening
            algorithms. 500+ LeetCode problems solved. Top 30 in BZCL among 5,000+ participants.
          </p>
          <div className="hero-cta">
            <a href="https://github.com/23wh1a0524" className="btn btn-primary" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://leetcode.com/u/23wh1a0524/" className="btn btn-outline" target="_blank" rel="noreferrer">
              LeetCode ↗
            </a>
          </div>
        </div>
        <div className="hero-avatar">PA</div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-num">9.08</span>
            <span className="stat-label">B.Tech GPA / 10</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">500+</span>
            <span className="stat-label">LeetCode problems</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">Top 30</span>
            <span className="stat-label">BZCL out of 5,000+</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">4</span>
            <span className="stat-label">shipped projects</span>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-label">// work</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">

          <div className="project-card p1">
            <div className="project-icon">🤖</div>
            <p className="project-name">AI Multimodal Learning Tutor</p>
            <p className="project-desc">
              Web-based AI tutor supporting text, voice, and image inputs with
              step-by-step explanations powered by the OpenAI API.
            </p>
            <div className="tag-row">
              <span className="tag t-purple">Python</span>
              <span className="tag t-purple">OpenAI API</span>
              <span className="tag t-purple">Speech-to-Text</span>
              <span className="tag t-purple">JS</span>
            </div>
          </div>

          <div className="project-card p2">
            <div className="project-icon">🏘️</div>
            <p className="project-name">Community Insight</p>
            <p className="project-desc">
              MERN platform where residents report issues, vote on priorities,
              upload attachments, and track resolutions via an admin dashboard.
            </p>
            <div className="tag-row">
              <span className="tag t-teal">React</span>
              <span className="tag t-teal">Node.js</span>
              <span className="tag t-teal">MongoDB</span>
              <span className="tag t-teal">JWT</span>
            </div>
          </div>

          <div className="project-card p3">
            <div className="project-icon">✈️</div>
            <p className="project-name">TravelAble</p>
            <p className="project-desc">
              Full-stack travel booking app with accessibility-based filters for
              inclusive travel planning, built on Spring Boot and MySQL.
            </p>
            <div className="tag-row">
              <span className="tag t-coral">Java</span>
              <span className="tag t-coral">Spring Boot</span>
              <span className="tag t-coral">MySQL</span>
            </div>
          </div>

          <div className="project-card p4">
            <div className="project-icon">⚡</div>
            <p className="project-name">LRU Cache</p>
            <p className="project-desc">
              O(1) get/put LRU cache in Java using a HashMap + Doubly Linked List
              for efficient, constant-time memory management.
            </p>
            <div className="tag-row">
              <span className="tag t-amber">Java</span>
              <span className="tag t-amber">Data Structures</span>
              <span className="tag t-amber">HashMap</span>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-surface">
        <p className="section-label">// toolbox</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <p className="skill-group-title">Languages</p>
            <div className="skill-pills">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">C</span>
              <span className="skill-pill">JavaScript</span>
            </div>
          </div>
          <div className="skill-group">
            <p className="skill-group-title">Frontend</p>
            <div className="skill-pills">
              <span className="skill-pill">React (Vite)</span>
              <span className="skill-pill">React Router</span>
              <span className="skill-pill">HTML</span>
              <span className="skill-pill">CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <p className="skill-group-title">Backend</p>
            <div className="skill-pills">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">Spring Boot</span>
              <span className="skill-pill">JWT</span>
            </div>
          </div>
          <div className="skill-group">
            <p className="skill-group-title">Database &amp; Tools</p>
            <div className="skill-pills">
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Git</span>
              <span className="skill-pill">VS Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <p className="section-label">// recognition</p>
        <h2 className="section-title">Achievements</h2>
        <div className="ach-list">
          <div className="ach-item">
            <div className="ach-icon">🏆</div>
            <div className="ach-text">
              <strong>BZCL Coding Contest — Top 30 / 5,000+</strong>
              <span>
                Qualified through Ignite &amp; Ascent rounds. Ranked Top 30 among
                participants across Telangana and Hyderabad, advancing to the Top 50 Final Round.
              </span>
            </div>
          </div>
          <div className="ach-item">
            <div className="ach-icon">💡</div>
            <div className="ach-text">
              <strong>LeetCode — 500+ problems solved</strong>
              <span>
                Consistent practice across arrays, trees, graphs, dynamic programming,
                and system design problems, strengthening algorithmic thinking.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-surface">
        <p className="section-label">// background</p>
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          <div className="edu-item">
            <div className="edu-left">
              <p className="school">BVRIT Hyderabad</p>
              <p className="degree">B.Tech in Computer Science &amp; Engineering · 2023–2027</p>
            </div>
            <div className="edu-right">
              <p className="edu-gpa">9.08</p>
              <p className="edu-year">GPA / 10</p>
            </div>
          </div>
          <div className="edu-item">
            <div className="edu-left">
              <p className="school">Sri Chaitanya Junior College</p>
              <p className="degree">Intermediate · 2021–2023</p>
            </div>
            <div className="edu-right">
              <p className="edu-gpa">9.61</p>
              <p className="edu-year">GPA / 10</p>
            </div>
          </div>
          <div className="edu-item">
            <div className="edu-left">
              <p className="school">Sri Chaitanya School, Siddipet</p>
              <p className="degree">10th Grade · 2021</p>
            </div>
            <div className="edu-right">
              <p className="edu-gpa">10.0</p>
              <p className="edu-year">GPA / 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <p className="section-label">// get in touch</p>
        <h2 className="section-title">Contact</h2>
        <div className="contact-row">
          <a href="mailto:ammanapradeepthi@gmail.com" className="contact-chip">
            <span className="chip-icon">✉️</span> ammanapradeepthi@gmail.com
          </a>
          <a href="tel:8885279637" className="contact-chip">
            <span className="chip-icon">📞</span> 888-527-9637
          </a>
          <a href="https://github.com/23wh1a0524" className="contact-chip" target="_blank" rel="noreferrer">
            <span className="chip-icon">🐙</span> GitHub
          </a>
          <a href="https://leetcode.com/Pradeepthi" className="contact-chip" target="_blank" rel="noreferrer">
            <span className="chip-icon">🧩</span> LeetCode
          </a>
        </div>
      </section>

      <footer className="footer">
        built with React · pradeepthi ammana · 2025
      </footer>

    </div>
  );
}

export default App;