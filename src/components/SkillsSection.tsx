"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    color: "bg-emerald-500",
    skills: [
      { name: "Next.js (App Router)", level: "Comfortable", desc: "Server Components, SSR, Dynamic Routing" },
      { name: "React", level: "Comfortable", desc: "Hooks, Context, Component Patterns" },
      { name: "TypeScript", level: "Comfortable", desc: "Strict Typing, Interfaces, Generics" },
      { name: "Tailwind CSS", level: "Comfortable", desc: "Responsive Layouts, Custom Config, Animations" },
      { name: "HTML5 / CSS3", level: "Strong", desc: "Semantic Markup, Flexbox, Grid, Custom Properties" },
      { name: "Framer Motion", level: "Learning", desc: "Scroll Animations, Page Transitions" },
    ],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    color: "bg-blue-500",
    skills: [
      { name: "Laravel", level: "Comfortable", desc: "MVC, Eloquent ORM, API Development" },
      { name: "Node.js", level: "Familiar", desc: "Express, Async I/O, NPM Ecosystem" },
      { name: "PostgreSQL", level: "Familiar", desc: "Relational Queries, Schema Design" },
      { name: "MongoDB", level: "Familiar", desc: "Document Stores, Aggregation Pipelines" },
      { name: "REST APIs", level: "Comfortable", desc: "API Design, Authentication, Fetch/Axios" },
      { name: "Prisma ORM", level: "Learning", desc: "Type-safe Queries, Migrations" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    color: "bg-violet-500",
    skills: [
      { name: "Git & GitHub", level: "Comfortable", desc: "Branching, Pull Requests, Collaboration" },
      { name: "Vercel / Deployment", level: "Comfortable", desc: "CI/CD, Environment Variables, Previews" },
      { name: "VS Code", level: "Daily Driver", desc: "ESLint, Prettier, Debugging" },
      { name: "Docker", level: "Basic", desc: "Containerization, Docker Compose" },
      { name: "Postman", level: "Familiar", desc: "API Testing, Collections" },
      { name: "Solidity / Web3", level: "Explored", desc: "Smart Contracts, Web3.js Integration" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-dark py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technologies I Work With
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="card-dark p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/8">
                <div className={`p-2.5 rounded-xl ${cat.color} text-white`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>

              {/* Skill List */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/8 text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
