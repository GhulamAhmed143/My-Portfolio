"use client";

import { motion } from "framer-motion";
import { Laptop, Code, GraduationCap, BookOpen } from "lucide-react";

const milestones = [
  {
    period: "2024 - Present",
    title: "Building Full-Stack Projects",
    role: "Next.js, Laravel & TypeScript",
    description: "Working on larger projects like the Cloud-Based POS system and NetPrime streaming platform. Learning to manage complexity in real applications with proper backend APIs, database design, and deployment.",
    icon: Laptop,
    badge: "Current",
  },
  {
    period: "2023 - 2024",
    title: "React, TypeScript & Blockchain",
    role: "Deeper Frontend + Web3",
    description: "Built the blockchain-based real estate tokenization platform with Solidity and Web3.js. Got comfortable with TypeScript and started using it in all new projects.",
    icon: Code,
    badge: "Growth",
  },
  {
    period: "2022 - 2023",
    title: "Started with Web Development",
    role: "HTML, CSS, JavaScript & React",
    description: "Learned the fundamentals of web development and built first projects including the COVID statistics visualizer. Picked up React and started building interactive UIs.",
    icon: BookOpen,
    badge: "Foundation",
  },
  {
    period: "Ongoing",
    title: "BS Information Engineering Technology",
    role: "University Studies",
    description: "Pursuing my degree while building real-world projects on the side. Balancing coursework with hands-on development to get practical experience alongside the theory.",
    icon: GraduationCap,
    badge: "Education",
  },
];

export default function TimelineSection() {
  return (
    <section id="experience" className="section-dark py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Got Here
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-10">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-0 p-2 rounded-full bg-[#1a1a2e] border-2 border-emerald-500 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <item.icon className="w-4 h-4" />
              </div>

              {/* Period Pill for Large Screens */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/30 px-2.5 py-1 rounded-md">
                  {item.period}
                </span>
              </div>

              {/* Content Card */}
              <div className="card-dark p-6 sm:p-7">
                {/* Mobile Period Tag */}
                <div className="sm:hidden mb-2">
                  <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/30 px-2 py-0.5 rounded-md">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/8 text-slate-400">
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm font-semibold text-emerald-400 mb-3">{item.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
