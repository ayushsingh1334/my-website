import React from "react";
import "../styles/Home.css";
import "../styles/Tournaments.css";
import useHomeEffects from "../utils/useHomeEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tournaments() {
  useHomeEffects();
  // Tournament categories and active tournaments
  // Tournament service card data for BGMI and Free Fire

  // Tournament data for BGMI and Free Fire (no icons)
  const bgmiTournaments = [
    {
      title: "Weekly Full Map",
      desc: "Battle across the full map every week. Open to all BGMI squads.",
      status: "Register Now",
      statusColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
      link: "https://forms.gle/1XSVDjfp3ucuVj7m8"
    },
    {
      title: "Weekly TDM 2v2 Showdown",
      desc: "Fast-paced 2v2 TDM action. Prove your duo's skills in weekly showdowns!",
      status: "Register Now",
      statusColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
      link: "https://forms.gle/cH6EyxKphkgWv5BM6"
    },
    {
      title: "Monthly Major",
      desc: "The best teams face off monthly for the ultimate BGMI glory and big prizes.",
      status: "Early Birds",
      statusColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
      link: "https://forms.gle/b4iPg6HzDTB3oTaZ7"
    }
  ];

  const freeFireTournaments = [
    {
      title: "Weekly Full Map",
      desc: "Weekly Free Fire full map battles. Fast-paced, high-reward action!",
      status: "Early Participant",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Weekly Clash Squad",
      desc: "Clash Squad mode every week. Team up and dominate the arena!",
      status: "Early Participant",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Lone Wolf 2v2",
      desc: "Lone Wolf 2v2 mode for duos. Show your skills in this unique Free Fire format!",
      status: "Early Participant",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Monthly Full Map Match",
      desc: "The best Free Fire teams face off monthly for glory and prizes.",
      status: "Early Participant",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    }
  ];

  // Active tournaments (from both BGMI and Free Fire, status: Register Now)
  const activeTournaments = [
    ...bgmiTournaments.filter(t => t.status === "Register Now"),
    ...freeFireTournaments.filter(t => t.status === "Register Now")
  ];




  return (
    <div className="text-gray-300 text-base scroll-smooth min-h-screen bg-[var(--bg)] relative overflow-x-hidden">
      <div id="cursor" />
      <div className="noise-overlay" />
      <Navbar />
      {/* HERO SECTION */}
      <section className="tournaments-hero-modern">
        <div className="hero-gradient-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">🎮 Join the Action</div>
          <h1 className="hero-title">Tournaments</h1>
          <p className="hero-subtitle">
            Compete in epic BGMI and Free Fire tournaments. Weekly challenges, monthly majors, and incredible prizes await!
          </p>
        </div>
      </section>

      {/* ACTIVE TOURNAMENTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="section-header reveal opacity-0">
          <h2 className="section-title">🔥 Live Now</h2>
          <p className="section-desc">Jump into active tournaments and start competing</p>
        </div>
        <div className="modern-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTournaments.map((card, idx) => (
            <a
              key={idx}
              href={card.link || "#"}
              target={card.link ? "_blank" : undefined}
              rel={card.link ? "noopener noreferrer" : undefined}
              className={`modern-card group reveal opacity-0 ${idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"} ${card.link ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
              style={{animationDelay: `${idx * 100}ms`}}
            >
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <div className="card-footer">
                  <span className="card-status live">{card.status}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BGMI TOURNAMENTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="section-header reveal opacity-0">
          <div className="game-badge bgmi-badge">
            <img src="/icons/bgmi.png" alt="BGMI" className="game-icon" />
            <span>BGMI</span>
          </div>
          <h2 className="section-title">BGMI Tournaments</h2>
          <p className="section-desc">Full Map • TDM 2v2 • Monthly Major</p>
        </div>
        <div className="modern-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bgmiTournaments.map((card, idx) => (
            <a
              key={idx}
              href={card.link || "#"}
              target={card.link ? "_blank" : undefined}
              rel={card.link ? "noopener noreferrer" : undefined}
              className={`modern-card group reveal opacity-0 ${idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"} ${card.link ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
              style={{animationDelay: `${idx * 100}ms`}}
            >
              <div className="card-accent bgmi"></div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <div className="card-footer">
                  <span className="card-status bgmi-status">{card.status}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FREE FIRE TOURNAMENTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="section-header reveal opacity-0">
          <div className="game-badge ff-badge">
            <img src="/icons/freefire.png" alt="Free Fire" className="game-icon" />
            <span>Free Fire</span>
          </div>
          <h2 className="section-title">Free Fire Tournaments</h2>
          <p className="section-desc">Full Map • Clash Squad • Lone Wolf 2v2 • Monthly Major</p>
        </div>
        <div className="modern-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeFireTournaments.map((card, idx) => (
            <div 
              key={idx}
              className={`modern-card group reveal opacity-0 unavailable ${idx === 0 ? "" : idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : "delay-300"}`}
              style={{animationDelay: `${idx * 100}ms`}}
            >
              <div className="card-accent ff"></div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
