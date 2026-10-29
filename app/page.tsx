"use client";

import Image from "next/image";
import { useState } from "react";
import SiteNav from "./components/SiteNav";

const projects = {
  ai: [
    {
      title: "Computer Use Automation",
      image: "/project-photos/approved/computer-use-automation.png",
      backupImage: "/project-photos/computer-use-automation.png",
      fallbackImage: "/project-covers/computer-use-automation.svg",
      coverMode: "diagram",
      category: "AI Agents · Browser Automation",
      description:
        "AI-powered browser automation that discovers workflows with GPT-5-mini, converts them into reusable capabilities, and replays them deterministically with guardrails, policy enforcement, and human-assisted recovery, validated by 23 real-browser acceptance tests.",
      tags: ["Python", "Playwright", "Pydantic", "Deterministic Replay"],
      href: "https://github.com/AswithSama/Computer-Use-Automation",
    },

    {
      title: "RelayAI",
      image: "/project-photos/approved/relayai.png",
      backupImage: "/project-photos/relayai.png",
      fallbackImage: "/project-covers/relayai.svg",
      coverMode: "diagram",
      category: "Production AI · Multi-Agent Systems",
      description:
        "Multi-tenant AI messaging and customer-service platform built around layered LLM reasoning, deterministic workflows, asynchronous processing, and human-in-the-loop escalation.",
      tags: ["LangGraph", "FastAPI", "PostgreSQL", "LLMs"],
      href: "https://github.com/AswithSama/RelayAI---Intelligent-Multi-Tenant-Messaging-System",
    },
    {
      title: "Health Insurance RAG Pipeline",
      image: "/project-photos/approved/health-rag.png",
      backupImage: "/project-photos/health-rag.png",
      fallbackImage: "/project-covers/health-rag.svg",
      coverMode: "diagram",
      category: "RAG · Information Retrieval",
      description:
        "Multi-stage retrieval architecture for answering complex health-insurance policy questions using semantic retrieval, structured information extraction, reranking, and grounded generation.",
      tags: ["Python", "RAG", "MongoDB Atlas", "CrossEncoder"],
      href: "https://github.com/AswithSama/RAG-Powered-Health-Insurance-Policy-Retrieval-Pipeline",
    },
    {
      title: "Vision-Text LLM Assignment Grader",
      image: "/project-photos/approved/vision-grader.png",
      backupImage: "/project-photos/vision-grader.png",
      fallbackImage: "/project-covers/vision-grader.svg",
      coverMode: "diagram",
      category: "Multimodal AI · Vision-Language Models",
      description:
        "Automated grading pipeline combining vision-language models for document understanding with LLM-based structured answer extraction and deterministic grading.",
      tags: ["VLMs", "LLMs", "Python", "Computer Vision"],
      href: "https://github.com/AswithSama/Vision-Text-LLM-Assignment-Grader",
    },
    {
      title: "Agentic YouTube Intelligence System",
      image: "/project-photos/approved/youtube-agent.png",
      backupImage: "/project-photos/youtube-agent.png",
      fallbackImage: "/project-covers/youtube-agent.svg",
      coverMode: "photo",
      category: "Agentic AI · Content Intelligence",
      description:
        "Agentic AI system for extracting, analyzing, and reasoning over YouTube content to generate structured insights from long-form video information.",
      tags: ["Agents", "LLMs", "Python", "AI Automation"],
      href: "https://github.com/AswithSama/Agentic-YouTube-Intelligence-System",
    },
    {
      title: "Psychology Textbook Semantic Search",
      image: "/project-photos/approved/psychology-semantic-search.png",
      backupImage: "/project-photos/psychology-semantic-search.png",
      fallbackImage: "/project-covers/psychology-rag.svg",
      coverMode: "diagram",
      category: "Semantic Search · Document Retrieval",
      description:
        "Section-aware psychology textbook search with hierarchical PDF chunking, sentence embeddings, ChromaDB indexing, and a FastAPI-powered retrieval interface. Returns relevant source passages rather than generating chatbot answers.",
      tags: ["Sentence Transformers", "ChromaDB", "FastAPI", "Semantic Search"],
      href: "https://github.com/AswithSama/psychology-semantic-search",
    },
  ],

  software: [
    {
      title: "Talent Recruitment Platform",
      image: "/project-photos/talent-platform.jpg",
      fallbackImage: "/project-covers/talent-platform.svg",
      coverMode: "photo",
      category: "Software Engineering · Full-Stack Platform",
      description:
        "Full-stack talent recruitment platform supporting structured hiring workflows, user management, recruiter and candidate experiences, and production-oriented application architecture.",
      tags: ["Next.js", "TypeScript", "Supabase", "AWS"],
      href: "https://github.com/AswithSama/Talent-Recruitment-Platform",
    },
    {
      title: "Venue Intelligence Platform",
      image: "/project-photos/venue-intelligence.jpg",
      fallbackImage: "/project-covers/talent-platform.svg",
      coverMode: "photo",
      category: "Software Project · Documentation In Progress",
      description:
        "A repository for Venue Intelligence Platform. The public project documentation and implementation details are still being prepared; follow the GitHub repository for updates.",
      tags: ["Project Repository", "Documentation Pending"],
      href: "https://github.com/AswithSama/Venue-Intelligence-Platform-",
    },
  ],

  data: [
    {
      title: "Churn Analytics & Prediction",
      image: "/project-photos/approved/churn.png",
      backupImage: "/project-photos/churn.png",
      fallbackImage: "/project-covers/churn.svg",
      coverMode: "diagram",
      category: "Data Science · Predictive Analytics",
      description:
        "End-to-end customer churn analysis combining exploratory data analysis, feature engineering, statistical insights, and machine-learning-based churn prediction.",
      tags: ["Python", "Pandas", "Machine Learning", "EDA"],
      href: "https://github.com/AswithSama/In-Depth-Churn-Analytics-and-Prediction",
    },
    {
      title: "Wellness Text Classification & Scoring",
      image: "/project-photos/approved/wellness.png",
      backupImage: "/project-photos/wellness.svg",
      fallbackImage: "/project-covers/wellness.svg",
      coverMode: "diagram",
      category: "NLP · Transformer Fine-Tuning",
      description:
        "NLP pipeline combining GPT-assisted data labeling with BERTweet fine-tuning for multi-label wellness classification and well-being scoring from user-generated text.",
      tags: ["BERTweet", "PyTorch", "PEFT / LoRA", "GPT"],
      href: "https://github.com/AswithSama/GPT-and-BERTweet-based-Wellness-Text-Classification-and-Scoring",
    },
    {
      title: "Vehicle Counting & Traffic Congestion Detection",
      image: "/project-photos/approved/traffic.png",
      backupImage: "/project-photos/traffic.jpg",
      fallbackImage: "/project-covers/traffic.svg",
      coverMode: "photo",
      category: "Computer Vision · Traffic Analytics",
      description:
        "Computer-vision system for detecting and counting vehicles from traffic footage and using traffic density information to identify congestion patterns.",
      tags: ["Computer Vision", "Python", "Object Detection", "Analytics"],
      href: "https://github.com/AswithSama/Vehicle-Counting-and-Traffic-Congestion-Detection",
    },
    {
      title: "Loan Approval Prediction",
      image: "/project-photos/approved/loan.png",
      backupImage: "/project-photos/loan.png",
      fallbackImage: "/project-covers/loan.svg",
      coverMode: "diagram",
      category: "Machine Learning · Classification",
      description:
        "Machine-learning project analyzing applicant and financial attributes to model and predict loan approval outcomes.",
      tags: ["Python", "Scikit-learn", "Classification", "EDA"],
      href: "https://github.com/AswithSama/LOAN-APPROVAL-PREDICTION",
    },
    {
      title: "AlexNet From Scratch",
      image: "/project-photos/approved/alexnet.png",
      backupImage: "/project-photos/alexnet.png",
      fallbackImage: "/project-covers/alexnet.svg",
      coverMode: "diagram",
      category: "Deep Learning · Computer Vision",
      description:
        "Implementation of the AlexNet convolutional neural-network architecture from scratch to explore deep-learning architecture design and image classification.",
      tags: ["Deep Learning", "CNN", "PyTorch", "Computer Vision"],
      href: "https://github.com/AswithSama/AlexNet_From_Scratch",
    },
    {
      title: "2024 Alaska Election Prediction",
      image: "/project-photos/approved/alaska-election.png",
      backupImage: "/project-photos/alaska-election.svg",
      fallbackImage: "/project-covers/alaska-election.svg",
      coverMode: "diagram",
      category: "Data Science · Election Analytics",
      description:
        "Data-driven analysis and predictive modeling of the 2024 U.S. presidential and congressional election outcomes in Alaska.",
      tags: ["Data Analysis", "Prediction", "Python", "Statistics"],
      href: "https://github.com/AswithSama/2024_USA_Presidential_and_Congressional_Election_Prediction_Alaska",
    },
    {
      title: "Mercedes-Benz Greener Manufacturing",
      image: "/project-photos/approved/mercedes.png",
      backupImage: "/project-photos/mercedes.jpg",
      fallbackImage: "/project-covers/mercedes.svg",
      coverMode: "photo",
      category: "Data Science · Regression",
      description:
        "Predictive analytics project focused on Mercedes-Benz manufacturing data to model testing time and investigate opportunities for more efficient production.",
      tags: ["Machine Learning", "Regression", "Python", "EDA"],
      href: "https://github.com/AswithSama/Mercedes-Benz-Greener-Manufacturing",
    },
  ],
};

const experience = [
  {
    company: "Box Technology Group",
    title: "Software Engineering (AI/ML) Intern",
    period: "Aug 2026 — Present",
    location: "Delaware, USA",
    project: "Ressa · Multi-Agent Conversational AI Platform",
    description: "Owning multi-agent AI architecture connecting RAG, messaging, CRM, and scheduling across 16 real estate domains. Building OpenAI-powered intent and fact extraction across 7 action classes, tenant-safe FastAPI integrations for Twilio, Gmail, and Microsoft Graph, and an evaluation framework spanning 320+ scenarios with targets of 95% classification accuracy and 90% context retention.",
    tags: ["OpenAI", "RAG", "FastAPI", "LangChain", "Twilio"],
  },
  {
    company: "Catapult",
    title: "AI Engineer",
    period: "May 2026 — Jul 2026",
    location: "Utah, USA",
    project: "Intelligent Multi-Tenant Messaging System",
    description: "Led a three-layer LangGraph multi-agent platform for customer service across 70+ pest-control companies and 15+ sub-domains. Built deterministic execution and AI guardrails around LLM decisions, plus asynchronous FastAPI/Twilio/CRM workers on GCP Cloud Run; reached approximately 95% production classification accuracy.",
    tags: ["LangGraph", "FastAPI", "PostgreSQL", "GCP Cloud Run", "Twilio"],
  },
  {
    company: "Chicago Education Advocacy Cooperative",
    title: "Data Scientist",
    period: "Feb 2026 — May 2026",
    location: "Chicago, USA",
    project: "Talent Recruitment Platform",
    description: "Built an AI-enabled recruitment platform using GPT-5-mini for resume parsing and candidate skill/experience extraction. Developed candidate discovery with 12+ search filters, role-based access control, PostgreSQL, and automated deployments through AWS ECS and GitHub Actions.",
    tags: ["OpenAI", "Next.js", "Supabase", "PostgreSQL", "AWS ECS"],
  },
  {
    company: "Uplifty",
    title: "AI/ML Algorithm Engineering Intern",
    period: "Jul 2025 — Nov 2025",
    location: "New York, USA",
    project: "Human Wellness NLP Pipeline",
    description: "Built a multi-agent weak-labeling pipeline for 100K+ texts, escalating conflicting model labels for review, then fine-tuned BERTweet with PEFT/LoRA. Achieved 0.70–0.90 F1 across 27 emotion and 13 well-being categories and deployed Flask/GCP prediction APIs.",
    tags: ["PyTorch", "BERTweet", "PEFT / LoRA", "LLM Orchestration", "GCP"],
  },
  {
    company: "Unizen Technologies Pvt. Ltd.",
    title: "Software Engineer / Analyst",
    period: "May 2022 — Dec 2023",
    location: "Bangalore, India",
    project: "Learning Management System · Enterprise Data Pipeline",
    description: "Developed 20+ Node.js/Express REST APIs for an LMS serving 5,000+ users, improving API latency by about 20%. Worked with AWS S3/CodePipeline and processed 100K+ sales and inventory records with Databricks/PySpark, Power BI, and Azure Data Factory ETL workflows.",
    tags: ["Node.js", "Express", "MySQL", "AWS", "PySpark", "Power BI"],
  },
];

type ProjectTab = keyof typeof projects;

export default function Home() {
  const [activeProjectTab, setActiveProjectTab] = useState<ProjectTab>("ai");
  const [coverFailed, setCoverFailed] = useState<Record<string, number>>({});
  return (
    <main className="min-h-screen bg-black text-white">

      <SiteNav />


      {/* Hero */}
      <section className="px-6 pb-14 pt-40">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_390px]">

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
              I&apos;m Aswith Reddy Sama, an AI Engineer with 3+ years of combined AI/ML and software engineering experience.
              I build production-grade LLM applications, multi-agent systems, and RAG pipelines backed by reliable
              workflows, guardrails, and scalable cloud services.
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
              {/* About CTA: text only, no arrow icon */}
              <a
                href="/about"
                className="flex h-12 items-center justify-center rounded-full border border-white/35 bg-white/[0.08] px-6 text-sm font-semibold text-white transition duration-200 hover:border-white/70 hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                My Story
              </a>

            </div>
          </div>


          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[390px] w-[320px] overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] shadow-[0_22px_65px_rgba(0,0,0,0.45)] sm:h-[420px] sm:w-[350px] lg:h-[460px] lg:w-[390px]">
              <Image
                src="/profile.png"
                alt="Aswith Reddy Sama"
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 350px, 390px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* About preview — editorial layout, not a callout or floating card */}
      <section aria-labelledby="about-preview-heading" className="px-6 pb-14 pt-2 lg:px-10">
        <div className="mx-auto max-w-[1400px] border-y border-white/10 py-7 sm:py-9">
          <div className="grid items-center gap-8 sm:grid-cols-[158px_1fr] sm:gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">
            <a
              href="/about"
              aria-label="Read more about Aswith Reddy Sama"
              className="group relative block h-[195px] w-[158px] overflow-hidden rounded-2xl border border-white/10 sm:h-[210px] lg:h-[235px] lg:w-[180px]"
            >
              <Image
                src="/aswith-about.jpg"
                alt="Aswith Reddy Sama looking out toward the sea"
                fill
                sizes="(max-width: 1024px) 158px, 180px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </a>

            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                Get to know me
              </p>
              <h2 id="about-preview-heading" className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Beyond the code.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                My love for mathematics led me into software engineering and AI. Today, I focus on building intelligent systems that are useful, reliable, and designed for the real world.
              </p>
              <a
                href="/about"
                className="mt-4 inline-block border-b border-white/50 pb-1 text-sm font-semibold text-white transition-colors duration-200 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Read My Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-28 px-6 pb-28 pt-12 lg:px-10">
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

          {/* Project Cards — individual visual covers, original project categories */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects[activeProjectTab].map((project) => (
              <a
                key={project.href}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-0 block overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.05] hover:border-white/35 hover:bg-white/[0.05] hover:shadow-[0_26px_75px_rgba(35,88,150,0.24)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 motion-reduce:transform-none"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#101723]">
                  <Image
                    src={coverFailed[project.href] >= 2
                      ? project.fallbackImage
                      : coverFailed[project.href] === 1
                        ? ("backupImage" in project ? project.backupImage : project.fallbackImage)
                        : project.image}
                    alt={`${project.title} — illustrative reference image, not an actual project output`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={() => setCoverFailed((current) => ({ ...current, [project.href]: Math.min((current[project.href] ?? 0) + 1, 2) }))}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">{project.category}</p>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 leading-7 text-gray-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-400">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-600">
            Cover images are illustrative, not screenshots or results from these projects. <a href="/project-cover-credits.html" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-700 underline-offset-4 hover:text-gray-300">Image credits</a>
          </p>

        </div>
      </section>
      {/* Experience — aligned with October 25, 2026 resume */}
      <section id="experience" className="scroll-mt-28 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">Career</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Experience</h2>
            <p className="mt-5 max-w-2xl text-gray-400">
              Building production AI applications, machine learning pipelines, and dependable backend systems.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 md:block" />
            {experience.map((role, index) => (
              <article key={`${role.company}-${role.period}`} className="relative grid gap-6 pb-14 md:grid-cols-[220px_1fr]">
                <div className="relative pl-0 md:pl-10">
                  <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border border-white/30 bg-black md:block" />
                  <p className="text-sm text-gray-400">{role.period}</p>
                  <p className="mt-2 text-sm text-gray-600">{role.location}</p>
                </div>
                <div className={index < experience.length - 1 ? "border-b border-white/10 pb-14" : ""}>
                  <h3 className="text-2xl font-semibold">{role.title}</h3>
                  <p className="mt-1 text-gray-400">{role.company}</p>
                  <p className="mt-2 text-sm text-gray-500">{role.project}</p>
                  <p className="mt-5 max-w-3xl leading-7 text-gray-400">{role.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills — integrated image, not separate badges or cards */}
      <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-28 border-t border-white/10 bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 id="skills-heading" className="mb-7 text-4xl font-semibold tracking-tight sm:text-5xl">Skills &amp; Technologies</h2>
          <p className="sr-only">A constellation of technology logos representing my tools and experience, including Python, OpenAI, LangChain, LangGraph, RAG, FastAPI, React, TypeScript, PostgreSQL, MongoDB, MySQL, Supabase, PyTorch, TensorFlow, Docker, Kubernetes, AWS, GCP, Twilio, Playwright, and more.</p>
          <Image
            src="/skills-constellation.png"
            alt="Skills constellation with equally featured logos for languages, AI frameworks, databases, cloud platforms, data science, and developer tools; Gmail and Google Calendar are excluded."
            width={1672}
            height={941}
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="mx-auto block h-auto w-full max-w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-28 border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">Academic foundation</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Education</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-7">
              <p className="text-sm text-gray-500">Jan 2024 – Dec 2025 · Chicago, USA</p>
              <h3 className="mt-3 text-xl font-semibold">Illinois Institute of Technology</h3>
              <p className="mt-2 text-gray-400">M.S. in Artificial Intelligence</p>
              <p className="mt-3 text-sm text-gray-500">GPA: 3.70/4.00</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-7">
              <p className="text-sm text-gray-500">Jul 2019 – May 2023 · Hyderabad, India</p>
              <h3 className="mt-3 text-xl font-semibold">J.B. Institute of Engineering and Technology</h3>
              <p className="mt-2 text-gray-400">B.Tech in Information Technology</p>
              <p className="mt-3 text-sm text-gray-500">GPA: 3.57/4.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact — target of the AS section menu and navbar */}
      <section id="contact" className="scroll-mt-28 border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">Get in touch</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s connect.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Interested in AI engineering, software systems, or working together? I&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:aswithreddy907@gmail.com" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">Email Me</a>
            <a href="https://www.linkedin.com/in/aswithsama/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10">LinkedIn</a>
            <a href="https://github.com/AswithSama" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10">GitHub</a>
          </div>
        </div>
      </section>

    </main>
  );
}