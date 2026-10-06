function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Container */}

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}

        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

        </div>


        {/* About Content */}

        <div className="grid gap-8 md:grid-cols-2">

          {/* About Card */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-md transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">

            <h3 className="mb-5 text-2xl font-semibold text-white">
              Who I Am
            </h3>

            <div className="space-y-4 text-base leading-7 text-slate-400">

              <p>
                I'm a JavaScript and React developer who enjoys
                building modern, responsive and user-friendly web
                applications.
              </p>

              <p>
                I recently completed a JavaScript full-stack development
                course where I learned frontend and backend technologies
                and gained practical experience building web applications.
              </p>

              <p>
                My current focus is improving my React skills, building
                real-world projects and becoming a stronger full-stack
                JavaScript developer.
              </p>

            </div>

          </div>


          {/* What I Do Card */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-md transition duration-300 hover:border-purple-400/20 hover:bg-white/[0.05]">

            <h3 className="mb-6 text-2xl font-semibold text-white">
              What I Do
            </h3>

            <div className="space-y-5">

              {/* Item 1 */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  ⚛
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    React Development
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Building reusable and interactive interfaces with
                    React components.
                  </p>
                </div>

              </div>


              {/* Item 2 */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                  &lt;/&gt;
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Frontend Development
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Creating responsive websites with HTML, CSS,
                    JavaScript and modern frontend tools.
                  </p>
                </div>

              </div>


              {/* Item 3 */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                  ✦
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Responsive Design
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Building interfaces that work smoothly across
                    desktop, tablet and mobile devices.
                  </p>
                </div>

              </div>


              {/* Item 4 */}

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  🚀
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Continuous Learning
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Continuously improving my JavaScript, React and
                    full-stack development skills.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;