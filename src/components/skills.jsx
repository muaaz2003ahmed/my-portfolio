const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    description: "Building semantic and accessible web structures.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Creating responsive layouts and modern UI designs.",
  },
  {
    name: "JavaScript",
    category: "Language",
    description: "Building interactive web applications and functionality.",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Creating reusable components and dynamic interfaces.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Building responsive interfaces using utility classes.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Managing source code and collaborating with Git.",
  },
  
];


function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />


      {/* Main Container */}

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Technologies and tools I use to build modern,
            responsive and interactive web applications.
          </p>

        </div>


        {/* Skills Grid */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/5"
            >

              {/* Icon */}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-purple-500/10 text-xl text-cyan-400 transition duration-300 group-hover:from-cyan-400/20 group-hover:to-purple-500/20">
                &lt;/&gt;
              </div>


              {/* Skill Name */}

              <h3 className="mb-2 text-lg font-semibold text-white">
                {skill.name}
              </h3>


              {/* Category */}

              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-400">
                {skill.category}
              </p>


              {/* Description */}

              <p className="text-sm leading-6 text-slate-400">
                {skill.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;