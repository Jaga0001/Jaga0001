# Generate complete, production-grade, bug-free portfolio files:
# 1. site/assets/css/style.css
# 2. site/assets/js/main.js
# 3. site/index.html
# 4. site/resume.html

import os

CSS_CONTENT = """/* ==========================================================================
   Jagavantha PA — Modern Emerald Cyber Portfolio
   Engineered for maximum reliability, speed, and aesthetics.
   ========================================================================== */

:root {
  --bg-dark: #040906;
  --bg-card: #08140e;
  --bg-card-hover: #0d2218;
  --bg-card-glass: rgba(8, 20, 14, 0.78);
  --bg-header: rgba(4, 9, 6, 0.85);

  --emerald: #10b981;
  --emerald-dark: #059669;
  --emerald-deep: #064e3b;
  --mint: #34d399;
  --mint-light: #6ee7b7;
  --mint-glow: rgba(52, 211, 153, 0.15);

  --text-main: #f0fdf4;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --text-code: #a7f3d0;

  --border: rgba(16, 185, 129, 0.16);
  --border-strong: rgba(52, 211, 153, 0.38);
  --border-focus: #10b981;

  --glow: 0 0 25px rgba(16, 185, 129, 0.14);
  --glow-strong: 0 0 35px rgba(16, 185, 129, 0.28);

  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', Consolas, 'Courier New', monospace;
  --font-display: 'Fraunces', Georgia, serif;

  --container: 1140px;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-full: 9999px;

  --transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Reset & Foundation */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
  background-image: 
    radial-gradient(circle at 10% 8%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 90% 45%, rgba(5, 150, 105, 0.06) 0%, transparent 50%),
    linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.02) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 48px 48px, 48px 48px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-main);
  font-weight: 600;
  line-height: 1.25;
}

.mono { font-family: var(--font-mono); }
.font-display { font-family: var(--font-display); }
.text-muted { color: var(--text-muted); }
.text-emerald { color: var(--emerald); }
.text-mint { color: var(--mint); }

a {
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
}

ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: 1.5rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.72rem 1.4rem;
  font-family: var(--font-mono);
  font-size: 0.84rem;
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  user-select: none;
}

.btn svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
  transition: transform 0.2s ease;
}

.btn:hover svg {
  transform: translateX(2px);
}

.btn--primary {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: #ffffff;
  border-color: rgba(52, 211, 153, 0.4);
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.28);
}

.btn--primary:hover {
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  color: #040906;
  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.45);
  transform: translateY(-2px);
}

.btn--secondary {
  background: rgba(16, 185, 129, 0.08);
  color: var(--mint);
  border-color: var(--border-strong);
  backdrop-filter: blur(8px);
}

.btn--secondary:hover {
  background: rgba(16, 185, 129, 0.16);
  border-color: var(--mint);
  color: var(--text-main);
  transform: translateY(-2px);
}

.btn--ghost {
  background: transparent;
  color: var(--text-muted);
  border-color: var(--border);
}

.btn--ghost:hover {
  color: var(--text-main);
  border-color: var(--border-strong);
  background: rgba(16, 185, 129, 0.05);
}

.btn--small {
  padding: 0.45rem 0.95rem;
  font-size: 0.78rem;
}

/* Glass Card */
.glass-card {
  background: var(--bg-card-glass);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.glass-card:hover {
  border-color: var(--border-strong);
  background: var(--bg-card-hover);
  box-shadow: var(--glow);
  transform: translateY(-3px);
}

/* Fixed Navigation Bar */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-header);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  padding-block: 0.85rem;
  transition: var(--transition);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand__logo {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: linear-gradient(135deg, #08140e 0%, #0d2a1d 100%);
  border: 1px solid var(--border-strong);
  display: grid;
  place-items: center;
  color: var(--mint);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.82rem;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.2);
}

.brand__text {
  display: flex;
  flex-direction: column;
}

.brand__name {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.brand__tag {
  font-size: 0.68rem;
  color: var(--emerald);
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  font-size: 0.86rem;
  color: var(--text-muted);
  font-weight: 500;
  position: relative;
  padding-block: 0.25rem;
}

.nav__link:hover, .nav__link.active {
  color: var(--mint);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--emerald);
  transition: width 0.2s ease;
}

.nav__link:hover::after, .nav__link.active::after {
  width: 100%;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.burger {
  display: none;
  background: transparent;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  padding: 0.5rem;
  color: var(--text-main);
  cursor: pointer;
  line-height: 0;
}

.burger svg {
  width: 22px;
  height: 22px;
}

/* Mobile Navigation Drawer */
.mobile-nav {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(4, 9, 6, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 999;
  padding: 2rem 1.5rem;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--border);
  overflow-y: auto;
}

.mobile-nav.is-open {
  display: flex;
}

.mobile-nav .nav__link {
  font-size: 1.15rem;
  padding-block: 0.75rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-main);
}

.mobile-nav .nav__link:hover {
  color: var(--mint);
  padding-left: 0.5rem;
}

.mobile-nav__actions {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Hero Section */
.hero {
  padding-top: calc(70px + 3.5rem);
  padding-bottom: 4.5rem;
  min-height: 88vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

.badge-live {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.38rem 0.9rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-full);
  font-size: 0.76rem;
  color: var(--mint);
  margin-bottom: 1.5rem;
  font-family: var(--font-mono);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: pulse-beacon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-beacon {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.85); }
}

.hero__title {
  font-size: clamp(2.3rem, 4.4vw, 3.6rem);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.hero__title em {
  font-style: italic;
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--mint);
}

.hero__gradient {
  background: linear-gradient(130deg, #ffffff 30%, #34d399 70%, #059669 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}

.hero__desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 580px;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero__desc strong {
  color: var(--text-main);
  font-weight: 600;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.25rem;
}

.hero__socials {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.social-pill {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  color: var(--text-muted);
  background: rgba(16, 185, 129, 0.05);
  transition: var(--transition);
}

.social-pill svg {
  width: 18px;
  height: 18px;
}

.social-pill:hover {
  color: var(--mint);
  border-color: var(--mint);
  background: rgba(16, 185, 129, 0.12);
  transform: translateY(-2px);
  box-shadow: var(--glow);
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  padding: 0.32rem 0.75rem;
  background: rgba(8, 20, 14, 0.7);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.74rem;
  color: var(--mint-light);
  font-family: var(--font-mono);
}

/* Portrait Card in Hero */
.portrait-card {
  position: relative;
  max-width: 400px;
  margin-inline: auto;
}

.portrait-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid var(--border-strong);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), var(--glow);
  background: var(--bg-card);
}

.portrait-frame img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}

.portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 65%, rgba(4, 9, 6, 0.9) 100%);
  pointer-events: none;
}

/* HUD corners */
.portrait-corner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--mint);
  pointer-events: none;
}
.portrait-corner--tl { top: 12px; left: 12px; border-top: 2px solid; border-left: 2px solid; }
.portrait-corner--br { bottom: 12px; right: 12px; border-bottom: 2px solid; border-right: 2px solid; }

.portrait-badge {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  padding: 0.75rem 1rem;
  background: rgba(8, 20, 14, 0.88);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portrait-badge__title {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-main);
}

.portrait-badge__sub {
  font-size: 0.72rem;
  color: var(--mint);
  font-family: var(--font-mono);
}

/* Section Header Layout */
.section {
  padding-block: 5rem;
  position: relative;
}

.section__head {
  margin-bottom: 3.5rem;
}

.section__tag {
  font-size: 0.8rem;
  color: var(--emerald);
  font-family: var(--font-mono);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
}

.section__title {
  font-size: clamp(1.85rem, 3.2vw, 2.6rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
}

.section__title em {
  font-style: italic;
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--mint);
}

.section__lede {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 650px;
  line-height: 1.7;
}

/* About Section */
.about__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3.5rem;
  align-items: start;
}

.about__text p {
  color: var(--text-muted);
  font-size: 1.04rem;
  margin-bottom: 1.5rem;
  line-height: 1.75;
}

.about__text strong {
  color: var(--text-main);
}

.about__principles {
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
}

.principle-card {
  padding: 1.25rem 1.4rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.principle-num {
  font-size: 0.85rem;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--emerald);
  padding: 0.25rem 0.55rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  flex-shrink: 0;
}

.principle-content h4 {
  font-size: 1.02rem;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.principle-content p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0;
}

.about__stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.stat-box {
  padding: 1.75rem 1.4rem;
  text-align: center;
}

.stat-val {
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--mint);
  margin-bottom: 0.3rem;
  font-family: var(--font-display);
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-main);
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
}

.stat-sub {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Activity / Velocity Section */
.activity-card {
  padding: 2.25rem;
}

.activity-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1.25rem;
}

.activity-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.activity-badge {
  padding: 0.3rem 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-full);
  font-size: 0.76rem;
  color: var(--mint);
  font-family: var(--font-mono);
}

.activity-legend {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.74rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.activity-legend i {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  display: inline-block;
}

.calendar-scroll {
  overflow-x: auto;
  padding-bottom: 1rem;
}

.calendar-grid {
  display: flex;
  gap: 4px;
  min-width: 760px;
}

.calendar-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.calendar-cell {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: #0e1e16;
  transition: transform 0.15s ease;
}

.calendar-cell[data-level="1"] { background: #0e3826; }
.calendar-cell[data-level="2"] { background: #165a3d; }
.calendar-cell[data-level="3"] { background: #10b981; }
.calendar-cell[data-level="4"] { background: #6ee7b7; box-shadow: 0 0 6px #10b981; }

.calendar-cell:hover {
  transform: scale(1.4);
  z-index: 10;
}

.activity-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
  font-size: 0.84rem;
}

/* Projects Section */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.project-num {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--emerald);
  font-weight: 700;
}

.project-tag {
  font-size: 0.74rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.7rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-full);
  color: var(--mint-light);
  border: 1px solid var(--border);
}

.project-title {
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.project-subtitle {
  font-size: 0.88rem;
  color: var(--mint);
  font-family: var(--font-mono);
  margin-bottom: 1rem;
}

.project-desc {
  font-size: 0.94rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
  padding: 0.9rem 1.1rem;
  background: rgba(4, 9, 6, 0.6);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--emerald);
}

.project-highlights span {
  font-size: 0.82rem;
  color: var(--text-main);
  font-family: var(--font-mono);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.75rem;
}

.tech-tag {
  font-size: 0.74rem;
  font-family: var(--font-mono);
  padding: 0.22rem 0.6rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid var(--border);
  border-radius: var(--radius-xs);
  color: var(--text-muted);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mint);
  font-size: 0.86rem;
  font-family: var(--font-mono);
  font-weight: 500;
}

.project-link svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.project-link:hover {
  color: var(--text-main);
}

.project-link:hover svg {
  transform: translateX(3px);
}

/* Skills Section */
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 1.75rem;
}

.skill-card__title {
  font-size: 1.1rem;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.skill-card__title span {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--emerald);
  padding: 0.2rem 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-xs);
  border: 1px solid var(--border);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skill-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 0.9rem;
  border-bottom: 1px dashed rgba(16, 185, 129, 0.12);
  padding-bottom: 0.45rem;
}

.skill-name {
  color: var(--text-main);
  font-weight: 500;
}

.skill-sub {
  color: var(--text-dim);
  font-size: 0.78rem;
  font-family: var(--font-mono);
}

/* Awards & Recognition */
.awards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.award-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.award-rank {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--mint);
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
}

.award-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: var(--text-main);
}

.award-org {
  font-size: 0.78rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
  margin-bottom: 0.85rem;
}

.award-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Experience & Education Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
}

.timeline-item {
  padding: 1.85rem 2.25rem;
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 2rem;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
}

.timeline-date {
  font-size: 0.84rem;
  font-family: var(--font-mono);
  color: var(--emerald);
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.timeline-loc {
  font-size: 0.76rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.timeline-role {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.timeline-org {
  font-size: 0.92rem;
  color: var(--mint);
  font-family: var(--font-mono);
  margin-bottom: 0.85rem;
}

.timeline-bullets {
  list-style: disc;
  padding-left: 1.2rem;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.68;
}

.timeline-bullets li {
  margin-bottom: 0.4rem;
}

/* Certifications */
.certs-section {
  margin-top: 3.5rem;
}

.certs-title {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.cert-card {
  padding: 1.5rem;
}

.cert-badge {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  color: var(--emerald);
  padding: 0.2rem 0.55rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-xs);
  display: inline-block;
  margin-bottom: 0.75rem;
  border: 1px solid var(--border);
}

.cert-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.cert-org {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* Contact Section */
.contact__box {
  padding: 4rem 2.5rem;
  text-align: center;
  max-width: 820px;
  margin-inline: auto;
}

.contact__tag {
  font-size: 0.82rem;
  font-family: var(--font-mono);
  color: var(--emerald);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  display: block;
}

.contact__title {
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact__title em {
  font-style: italic;
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--mint);
}

.contact__desc {
  font-size: 1.08rem;
  color: var(--text-muted);
  max-width: 580px;
  margin-inline: auto;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.contact__email {
  display: inline-block;
  font-size: clamp(1.2rem, 2.6vw, 1.85rem);
  color: var(--mint);
  font-family: var(--font-mono);
  font-weight: 600;
  margin-bottom: 2rem;
  border-bottom: 2px dashed var(--emerald);
  padding-bottom: 0.25rem;
  transition: var(--transition);
}

.contact__email:hover {
  color: var(--text-main);
  border-bottom-style: solid;
}

.contact__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.85rem 1.4rem;
  background: #08140e;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  color: var(--mint);
  font-family: var(--font-mono);
  font-size: 0.84rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), var(--glow);
  z-index: 2000;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

/* Footer */
.footer {
  padding-block: 2.75rem;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-dim);
  font-size: 0.84rem;
  font-family: var(--font-mono);
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Responsive Rules */
@media (max-width: 960px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .portrait-card {
    max-width: 360px;
  }

  .about__grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .nav__list, .header__actions .btn--primary {
    display: none;
  }

  .burger {
    display: block;
  }
}

@media (max-width: 600px) {
  .hero {
    padding-top: calc(65px + 2rem);
  }

  .about__stats-grid {
    grid-template-columns: 1fr;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .contact__box {
    padding: 3rem 1.25rem;
  }
}
"""

JS_CONTENT = """// Jagavantha PA — Portfolio Script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav .nav__link");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // 2. Active Navigation Spy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });

  // 3. Email Copy Functionality
  const copyBtns = document.querySelectorAll("[data-copy-email]");
  const toast = document.querySelector(".toast");

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const email = btn.dataset.copyEmail || "jagavanthaarunkumar@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email copied to clipboard!");
      } catch (err) {
        showToast("Failed to copy. Address: " + email);
      }
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // 4. Render Live GitHub Contribution Grid
  const calGrid = document.querySelector(".calendar-grid");
  const totalCommitsEl = document.querySelector("[data-total-commits]");

  if (calGrid) {
    fetch("data/contributions.json")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !Array.isArray(data.days)) return;
        if (totalCommitsEl && data.total) {
          totalCommitsEl.textContent = `${data.total.toLocaleString()} commits tracking live`;
        }

        calGrid.innerHTML = "";
        const days = data.days;
        const totalWeeks = Math.ceil(days.length / 7);

        for (let w = 0; w < totalWeeks; w++) {
          const col = document.createElement("div");
          col.className = "calendar-col";

          for (let d = 0; d < 7; d++) {
            const idx = w * 7 + d;
            if (idx >= days.length) break;
            const day = days[idx];
            const cell = document.createElement("div");
            cell.className = "calendar-cell";
            cell.dataset.level = day.level || 0;
            cell.title = `${day.date}: ${day.count} commits`;
            col.appendChild(cell);
          }
          calGrid.appendChild(col);
        }
      })
      .catch(() => {
        // Fallback or leave quiet if offline
      });
  }
});
"""

INDEX_HTML = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Jagavantha PA — AI Engineer &amp; AI Systems Builder</title>
  <meta name="description" content="Jagavantha PA — Final-year B.Tech AI &amp; Data Science at Meenakshi Sundararajan Engineering College (MSEC), Chennai. Building autonomous LLM agents, RAG pipelines, predictive time-series systems, and scalable FastAPI backends.">
  <meta name="author" content="Jagavantha PA">
  <meta name="theme-color" content="#040906">
  <link rel="canonical" href="https://jaga0001.github.io/Jaga0001/">

  <meta property="og:type" content="profile">
  <meta property="og:site_name" content="Jagavantha PA">
  <meta property="og:title" content="Jagavantha PA — AI Engineer &amp; AI Systems Builder">
  <meta property="og:description" content="Engineering intelligence. Building autonomous, resilient AI systems and scalable backends.">
  <meta property="og:url" content="https://jaga0001.github.io/Jaga0001/">
  <meta property="og:image" content="assets/img/jaga-portrait.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Jagavantha PA — AI Engineer &amp; AI Systems Builder">
  <meta name="twitter:description" content="Engineering intelligence. Building autonomous, resilient AI systems and scalable backends.">
  <meta name="twitter:image" content="assets/img/jaga-portrait.jpg">

  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Geist:wght@300..700&family=JetBrains+Mono:wght@400;500;600&display=swap">

  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="assets/js/main.js"></script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jagavantha PA",
    "jobTitle": "AI Engineer & AI Systems Builder",
    "email": "mailto:jagavanthaarunkumar@gmail.com",
    "url": "https://jaga0001.github.io/Jaga0001/",
    "image": "https://jaga0001.github.io/Jaga0001/assets/img/jaga-portrait.jpg",
    "alumniOf": { "@type": "CollegeOrUniversity", "name": "Meenakshi Sundararajan Engineering College" },
    "sameAs": [
      "https://github.com/jaga0001",
      "https://www.linkedin.com/in/jaga0001/"
    ]
  }
  </script>
</head>
<body>

  <!-- Top Fixed Navigation -->
  <header class="header">
    <div class="container header__inner">
      <a class="brand" href="#top" aria-label="Jagavantha PA">
        <div class="brand__logo">JPA</div>
        <div class="brand__text">
          <span class="brand__name">Jagavantha PA</span>
          <span class="brand__tag">AI Systems Builder</span>
        </div>
      </a>

      <nav class="nav" aria-label="Main Navigation">
        <ul class="nav__list">
          <li><a class="nav__link active" href="#about">About</a></li>
          <li><a class="nav__link" href="#activity">Activity</a></li>
          <li><a class="nav__link" href="#projects">Projects</a></li>
          <li><a class="nav__link" href="#skills">Skills</a></li>
          <li><a class="nav__link" href="#achievements">Achievements</a></li>
          <li><a class="nav__link" href="#experience">Experience</a></li>
          <li><a class="nav__link" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="header__actions">
        <a class="btn btn--small btn--ghost" href="resume.html">Resume</a>
        <a class="btn btn--small btn--primary" href="#contact">Let&rsquo;s talk</a>
        <button class="burger" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-nav">
      <a class="nav__link" href="#about">About</a>
      <a class="nav__link" href="#activity">Activity</a>
      <a class="nav__link" href="#projects">Projects</a>
      <a class="nav__link" href="#skills">Skills</a>
      <a class="nav__link" href="#achievements">Achievements</a>
      <a class="nav__link" href="#experience">Experience</a>
      <a class="nav__link" href="#contact">Contact</a>
      <div class="mobile-nav__actions">
        <a class="btn btn--primary" href="resume.html">View Full Resume</a>
        <a class="btn btn--secondary" href="mailto:jagavanthaarunkumar@gmail.com">Send Email</a>
      </div>
    </div>
  </header>

  <main id="main">
    <!-- Hero Section -->
    <section class="hero" id="top">
      <div class="container hero__grid">
        <div class="hero__content">
          <div class="badge-live">
            <span class="badge-dot"></span>
            <span>Available for AI Engineer &middot; SDE Roles</span>
          </div>

          <h1 class="hero__title">
            Engineering <em>intelligence.</em>
            <span class="hero__gradient">Building resilient AI systems.</span>
          </h1>

          <p class="hero__desc">
            Final-year AI &amp; Data Science student at <strong>Meenakshi Sundararajan Engineering College (MSEC)</strong>, Chennai.
            I design and ship production-grade AI platforms &mdash; self-healing CI/CD pipelines, multi-agent incident forecasters,
            sub-second RAG architectures, and high-throughput FastAPI backends.
          </p>

          <div class="hero__actions">
            <a class="btn btn--primary" href="#projects">
              <span>Explore My Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a class="btn btn--secondary" href="resume.html">
              <span>View Resume</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>

            <div class="hero__socials">
              <a class="social-pill" href="https://github.com/jaga0001" target="_blank" rel="noopener" aria-label="GitHub Profile">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2Z"/></svg>
              </a>
              <a class="social-pill" href="https://www.linkedin.com/in/jaga0001/" target="_blank" rel="noopener" aria-label="LinkedIn Profile">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
              </a>
            </div>
          </div>

          <div class="hero__chips">
            <span class="chip">AI Innovate 3rd Prize</span>
            <span class="chip">Beach Hacks Top 12</span>
            <span class="chip">HackRx 6.0 Top 8</span>
            <span class="chip">FastAPI &middot; CrewAI &middot; RAG &middot; Docker</span>
          </div>
        </div>

        <!-- Framed Portrait Card -->
        <div class="portrait-card">
          <div class="portrait-frame">
            <img src="assets/img/jaga-portrait.jpg" alt="Portrait of Jagavantha PA" width="640" height="800">
            <div class="portrait-overlay"></div>
            <span class="portrait-corner portrait-corner--tl"></span>
            <span class="portrait-corner portrait-corner--br"></span>
            <div class="portrait-badge">
              <div>
                <div class="portrait-badge__title">Jagavantha PA</div>
                <div class="portrait-badge__sub">B.Tech AI &amp; DS &middot; MSEC Chennai</div>
              </div>
              <span class="chip" style="margin:0; background:rgba(16,185,129,0.2);">2022&ndash;2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 01 / About Section -->
    <section class="section" id="about">
      <div class="container">
        <div class="section__head">
          <span class="section__tag">01 / Foundation</span>
          <h2 class="section__title">Engineering that holds up &mdash; from the <em>model</em> to production.</h2>
          <p class="section__lede">
            Specializing in high-reliability AI systems that turn generative intelligence into deterministic business value.
          </p>
        </div>

        <div class="about__grid">
          <div class="about__text">
            <p>
              I am a final-year Artificial Intelligence &amp; Data Science student at
              <strong>Meenakshi Sundararajan Engineering College (MSEC)</strong>, Chennai.
              My work focuses on bridging the divide between experimental AI and scalable production backends.
            </p>
            <p>
              Through software engineering internships at <strong>EnnVee Solutions</strong> and <strong>NLTVC</strong>,
              I built hands-on expertise building production systems: time-series predictive demand models,
              automated enterprise allocation pipelines, and resilient containerized microservices.
            </p>

            <div class="about__principles">
              <div class="principle-card glass-card">
                <span class="principle-num">01</span>
                <div class="principle-content">
                  <h4>Autonomous by Design</h4>
                  <p>AI should not just trigger alerts. It must intercept failures, query log indexes, synthesize validated fixes, and heal pipelines autonomously.</p>
                </div>
              </div>

              <div class="principle-card glass-card">
                <span class="principle-num">02</span>
                <div class="principle-content">
                  <h4>Retrieval Without Hallucination</h4>
                  <p>Dense vector search, custom chunking, and semantic reranking ensure grounded responses strictly backed by enterprise references.</p>
                </div>
              </div>

              <div class="principle-card glass-card">
                <span class="principle-num">03</span>
                <div class="principle-content">
                  <h4>Engineered for High Throughput</h4>
                  <p>Asynchronous RESTful APIs with FastAPI, session persistence, role-based access control, and containerized Docker deployments.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about__stats-grid">
            <div class="stat-box glass-card">
              <div class="stat-val">&#8377;10K</div>
              <div class="stat-label">Cash Prize Award</div>
              <p class="stat-sub">3rd Prize Winner at AI Innovate Hackathon (Sri Eshwar College)</p>
            </div>

            <div class="stat-box glass-card">
              <div class="stat-val">Top 12</div>
              <div class="stat-label">Beach Hacks S07</div>
              <p class="stat-sub">Ranked Top 12 among 750+ participating engineering teams across India</p>
            </div>

            <div class="stat-box glass-card">
              <div class="stat-val">Top 8</div>
              <div class="stat-label">HackRx 6.0</div>
              <p class="stat-sub">Selected Top 8 among 620+ participants for enterprise RAG system</p>
            </div>

            <div class="stat-box glass-card">
              <div class="stat-val">100+</div>
              <div class="stat-label">Engineers Mentored</div>
              <p class="stat-sub">Vice President of AI Epoch Club &amp; Coordinator for Promptomania</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 / Activity Velocity Section -->
    <section class="section" id="activity">
      <div class="container">
        <div class="section__head">
          <span class="section__tag">02 / Velocity</span>
          <h2 class="section__title">Building in the <em>open.</em></h2>
          <p class="section__lede">
            Verified public commit velocity across projects over the past 12 months &mdash; tracked live from GitHub.
          </p>
        </div>

        <div class="activity-card glass-card">
          <div class="activity-header">
            <div class="activity-meta">
              <span class="mono" style="font-weight:600; color:var(--text-main);">github.com/jaga0001</span>
              <span class="activity-badge" data-total-commits>1,064 commits tracking live</span>
            </div>
            <div class="activity-legend">
              <span>Less</span>
              <i style="background:#0e1e16;"></i>
              <i style="background:#0e3826;"></i>
              <i style="background:#165a3d;"></i>
              <i style="background:#10b981;"></i>
              <i style="background:#6ee7b7;"></i>
              <span>More</span>
            </div>
          </div>

          <div class="calendar-scroll">
            <div class="calendar-grid">
              <!-- Dynamically populated from data/contributions.json -->
            </div>
          </div>

          <div class="activity-footer">
            <span class="mono text-muted">Daily commits &middot; AI systems &middot; FastAPI backends &middot; Automation</span>
            <a class="btn btn--small btn--ghost" href="https://github.com/jaga0001" target="_blank" rel="noopener">
              <span>Follow @jaga0001 on GitHub</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 / Selected Projects -->
    <section class="section" id="projects">
      <div class="container">
        <div class="section__head">
          <span class="section__tag">03 / Selected Work</span>
          <h2 class="section__title">Production systems, not <em>placeholders.</em></h2>
          <p class="section__lede">
            Four end-to-end architectures engineered with real constraints &mdash; self-healing CI/CD, incident forecasting, semantic search, and spatial analytics.
          </p>
        </div>

        <div class="projects__grid">
          <!-- Project 1: Repo-Pilot -->
          <article class="project-card glass-card">
            <div>
              <div class="project-meta">
                <span class="project-num">PROJ_01</span>
                <span class="project-tag">Autonomous AI Agent</span>
              </div>
              <h3 class="project-title">Repo-Pilot</h3>
              <p class="project-subtitle">Self-Healing CI/CD Pipeline</p>
              <p class="project-desc">
                CI/CD build failures stall developer velocity. Repo-Pilot intercepts GitHub webhook failure events,
                indexes build logs into Elasticsearch for error pattern matching, and coordinates Gemini LLM agents
                via CrewAI to synthesize verified code patches with regression tests.
              </p>
              <div class="project-highlights">
                <span>&bull; Recovery: Autonomous PR generation &amp; patch validation</span>
                <span>&bull; Indexing: Sub-second Elasticsearch error pattern retrieval</span>
                <span>&bull; Orchestration: Multi-agent CrewAI pipeline</span>
              </div>
              <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">FastAPI</span>
                <span class="tech-tag">Gemini API</span>
                <span class="tech-tag">CrewAI</span>
                <span class="tech-tag">Elasticsearch</span>
                <span class="tech-tag">Docker</span>
              </div>
            </div>
            <a class="project-link" href="https://github.com/jaga0001/Repo-Pilot" target="_blank" rel="noopener">
              <span>View Repository on GitHub</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </article>

          <!-- Project 2: ATOM -->
          <article class="project-card glass-card">
            <div>
              <div class="project-meta">
                <span class="project-num">PROJ_02</span>
                <span class="project-tag">Beach Hacks S07 Top 12</span>
              </div>
              <h3 class="project-title">ATOM</h3>
              <p class="project-subtitle">Pre-Incident Reliability Forecasting Platform</p>
              <p class="project-desc">
                Predictive system reliability platform that forecasts server incidents and infrastructure downtime before they occur.
                Combines streaming time-series anomaly detection, multi-agent coordination, and automated risk scoring to proactively dispatch mitigation tasks.
              </p>
              <div class="project-highlights">
                <span>&bull; Finalist: Ranked Top 12 among 750+ competing teams</span>
                <span>&bull; Modeling: Streaming time-series anomaly detection</span>
                <span>&bull; Backend: Asynchronous high-throughput event engine</span>
              </div>
              <div class="project-tech">
                <span class="tech-tag">FastAPI</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Multi-Agents</span>
                <span class="tech-tag">Time-Series</span>
                <span class="tech-tag">Anomaly Detection</span>
                <span class="tech-tag">Docker</span>
              </div>
            </div>
            <a class="project-link" href="https://github.com/jaga0001/ATOM" target="_blank" rel="noopener">
              <span>View Repository on GitHub</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </article>

          <!-- Project 3: RAG Query System -->
          <article class="project-card glass-card">
            <div>
              <div class="project-meta">
                <span class="project-num">PROJ_03</span>
                <span class="project-tag">HackRx 6.0 Top 8</span>
              </div>
              <h3 class="project-title">RAG Query System</h3>
              <p class="project-subtitle">Enterprise Semantic Retrieval Platform</p>
              <p class="project-desc">
                High-precision semantic search and document retrieval engine built on custom chunking strategies, dense vector embeddings,
                and LangChain. Delivers sub-second, context-aware answers from massive unstructured documentation sets with strict hallucination guards.
              </p>
              <div class="project-highlights">
                <span>&bull; Hackathon: Top 8 finalist out of 620+ participants</span>
                <span>&bull; Latency: Sub-500ms vector search response time</span>
                <span>&bull; Accuracy: Hybrid dense embedding reranking</span>
              </div>
              <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">LangChain</span>
                <span class="tech-tag">FastAPI</span>
                <span class="tech-tag">ChromaDB</span>
                <span class="tech-tag">Pinecone</span>
                <span class="tech-tag">Vector Search</span>
              </div>
            </div>
            <a class="project-link" href="https://github.com/jaga0001" target="_blank" rel="noopener">
              <span>View Repository on GitHub</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </article>

          <!-- Project 4: Accident Hotspot Prediction -->
          <article class="project-card glass-card">
            <div>
              <div class="project-meta">
                <span class="project-num">PROJ_04</span>
                <span class="project-tag">AI Innovate 3rd Prize</span>
              </div>
              <h3 class="project-title">Accident Hotspot System</h3>
              <p class="project-subtitle">Spatial ML &amp; Safety Analytics</p>
              <p class="project-desc">
                Data-driven machine learning system ingesting historical accident data, spatial density metrics, and road geometry
                to forecast high-risk incident hotspots, providing urban planners and emergency teams with actionable preventative safety data.
              </p>
              <div class="project-highlights">
                <span>&bull; Award: 3rd Prize Winner with &#8377;10,000 cash prize</span>
                <span>&bull; Features: Spatial density clustering &amp; road geometry</span>
                <span>&bull; Analytics: Proactive municipal road safety forecasts</span>
              </div>
              <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Scikit-learn</span>
                <span class="tech-tag">Spatial ML</span>
                <span class="tech-tag">Feature Engineering</span>
                <span class="tech-tag">Analytics</span>
              </div>
            </div>
            <a class="project-link" href="https://github.com/jaga0001" target="_blank" rel="noopener">
              <span>View Repository on GitHub</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- 04 / Technical Toolkit -->
    <section class="section" id="skills">
      <div class="container">
        <div class="section__head">
          <span class="section__tag">04 / Toolkit</span>
          <h2 class="section__title">Skills, depth and <em>foundations.</em></h2>
          <p class="section__lede">
            Every layer of the AI systems stack &mdash; from algorithms and vector indices to production APIs and deployment rails.
          </p>
        </div>

        <div class="skills__grid">
          <div class="skill-card glass-card">
            <h3 class="skill-card__title"><span>01</span> Languages</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">Python</span>
                <span class="skill-sub">Async, Tooling, ML</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">SQL</span>
                <span class="skill-sub">PostgreSQL, Indexing</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">C</span>
                <span class="skill-sub">Memory &amp; Fundamentals</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Bash / Shell</span>
                <span class="skill-sub">CI/CD &amp; Scripting</span>
              </div>
            </div>
          </div>

          <div class="skill-card glass-card">
            <h3 class="skill-card__title"><span>02</span> Agentic AI &amp; LLMs</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">CrewAI &amp; LangChain</span>
                <span class="skill-sub">Multi-Agent Systems</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Gemini API &amp; HuggingFace</span>
                <span class="skill-sub">Model Integration</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Prompt Engineering</span>
                <span class="skill-sub">Structured Outputs</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Time-Series Modeling</span>
                <span class="skill-sub">Anomaly Forecasting</span>
              </div>
            </div>
          </div>

          <div class="skill-card glass-card">
            <h3 class="skill-card__title"><span>03</span> Retrieval &amp; RAG</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">Dense Vector Search</span>
                <span class="skill-sub">Semantic Indexing</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">ChromaDB &amp; Pinecone</span>
                <span class="skill-sub">Vector Stores</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Elasticsearch</span>
                <span class="skill-sub">Log Pattern Retrieval</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Document Chunking</span>
                <span class="skill-sub">Hallucination Guards</span>
              </div>
            </div>
          </div>

          <div class="skill-card glass-card">
            <h3 class="skill-card__title"><span>04</span> Backend &amp; APIs</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">FastAPI</span>
                <span class="skill-sub">High-Throughput REST</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Auth &amp; Security</span>
                <span class="skill-sub">JWT, RBAC, Sessions</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Microservices</span>
                <span class="skill-sub">Webhooks &amp; Events</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Async Task Queues</span>
                <span class="skill-sub">Workers &amp; Caching</span>
              </div>
            </div>
          </div>

          <div class="skill-card glass-card">
            <h3 class="skill-card__title"><span>05</span> Cloud &amp; DevOps</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">Docker</span>
                <span class="skill-sub">Multi-stage Containerization</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Google Cloud Platform</span>
                <span class="skill-sub">Cloud Deployments</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Supabase &amp; Render</span>
                <span class="skill-sub">Database &amp; Hosting</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">GitHub Actions</span>
                <span class="skill-sub">CI/CD Workflows</span>
              </div>
            </div>
          </div>

          <div class="skill-card glass-card">
            <h3 class="skill-card__title"><span>06</span> CS Fundamentals</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span class="skill-name">Data Structures</span>
                <span class="skill-sub">Trees, Graphs, Maps</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">System Design</span>
                <span class="skill-sub">Distributed Systems</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Predictive Analytics</span>
                <span class="skill-sub">Statistics &amp; Data Prep</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Testing &amp; Automation</span>
                <span class="skill-sub">Unit &amp; Regression Tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05 / Achievements & Recognition -->
    <section class="section" id="achievements">
      <div class="container">
        <div class="section__head">
          <span class="section__tag">05 / Recognition</span>
          <h2 class="section__title">Proof, on the <em>record.</em></h2>
          <p class="section__lede">
            Competitive national hackathons, leadership milestones, and technical achievements.
          </p>
        </div>

        <div class="awards__grid">
          <div class="award-card glass-card">
            <div>
              <div class="award-rank">3rd Prize</div>
              <h3 class="award-title">AI Innovate Hackathon (&#8377;10,000 Award)</h3>
              <p class="award-org">Sri Eshwar Engineering College &middot; 2025</p>
              <p class="award-desc">
                Won 3rd place with a cash prize of &#8377;10,000 for building an Accident Hotspot Prediction System
                using spatial feature engineering and data-driven risk analytics for municipal road safety.
              </p>
            </div>
          </div>

          <div class="award-card glass-card">
            <div>
              <div class="award-rank">Top 12</div>
              <h3 class="award-title">Beach Hacks Season 07 Finalist</h3>
              <p class="award-org">Christ Engineering College, Kerala &middot; 2026</p>
              <p class="award-desc">
                Selected in the Top 12 out of 750+ participating engineering teams across India for architecting ATOM,
                an AI pre-incident reliability forecasting platform utilizing time-series anomaly detection.
              </p>
            </div>
          </div>

          <div class="award-card glass-card">
            <div>
              <div class="award-rank">Top 8</div>
              <h3 class="award-title">HackRx 6.0 Finalist</h3>
              <p class="award-org">R.V. College of Engineering, Bengaluru &middot; 2026</p>
              <p class="award-desc">
                Ranked in the Top 8 teams out of 620+ participants for developing a scalable, production-ready
                Retrieval-Augmented Generation (RAG) Query System with sub-second vector search latency.
              </p>
            </div>
          </div>

          <div class="award-card glass-card">
            <div>
              <div class="award-rank">Lead</div>
              <h3 class="award-title">Vice President &middot; AI Epoch Club</h3>
              <p class="award-org">Meenakshi Sundararajan Engineering College</p>
              <p class="award-desc">
                Spearheaded AI/ML technical workshops, hackathons, and seminars engaging 100+ student engineers.
                Increased active club participation by 30% and mentored peers on generative AI workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 / Experience & Education -->
    <section class="section" id="experience">
      <div class="container">
        <div class="section__head">
          <span class="section__tag">06 / Trajectory</span>
          <h2 class="section__title">Experience &amp; <em>education.</em></h2>
          <p class="section__lede">
            Internships, real-world engineering responsibilities, and formal academic training.
          </p>
        </div>

        <div class="timeline">
          <!-- Experience 1 -->
          <article class="timeline-item glass-card">
            <div class="timeline-meta">
              <span class="timeline-date">Jan 2026 &ndash; Mar 2026</span>
              <span class="timeline-loc">Chennai, India</span>
            </div>
            <div>
              <h3 class="timeline-role">Software Engineer Intern</h3>
              <p class="timeline-org">EnnVee Solutions</p>
              <ul class="timeline-bullets">
                <li>Acquired foundational knowledge in AI and Machine Learning, model development, and preprocessing workflows.</li>
                <li>Developed a predictive demand forecasting system to identify business trends and enable data-driven planning.</li>
                <li>Designed and deployed an automated project allocation platform to optimize enterprise resource utilization.</li>
              </ul>
            </div>
          </article>

          <!-- Experience 2 -->
          <article class="timeline-item glass-card">
            <div class="timeline-meta">
              <span class="timeline-date">Mar 2025 &ndash; May 2025</span>
              <span class="timeline-loc">Chennai, India</span>
            </div>
            <div>
              <h3 class="timeline-role">Software Engineering Trainee</h3>
              <p class="timeline-org">NLTVC - VHGlobal</p>
              <ul class="timeline-bullets">
                <li>Engineered core software features, automated testing routines, and resolved production integration bottlenecks.</li>
                <li>Strengthened expertise in version control, API lifecycles, and end-to-end production software delivery.</li>
                <li>Ensured optimal performance, cross-platform stability, and seamless accessibility across client modules.</li>
              </ul>
            </div>
          </article>

          <!-- Education -->
          <article class="timeline-item glass-card">
            <div class="timeline-meta">
              <span class="timeline-date">Nov 2022 &ndash; Sep 2026</span>
              <span class="timeline-loc">Chennai, India</span>
            </div>
            <div>
              <h3 class="timeline-role">B.Tech in Artificial Intelligence &amp; Data Science</h3>
              <p class="timeline-org">Meenakshi Sundararajan Engineering College (MSEC)</p>
              <p class="text-muted" style="font-size:0.92rem; line-height:1.65;">
                <strong style="color:var(--text-main);">Key Coursework:</strong> Data Structures &amp; Algorithms, Machine Learning, System Design,
                Agentic AI, Generative AI, Relational Databases &amp; SQL, Applied Statistics, Software Automation.
              </p>
            </div>
          </article>
        </div>

        <!-- Certifications -->
        <div class="certs-section">
          <h3 class="certs-title">Certifications &amp; Credentials</h3>
          <div class="certs-grid">
            <div class="cert-card glass-card">
              <span class="cert-badge">Google</span>
              <h4 class="cert-name">Google AI Professional Certificate</h4>
              <p class="cert-org">Coursera &middot; Comprehensive AI &amp; ML Workflows</p>
            </div>

            <div class="cert-card glass-card">
              <span class="cert-badge">GUVI</span>
              <h4 class="cert-name">Python and AI Fundamentals</h4>
              <p class="cert-org">Core Python &middot; Data Structures &middot; Applied ML</p>
            </div>

            <div class="cert-card glass-card">
              <span class="cert-badge">NPTEL</span>
              <h4 class="cert-name">Introduction to C Programming</h4>
              <p class="cert-org">Memory Management &middot; Pointers &middot; Algorithmic Logic</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 07 / Contact Section -->
    <section class="section" id="contact">
      <div class="container">
        <div class="contact__box glass-card">
          <span class="contact__tag">07 / Connect</span>
          <h2 class="contact__title">Let&rsquo;s build something <em>extraordinary.</em></h2>
          <p class="contact__desc">
            Open for AI Engineer, SDE, and Agentic Systems engineering roles. Based in Chennai, available worldwide.
          </p>

          <a class="contact__email" href="mailto:jagavanthaarunkumar@gmail.com">
            jagavanthaarunkumar@gmail.com
          </a>

          <div class="contact__actions">
            <button class="btn btn--secondary" type="button" data-copy-email="jagavanthaarunkumar@gmail.com">
              <span>Copy Email Address</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
            <a class="btn btn--primary" href="mailto:jagavanthaarunkumar@gmail.com">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 Jagavantha PA &middot; Designed &amp; engineered end-to-end.</p>
      <a class="text-mint" href="#top" style="display:inline-flex; align-items:center; gap:0.4rem;">
        <span>Back to top &uarr;</span>
      </a>
    </div>
  </footer>

  <div class="toast" role="status" aria-live="polite"></div>

</body>
</html>
"""

RESUME_HTML = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume &mdash; Jagavantha PA</title>
  <meta name="description" content="Resume of Jagavantha PA — AI Engineer &amp; AI Systems Builder. B.Tech AI &amp; Data Science at MSEC Chennai.">
  <meta name="theme-color" content="#040906">
  <link rel="canonical" href="https://jaga0001.github.io/Jaga0001/resume.html">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Geist:wght@300..700&family=JetBrains+Mono:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="assets/css/style.css">

  <style>
    body {
      padding-block: 2rem 4rem;
    }
    .resume-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .resume-sheet {
      background: var(--bg-card);
      border: 1px solid var(--border-strong);
      border-radius: var(--radius-lg);
      padding: clamp(1.5rem, 4vw, 3.5rem);
      box-shadow: 0 20px 60px rgba(0,0,0,0.6), var(--glow);
    }
    .r-head {
      border-bottom: 1px solid var(--border);
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    .r-title {
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 0.35rem;
    }
    .r-subtitle {
      font-family: var(--font-mono);
      color: var(--mint);
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }
    .r-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      font-family: var(--font-mono);
      font-size: 0.84rem;
      color: var(--text-muted);
    }
    .r-links a {
      color: var(--mint-light);
      text-decoration: underline;
    }
    .r-sec {
      margin-bottom: 2rem;
    }
    .r-sec-title {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--emerald);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.4rem;
      margin-bottom: 1.25rem;
    }
    .r-entry {
      margin-bottom: 1.4rem;
    }
    .r-entry-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.25rem;
    }
    .r-entry-head h3 {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text-main);
    }
    .r-entry-meta {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--emerald);
    }
    .r-entry-sub {
      font-family: var(--font-mono);
      font-size: 0.86rem;
      color: var(--mint);
      margin-bottom: 0.5rem;
    }
    .r-entry ul {
      list-style: disc;
      padding-left: 1.25rem;
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.6;
    }
    .r-entry ul li {
      margin-bottom: 0.35rem;
    }
    .r-skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
    }
    .r-skill-box strong {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: var(--mint);
      display: block;
      margin-bottom: 0.25rem;
    }
    .r-skill-box p {
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    @media print {
      body {
        background: #ffffff !important;
        color: #111111 !important;
        padding: 0 !important;
      }
      .resume-nav {
        display: none !important;
      }
      .resume-sheet {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        background: #ffffff !important;
      }
      .r-title, h1, h2, h3, h4 {
        color: #000000 !important;
      }
      .r-subtitle, .r-sec-title, .r-entry-meta, .r-skill-box strong {
        color: #047857 !important;
      }
      .r-links, .r-links a, .r-entry ul, .r-skill-box p, .text-muted {
        color: #333333 !important;
      }
    }
  </style>
</head>
<body>
  <div class="container" style="max-width: 920px;">
    <div class="resume-nav">
      <a class="btn btn--secondary btn--small" href="index.html">&larr; Back to Portfolio</a>
      <button class="btn btn--primary btn--small" type="button" onclick="window.print()">
        <span>Save as PDF / Print</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
      </button>
    </div>

    <article class="resume-sheet">
      <header class="r-head">
        <h1 class="r-title">Jagavantha PA</h1>
        <p class="r-subtitle">AI Engineer &middot; AI Systems Builder &middot; SDE</p>
        <div class="r-links">
          <span>Email: <a href="mailto:jagavanthaarunkumar@gmail.com">jagavanthaarunkumar@gmail.com</a></span>
          <span>GitHub: <a href="https://github.com/jaga0001" target="_blank" rel="noopener">github.com/jaga0001</a></span>
          <span>LinkedIn: <a href="https://www.linkedin.com/in/jaga0001/" target="_blank" rel="noopener">linkedin.com/in/jaga0001</a></span>
          <span>Location: Chennai, Tamil Nadu, India</span>
        </div>
      </header>

      <section class="r-sec">
        <h2 class="r-sec-title">Summary</h2>
        <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.65;">
          Final-year B.Tech in Artificial Intelligence &amp; Data Science at Meenakshi Sundararajan Engineering College (MSEC), Chennai.
          Expertise in architecting autonomous multi-agent systems, dense RAG document retrieval engines, time-series anomaly detection,
          and production-grade FastAPI backends. Proven track record in national competitive hackathons (AI Innovate 3rd Prize, Beach Hacks Top 12, HackRx 6.0 Top 8)
          and real-world software engineering internships.
        </p>
      </section>

      <section class="r-sec">
        <h2 class="r-sec-title">Education</h2>
        <div class="r-entry">
          <div class="r-entry-head">
            <h3>Meenakshi Sundararajan Engineering College (MSEC)</h3>
            <span class="r-entry-meta">Nov 2022 &ndash; Sep 2026 &middot; Chennai, India</span>
          </div>
          <p class="r-entry-sub">Bachelor of Technology &mdash; Artificial Intelligence and Data Science</p>
          <p style="color:var(--text-muted); font-size:0.86rem;">
            Coursework: Data Structures &amp; Algorithms, Machine Learning, System Design, Agentic AI, Generative AI, SQL, Applied Statistics, Software Automation.
          </p>
        </div>
      </section>

      <section class="r-sec">
        <h2 class="r-sec-title">Internships &amp; Experience</h2>
        <div class="r-entry">
          <div class="r-entry-head">
            <h3>Software Engineer Intern</h3>
            <span class="r-entry-meta">Jan 2026 &ndash; Mar 2026 &middot; Chennai, India</span>
          </div>
          <p class="r-entry-sub">EnnVee Solutions</p>
          <ul>
            <li>Acquired foundational knowledge in AI and Machine Learning, model development, and preprocessing workflows.</li>
            <li>Developed a predictive demand forecasting system to identify business trends and enable data-driven planning.</li>
            <li>Designed and deployed an automated project allocation platform to optimize enterprise resource utilization.</li>
          </ul>
        </div>

        <div class="r-entry">
          <div class="r-entry-head">
            <h3>Software Engineering Trainee</h3>
            <span class="r-entry-meta">Mar 2025 &ndash; May 2025 &middot; Chennai, India</span>
          </div>
          <p class="r-entry-sub">NLTVC - VHGlobal</p>
          <ul>
            <li>Engineered core software features, automated testing, and resolved production integration bottlenecks.</li>
            <li>Strengthened expertise in version control, API lifecycles, and end-to-end production software delivery.</li>
            <li>Ensured optimal performance, cross-platform stability, and seamless accessibility across client modules.</li>
          </ul>
        </div>
      </section>

      <section class="r-sec">
        <h2 class="r-sec-title">Projects</h2>
        <div class="r-entry">
          <div class="r-entry-head">
            <h3>Repo-Pilot &mdash; Self-Healing CI/CD Pipeline</h3>
            <span class="r-entry-meta">FastAPI, Gemini API, CrewAI, Elasticsearch, Docker</span>
          </div>
          <ul>
            <li>Built an autonomous CI/CD failure interceptor querying Elasticsearch logs to identify build and test breaks.</li>
            <li>Coordinated multi-agent LLM teams using CrewAI to synthesize validated code patches and issue automated PRs.</li>
          </ul>
        </div>

        <div class="r-entry">
          <div class="r-entry-head">
            <h3>ATOM &mdash; Pre-Incident Reliability Forecasting Platform</h3>
            <span class="r-entry-meta">Python, FastAPI, Multi-Agents, Time-Series ML</span>
          </div>
          <ul>
            <li>Engineered a predictive infrastructure monitoring platform forecasting server incidents prior to downtime.</li>
            <li>Beach Hacks Season 07 Top 12 Finalist among 750+ participating engineering teams across India.</li>
          </ul>
        </div>

        <div class="r-entry">
          <div class="r-entry-head">
            <h3>RAG Query System &mdash; Enterprise Semantic Retrieval</h3>
            <span class="r-entry-meta">LangChain, FastAPI, ChromaDB, Pinecone, Vector Search</span>
          </div>
          <ul>
            <li>Designed a high-throughput semantic retrieval engine delivering sub-second answers across large unstructured documents.</li>
            <li>HackRx 6.0 Top 8 Finalist out of 620+ participants for zero-hallucination grounded retrieval.</li>
          </ul>
        </div>

        <div class="r-entry">
          <div class="r-entry-head">
            <h3>Accident Hotspot Prediction System &mdash; Spatial ML</h3>
            <span class="r-entry-meta">Python, Scikit-learn, Spatial Feature Engineering</span>
          </div>
          <ul>
            <li>Built a data-driven risk analytics model forecasting municipal traffic hotspots using historical incident density.</li>
            <li>Won 3rd Prize (&#8377;10,000 Cash Prize Award) at AI Innovate Hackathon (Sri Eshwar College).</li>
          </ul>
        </div>
      </section>

      <section class="r-sec">
        <h2 class="r-sec-title">Technical Skills</h2>
        <div class="r-skills-grid">
          <div class="r-skill-box">
            <strong>Languages</strong>
            <p>Python (Expert, Async), SQL (PostgreSQL), C, Bash / Shell</p>
          </div>
          <div class="r-skill-box">
            <strong>Agentic AI &amp; LLMs</strong>
            <p>CrewAI, LangChain, Multi-Agent Systems, Gemini API, Prompt Engineering</p>
          </div>
          <div class="r-skill-box">
            <strong>RAG &amp; Vector Databases</strong>
            <p>Dense Vector Search, ChromaDB, Pinecone, Elasticsearch, Chunking Pipelines</p>
          </div>
          <div class="r-skill-box">
            <strong>Backend &amp; DevOps</strong>
            <p>FastAPI, RESTful APIs, Docker, GCP, GitHub Actions CI/CD, Supabase</p>
          </div>
        </div>
      </section>

      <section class="r-sec" style="margin-bottom:0;">
        <h2 class="r-sec-title">Honors &amp; Leadership</h2>
        <div class="r-entry">
          <div class="r-entry-head">
            <h3>Vice President &middot; AI Epoch Club</h3>
            <span class="r-entry-meta">MSEC Chennai</span>
          </div>
          <p style="color:var(--text-muted); font-size:0.88rem;">
            Conducted workshops and technical hackathons for 100+ engineers; boosted club engagement by 30%.
          </p>
        </div>
      </section>
    </article>
  </div>
</body>
</html>
"""

def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    site_dir = os.path.join(root, "site")

    css_path = os.path.join(site_dir, "assets", "css", "style.css")
    js_path = os.path.join(site_dir, "assets", "js", "main.js")
    index_path = os.path.join(site_dir, "index.html")
    resume_path = os.path.join(site_dir, "resume.html")

    with open(css_path, "w", encoding="utf-8") as f:
        f.write(CSS_CONTENT.strip() + "\n")
    print(f"Wrote {css_path}")

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(JS_CONTENT.strip() + "\n")
    print(f"Wrote {js_path}")

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(INDEX_HTML.strip() + "\n")
    print(f"Wrote {index_path}")

    with open(resume_path, "w", encoding="utf-8") as f:
        f.write(RESUME_HTML.strip() + "\n")
    print(f"Wrote {resume_path}")

if __name__ == "__main__":
    main()

