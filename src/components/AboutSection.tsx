"use client";

import { motion } from "framer-motion";
import { Code, Layers, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const iconMap: Record<string, typeof Code> = {
  Code,
  Layers,
  BookOpen,
};

export default function AboutSection() {
  const { personal, stats: portfolioStats, highlights } = portfolioData;

  const statsDisplay = [
    { label: "Real Projects Shipped", value: portfolioStats.projectsShipped, color: "text-emerald-600" },
    { label: "Technologies Used", value: portfolioStats.technologiesUsed, color: "text-blue-600" },
    { label: "Years Learning & Building", value: portfolioStats.yearsBuilding, color: "text-violet-600" },
    { label: "Degree in Progress", value: portfolioStats.degree, color: "text-amber-600" },
  ];

  return (
    <section id="about" className="section-light py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-2 sm:mb-3">
            About Me
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Bit About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 card-light p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                Hey, I&apos;m {personal.name.split(" ")[0]}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                {personal.bioP1}
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                {personal.bioP2}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-200">
              {highlights.map((item) => {
                const IconComponent = iconMap[item.iconName] || Code;
                return (
                  <div key={item.title} className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className={`w-8 sm:w-9 h-8 sm:h-9 rounded-lg flex items-center justify-center mb-2.5 sm:mb-3 ${item.color}`}>
                      <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {statsDisplay.map((stat, idx) => (
              <div
                key={stat.label}
                className="card-light p-4 sm:p-6 flex flex-col justify-between"
              >
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 mb-4 sm:mb-6">0{idx + 1}</span>
                <div>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium leading-snug">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
