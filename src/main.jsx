import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, FileText, Code2, BrainCircuit,
  Database, Terminal, ExternalLink, Sparkles, Menu, X, BookOpen, Layers3
} from "lucide-react";
import "./styles.css";

const profile = {
  monogram: "AVK",
  name: "Aennam Vinay Kumar",
  headline: "AI Engineer | LLMs | RAG | Machine Learning",
  intro: "I build, experiment, and learn at the intersection of AI engineering and practical machine learning. This is where I document the systems I build, the concepts I explore, and the lessons I learn along the way.",
  location: "India",
  github: "https://github.com/AVK48",
  featuredRepo: "https://github.com/AVK48/AI-ML-JOURNEY",
  linkedin: "",
  email: "",
  resume: ""
};

const projects = [
  {
    number: "01", title: "RAG Pipeline Experiments", type: "LLM APPLICATIONS · EXPERIMENT",
    description: "Exploring the core stages of retrieval-augmented generation: document loading, chunking, embeddings, retrieval, and answer generation.",
    stack: ["Python", "LangChain", "Embeddings", "Vector Search"], status: "Experiment",
    link: profile.featuredRepo, linkLabel: "Explore learning repository"
  },
  {
    number: "02", title: "Neural Network on MNIST", type: "DEEP LEARNING · HANDS-ON",
    description: "Working through an image-classification workflow using the MNIST handwritten-digit dataset, from data preparation to model training and evaluation.",
    stack: ["Python", "TensorFlow / Keras", "MNIST"], status: "Learning project",
    link: profile.featuredRepo, linkLabel: "View related work"
  },
  {
    number: "03", title: "LLM Integration & Parser", type: "LLM ENGINEERING · EXPERIMENT",
    description: "Practicing LLM API integration and structured parsing workflows, including experiments with LangChain and hosted model APIs.",
    stack: ["Python", "LangChain", "OpenRouter", "LLM APIs"], status: "Experiment",
    link: profile.featuredRepo, linkLabel: "Explore code"
  },
  {
    number: "04", title: "Python Attendance Tracker", type: "PYTHON · APPLICATION",
    description: "A beginner project focused on applying Python to a practical attendance-tracking use case.",
    stack: ["Python"], status: "Built",
    link: profile.github, linkLabel: "Explore GitHub"
  }
];

const skills = [
  { icon: Code2, title: "Programming", items: ["Python", "SQL"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Machine Learning fundamentals", "Neural Networks", "Model evaluation"] },
  { icon: Database, title: "LLM Engineering", items: ["RAG fundamentals", "Embeddings", "Chunking & retrieval", "LangChain", "LLM API integration"] },
  { icon: Terminal, title: "Tools & Workflow", items: ["Git & GitHub", "Google Colab", "OpenRouter", "Jupyter Notebook"] }
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Journey", "#journey"]];
  return <header className="header">
    <a className="brand" href="#top" aria-label="AVK home"><span className="brand-mark">A</span><span>AVK<span className="brand-dot">.</span></span></a>
    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    <nav className={open ? "nav nav-open" : "nav"}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's connect <ArrowUpRight size={15}/></a>
    </nav>
  </header>;
}

function SectionHeading({eyebrow, title, note}) {
  return <div className="section-heading">
    <div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>
    {note && <p>{note}</p>}
  </div>;
}

function App() {
  return <div id="top">
    <Header />
    <main>
      <section className="hero page-wrap">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"/> OPEN TO LEARNING & OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M {profile.monogram}</p>
          <h1>Building with<br/><span>intelligence.</span></h1>
          <p className="hero-role">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
          </div>
          <div className="hero-meta"><span><span className="meta-dot"/> Based in {profile.location}</span><span>Curious by default. Practical by design.</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract AI network illustration">
          <div className="visual-top"><span>FIELD NOTES / 001</span><span>AI SYSTEMS</span></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core"><BrainCircuit size={52} strokeWidth={1.15}/><span>INTELLIGENCE<br/>IN PROGRESS</span></div>
          <span className="node node-a">LLMs</span><span className="node node-b">RAG</span><span className="node node-c">ML</span><span className="node node-d">BUILD</span>
          <div className="visual-bottom"><span>LEARN → BUILD → ITERATE</span><Sparkles size={15}/></div>
        </div>
      </section>
      <section className="trust-strip"><div className="page-wrap strip-inner"><span>AREAS I EXPLORE</span><b>Machine Learning</b><i/><b>LLM Applications</b><i/><b>Retrieval-Augmented Generation</b><i/><b>AI Engineering</b></div></section>
      <section id="about" className="section page-wrap">
        <SectionHeading eyebrow="01 / ABOUT" title="A builder's mindset." note="I believe the best way to understand technology is to build with it, test it, and explain what I learn."/>
        <div className="about-grid">
          <div className="about-main"><p className="large-copy">I'm a B.Tech student working toward a career in <em>AI engineering</em>.</p><p>My current focus is developing strong foundations in machine learning while learning how to build useful applications with large language models. I share my experiments, implementation notes, and progress instead of pretending to have all the answers.</p><p>This portfolio is a living record of that process: what I've built, what I'm learning, and what I'm improving next.</p></div>
          <div className="about-aside"><div className="fact"><span>FOCUS</span><b>AI / ML Engineering</b></div><div className="fact"><span>CURRENT INTERESTS</span><b>LLMs · RAG · ML</b></div><div className="fact"><span>APPROACH</span><b>Learn by building</b></div><div className="fact"><span>COMMUNITY</span><b>IEEE student leadership</b></div></div>
        </div>
      </section>
      <section id="projects" className="section section-tint">
        <div className="page-wrap">
          <SectionHeading eyebrow="02 / SELECTED WORK" title="Projects & experiments." note="A transparent look at what I've explored. Status labels distinguish finished work from ongoing learning."/>
          <div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}>
            <div className="project-top"><span className="project-number">{p.number} / 04</span><span className="status">{p.status}</span></div>
            <div className="project-icon"><Layers3 size={22}/></div><div className="eyebrow">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p>
            <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
            <a className="project-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} <ArrowUpRight size={16}/></a>
          </article>)}</div>
          <div className="projects-foot"><span>More work will be added as it becomes demonstrable.</span><a href={profile.github} target="_blank" rel="noreferrer">View GitHub profile <ExternalLink size={14}/></a></div>
        </div>
      </section>
      <section id="skills" className="section page-wrap">
        <SectionHeading eyebrow="03 / TOOLKIT" title="Tools I'm working with." note="A practical snapshot of my current toolkit. I update this as I gain hands-on experience."/>
        <div className="skills-grid">{skills.map(({icon: Icon, title, items}) => <div className="skill-card" key={title}><div className="skill-icon"><Icon size={20}/></div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
        <p className="fine-print">Skill list reflects learning and hands-on exposure; proficiency varies by topic.</p>
      </section>
      <section id="journey" className="section journey-section">
        <div className="page-wrap">
          <SectionHeading eyebrow="04 / LEARNING IN PUBLIC" title="The work behind the work." note="Progress is more useful when it is visible. This section will grow with technical notes, experiments, and lessons learned."/>
          <div className="journey-grid">
            <div className="journey-card"><BookOpen size={22}/><span className="eyebrow">LEARNING LOG</span><h3>Document the process.</h3><p>Short write-ups on concepts, debugging sessions, implementation decisions, and what I'd do differently.</p><a href={profile.featuredRepo} target="_blank" rel="noreferrer">Explore my learning repository <ArrowUpRight size={15}/></a></div>
            <div className="journey-card journey-dark"><div className="journey-big">01<span>—</span>∞</div><span className="eyebrow">BUILDING IN PUBLIC</span><h3>Not finished. Getting better.</h3><p>Small, consistent improvements compound. This portfolio is part of that process.</p></div>
          </div>
        </div>
      </section>
      <section className="section page-wrap experience-section">
        <SectionHeading eyebrow="05 / LEADERSHIP" title="Beyond the keyboard." note="Technical growth also comes from communication, collaboration, and taking responsibility."/>
        <div className="experience-row"><div className="experience-mark">IEEE</div><div><span className="eyebrow">STUDENT LEADERSHIP</span><h3>IEEE VEC Student Branch</h3><p>Chairperson · Vaagdegi Engineering College</p><p className="experience-desc">Contributed to student-community activities, technical events, outreach, and coordination. Add specific event names, dates, and measurable outcomes before publishing.</p></div><span className="experience-arrow"><ArrowUpRight size={20}/></span></div>
      </section>
      <section id="contact" className="contact-section"><div className="page-wrap contact-inner">
        <div className="eyebrow">06 / CONTACT</div><h2>Have a good problem<br/>to solve? <em>Let's talk.</em></h2>
        <p>I'm interested in learning from people building useful technology, collaborating on practical projects, and exploring early-career opportunities in AI engineering.</p>
        <div className="contact-actions">
          <a className="button button-light" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a>
          {profile.linkedin && <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a>}
          {profile.email && <a className="button button-outline" href={`mailto:${profile.email}`}><Mail size={17}/> Email <ArrowUpRight size={15}/></a>}
          {profile.resume && <a className="button button-outline" href={profile.resume} target="_blank"><FileText size={17}/> Resume <ArrowUpRight size={15}/></a>}
        </div>
      </div></section>
    </main>
    <footer className="footer page-wrap"><a className="brand" href="#top"><span className="brand-mark">A</span><span>AVK<span className="brand-dot">.</span></span></a><span>Designed to document the process, not just the outcome.</span><span>© {new Date().getFullYear()} AVK</span></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);