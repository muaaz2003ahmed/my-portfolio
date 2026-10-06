import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce website with product listings, categories, shopping cart functionality and a modern user interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://ecommerce-website-mauve-rho.vercel.app",
    githubUrl: "https://github.com/muaaz2003ahmed/Ecommerce-Website",
  },
  {
    title: "Task Management App",
    description:
      "A task management application that allows users to create, organize and manage their daily tasks with an interactive interface.",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Application",
    description:
      "A responsive weather application that displays weather information using an external API and provides a clean user experience.",
    technologies: ["JavaScript", "API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Container */}

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            A selection of projects I've built while learning and developing my
            frontend and JavaScript skills.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Project Image Placeholder */}

              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/10" />

                <span className="relative bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
                  &lt;/&gt;
                </span>
              </div>

              {/* Project Content */}

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
