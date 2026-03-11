"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
const NGOLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: "◈",
      title: "Smart Attendance Tracking",
      desc: "Onsite admins mark volunteer presence with a single tap. Real-time sync across all devices, no internet dependency required.",
      detail: "Works offline, syncs when connected"
    },
    {
      icon: "◉",
      title: "Role-Based Access",
      desc: "NGO directors, field coordinators, and site admins each see exactly what they need — nothing more, nothing less.",
      detail: "Granular permission controls"
    },
    {
      icon: "◎",
      title: "Volunteer Profiles",
      desc: "Complete volunteer registry with skills, availability, certifications, and contribution history — all in one place.",
      detail: "360° volunteer management"
    },
    {
      icon: "◇",
      title: "Instant Reports",
      desc: "Generate compliance reports, donor presentations, and grant documentation in seconds. Export to PDF, CSV, or Excel.",
      detail: "Audit-ready documentation"
    }
  ];

  const stats = [
    { value: "500+", label: "NGOs Onboarded", sub: "Across 28 countries" },
    { value: "2.4M", label: "Hours Tracked", sub: "This fiscal year" },
    { value: "98.7%", label: "Accuracy Rate", sub: "Verified attendance" },
    { value: "Zero", label: "Data Breaches", sub: "Since inception" }
  ];

  const testimonials = [
    {
      quote: "VolTrack transformed how we manage 800 volunteers across 14 sites. What used to take our coordinators 6 hours now takes 20 minutes.",
      name: "Amara Nwosu",
      title: "Operations Director",
      org: "Bridge Foundation Africa"
    },
    {
      quote: "The offline capability is a game-changer for our rural programs. Our field admins can mark attendance even without connectivity.",
      name: "Dr. Priya Mehta",
      title: "Program Lead",
      org: "Sewa International"
    },
    {
      quote: "Grant compliance reporting used to consume two weeks every quarter. VolTrack generates our documentation instantly.",
      name: "James Callahan",
      title: "Executive Director",
      org: "Urban Roots Initiative"
    }
  ];

  return (
    <div style={{
      fontFamily: "'Georgia', 'Palatino', serif",
      background: "#FDFCF8",
      color: "#1a1a1a",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .nav-scrolled {
          background: rgba(253, 252, 248, 0.96) !important;
          box-shadow: 0 1px 0 rgba(180, 160, 80, 0.15) !important;
        }

        .hero-line {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards;
        }
        .hero-line:nth-child(1) { animation-delay: 0.1s; }
        .hero-line:nth-child(2) { animation-delay: 0.25s; }
        .hero-line:nth-child(3) { animation-delay: 0.4s; }
        .hero-line:nth-child(4) { animation-delay: 0.55s; }
        .hero-line:nth-child(5) { animation-delay: 0.7s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .stat-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-item:nth-child(1) { transition-delay: 0s; }
        .stat-item:nth-child(2) { transition-delay: 0.12s; }
        .stat-item:nth-child(3) { transition-delay: 0.24s; }
        .stat-item:nth-child(4) { transition-delay: 0.36s; }

        .feature-card {
          transition: all 0.3s ease;
          cursor: pointer;
          border-bottom: 1px solid rgba(180, 160, 80, 0.15);
        }
        .feature-card:hover, .feature-card.active {
          background: rgba(250, 245, 220, 0.5);
        }
        .feature-card.active {
          border-left: 2px solid #B8960C;
        }

        .btn-primary {
          background: #1a1a1a;
          color: #FDFCF8;
          border: none;
          padding: 14px 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #B8960C;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 0;
        }
        .btn-primary:hover::after { transform: scaleX(1); }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-outline {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid rgba(26,26,26,0.3);
          padding: 13px 35px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .btn-outline:hover {
          border-color: #B8960C;
          color: #B8960C;
        }

        .testimonial-card {
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
        }

        .gold-rule {
          display: block;
          width: 40px;
          height: 1px;
          background: #B8960C;
          margin: 0 auto 24px;
        }

        .ornament {
          color: #B8960C;
          opacity: 0.6;
          font-size: 10px;
          letter-spacing: 6px;
        }

        .section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #B8960C;
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
        }
        .nav-link:hover { opacity: 1; }

        .grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(184, 150, 12, 0.08);
          border: 1px solid rgba(184, 150, 12, 0.2);
          padding: 6px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8a6e00;
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
          margin: 60px 0;
        }
        .divider-ornament::before,
        .divider-ornament::after {
          content: '';
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: rgba(184, 150, 12, 0.3);
        }

        .workflow-step {
          position: relative;
          padding-left: 60px;
          padding-bottom: 40px;
        }
        .workflow-step::before {
          content: '';
          position: absolute;
          left: 22px;
          top: 32px;
          bottom: 0;
          width: 1px;
          background: rgba(184, 150, 12, 0.2);
        }
        .workflow-step:last-child::before { display: none; }
        .step-num {
          position: absolute;
          left: 0;
          top: 0;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(184, 150, 12, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #B8960C;
          background: #FDFCF8;
        }

        footer a {
          color: rgba(253,252,248,0.5);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          transition: color 0.2s;
        }
        footer a:hover { color: #B8960C; }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .hero-title { font-size: 52px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .features-layout { flex-direction: column !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .workflow-cols { flex-direction: column !important; }
        }
      `}</style>

      {/* Grain */}
      <div className="grain-overlay" />

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrollY > 40 ? "rgba(253,252,248,0.96)" : "transparent",
        boxShadow: scrollY > 40 ? "0 1px 0 rgba(180,160,80,0.15)" : "none",
        transition: "all 0.3s ease"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div></div>
          <div>
            <div className="font-mono text-3xl text-amber-400 text-semibold">Impact Hub</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <button className="nav-link">Features</button>
          <button className="nav-link">How It Works</button>
          <button className="nav-link">Pricing</button>
          <button className="nav-link">About</button>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/auth/login">
          <button className="p-2 ml-2 text-yellow-500 font-semibold ">
            SignIn
          </button>
        </Link>
          
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        background: "linear-gradient(180deg, #FDFCF8 0%, #FAF7EC 100%)"
      }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(184,150,12,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,12,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none"
        }} />

        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>

          <div className="hero-line" style={{ marginBottom: 28 }}>
            <span className="hero-badge">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#B8960C", display: "inline-block" }} />
              Purpose-built for nonprofits
            </span>
          </div>

          <div className="hero-line">
            <div className="ornament" style={{ marginBottom: 16 }}>— — —</div>
          </div>

          <h1 className="hero-line font-display hero-title" style={{
            fontSize: 72, fontWeight: 300, lineHeight: 1.1,
            letterSpacing: "-0.01em", marginBottom: 8,
            color: "#111"
          }}>
            Volunteer Attendance,
          </h1>
          <h1 className="hero-line font-display hero-title" style={{
            fontSize: 72, fontWeight: 600, lineHeight: 1.1,
            letterSpacing: "-0.01em", marginBottom: 28,
            fontStyle: "italic", color: "#111"
          }}>
            Simplified.
          </h1>

          <p className="hero-line font-body" style={{
            fontSize: 17, color: "#555", lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto 44px",
            fontWeight: 300
          }}>
            Empower your onsite coordinators to track volunteer hours with precision.
            Real-time dashboards. Zero paperwork. Complete accountability.
          </p>

          <div className="hero-line" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary"><span>Get Started Free</span></button>
            <button className="btn-outline">Watch Overview</button>
          </div>

          <div className="hero-line" style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {["#c8a87a","#a0b8c8","#c8b0a0"].map((c,i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: c, border: "2px solid #FDFCF8",
                  marginLeft: i > 0 ? -10 : 0
                }} />
              ))}
            </div>
            <span className="font-body" style={{ fontSize: 13, color: "#777", letterSpacing: "0.03em" }}>
              Trusted by <strong style={{ color: "#1a1a1a" }}>500+</strong> NGOs worldwide
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6
        }}>
          <span className="font-body" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa" }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #B8960C, transparent)" }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#111", padding: "72px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="stats-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)"
          }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-item ${statsVisible ? "visible" : ""}`}
                style={{ background: "#111", padding: "40px 32px", textAlign: "center" }}
              >
                <div className="font-display" style={{ fontSize: 48, fontWeight: 300, color: "#FDFCF8", lineHeight: 1, marginBottom: 8 }}>
                  {s.value}
                </div>
                <div className="font-body" style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8960C", marginBottom: 4 }}>
                  {s.label}
                </div>
                <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "100px 48px", background: "#FDFCF8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="section-tag">Platform Features</span>
            <h2 className="font-display" style={{ fontSize: 44, fontWeight: 400, marginTop: 12, letterSpacing: "-0.01em" }}>
              Built for the field,<br />
              <em>refined for leadership.</em>
            </h2>
          </div>

          <div className="features-layout" style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>
            {/* Feature list */}
            <div style={{ flex: 1 }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`feature-card ${activeFeature === i ? "active" : ""}`}
                  onClick={() => setActiveFeature(i)}
                  style={{ padding: "24px 20px 24px 24px" }}
                >
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ color: "#B8960C", fontSize: 20, lineHeight: 1.4 }}>{f.icon}</span>
                    <div>
                      <div className="font-display" style={{ fontSize: 20, fontWeight: 600, marginBottom: 6 }}>{f.title}</div>
                      <div className="font-body" style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{f.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature visual */}
            <div style={{ flex: 1, position: "sticky", top: 100 }}>
              <div style={{
                background: "linear-gradient(135deg, #FAF7EC 0%, #F5EFD8 100%)",
                border: "1px solid rgba(184,150,12,0.15)",
                padding: 40,
                minHeight: 360,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <div>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{features[activeFeature].icon}</div>
                  <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>
                    {features[activeFeature].title}
                  </h3>
                  <p className="font-body" style={{ fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                    {features[activeFeature].desc}
                  </p>
                </div>

                {/* Mock UI */}
                <div style={{ marginTop: 32 }}>
                  <div style={{ background: "white", border: "1px solid rgba(184,150,12,0.15)", padding: 16, marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                      <span className="font-body" style={{ fontSize: 12, color: "#555" }}>Live Sync Active</span>
                    </div>
                    {["Ananya Krishnan", "Marcus Webb", "Fatima Al-Rashid"].map((name, i) => (
                      <div key={i} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "8px 0",
                        borderTop: i > 0 ? "1px solid rgba(0,0,0,0.05)" : "none"
                      }}>
                        <span className="font-body" style={{ fontSize: 13 }}>{name}</span>
                        <span style={{
                          fontSize: 10, padding: "2px 8px",
                          background: i === 1 ? "#fee2e2" : "rgba(184,150,12,0.1)",
                          color: i === 1 ? "#dc2626" : "#8a6e00",
                          letterSpacing: "0.08em", textTransform: "uppercase"
                        }}>
                          {i === 1 ? "Absent" : "Present"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="font-body" style={{ fontSize: 11, color: "#B8960C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    ◈ {features[activeFeature].detail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 48px", background: "#FAF7EC" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="section-tag">Workflow</span>
            <h2 className="font-display" style={{ fontSize: 44, fontWeight: 400, marginTop: 12 }}>
              From arrival to report —<br />
              <em>in three steps.</em>
            </h2>
          </div>

          <div className="workflow-cols" style={{ display: "flex", gap: 80 }}>
            <div style={{ flex: 1 }}>
              {[
                { title: "Admin Logs In Onsite", desc: "Your field coordinator opens VolTrack on any device — phone, tablet, or laptop. No special hardware required." },
                { title: "Takes Attendance", desc: "Browse the volunteer roster for the day. Tap to mark present, absent, or late. Add notes per individual if needed." },
                { title: "Reports Auto-Generate", desc: "NGO leadership instantly sees attendance dashboards. Monthly summaries and grant reports are created automatically." }
              ].map((step, i) => (
                <div key={i} className="workflow-step">
                  <div className="step-num">{i + 1}</div>
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                  <p className="font-body" style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Visual */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: "100%", maxWidth: 320,
                background: "#1a1a1a",
                padding: 28, color: "white"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span className="font-display" style={{ fontSize: 16, fontWeight: 600 }}>Morning Shift</span>
                  <span style={{ fontSize: 10, color: "#B8960C", letterSpacing: "0.1em" }}>◈ LIVE</span>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", marginBottom: 12 }}>SITE: Downtown Relief Center</div>
                  {[
                    { name: "Kavita Sharma", role: "Medical", status: "present" },
                    { name: "Elias Doran", role: "Logistics", status: "present" },
                    { name: "Yuki Tanaka", role: "Education", status: "absent" },
                    { name: "Omar Abdullah", role: "Outreach", status: "late" },
                    { name: "Blessing Osei", role: "Medical", status: "present" }
                  ].map((v, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "9px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)"
                    }}>
                      <div>
                        <div className="font-body" style={{ fontSize: 13 }}>{v.name}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>{v.role}</div>
                      </div>
                      <span style={{
                        fontSize: 9, padding: "3px 8px", letterSpacing: "0.1em", textTransform: "uppercase",
                        background: v.status === "present" ? "rgba(34,197,94,0.15)" : v.status === "absent" ? "rgba(239,68,68,0.15)" : "rgba(234,179,8,0.15)",
                        color: v.status === "present" ? "#4ade80" : v.status === "absent" ? "#f87171" : "#fbbf24"
                      }}>
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "12px 0", borderTop: "1px solid rgba(184,150,12,0.3)"
                }}>
                  <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>4 of 5 present</span>
                  <span style={{ fontSize: 11, color: "#B8960C", cursor: "pointer" }}>Submit →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 48px", background: "#FDFCF8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-tag">From the Field</span>
            <h2 className="font-display" style={{ fontSize: 44, fontWeight: 400, marginTop: 12 }}>
              What our partners say.
            </h2>
          </div>
          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{
                background: i === 1 ? "#111" : "#FAF7EC",
                border: "1px solid",
                borderColor: i === 1 ? "transparent" : "rgba(184,150,12,0.12)",
                padding: 36
              }}>
                <div style={{ color: "#B8960C", fontSize: 28, marginBottom: 20, lineHeight: 1 }}>"</div>
                <p className="font-display" style={{
                  fontSize: 17, lineHeight: 1.6, fontWeight: 400,
                  color: i === 1 ? "#FDFCF8" : "#333",
                  marginBottom: 28, fontStyle: "italic"
                }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid", borderColor: i === 1 ? "rgba(255,255,255,0.1)" : "rgba(184,150,12,0.15)", paddingTop: 20 }}>
                  <div className="font-body" style={{ fontSize: 13, fontWeight: 500, color: i === 1 ? "#FDFCF8" : "#1a1a1a" }}>{t.name}</div>
                  <div className="font-body" style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,0.4)" : "#888", marginTop: 2 }}>{t.title}, {t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 48px",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2318 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 1, background: "linear-gradient(90deg, transparent, #B8960C, transparent)"
        }} />
        <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
          <div className="ornament" style={{ color: "#B8960C", marginBottom: 24 }}>◈ ◈ ◈</div>
          <h2 className="font-display" style={{ fontSize: 48, fontWeight: 300, color: "#FDFCF8", lineHeight: 1.2, marginBottom: 8 }}>
            Ready to bring
          </h2>
          <h2 className="font-display" style={{ fontSize: 48, fontWeight: 600, fontStyle: "italic", color: "#FDFCF8", lineHeight: 1.2, marginBottom: 28 }}>
            clarity to your mission?
          </h2>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 44 }}>
            Join 500+ NGOs who've replaced spreadsheets and paper registers with VolTrack. Setup takes less than 30 minutes.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ background: "#B8960C" }}><span>Start Free Trial</span></button>
            <button className="btn-outline" style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>Schedule a Demo</button>
          </div>
          <p className="font-body" style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
            No credit card required · Free for organizations under 50 volunteers
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0e0e0e", padding: "56px 48px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
            <div style={{ maxWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 28, height: 28, border: "1px solid #B8960C", display: "flex", alignItems: "center", justifyContent: "center", color: "#B8960C", fontSize: 12 }}>◈</div>
                <span className="font-display" style={{ color: "#FDFCF8", fontSize: 18, fontWeight: 600 }}>VolTrack</span>
              </div>
              <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
                Purpose-built attendance management for nonprofits, charities, and humanitarian organizations.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security", "Changelog"] },
              { title: "Organization", links: ["About", "Mission", "Partners", "Press"] },
              { title: "Support", links: ["Documentation", "Help Center", "Contact", "Status"] }
            ].map((col, i) => (
              <div key={i}>
                <div className="font-body" style={{ fontSize: 11, color: "#B8960C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
                {col.links.map((l, j) => (
                  <div key={j} style={{ marginBottom: 8 }}><a href="#">{l}</a></div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2025 VolTrack. All rights reserved.</span>
            <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>SOC 2 Type II · GDPR Compliant · ISO 27001</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGOLandingPage;