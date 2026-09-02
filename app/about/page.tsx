import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition hover:opacity-70"
          >
            AS
          </Link>

          <div className="hidden items-center gap-3 text-base font-medium text-gray-300 md:flex">

            <Link
              href="/about"
              className="rounded-full bg-white px-5 py-2.5 text-black transition-all duration-200 hover:bg-gray-200"
            >
              About
            </Link>

            <Link
              href="/#projects"
              className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/#experience"
              className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
            >
              Experience
            </Link>

            <a
              href="mailto:aswithreddy907@gmail.com"
              className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
            >
              Contact
            </a>

          </div>
        </div>
      </nav>


      {/* About Hero */}
      <section className="px-6 pb-24 pt-40 lg:px-10">
        <div className="mx-auto max-w-[1400px]">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Engineer focused on building
            <span className="text-gray-500">
              {" "}useful, intelligent systems.
            </span>
          </h1>

        </div>
      </section>


      {/* Main About Content */}
      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[420px_1fr]">

          {/* Photo */}
          <div>
            <div className="relative h-[480px] w-full max-w-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/profile.png"
                alt="Aswith Reddy Sama"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>


          {/* About Text */}
          <div className="max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Who I Am
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-400">

              <p>
                I&apos;m Aswith Reddy Sama, an engineer working across AI
                engineering, software engineering, and data science.
              </p>

              <p>
                My work focuses on building intelligent systems, scalable
                software, machine learning pipelines, and AI-powered products
                that solve practical problems.
              </p>

              <p>
                This section will eventually contain a more detailed story
                about my background, the problems I enjoy working on, the
                technologies I work with, and the direction I&apos;m growing
                toward as an engineer.
              </p>

            </div>


            {/* Quick Information */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Focus
                </p>

                <p className="mt-3 text-lg text-white">
                  AI Engineering & Software Systems
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Areas
                </p>

                <p className="mt-3 text-lg text-white">
                  LLMs, RAG, ML, Backend & Data
                </p>
              </div>

            </div>


            {/* Links */}
            <div className="mt-12 flex flex-wrap gap-3">

              <Link
                href="/#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                View My Projects
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/50 hover:bg-white/[0.05]"
              >
                Resume
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}