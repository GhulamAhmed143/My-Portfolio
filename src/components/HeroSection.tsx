"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ background: "#0b0b1a" }}
    >
      {/* Minimal background — single subtle gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07]"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, #2cb67d, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* LEFT — Text Content */}
          <div>
            {/* Name & Title — one clean block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-emerald-400 text-sm font-semibold tracking-wide mb-5">
                Full-Stack Developer · Pakistan
              </p>

              <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                Ghulam Ahmed
              </h1>

              <p className="mt-5 text-xl sm:text-2xl font-medium text-slate-300 leading-snug max-w-lg">
                I build web apps that work —{" "}
                <span className="text-white">not just prototypes.</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-lg text-[15px] sm:text-base leading-relaxed text-slate-400"
            >
              BS Information Engineering Technology student. I&apos;ve built a
              Netflix-style streaming app, a blockchain real estate platform,
              a multi-store POS system, and more — using Next.js, React,
              TypeScript, and Laravel.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                See My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Social — minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:ahmedghulam622@gmail.com"
                aria-label="Email"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-xs text-slate-600">
                ahmedghulam622@gmail.com
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Image */}
              <div className="w-[360px] h-[440px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Ghulam Ahmed"
                  fill
                  priority
                  sizes="360px"
                  className="object-cover object-center"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b1a] to-transparent" />
              </div>

              {/* Small credential card */}
              <div className="absolute -bottom-6 -left-6 bg-[#141428] border border-slate-800 rounded-xl px-5 py-4 shadow-2xl shadow-black/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-white text-sm font-semibold">5 real projects shipped</p>
                    <p className="text-slate-500 text-xs">Next.js · React · Laravel · TypeScript</p>
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
          className="mt-20 pt-10 border-t border-slate-800/60"
        >
          <div className="flex flex-wrap items-start gap-x-12 gap-y-6">
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-600 font-medium pt-1">
              Selected Work
            </p>
            {[
              { name: "NetPrime", desc: "Streaming Platform" },
              { name: "Cloud POS", desc: "Multi-Store System" },
              { name: "Blockchain RE", desc: "Real Estate Tokenization" },
            ].map((project) => (
              <a
                key={project.name}
                href="#projects"
                className="group"
              >
                <p className="text-white text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </p>
                <p className="text-slate-600 text-xs">{project.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}