"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolioData";
import { generateAndDownloadResume } from "@/utils/downloadResume";

export default function HeroSection() {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const { personal, projects } = portfolioData;

  const handleDownloadResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      await generateAndDownloadResume();
    } catch (err) {
      console.error("Failed to generate PDF resume:", err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24"
      style={{ background: "#0b0b1a" }}
    >
      {/* Minimal background — single subtle gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-[0.07]"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, #2cb67d, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* LEFT — Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Name & Title — one clean block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              <p className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide mb-3 sm:mb-5 uppercase">
                {personal.tagline}
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight lg:leading-[1.05] tracking-tight text-white">
                {personal.name}
              </h1>

              <p className="mt-4 sm:mt-5 text-lg sm:text-2xl font-medium text-slate-300 leading-snug max-w-lg">
                {personal.subtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-slate-400"
            >
              {personal.bioP1}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>See My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </a>
              <button
                onClick={handleDownloadResume}
                disabled={isGeneratingPdf}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
              >
                {isGeneratingPdf ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>{isGeneratingPdf ? "Generating PDF..." : "Resume"}</span>
              </button>
            </motion.div>

            {/* Social — minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex items-center gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <span className="text-xs text-slate-600 break-all sm:break-normal">
                {personal.email}
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:block mt-6 lg:mt-0"
          >
            <div className="relative max-w-full">
              {/* Image */}
              <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[360px] lg:h-[440px] rounded-2xl overflow-hidden relative shadow-2xl">
                <Image
                  src={personal.profilePicture}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 360px"
                  className="object-cover object-center"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b1a] to-transparent" />
              </div>

              {/* Small credential card */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-[#141428] border border-slate-800 rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl shadow-black/50 w-[calc(100%-1.5rem)] sm:w-auto max-w-xs whitespace-normal sm:whitespace-nowrap z-10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">{personal.badge}</p>
                    <p className="text-slate-400 sm:text-slate-500 text-[11px] sm:text-xs">Next.js · React · Laravel · TypeScript</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar — selected work preview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-800/60"
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center lg:justify-start gap-x-8 lg:gap-x-12 gap-y-4 text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 font-semibold pt-1">
              Selected Work
            </p>
            {projects.slice(0, 3).map((project) => (
              <a
                key={project.id}
                href="#projects"
                className="group"
              >
                <p className="text-white text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                  {project.title.split(" — ")[0]}
                </p>
                <p className="text-slate-500 text-xs">{project.title.split(" — ")[1] || project.category}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}