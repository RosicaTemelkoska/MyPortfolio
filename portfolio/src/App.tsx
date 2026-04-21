import { useEffect, useState } from 'react';

type Skill = { name: string; icon: string };
type Project = { title: string; description: string; stack: string[]; link: string };

const skills: Skill[] = [
  { name: 'React', icon: '⚛' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind CSS', icon: 'TW' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'HTML5', icon: 'H5' },
  { name: 'CSS3', icon: 'C3' },
  { name: 'C# / .NET', icon: 'C#' },
  { name: 'Java / Spring Boot', icon: 'JB' },
  { name: 'Python / Django', icon: 'PY' },
  { name: 'SQL / PostgreSQL', icon: 'SQL' },
  { name: 'MongoDB', icon: 'DB' },
  { name: 'Git & GitHub', icon: 'GH' },
  { name: 'Responsive UI', icon: 'UI' },
];

const projects: Project[] = [
  {
    title: 'Gorsaj.mk Contributor',
    description:
      'Contributed to the Gorsaj platform by supporting feature improvements and practical development tasks in a production-facing environment.',
    stack: ['Contributor', 'Web', 'Collaboration'],
    link: 'https://gorsaj.mk/',
  },
  {
    title: 'MyWebsite Portfolio',
    description:
      'Personal portfolio website focused on clean UI, responsive layout, and clear presentation of technical experience.',
    stack: ['HTML', 'CSS', 'Responsive Design'],
    link: 'https://github.com/RosicaTemelkoska/mywebsite',
  },
  {
    title: 'BookStore',
    description:
      'Full-stack web application for bookstore inventory and sales management using .NET and C# backend architecture.',
    stack: ['.NET', 'C#', 'HTML', 'CSS'],
    link: 'https://github.com/RosicaTemelkoska/BookStore',
  },
  {
    title: 'FoodApp',
    description:
      'Web application for food ordering and restaurant workflow with a practical full-stack implementation in .NET.',
    stack: ['.NET', 'C#', 'Web App'],
    link: 'https://github.com/RosicaTemelkoska/FoodApp',
  },
  {
    title: 'DPNS1 Project',
    description:
      'Python project demonstrating data processing, analytical thinking, and structured problem-solving approaches.',
    stack: ['Python', 'Data Processing'],
    link: 'https://github.com/RosicaTemelkoska/DPNS1-project',
  },
];

const typingWords = ['Junior Web Developer', 'React Frontend Developer', 'Remote-Ready Team Player'];

export default function App() {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const speed = isDeleting ? 40 : 85;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, typedText.length + 1);
        setTypedText(next);
        if (next === currentWord) {
          window.setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        const next = currentWord.slice(0, typedText.length - 1);
        setTypedText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [typedText, wordIndex, isDeleting]);

  return (
    <div className="bg-slate-900 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-semibold tracking-wide text-blue-700">
            RT
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-md border border-slate-300 px-3 py-1 text-sm md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
            <a
              className="rounded-full border border-blue-300 px-4 py-1.5 text-blue-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-900"
              href="/RosicaTemelkoska.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-900/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <a className="transition hover:text-white" href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a className="transition hover:text-white" href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a className="transition hover:text-white" href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a className="transition hover:text-white" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <a
                className="mt-2 inline-flex w-fit rounded-full border border-blue-300 px-4 py-1.5 text-blue-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-900"
                href="/RosicaTemelkoska.pdf"
                download
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-28">
        <section id="hero" className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-900/80 via-slate-900 to-cyan-900/60 p-8 md:p-14">
          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-cyan-400/35 blur-3xl" />

          <div className="relative space-y-6">
            <p className="inline-flex rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-blue-100">
              Open to Remote Roles
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Rosica Temelkoska
            </h1>
            <p className="h-8 text-lg text-cyan-300 md:text-2xl">
              {typedText}
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-300 align-middle" />
            </p>
            <p className="max-w-2xl text-slate-200">
              I am a junior web developer looking for a remote role where I can contribute to real products,
              grow with a strong team, and build clean, user-friendly web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">About Me</h2>
          <div className="rounded-2xl border border-white/20 bg-white/90 p-6 leading-relaxed text-slate-700 md:p-8">
            I am a passionate junior web developer with a Computer Science and Engineering background.
            I enjoy creating responsive and modern interfaces, writing clean code, and collaborating on practical
            software solutions. I am currently seeking a remote position where I can continue learning, contribute
            to meaningful projects, and deliver value through strong frontend development skills.
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <article
                key={skill.name}
                className="group rounded-2xl border border-white/20 bg-white/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-700">
                  {skill.icon}
                </div>
                <h3 className="text-base font-medium text-slate-800">{skill.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/20 bg-white/85 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/40"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mb-5 text-slate-700">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:text-cyan-700"
                >
                  View project <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">Contact</h2>
          <div className="grid gap-4 rounded-2xl border border-white/20 bg-white/90 p-6 md:grid-cols-4 md:p-8">
            <a className="rounded-xl border border-slate-300 bg-white p-4 transition hover:border-blue-400" href="mailto:temelkoskarosica@gmail.com">
              <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
              <p className="mt-2 text-sm text-slate-800">temelkoskarosica@gmail.com</p>
            </a>
            <a className="rounded-xl border border-slate-300 bg-white p-4 transition hover:border-blue-400" href="tel:+38978382213">
              <p className="text-xs uppercase tracking-wide text-slate-400">Phone</p>
              <p className="mt-2 text-sm text-slate-800">+389 78 382 213</p>
            </a>
            <a
              className="rounded-xl border border-slate-300 bg-white p-4 transition hover:border-blue-400"
              href="https://www.linkedin.com/in/rosica-temelkoska-8a1951305/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">LinkedIn</p>
              <p className="mt-2 text-sm text-slate-800">linkedin.com/in/rosica-temelkoska-8a1951305</p>
            </a>
            <a
              className="rounded-xl border border-slate-300 bg-white p-4 transition hover:border-blue-400"
              href="https://github.com/RosicaTemelkoska"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">GitHub</p>
              <p className="mt-2 text-sm text-slate-800">github.com/RosicaTemelkoska</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
