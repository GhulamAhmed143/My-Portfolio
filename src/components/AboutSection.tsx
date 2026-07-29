"use client";

import { motion } from "framer-motion";
import { Code, Layers, BookOpen } from "lucide-react";

const stats = [
  { label: "Real Projects Shipped", value: "5+", color: "text-emerald-600" },
  { label: "Technologies Used", value: "15+", color: "text-blue-600" },
  { label: "Years Learning & Building", value: "2+", color: "text-violet-600" },
  { label: "Degree in Progress", value: "BS-IET", color: "text-amber-600" },
];

const highlights = [
  {
    title: "Frontend & Backend",
    desc: "From React UIs to Laravel APIs and database design — I work across the full stack.",
    icon: Code,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Clean, Functional Interfaces",
    desc: "I care about making things look good, but usability and clarity come first.",
    icon: Layers,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Learning Good Practices",
    desc: "TypeScript, component-based architecture, and trying to write code my future self won't hate.",
    icon: BookOpen,
    color: "text-violet-600 bg-violet-50",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-light py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Bit About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 card-light p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hey, I&apos;m Ahmed
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                I&apos;m a BS Information Engineering Technology student who got
                into web development because I wanted to build things people
                actually use. I started with HTML and CSS, moved into React and
                Node.js, and now I mostly work with Next.js, TypeScript, and
                Laravel.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                I&apos;ve built projects like a Netflix-style streaming platform,
                a COVID statistics visualizer, and a blockchain-based real estate
                tokenization app. I&apos;m not claiming to be an expert at
                everything — I&apos;m a student who learns by building real
                things and shipping them.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              {highlights.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="card-light p-6 flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-slate-400 mb-6">0{idx + 1}</span>
                <div>
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
