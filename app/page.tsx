"use client";

import Image from "next/image";
import { useState } from "react";

const projects = {
  ai: [

    {
      title: "RelayAI",
      category: "Production AI · Multi-Agent Systems",
      description:
        "Multi-tenant AI messaging and customer-service platform built around layered LLM reasoning, deterministic workflows, asynchronous processing, and human-in-the-loop escalation.",
      tags: ["LangGraph", "FastAPI", "PostgreSQL", "LLMs"],
      href: "https://github.com/AswithSama/RelayAI---Intelligent-Multi-Tenant-Messaging-System",
    },
    {
      title: "Health Insurance RAG Pipeline",
      category: "RAG · Information Retrieval",
      description:
        "Multi-stage retrieval architecture for answering complex health-insurance policy questions using semantic retrieval, structured information extraction, reranking, and grounded generation.",
      tags: ["Python", "RAG", "MongoDB Atlas", "CrossEncoder"],
      href: "https://github.com/AswithSama/RAG-Powered-Health-Insurance-Policy-Retrieval-Pipeline",
    },
    {
      title: "Vision-Text LLM Assignment Grader",
      category: "Multimodal AI · Vision-Language Models",
      description:
        "Automated grading pipeline combining vision-language models for document understanding with LLM-based structured answer extraction and deterministic grading.",
      tags: ["VLMs", "LLMs", "Python", "Computer Vision"],
      href: "https://github.com/AswithSama/Vision-Text-LLM-Assignment-Grader",
    },
    {
      title: "Agentic YouTube Intelligence System",
      category: "Agentic AI · Content Intelligence",
      description:
        "Agentic AI system for extracting, analyzing, and reasoning over YouTube content to generate structured insights from long-form video information.",
      tags: ["Agents", "LLMs", "Python", "AI Automation"],
      href: "https://github.com/AswithSama/Agentic-YouTube-Intelligence-System",
    },
    {
      title: "Psychology Expert RAG System",
      category: "RAG · Expert Knowledge Systems",
      description:
        "RAG-powered psychology expert system designed to retrieve relevant domain knowledge and generate grounded, context-aware responses.",
      tags: ["RAG", "LLMs", "Embeddings", "Python"],
      href: "https://github.com/AswithSama/RAG-Powered-Psychology-Expert-System",
    },
  ],

  software: [
    {
      title: "Talent Recruitment Platform",
      category: "Software Engineering · Full-Stack Platform",
      description:
        "Full-stack talent recruitment platform supporting structured hiring workflows, user management, recruiter and candidate experiences, and production-oriented application architecture.",
      tags: ["Next.js", "TypeScript", "Supabase", "AWS"],
      href: "https://github.com/AswithSama/Talent-Recruitment-Platform",
    },
  ],

  data: [
    {
      title: "Churn Analytics & Prediction",
      category: "Data Science · Predictive Analytics",
      description:
        "End-to-end customer churn analysis combining exploratory data analysis, feature engineering, statistical insights, and machine-learning-based churn prediction.",
      tags: ["Python", "Pandas", "Machine Learning", "EDA"],
      href: "https://github.com/AswithSama/In-Depth-Churn-Analytics-and-Prediction",
    },
    {
      title: "Wellness Text Classification & Scoring",
      category: "NLP · Transformer Fine-Tuning",
      description:
        "NLP pipeline combining GPT-assisted data labeling with BERTweet fine-tuning for multi-label wellness classification and well-being scoring from user-generated text.",
      tags: ["BERTweet", "PyTorch", "PEFT / LoRA", "GPT"],
      href: "https://github.com/AswithSama/GPT-and-BERTweet-based-Wellness-Text-Classification-and-Scoring",
    },
    {
      title: "Vehicle Counting & Traffic Congestion Detection",
      category: "Computer Vision · Traffic Analytics",
      description:
        "Computer-vision system for detecting and counting vehicles from traffic footage and using traffic density information to identify congestion patterns.",
      tags: ["Computer Vision", "Python", "Object Detection", "Analytics"],
      href: "https://github.com/AswithSama/Vehicle-Counting-and-Traffic-Congestion-Detection",
    },
    {
      title: "Loan Approval Prediction",
      category: "Machine Learning · Classification",
      description:
        "Machine-learning project analyzing applicant and financial attributes to model and predict loan approval outcomes.",
      tags: ["Python", "Scikit-learn", "Classification", "EDA"],
      href: "https://github.com/AswithSama/LOAN-APPROVAL-PREDICTION",
    },
    {
      title: "AlexNet From Scratch",
      category: "Deep Learning · Computer Vision",
      description:
        "Implementation of the AlexNet convolutional neural-network architecture from scratch to explore deep-learning architecture design and image classification.",
      tags: ["Deep Learning", "CNN", "PyTorch", "Computer Vision"],
      href: "https://github.com/AswithSama/AlexNet_From_Scratch",
    },
    {
      title: "2024 Alaska Election Prediction",
      category: "Data Science · Election Analytics",
      description:
        "Data-driven analysis and predictive modeling of the 2024 U.S. presidential and congressional election outcomes in Alaska.",
      tags: ["Data Analysis", "Prediction", "Python", "Statistics"],
      href: "https://github.com/AswithSama/2024_USA_Presidential_and_Congressional_Election_Prediction_Alaska",
    },
    {
      title: "Mercedes-Benz Greener Manufacturing",
      category: "Data Science · Regression",
      description:
        "Predictive analytics project focused on Mercedes-Benz manufacturing data to model testing time and investigate opportunities for more efficient production.",
      tags: ["Machine Learning", "Regression", "Python", "EDA"],
      href: "https://github.com/AswithSama/Mercedes-Benz-Greener-Manufacturing",
    },
  ],
};

type ProjectTab = keyof typeof projects;

export default function Home() {
  const [activeProjectTab, setActiveProjectTab] = useState<ProjectTab>("ai");
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">

          <a
            href="#"
            className="text-lg font-semibold tracking-tight"
          >
            AS
          </a>

        <div className="hidden items-center gap-3 text-base font-medium text-gray-300 md:flex">

          <a
            href="/about"
            className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
          >
            Experience
          </a>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
            >
              Contact

              <span className="text-sm transition-transform duration-200 group-hover:rotate-180">
                ↓
              </span>
            </button>              <div className="invisible absolute right-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-72 rounded-2xl border border-white/10 bg-black p-4 shadow-2xl">

                  {/* Email */}
                  <a
                    href="mailto:aswithreddy907@gmail.com"
                    className="block rounded-xl p-3 transition hover:bg-white/[0.06]"
                  >
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white">
                      aswithreddy907@gmail.com
                    </p>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+17736734072"
                    className="mt-1 block rounded-xl p-3 transition hover:bg-white/[0.06]"
                  >
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white">
                      (773) 673-4072
                    </p>
                  </a>

                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1fr_340px]">

          {/* Hero Content */}
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
              AI Engineer · Software Engineer · Data Scientist
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              I build intelligent systems
              <span className="text-gray-500">
                {" "}that solve real problems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              I&apos;m Aswith Reddy Sama, an engineer focused on building intelligent systems, 
              scalable software, and data-driven solutions across AI engineering, software engineering, and data science.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">

              {/* View Work */}
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                View My Work
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/AswithSama"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition duration-200 hover:scale-105 hover:bg-gray-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .7Z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aswithsama/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition duration-200 hover:scale-105 hover:bg-gray-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
              </a>
              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition duration-200 hover:scale-105 hover:bg-gray-200"
              >
                Resume
              </a>

            </div>
          </div>


          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[340px] w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/profile.png"
                alt="Aswith Reddy Sama"
                fill
                priority
                sizes="(max-width: 1024px) 300px, 340px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-5 max-w-2xl text-gray-400">
              Explore my work across AI engineering, software engineering,
              data science, and analytics.
            </p>
          </div>

          {/* Project Tabs */}
          <div className="mb-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveProjectTab("ai")}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeProjectTab === "ai"
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              AI Engineering
            </button>

            <button
              type="button"
              onClick={() => setActiveProjectTab("software")}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeProjectTab === "software"
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              Software Engineering
            </button>

            <button
              type="button"
              onClick={() => setActiveProjectTab("data")}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeProjectTab === "data"
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              Data Science & Analytics
            </button>
          </div>

          {/* Project Cards - fixed desktop area prevents Experience from jumping */}
          <div className="min-h-0 xl:min-h-[820px]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects[activeProjectTab].map((project) => (
              <a
                key={project.href}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 text-sm text-gray-500">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  <span className="mt-1 text-xl text-gray-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-400">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          </div>

        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              Career
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Experience
            </h2>

            <p className="mt-5 max-w-2xl text-gray-400">
              Building AI systems, machine learning pipelines, and production
              software across startups, research, and enterprise environments.
            </p>
          </div>

          <div className="relative">

            {/* Vertical Timeline */}
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 md:block" />


            {/* CEAC */}
            <div className="relative grid gap-6 pb-14 md:grid-cols-[220px_1fr]">

              <div className="relative pl-0 md:pl-10">
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border border-white/30 bg-black md:block" />

                <p className="text-sm text-gray-500">
                  Feb 2026 — Present
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Chicago, USA
                </p>
              </div>

              <div className="border-b border-white/10 pb-14">
                <h3 className="text-2xl font-semibold">
                  Data Scientist
                </h3>

                <p className="mt-1 text-gray-400">
                  Chicago Education Advocacy Cooperative
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                  Building a venue intelligence platform that combines machine
                  learning, RAG, operational data, and LLM reasoning to forecast
                  attendance, dwell time, and revenue while generating
                  evidence-backed business recommendations.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "RAG",
                    "LangChain",
                    "scikit-learn",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>


            {/* Catapult */}
            <div className="relative grid gap-6 pb-14 md:grid-cols-[180px_1fr]">

              <div className="relative pl-0 md:pl-10">
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border border-white/30 bg-black md:block" />

                <p className="text-sm text-gray-500">
                  May 2026 — Jul 2026
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Utah, USA
                </p>
              </div>

              <div className="border-b border-white/10 pb-14">
                <h3 className="text-2xl font-semibold">
                  AI Engineer
                </h3>

                <p className="mt-1 text-gray-400">
                  Catapult
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                  Architected a 3-layer LangGraph-based AI system supporting
                  70+ companies, combining LLM reasoning with deterministic
                  execution, AI guardrails, asynchronous processing, and
                  human-in-the-loop escalation while achieving approximately
                  95% production classification accuracy.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "LangGraph",
                    "FastAPI",
                    "PostgreSQL",
                    "GCP",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>


            {/* Uplifty */}
            <div className="relative grid gap-6 pb-14 md:grid-cols-[180px_1fr]">

              <div className="relative pl-0 md:pl-10">
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border border-white/30 bg-black md:block" />

                <p className="text-sm text-gray-500">
                  Jul 2025 — Nov 2025
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  New York, USA
                </p>
              </div>

              <div className="border-b border-white/10 pb-14">
                <h3 className="text-2xl font-semibold">
                  AI/ML Algorithm Engineering Intern
                </h3>

                <p className="mt-1 text-gray-400">
                  Uplifty
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                  Built an LLM-assisted wellness NLP pipeline across 100K+
                  text samples and fine-tuned BERTweet using PEFT/LoRA,
                  achieving roughly 0.70–0.90 F1 across emotion and
                  well-being categories.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "PyTorch",
                    "BERTweet",
                    "PEFT / LoRA",
                    "LLMs",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>


            {/* Unizen */}
            <div className="relative grid gap-6 md:grid-cols-[180px_1fr]">

              <div className="relative pl-0 md:pl-10">
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border border-white/30 bg-black md:block" />

                <p className="text-sm text-gray-500">
                  May 2022 — Dec 2023
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  India
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Software Engineer / Analyst
                </h3>

                <p className="mt-1 text-gray-400">
                  Unizen Technologies Pvt. Ltd.
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                  Built 20+ REST APIs and backend workflows supporting 5,000+
                  users, while improving API response latency by roughly 20%
                  and contributing to cloud and enterprise data pipelines.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "MySQL",
                    "AWS",
                    "PySpark",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}