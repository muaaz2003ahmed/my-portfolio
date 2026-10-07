import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      

      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

    

      <div className="relative mx-auto max-w-6xl">
        

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Have a project idea, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

      

        <div className="grid gap-8 md:grid-cols-2">
        

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-md">
            <h3 className="mb-3 text-2xl font-semibold">
              Let's Work Together
            </h3>

            <p className="mb-8 leading-7 text-slate-400">
              I'm always interested in learning, building new projects,
              and connecting with other developers and teams.
            </p>

            

            <a
              href="mailto:muaaz09082003@gmail.com"
              className="group mb-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="mt-1 truncate text-sm text-slate-300 group-hover:text-cyan-300">
                  muaazahmed0309@gmail.com
                </p>
              </div>
            </a>

       

            <a
              href="tel:+923090005607"
              className="group mb-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                <FaPhone />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>

                <p className="mt-1 text-sm text-slate-300 group-hover:text-blue-300">
                  +92 309 0005607
                </p>
              </div>
            </a>

      

            <a
              href="https://github.com/muaaz2003ahmed"
              target="_blank"
              rel="noreferrer"
              className="group mb-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-400/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                <FaGithub />
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  GitHub
                </p>

                <p className="mt-1 text-sm text-slate-300 group-hover:text-blue-300">
                  https://github.com/muaaz2003ahmed
                </p>
              </div>
            </a>

            

            <a
              href="https://www.linkedin.com/in/muaaz-ahmed-4a3684441/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                <FaLinkedin />
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  LinkedIn
                </p>

                <p className="mt-1 truncate text-sm text-slate-300 group-hover:text-blue-300">
                  https://www.linkedin.com/in/muaaz-ahmed-4a3684441/
                </p>
              </div>
            </a>
          </div>

         

          <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-xl backdrop-blur-md">
            <h3 className="mb-6 text-2xl font-semibold">
              Send Me a Message
            </h3>

            {/* Name */}

            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/5"
              />
            </div>

            {/* Email */}

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/5"
              />
            </div>

            {/* Message */}

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/5"
              />
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;