# Create a unified, rock-solid, ultra-modern stylesheet: site/assets/css/style.css

css_content = """/* ==========================================================================
   Jagavantha PA — Modern Emerald Cyber Portfolio Stylesheet
   ========================================================================== */

:root {
  --bg-dark: #040906;
  --bg-card: #08140e;
  --bg-card-hover: #0c1d15;
  --bg-card-glass: rgba(8, 20, 14, 0.75);
  
  --emerald: #10b981;
  --emerald-dark: #059669;
  --mint: #34d399;
  --mint-light: #6ee7b7;
  
  --text-main: #f0fdf4;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  --border: rgba(16, 185, 129, 0.18);
  --border-strong: rgba(52, 211, 153, 0.4);
  --border-focus: #10b981;
  
  --glow: 0 0 25px rgba(16, 185, 129, 0.15);
  --glow-strong: 0 0 35px rgba(16, 185, 129, 0.3);
  
  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', Consolas, 'Courier New', monospace;
  --font-display: 'Fraunces', Georgia, serif;
  
  --container: 1180px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Reset & Base */
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
  line-height: 1.6;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 15% 10%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 85% 60%, rgba(5, 150, 105, 0.06) 0%, transparent 50%),
    linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.02) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
}

/* Typography Helpers */
.mono { font-family: var(--font-mono); }
.font-display { font-family: var(--font-display); }
.text-muted { color: var(--text-muted); }
.text-emerald { color: var(--emerald); }

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
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  cursor: pointer;
  transition: var(--transition);
}

.btn--primary {
  background: var(--emerald-dark);
  color: #fff;
  border-color: var(--emerald);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.btn--primary:hover {
  background: var(--emerald);
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(16, 185, 129, 0.45);
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
  transform: translateY(-2px);
}

.btn--small {
  padding: 0.45rem 1rem;
  font-size: 0.78rem;
}

/* Glass Cards */
.glass-card {
  background: var(--bg-card-glass);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.glass-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--glow);
  transform: translateY(-3px);
}

/* Navigation Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-block: 1rem;
  transition: var(--transition);
  background: rgba(4, 9, 6, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
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
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  display: grid;
  place-items: center;
  color: var(--mint);
  font-weight: bold;
  font-size: 0.85rem;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
}

.brand__text {
  display: flex;
  flex-direction: column;
}

.brand__name {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.brand__tag {
  font-size: 0.68rem;
  color: var(--emerald);
  letter-spacing: 0.08em;
}

.nav {
  display: flex;
  align-items: center;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav__link {
  font-size: 0.88rem;
  color: var(--text-muted);
  font-weight: 500;
  position: relative;
  padding-block: 0.3rem;
}

.nav__link:hover, .nav__link.active {
  color: var(--mint);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--emerald);
  transition: var(--transition);
}

.nav__link:hover::after, .nav__link.active::after {
  width: 100%;
}

.header__cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.burger {
  display: none;
  background: none;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  padding: 0.5rem;
  color: var(--text-main);
  cursor: pointer;
}

/* Mobile Nav Drawer */
.mobile-nav {
  display: none;
  position: fixed;
  inset: 68px 0 0;
  background: rgba(4, 9, 6, 0.95);
  backdrop-filter: blur(20px);
  z-index: 999;
  padding: 2rem;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav.is-open {
  display: flex;
}

.mobile-nav .nav__link {
  font-size: 1.25rem;
  padding-block: 0.75rem;
  border-bottom: 1px solid var(--border);
}

/* Hero Section */
.hero {
  padding-top: calc(75px + 4rem);
  padding-bottom: 4rem;
  min-height: 85vh;
  display: flex;
  align-items: center;
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
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: var(--mint);
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--emerald);
  box-shadow: 0 0 10px var(--emerald);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.hero__title {
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.hero__gradient {
  background: linear-gradient(120deg, var(--text-main) 20%, var(--mint) 60%, var(--emerald-dark) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 580px;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero__socials {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-pill {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  color: var(--text-muted);
  background: rgba(16, 185, 129, 0.05);
}

.social-pill:hover {
  color: var(--mint);
  border-color: var(--mint);
  transform: translateY(-2px);
  box-shadow: var(--glow);
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  padding: 0.35rem 0.8rem;
  background: rgba(8, 20, 14, 0.6);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.76rem;
  color: var(--mint-light);
}

/* Portrait Card */
.portrait-card {
  position: relative;
  max-width: 420px;
  margin-inline: auto;
}

.portrait-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid var(--border-strong);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), var(--glow);
}

.portrait-frame img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

.portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(4, 9, 6, 0.85) 100%);
  pointer-events: none;
}

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
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
}

.portrait-badge__sub {
  font-size: 0.72rem;
  color: var(--mint);
}

/* Section Common */
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
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.section__title {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.section__lede {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 650px;
}

/* About Section */
.about__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: start;
}

.about__text p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  line-height: 1.75;
}

.about__principles {
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
}

.principle-card {
  padding: 1.25rem 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.principle-num {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--emerald);
  padding: 0.25rem 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

.principle-content h4 {
  font-size: 1.05rem;
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
  padding: 1.75rem 1.5rem;
  text-align: center;
}

.stat-val {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--mint);
  margin-bottom: 0.3rem;
  font-family: var(--font-display);
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Projects Grid */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card__top {
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.project-num {
  font-size: 0.75rem;
  color: var(--emerald);
  font-weight: bold;
}

.project-tag {
  font-size: 0.72rem;
  padding: 0.2rem 0.6rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-full);
  color: var(--mint-light);
  border: 1px solid var(--border);
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.4rem;
}

.project-subtitle {
  font-size: 0.85rem;
  color: var(--mint);
  margin-bottom: 1rem;
}

.project-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
  padding: 0.85rem 1rem;
  background: rgba(4, 9, 6, 0.5);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--emerald);
}

.project-highlights span {
  font-size: 0.8rem;
  color: var(--text-main);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-size: 0.74rem;
  padding: 0.2rem 0.55rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--text-muted);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mint);
  font-size: 0.85rem;
  font-weight: 500;
}

.project-link:hover {
  color: var(--text-main);
  transform: translateX(4px);
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
  font-size: 0.8rem;
  color: var(--emerald);
  padding: 0.2rem 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 4px;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
}

.skill-name {
  color: var(--text-main);
  font-weight: 500;
}

.skill-sub {
  color: var(--text-dim);
  font-size: 0.78rem;
}

/* Experience & Achievements */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 860px;
}

.timeline-item {
  padding: 1.75rem 2rem;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
}

.timeline-date {
  font-size: 0.82rem;
  color: var(--emerald);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-loc {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.timeline-role {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.timeline-org {
  font-size: 0.9rem;
  color: var(--mint);
  margin-bottom: 0.85rem;
}

.timeline-bullets {
  list-style: disc;
  padding-left: 1.25rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

.timeline-bullets li {
  margin-bottom: 0.35rem;
}

/* Awards Cards */
.awards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.award-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.award-rank {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--mint);
  margin-bottom: 0.5rem;
}

.award-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.award-org {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-bottom: 0.75rem;
}

.award-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Contact Section */
.contact__box {
  padding: 3.5rem 2.5rem;
  text-align: center;
  max-width: 800px;
  margin-inline: auto;
}

.contact__title {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact__desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.contact__email {
  display: inline-block;
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  color: var(--mint);
  font-weight: 600;
  margin-bottom: 2rem;
  border-bottom: 2px dashed var(--emerald);
  padding-bottom: 0.25rem;
}

.contact__email:hover {
  color: var(--text-main);
  border-bottom-style: solid;
}

/* Footer */
.footer {
  padding-block: 2.5rem;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-dim);
  font-size: 0.82rem;
}

/* Responsiveness */
@media (max-width: 900px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about__grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .nav__list, .header__cta .btn--primary {
    display: none;
  }
  
  .burger {
    display: block;
  }
}

@media (max-width: 600px) {
  .about__stats-grid {
    grid-template-columns: 1fr;
  }
  
  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
"""

with open('site/assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)
print('Wrote site/assets/css/style.css')

