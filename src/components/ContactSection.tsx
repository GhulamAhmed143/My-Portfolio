"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Copy, Send, MapPin, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section-dark-deep py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-2 sm:mb-3">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 card-dark p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                Want to collaborate on a project, have a question, or just want to say hi? Feel free to reach out — I&apos;m always happy to connect.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Direct Email</div>
                    <div className="text-xs sm:text-sm font-medium text-white flex items-center gap-2 flex-wrap">
                      <span className="break-all">{personal.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded hover:bg-white/10 text-slate-500 hover:text-white transition-colors shrink-0 cursor-pointer"
                        title="Copy Email"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-white">{personal.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Availability</div>
                    <div className="text-xs sm:text-sm font-medium text-emerald-400">{personal.availability}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/8 mt-6 sm:mt-8">
              <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide mb-3">Connect on Socials</div>
              <div className="flex gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/8 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/8 text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 card-dark p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Send Me a Message</h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-center">
                <Check className="w-10 h-10 mx-auto mb-2 text-emerald-400" />
                <h4 className="text-base sm:text-lg font-bold">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-200 mt-1">Thank you for reaching out. I will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-2">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
