"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend";
  description: string;
  highlights: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "netprime",
    title: "NetPrime — Streaming Platform",
    category: "Full Stack",
    description: "A Netflix-inspired streaming platform where users can browse, search, and stream video content. Built with a focus on responsive design, smooth video playback, and a clean content browsing experience.",
    highlights: [
      "Video streaming with adaptive playback controls",
      "Search and filter functionality for content discovery",
      "Responsive UI that works across devices",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "covid-visualizer",
    title: "COVID / Health Statistics Visualizer",
    category: "Full Stack",
    description: "A data visualization dashboard that pulls real-time COVID and health statistics from public APIs and displays them through interactive charts, maps, and filterable data tables.",
    highlights: [
      "Interactive charts with real-time data from public health APIs",
      "Country and region-level filtering and comparison",
      "Responsive dashboard layout with clear data presentation",
    ],
    tags: ["React", "Chart.js", "REST APIs", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "blockchain-realestate",
    title: "Blockchain Real Estate Tokenization",
    category: "Full Stack",
    description: "A platform for tokenizing real estate assets on the blockchain, enabling fractional ownership and transparent property transactions through smart contracts.",
    highlights: [
      "Smart contract integration for property tokenization",
      "Wallet connection and transaction management with Web3.js",
      "Property listing and fractional ownership dashboard",
    ],
    tags: ["React", "Solidity", "Web3.js", "Node.js", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "cloud-pos",
    title: "Cloud-Based Multi-Store POS",
    category: "Full Stack",
    description: "A progressive web app for managing point-of-sale operations across multiple store locations, with real-time inventory sync, sales reporting, and offline support.",
    highlights: [
      "Multi-store inventory management with real-time sync",
      "Offline-capable PWA with background data sync",
      "Sales reporting and analytics dashboard",
    ],
    tags: ["Next.js", "Laravel", "TypeScript", "PWA", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
];

const categories = ["All", "Full Stack", "Frontend"];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="section-light py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Projects I&apos;ve Built
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === cat
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-500 border border-slate-200 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="card-light p-7 sm:p-8 flex flex-col justify-between group"
              >
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Code</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
