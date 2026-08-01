"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Database,
  Wrench,
};

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="section-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2 sm:mb-3">
            Tech Stack
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies I Work With
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const IconComponent = iconMap[cat.iconName] || Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="card-dark p-5 sm:p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-white/8">
                  <div className={`p-2.5 rounded-xl ${cat.color} text-white shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{cat.category}</h3>
                </div>

                {/* Skill List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-medium text-slate-200 text-xs sm:text-sm">{skill.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/8 text-slate-400 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
