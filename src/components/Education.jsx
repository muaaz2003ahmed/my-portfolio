const education = [
  {
    year: "Present",
    title: "BS Computer Science",
    institution: "University of Science and Technology (UST)",
    description:
      "Currently pursuing a Bachelor of Science in Computer Science and studying in the 7th semester.",
  },
  {
    year: "2021 — 2023",
    title: "Intermediate",
    institution: "Muhammadan Anglo Oriental College (MAO)",
    description:
      "Completed intermediate education with a focus on building a strong academic foundation for higher education.",
  },
  {
    year: "2019 — 2021",
    title: "Matric",
    institution: "Eden Rose High School",
    description:
      "Completed matriculation and developed the academic foundation for further studies.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Academic Journey
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Timeline Line */}

          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/30 to-purple-500/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <div
                key={item.title}
                className="relative flex flex-col gap-6 md:flex-row md:items-center"
              >
                {/* Timeline Dot */}

                <div className="absolute left-5 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 md:left-1/2" />

                {/* Left / Right Content */}

                <div
                  className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/5">
                    {/* Year */}

                    <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {item.year}
                    </div>

                    {/* Degree */}

                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    {/* Institution */}

                    <p className="mb-4 text-sm font-medium text-purple-400">
                      {item.institution}
                    </p>

                    {/* Description */}

                    <p className="text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;