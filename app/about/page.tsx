import Image from "next/image";
import Link from "next/link";
import SiteNav from "../components/SiteNav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <SiteNav />


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
                src="/aswith-about.jpg"
                alt="Aswith Reddy Sama"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>


          {/* About Story */}
          <div className="max-w-3xl">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Who am I?
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-400">

              <p className="text-white">
                I&apos;ve always been someone who enjoys solving problems.
              </p>

              <p>
                Before AI, before software engineering, and even before I really
                knew what I wanted to build, there was mathematics. I loved the
                process of taking something complicated, breaking it down,
                finding the underlying pattern, and eventually arriving at a
                solution. Programming felt like a natural extension of it —
                except now, instead of solving problems only on paper, I could
                actually build things with the solutions.
              </p>

              <p>
                Then I started realizing how closely{" "}
                <strong className="font-semibold text-white">
                  mathematics, programming, and Artificial Intelligence
                </strong>{" "}
                were connected.
              </p>

              <p>
                Behind what looked like intelligent behavior were mathematical
                ideas — probability, statistics, optimization, linear algebra —
                brought to life through programming. AI felt like a place where
                two things I already enjoyed came together. That connection
                fascinated me. I wanted to understand not just what AI could do,
                but{" "}
                <strong className="font-semibold text-white">
                  how it worked
                </strong>{" "}
                — from the mathematics behind machine learning to neural
                networks and deep learning.
              </p>

              <p className="font-medium text-white">
                The deeper I went, the more interesting it became.
              </p>

              <p>
                That interest eventually brought me to the United States to
                pursue my{" "}
                <strong className="font-semibold text-white">
                  Master&apos;s in Artificial Intelligence at Illinois Tech
                </strong>
                , where I had the opportunity to build a much stronger
                foundation in the field. One person who had a particularly
                meaningful impact on the way I understood AI was my Deep
                Learning professor,{" "}
                <strong className="font-semibold text-white">
                  Yutong Wang
                </strong>
                . He taught deep learning in a way that made concepts feel like
                learning the alphabet — and suddenly much more complicated
                ideas began to make sense.
              </p>

              <p>
                That foundation also changed the way I looked at data and
                models. I learned that building a good model isn&apos;t just
                about choosing an algorithm — much of the work happens in
                preparing the data for the model to learn from. I worked with
                data transformation, feature engineering, model evaluation, and
                structuring inputs across classical machine learning and deep
                learning. Eventually, that extended to large language models,
                where I worked with fine-tuning techniques such as PEFT and
                LoRA and saw how the way we curate and transform data can
                directly influence what a model learns.
              </p>

              <p>
                But somewhere along the way, my curiosity started moving in
                another direction too.
              </p>

              <p>
                I had spent a lot of time learning how AI models work. Then I
                started asking a different question:
              </p>

              <p className="py-4 text-2xl font-bold text-white">
                WHAT CAN WE BUILD AROUND THEM?
              </p>

              <p>
                That question pulled me toward AI engineering.
              </p>

              <p>
                I began exploring Retrieval-Augmented Generation, multi-agent
                systems, prompt and context engineering, tool usage, and the
                architectures surrounding large language models. During my work
                as an AI Engineer at Catapult, I had the opportunity to work
                much more deeply in this space.
              </p>

              <p className="font-medium text-white">
                And unexpectedly, I loved it.
              </p>

              <p>
                At Catapult, I started seeing LLMs less as standalone models and
                more as components inside larger intelligent systems. I worked
                on a multi-agent architecture where different parts of a
                problem could be classified, routed, and handled through
                specialized workflows. A big part of that meant figuring out
                how to give the LLM the right conversational context from real
                customer interactions, how to decide which information was
                actually relevant, and how to combine the model&apos;s reasoning
                with deterministic execution logic. I also worked on guardrails
                and controlled tool usage so that the LLM could make intelligent
                decisions while the surrounding system determined what it was
                actually allowed to do — making the overall workflow more
                reliable, context-aware, and suitable for real production use.
              </p>

              <p>
                Today, at Box Technology Group, I&apos;m applying those lessons to
                Ressa, a multi-agent conversational AI platform for real estate.
                The work connects retrieval, intent classification, fact
                extraction, messaging, CRM workflows, and scheduling across 16
                domains. I&apos;m also building evaluation coverage for 320+
                scenarios, with explicit targets for classification accuracy
                and context retention — because a useful AI system needs to
                be measurable and trustworthy, not just impressive in a demo.
              </p>

              <p>
                Working through those problems made me realize how much
                engineering exists{" "}
                <strong className="font-semibold text-white">
                  around an LLM
                </strong>
                . It changed the way I thought about AI.
              </p>

              <p>
                I realized that building powerful AI applications isn&apos;t
                always about making the underlying model bigger or more
                complicated. Sometimes the interesting engineering happens
                around the model: deciding what information it should receive,
                when it should receive it, what tools it should have access to,
                how different components should communicate, and how the entire
                system can produce better results without unnecessarily
                increasing complexity or cost.
              </p>

              <p>
                My earlier experience in software engineering became incredibly
                useful here as well. I learned to think beyond individual
                features and consider architecture, data flow, reliability,
                maintainability, and how different pieces of a system fit
                together.
              </p>

              <p>
                AI engineering brought those two worlds together for me.
              </p>


              {/* Highlight */}
              <p className="py-5 font-bold leading-8 text-white sm:text-2xl">
                Software where AI isn&apos;t added simply because AI is interesting,
                but because it can genuinely make something easier, smarter, or more useful.
              </p>


              <p>
                That philosophy also extends beyond my professional work.
                Whenever I notice a repetitive task, an inefficient workflow,
                or even an everyday inconvenience, I often find myself thinking:
              </p>

              <p className="py-4 text-2xl font-bold text-white">
                COULD I BUILD SOMETHING THAT HANDLES THIS FOR ME?
              </p>

              <p>
                In fact, I&apos;m building one of those ideas right now — into
                this very portfolio.
              </p>

              <p>
                Rather than making this portfolio just a collection of pages
                where recruiters have to read through everything to understand
                what I&apos;ve worked on, I want to make it intelligent. I&apos;m
                building an AI experience that allows recruiters to interact
                directly with my work — to explore my projects, understand how
                I approached different problems, and evaluate my skills by
                interacting with a live agent built around the work I&apos;ve
                actually done.
              </p>

              <p>
                For me, that&apos;s also part of the fun.
              </p>


              {/* Strong Highlight */}
              <div className="my-14 relative overflow-hidden rounded-3xl border border-white/20 bg-white p-8 text-black sm:p-10">

                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
                  Build, don&apos;t just tell.
                </p>

                <p className="text font-bold leading-relaxed tracking-tight sm:text-3xl">
                  Instead of simply writing that I can build AI systems, I
                  would rather build one and let people experience it.
                </p>

              </div>


              <p>
                That&apos;s the direction I want to continue exploring —
                building AI systems that reduce the amount of repetitive work
                people have to do and give them more time to focus on the
                problems that actually require creativity and thought.
              </p>

              <p>
                Maybe the closest picture of what I&apos;d like to see it as,
                is something like building Iron Man&apos;s JARVIS 😛.
              </p>

              <p>
                I&apos;m still fascinated by the research side of AI.
                Eventually, I want to go deeper again — working closer to
                neural networks, model architectures, training, and the research
                that makes these systems more capable in the first place.
              </p>

              <p>
                But right now, I&apos;m enjoying something equally exciting:
              </p>

              <p className="py-5 text-xl font-bold uppercase leading-8 text-white sm:text-2xl">
                TAKING THE INTELLIGENCE WE ALREADY HAVE AND FIGURING OUT WHAT
                WE CAN BUILD WITH IT.
              </p>

              <p className="text-white">
                And I&apos;m still solving problems.
              </p>

              <p className="font-medium text-white">
                The problems have just gotten a lot more interesting.
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
                  Multi-Agent AI, RAG, Guardrails, Backend & ML
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