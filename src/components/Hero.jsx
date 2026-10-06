import { FaArrowRight, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-32 text-white"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col-reverse items-center justify-center gap-12 md:flex-row md:justify-between">
        {/* Hero Content */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-3 text-lg font-medium text-sky-400">Hello, I'm</p>

          <h1 className="mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            Muaaz Ahmed
          </h1>

          <h2 className="mb-6 text-2xl font-semibold leading-tight text-slate-300 sm:text-3xl">
            JavaScript <span className="text-cyan-400">&</span>
            <br className="hidden sm:block" />
            React Developer
          </h2>

          <p className="mx-auto max-w-xl text-base leading-7 text-slate-300 sm:text-lg md:mx-0">
            I build responsive and interactive web applications using
            JavaScript, React and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
            >
              View My Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Download Resume
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Profile */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[2px] shadow-2xl shadow-blue-500/20 sm:h-72 sm:w-72">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-7xl font-bold text-transparent">
                MA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
