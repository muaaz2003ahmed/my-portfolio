import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-12 text-white">
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Main Footer */}

        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}

          <div>
            <a
              href="#home"
              className="text-2xl font-bold"
            >
              Muaaz<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A passionate Computer Science student and aspiring
              full-stack JavaScript developer focused on building
              modern and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#home"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#education"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Education
              </a>

              <a
                href="#contact"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Me
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Feel free to connect with me through my social
              profiles.
            </p>

            <div className="flex gap-3">
              {/* GitHub */}

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>

              {/* Email */}

              <a
                href="mailto:muaaz09082003@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-purple-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Footer */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 sm:flex-row">
          <p>
            © {currentYear} Muaaz. All rights reserved.
          </p>

          {/* Back To Top */}

          <a
            href="#home"
            className="group flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
              <FaArrowUp className="text-xs" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;