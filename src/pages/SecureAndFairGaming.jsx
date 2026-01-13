import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useHomeEffects from "../utils/useHomeEffects";
import "../styles/Home.css";

export default function SecureAndFairGaming() {
  useHomeEffects();
  return (
    <div className="text-gray-300 selection:bg-indigo-500/30 selection:text-white text-base scroll-smooth">
      {/* Custom Cursor */}
      <div id="cursor"></div>
      <div className="noise-overlay"></div>

      {/* Liquid Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div
          className="liquid-blob bg-indigo-900"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-100px",
            opacity: "0.15",
            animationDuration: "18s",
          }}
        ></div>
        <div
          className="liquid-blob bg-purple-900"
          style={{
            width: "500px",
            height: "500px",
            top: "40%",
            right: "-150px",
            opacity: "0.12",
            animationDuration: "22s",
            animationDelay: "-5s",
          }}
        ></div>
        <div
          className="liquid-blob bg-blue-900"
          style={{
            width: "700px",
            height: "700px",
            bottom: "-200px",
            left: "20%",
            opacity: "0.1",
            animationDuration: "25s",
            animationDelay: "-10s",
          }}
        ></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden mt-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Logo Badge */}
          <div className="flex justify-center mb-12 reveal opacity-0">
            <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                NightPulse Esports
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-center text-white mb-20 reveal opacity-0 delay-100 tracking-tight">
            SECURE & FAIR<br />
            <span className="text-emerald-400">GAMING</span>
          </h1>

          {/* Terms & Conditions Section */}
          <div className="glass-panel border border-white/5 rounded-2xl p-8 md:p-12 mb-12 reveal opacity-0 delay-200">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              Tournament Terms & Conditions
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">1.</span>
                <p className="text-gray-300 leading-relaxed">
                  All participants must provide accurate details during registration.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">2.</span>
                <p className="text-gray-300 leading-relaxed">
                  Joining the official Discord and YouTube channels is mandatory.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">3.</span>
                <p className="text-gray-300 leading-relaxed">
                  Any kind of cheating, hacking, or unauthorized tools will result in permanent disqualification.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">4.</span>
                <p className="text-gray-300 leading-relaxed">
                  Participants are not allowed to record or stream their gameplay; the official stream will be available on the YouTube channel.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">5.</span>
                <p className="text-gray-300 leading-relaxed">
                  Players must follow all rules and regulations shared by the organizing team.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">6.</span>
                <p className="text-gray-300 leading-relaxed">
                  Decisions made by the organizers will be final.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">7.</span>
                <p className="text-gray-300 leading-relaxed">
                  Participants must maintain discipline and sportsmanship throughout the tournament.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">8.</span>
                <p className="text-gray-300 leading-relaxed">
                  Prize distribution will follow the verification of results.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">9.</span>
                <p className="text-gray-300 leading-relaxed">
                  By registering, participants agree to all rules and conditions mentioned.
                </p>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="glass-panel border border-white/5 rounded-2xl p-8 md:p-12 reveal opacity-0 delay-300 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              General Rules
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-300 leading-relaxed">
                  No low-end devices allowed. Only devices capable of 60 FPS or higher.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-300 leading-relaxed">
                  Same in-game ID registration—no name changes allowed.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-300 leading-relaxed">
                  Doing Team by 5th In Game is strictly prohibited.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-300 leading-relaxed">
                  No Abusive Language Will Be Tolerated Neither With The Management Nor With The Any Other Team Player.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-300 leading-relaxed">
                  Teams must take SS of results after match and send screenshot.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">•</span>
                <p className="text-gray-300 leading-relaxed">
                  ID Below level 35 will not be entertained.
                </p>
              </div>
            </div>
          </div>

          {/* TDM Rules Section */}
          <div className="glass-panel border border-yellow-500/20 rounded-2xl p-8 md:p-12 reveal opacity-0 delay-500">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              TDM Tournament Rules
            </h2>
            
            {/* Gameplay Restrictions */}
            <div className="mb-8">
              <h3 className="font-heading text-xl font-bold text-yellow-400 mb-4 bg-yellow-400/10 px-4 py-2 rounded inline-block">
                1. GAMEPLAY RESTRICTIONS
              </h3>
              <div className="space-y-3 mt-4 ml-4">
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Grenades are not allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Slide is not allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Aim Assist OFF</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Only 5.56 Ammo guns are allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Ammunition - Only M416 & SCAR-L will be allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Pistol switch is allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Movement necessary</p>
                </div>
              </div>
            </div>

            {/* Device & Team Restrictions */}
            <div className="mb-8">
              <h3 className="font-heading text-xl font-bold text-yellow-400 mb-4 bg-yellow-400/10 px-4 py-2 rounded inline-block">
                2. DEVICE & TEAM RESTRICTIONS
              </h3>
              <div className="space-y-3 mt-4 ml-4">
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">iPad and emulators are banned</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Teams have to participate only with registered players. Unregistered players aren't allowed to play</p>
                </div>
              </div>
            </div>

            {/* Match Conduct & Disputes */}
            <div>
              <h3 className="font-heading text-xl font-bold text-yellow-400 mb-4 bg-yellow-400/10 px-4 py-2 rounded inline-block">
                3. MATCH CONDUCT & DISPUTES
              </h3>
              <div className="space-y-3 mt-4 ml-4">
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Picking level 3 helmet and vest is not allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Self made is not allowed</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Any player holding a position for more than 15 seconds without movement will lose that match</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">If claiming rules breaking, team must submit in-game recorded POV</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Teams must join within given time. 2-4 minutes flexibility. If unable, opponent wins</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">In any scenario, the last decision is up to management</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-bold flex-shrink-0">•</span>
                  <p className="text-gray-300">Creator has to play. If unable, inform management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="glass-panel border border-emerald-500/20 rounded-2xl p-8 md:p-12 reveal opacity-0 delay-500">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Compete Fairly?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join NightPulse and experience competitive gaming at its finest. Fair play, advanced anti-cheat, and real-time monitoring ensure every tournament is played on equal footing.
            </p>
            <a
              href="/tournaments"
              className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
            >
              Join a Tournament
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
