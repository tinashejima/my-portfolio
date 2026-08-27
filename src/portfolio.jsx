import { useState, useEffect, useRef } from "react";
import "./portfolio.css";
import profileImg from "./assets/my-image.jpg";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Data Analysis & Visualisation",
  "Data Engineering & ETL",
  "API & Systems Integration",
  "DevOps & Infrastructure",
  "Web Development",
  "Systems Administration",
  "Python",
  "SQL",
  "Apache Spark",
  "PostgreSQL",
  "REST APIs",
  "FHIR R4",
  "Docker",
  "Java",
  "Spring Boot",
  "Power BI",
];

const PROJECTS = [
  {
    icon: "⚙️",
    type: "Data Engineering · Integration",
    title: "Incremental ETL Data Pipeline",
    desc: "Python ETL pipeline that incrementally syncs records from a Hive/Spark distributed warehouse into a PostgreSQL datamart.",
    stack: ["Python", "Apache Spark", "Hive SQL", "PostgreSQL", "Docker", "Pandas"],
  },
  {
    icon: "📊",
    type: "Data Analysis · Visualisation",
    title: "Operations Pipeline Dashboard",
    desc: "Power BI dashboard tracking an end-to-end operational pipeline across 16 facilities monitoring submission, processing, acceptance, and completion of lab orders for better decision making.",
    stack: ["Power BI", "SQL", "PostgreSQL"],
  },
  {
    icon: "🐳",
    type: "Systems Integration · DevOps",
    title: "Multi-Service Platform Deployment",
    desc: "Monitoring a national multi-service integration platform via Docker Compose with Nginx subdomain routing across cloud environments.",
    stack: ["Docker", "Docker Compose", "REST API", "Nginx", "Linux"],
  },
  {
    icon: "🔗",
    type: "Data Engineering · API Integration",
    title: "REST API Query Integration",
    desc: "Designed search queries against a FHIR-compliant REST API to extract structured records by organisation, type, and date range.",
    stack: ["REST API", "FHIR R4", "HAPI FHIR", "JSON"],
  },
  {
    icon: "💻",
    type: "Web Development",
    title: "Spring Boot REST API",
    desc: "Java Spring Boot application with MySQL via Hibernate/JPA. Configured multi-environment profiles, Maven build pipeline, Git version control with SSH key authentication.",
    stack: ["Java", "Spring Boot", "MySQL", "Maven", "Hibernate", "Git"],
  },
  {
    icon: "🛡️",
    type: "Data Quality Engineering",
    title: "Automated Data Backfill",
    desc: "Identified a systematic data quality issue where demographic fields were silently nulled during ETL updates. Built a standalone backfill script to prevent future data regression.",
    stack: ["Python", "PostgreSQL", "Hive", "Data Quality"],
  },
];

const EXPERIENCE = [
  {
    period: "Current",
    role: "ICT & Data Professional",
    org: "ZIM-TTECH (Zimbabwe Technical Assistance Training & Education Centre for Health)",
    bullets: [
      "Maintaining and supporting enterprise integration platform infrastructure including middleware, identity, and shared record systems",
      "Building Python ETL pipelines that incrementally sync huge amount of data from  Data warehouse to PostgreSQL datamarts",
      "Building Power BI dashboards tracking operational pipeline performance across 16 Failities",
      "Managing Docker containerised deployments and diagnosing infrastructure issues in production environments",
      "Deploying applications and microservices on AWS, and national data centre infrastructure",
      "Maintaining CI/CD pipelines using GitHub Actions and Docker Hub for automated build and deployment",
      "Installing and configuring Linux and Windows operating systems",
      
    ],
  },
];

const STACK = [
  ["🐍", "Python"], ["☕", "Java"], ["🐘", "PostgreSQL"], ["🐬", "MySQL"],
  ["🐝", "Hive SQL"], ["🐳", "Docker"], ["🌐", "Nginx"],
  ["☁️", "AWS"], ["🔥", "FHIR R4"], ["🔗", "OpenHIM"],
  ["📊", "Power BI"], ["🌿", "Spring Boot"], ["🐙", "GitHub"], ["🐧", "Linux"],
  ["🪟", "Windows"], ["🔬", "Pandas"], ["📓", "Jupyter"], ["🏗️", "Maven"],
];

// ── Custom Hook ──────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function FadeBox({ children, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`fade-box ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// ── Components ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          Tinashe Jima
        </a>
        <ul className="nav-menu">
          {NAV.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Tinashe Jima</h1>
        <p className="subtitle">
          Data Engineering, Systems Integration, Data Analysis & Web Development
        </p>
        <a href="#projects" className="cta-button">
          Discover My Work
        </a>

        <a href="#contact" className="cta-button" style={{ background: "transparent", color: "#f8fafc", borderColor: "#333842" }}>
            Get In Touch
          </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <FadeBox className="about-content">
        <div className="about-image-container">
          <img src={profileImg} alt="Tinashe Jima" className="about-image" />
        </div>
        <div>
          <p className="about-text">
            Results-driven Data Professional and Software Developer with hands-on experience
            designing, automating, and deploying high-availability enterprise architecture,
            workflow automation, and data platforms. Proven foundational knowledge in software
            development, REST/SOAP APIs, CI/CD pipeline automation, and enterprise data warehousing.
          </p>
          <div className="skills" id="skills">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </FadeBox>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <FadeBox key={project.title} className="project-card">
            <div className="project-image">{project.icon}</div>
            <div className="project-content">
              <span className="project-type-badge">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>
              <div className="project-tags">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeBox>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-container">
        {EXPERIENCE.map((exp, idx) => (
          <FadeBox key={idx} className="experience-card">
            <span className="exp-period">{exp.period}</span>
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-org">{exp.org}</p>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </FadeBox>
        ))}
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="stack" className="section projects">
      <h2 className="section-title">Tech Stack</h2>
      <div className="stack-grid">
        {STACK.map(([icon, name]) => (
          <FadeBox key={name} className="stack-card">
            <div className="stack-icon">{icon}</div>
            <span className="stack-name">{name}</span>
          </FadeBox>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2 style={{ fontSize: "1.5rem", color: "#6ea8e2", marginBottom: "1.5rem" }}>Get In Touch</h2>
      <div className="social-links">
        <a
    href="https://linkedin.com/in/tinashejima"
    target="_blank"
    rel="noreferrer"
    className="social-link"
    title="LinkedIn"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  </a>
        <a href="mailto:jimatinashe@gmail.com" className="social-link" title="Email">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  </a>
        <a href="tel:+263788609035" className="social-link" title="Call">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </a>
      </div>

     <div style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "#cbd5e1" }}>
  <p style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
    <span>jimatinashe@gmail.com</span>
  </p>
  <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
    <span>+263 78 860 9035</span>
  </p>
</div>

      <p style={{ marginTop: "2.5rem", opacity: 0.6, fontSize: "0.85rem" }}>
        © 2026 Tinashe Jima. All rights reserved. · Harare, Zimbabwe
      </p>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStackSection />
      <Footer />
    </div>
  );
}