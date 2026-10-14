/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Sparkles,
  ShieldAlert,
  MessageCircle,
  CheckCircle2,
  Share2,
  Crown,
  Menu,
  X,
  Star,
  Lock,
  ArrowUpRight,
  Camera,
  Volume2,
  VolumeX,
  Clock,
  MapPin
} from 'lucide-react';

const DESTINATION_URL = 'https://auctionr.org/4/dfb887833a0c57e9c7f66d497e1ee67a';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioSimulated, setIsAudioSimulated] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#07040d] text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white pb-24 md:pb-0">
      
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-purple-500/15 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 p-0.5 shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/60 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                alt="Era Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-pink-300 transition-colors">
                  ERA
                </span>
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                <span className="inline-flex items-center text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30">
                  VIP
                </span>
              </div>
              <p className="text-[11px] text-purple-300/70 font-medium -mt-0.5">My Name Is Era</p>
            </div>
          </a>

          {/* Nav Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Audio ambiance visualizer simulation */}
            <button
              onClick={() => setIsAudioSimulated(!isAudioSimulated)}
              title={isAudioSimulated ? "Lounge Mode Active" : "Play Ambient Mood"}
              className="p-2.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-pink-300 hover:border-pink-500/40 transition-all cursor-pointer flex items-center gap-1.5 text-xs"
            >
              {isAudioSimulated ? (
                <>
                  <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-pink-400 animate-bounce"></span>
                    <span className="w-0.5 h-3 bg-purple-400 animate-bounce delay-75"></span>
                    <span className="w-0.5 h-1.5 bg-pink-300 animate-bounce delay-150"></span>
                  </div>
                </>
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Contact Me CTA */}
            <a
              href={DESTINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 border border-purple-500/40 hover:border-pink-500/50 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-pink-400" />
              <span>Contact Me</span>
            </a>

            {/* Primary View Now CTA */}
            <a
              href={DESTINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span>View Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={DESTINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/30 flex items-center gap-1"
            >
              <Flame className="w-3.5 h-3.5 text-yellow-300" />
              <span>View</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-purple-500/20 px-4 pt-3 pb-6 space-y-3 bg-[#0d0718]/95 backdrop-blur-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs text-purple-200">Era is Online Now</span>
              </div>
              <button 
                onClick={handleShare}
                className="text-xs text-purple-300 flex items-center gap-1 px-2.5 py-1 rounded bg-purple-900/40 border border-purple-500/20"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedShare ? "Copied Link!" : "Share Profile"}
              </button>
            </div>
            <nav className="flex flex-col space-y-2 text-base font-medium">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-purple-900/40 hover:text-pink-400 transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-purple-900/40 hover:text-pink-400 transition-colors"
              >
                About Era
              </a>
              <a 
                href="#vip" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-purple-900/40 hover:text-pink-400 transition-colors flex items-center gap-2"
              >
                <Crown className="w-4 h-4 text-amber-400" />
                <span>VIP Vault & Perks</span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-purple-900/40 hover:text-pink-400 transition-colors"
              >
                Contact & Chat
              </a>
            </nav>
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-center text-xs font-bold bg-purple-900/50 border border-purple-500/30 text-purple-200 flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-pink-400" />
                <span>Contact Me</span>
              </a>
              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 flex items-center justify-center gap-1.5"
              >
                <Flame className="w-4 h-4 text-yellow-300" />
                <span>View Now</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
          {/* Subtle glowing background orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[850px] h-[550px] md:h-[850px] bg-gradient-to-tr from-purple-900/30 via-pink-600/15 to-indigo-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute -top-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Status Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available Online Now</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-950/50 border border-pink-500/30 text-pink-200 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Official Verified Creator</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-medium">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Top 0.1% Global Muse</span>
              </span>
            </div>

            {/* Main Hero Title */}
            <div className="space-y-2">
              <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-pink-400/90 font-display">
                Official Intimate Social Profile
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
                My Name Is <br />
                <span className="gradient-text-pink-purple drop-shadow-sm">
                  Era.
                </span>
              </h1>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Welcome to my private digital sanctuary. Sensual glamour, cinematic boudoir portraits, and unfiltered backstage moments curated exclusively for those who appreciate authentic allure and tasteful seduction.
            </p>

            {/* Primary Hero CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-xl shadow-pink-500/35 hover:shadow-pink-500/60 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse-subtle group"
              >
                <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span>View Now</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full text-base font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Hero Stats Ribbon */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto border-t border-purple-500/15">
              <div className="text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-white">450+</p>
                <p className="text-[11px] sm:text-xs text-purple-300/80 font-medium">VIP Photosets</p>
              </div>
              <div className="text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-pink-400">148K</p>
                <p className="text-[11px] sm:text-xs text-purple-300/80 font-medium">Global Followers</p>
              </div>
              <div className="text-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-purple-300">99.8%</p>
                <p className="text-[11px] sm:text-xs text-purple-300/80 font-medium">Satisfaction</p>
              </div>
            </div>

          </div>
        </section>

        {/* PROFILE SECTION */}
        <section id="about" className="py-16 md:py-24 bg-[#0a0514]/80 border-y border-purple-500/15 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-pink-400 uppercase font-display">
                Get To Know Me
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                The Woman Behind The Lens
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light">
                Sensual art direction, cinematic modeling, and private conversation for true connoisseurs.
              </p>
            </div>

            {/* Profile Card Container */}
            <div className="glass-card rounded-3xl overflow-hidden border border-purple-500/25 shadow-2xl">
              
              {/* Cover Image */}
              <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1600&q=80" 
                  alt="Era Profile Cover" 
                  className="w-full h-full object-cover object-center filter brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e071c] via-[#0e071c]/40 to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>Paris & Tokyo</span>
                  </span>
                </div>
              </div>

              {/* Profile Body Content */}
              <div className="relative px-6 sm:px-10 pb-8 sm:pb-12 pt-0">
                
                {/* Profile Avatar & Quick Actions Row */}
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-20 gap-6 mb-8 text-center sm:text-left">
                  
                  {/* Avatar with glowing ring */}
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 shadow-xl shadow-pink-500/40">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                        alt="Era Profile Avatar" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span 
                      className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-2 border-[#0e071c] rounded-full shadow-lg"
                      title="Online Now"
                    ></span>
                  </div>

                  {/* Profile Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={DESTINATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all flex items-center gap-2"
                    >
                      <Flame className="w-4 h-4 text-yellow-300" />
                      <span>View Now</span>
                    </a>

                    <a
                      href={DESTINATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 hover:border-pink-500/40 transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 text-pink-400" />
                      <span>Contact Me</span>
                    </a>

                    <button
                      onClick={handleShare}
                      className="p-3 rounded-full text-purple-300 bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 hover:text-white transition-all"
                      title="Share Profile"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Profile Bio & Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
                    <div>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                          Era
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center gap-1">
                          <Crown className="w-3 h-3 text-amber-400" />
                          <span>Elite VIP Creator</span>
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-300/80 font-medium">@era.exclusive • She/Her • 24</p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      Hi, my name is Era. I specialize in evocative boudoir, cinematic mood lighting, and high-glamour artistic shoots. My content is strictly created for open-minded adults who cherish aesthetics, intimacy, and unscripted raw moments.
                    </p>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      Subscribers get direct access to my uncensored private vault, daily personal updates, voice notes, and 1-on-1 direct messaging where I reply to every thoughtful soul personally.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
                      {['Glamour Art', 'Boudoir', 'Cinematic 4K', 'Direct Chat', 'Private Vault', 'Exclusive VIP'].map((tag, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-purple-950/60 text-purple-300 border border-purple-500/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Profile Key Stats & Guarantee */}
                  <div className="lg:col-span-5 bg-purple-950/40 rounded-2xl p-6 border border-purple-500/20 space-y-4">
                    <h4 className="font-display text-sm font-bold text-purple-200 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                      <span>Creator Vitals</span>
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-purple-500/15">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-pink-400" />
                          <span>Response Time:</span>
                        </span>
                        <span className="font-semibold text-emerald-400">Within 15 minutes</span>
                      </div>

                      <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-purple-500/15">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5 text-purple-400" />
                          <span>Weekly New Media:</span>
                        </span>
                        <span className="font-semibold text-white">4 New VIP Shoots</span>
                      </div>

                      <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-purple-500/15">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-amber-400" />
                          <span>Member Feedback:</span>
                        </span>
                        <span className="font-semibold text-amber-300">5.0 / 5.0 (2,140+ reviews)</span>
                      </div>

                      <div className="flex items-center justify-between text-xs sm:text-sm py-1.5">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-pink-400" />
                          <span>Privacy & Discretion:</span>
                        </span>
                        <span className="font-semibold text-pink-300">100% Encrypted & Anonymous</span>
                      </div>
                    </div>

                    <a
                      href={DESTINATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-md shadow-pink-500/30 flex items-center justify-center gap-2 transition-all mt-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      <span>Unlock VIP Vault Access</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* VIP VAULT & MEMBERSHIP HIGHLIGHTS */}
        <section id="vip" className="py-16 md:py-24 bg-[#0a0515]/90 border-t border-purple-500/15 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-pink-400 uppercase font-display flex items-center justify-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>VIP Benefits</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                What Awaits You Inside
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light">
                Enjoy an intimate, respectful, and ultra-high-definition private creator experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-pink-500/40 transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">4K Ultra HD Sets</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Uncompressed raw photography and 60fps cinematic video reels without watermarks.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-pink-500/40 transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Priority 1-on-1 Chat</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Send private messages and audio notes directly to Era with guaranteed personal replies.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-pink-500/40 transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">Custom Requests</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Vote on upcoming shoot outfits, locations, themes, or request exclusive private photosets.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-pink-500/40 transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">100% Discretion</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Discreet billing, anonymous member accounts, and end-to-end encrypted private gallery access.
                </p>
              </div>

            </div>

            {/* Direct Big Button */}
            <div className="mt-10 text-center">
              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-xl shadow-pink-500/30 hover:shadow-pink-500/60 transition-all"
              >
                <Flame className="w-4 h-4 text-yellow-300" />
                <span>Join VIP Lounge - View Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

        {/* CONTACT ME SECTION */}
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            
            <div className="w-20 h-20 rounded-full mx-auto p-1 bg-gradient-to-tr from-pink-500 to-purple-600 shadow-xl shadow-pink-500/40">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                alt="Era Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-pink-400 uppercase font-display">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Connect Directly With Era
              </h2>
              <p className="text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
                Whether you have an artistic proposal, custom media request, or simply want to say hello in private, my direct portal is open.
              </p>
            </div>

            {/* Direct Contact Me CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-xl shadow-pink-500/40 hover:shadow-pink-500/60 transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-yellow-300" />
                <span>Contact Me Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={DESTINATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-purple-200 bg-purple-950/70 hover:bg-purple-900 border border-purple-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-pink-400" />
                <span>View Now (Immediate VIP)</span>
              </a>
            </div>

            {/* Discretion reminder */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Guaranteed Personal Reply
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-pink-400" />
                End-to-End Private
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-400" />
                Active Right Now
              </span>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#05030a] border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Brand & Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-purple-500/10 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-display font-bold text-xl text-white">ERA</span>
                <span className="text-pink-400 font-bold">•</span>
                <span className="text-purple-300 font-medium">My Name Is Era</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Official social profile and private glamour art gallery.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
              <a href="#home" className="hover:text-pink-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
              <a href="#vip" className="hover:text-pink-400 transition-colors">VIP Access</a>
              <a href={DESTINATION_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Contact Me</a>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-300">
            <p>© {new Date().getFullYear()} My Name Is Era. All rights reserved.</p>
            <p>
              Destination Access:{' '}
              <a 
                href={DESTINATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline"
              >
                Official Member Gateway
              </a>
            </p>
          </div>

        </div>
      </footer>

      {/* MOBILE STICKY FLOATING QUICK-ACTION BAR (Extreme mobile ergonomics) */}
      <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080411]/95 backdrop-blur-xl border-t border-purple-500/25 px-3 py-2.5 shadow-2xl">
        <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
                alt="Era" 
                className="w-9 h-9 rounded-full object-cover border border-pink-500"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black"></span>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-tight">Era</p>
              <p className="text-[10px] text-pink-300 font-medium leading-tight">Online Now</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Contact Me Button */}
            <a
              href={DESTINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-purple-900/60 text-purple-200 border border-purple-500/30 flex items-center gap-1 active:scale-95 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5 text-pink-400" />
              <span>Contact</span>
            </a>

            {/* Mobile View Now Button */}
            <a
              href={DESTINATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/40 flex items-center gap-1.5 active:scale-95 transition-transform"
            >
              <Flame className="w-3.5 h-3.5 text-yellow-300" />
              <span>View Now</span>
            </a>
          </div>

        </div>
      </aside>



    </div>
  );
}
