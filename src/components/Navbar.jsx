import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          My<span className="text-sky-400">Portfolio</span>
        </a>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex border rounded-xl border-white/10 bg-slate-950/60 px-6 py-2 backdrop-blur-md">
          <a
            href="#home"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-slate-300 transition hover:text-sky-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-slate-300 transition hover:text-sky-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-slate-300 transition hover:text-sky-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
