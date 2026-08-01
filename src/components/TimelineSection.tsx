"use client";

import { motion } from "framer-motion";
import { Laptop, Code, GraduationCap, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const iconMap: Record<string, typeof Laptop> = {
  Laptop,
  Code,
  BookOpen,
  GraduationCap,
};

export default function TimelineSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2 sm:mb-3">
            My Journey
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I Got Here
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-28 lg:ml-36 space-y-8 sm:space-y-10">
          {experience.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Laptop;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[17px] top-0 p-2 rounded-full bg-[#1a1a2e] border-2 border-emerald-500 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Period Pill for Large Screens */}
                <div className="hidden sm:block absolute -left-32 sm:-left-36 top-1 text-right w-24 sm:w-28">
                  <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/30 px-2.5 py-1 rounded-md inline-block">
                    {item.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="card-dark p-5 sm:p-7">
                  {/* Mobile Period Tag */}
                  <div className="sm:hidden mb-2">
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/30 px-2 py-0.5 rounded-md inline-block">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/8 text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mb-2.5 sm:mb-3">{item.role}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
