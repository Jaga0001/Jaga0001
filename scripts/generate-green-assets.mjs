import fs from "node:fs";
import path from "node:path";

const ASSETS_DIR = "assets";
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// ==========================================
// 1. HERO BANNER: jaga-hero.svg
// ==========================================
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 480" width="1200" height="480" role="img" aria-labelledby="hero-title hero-desc">
  <title id="hero-title">Jagavantha PA — Engineering intelligence. Building resilient systems.</title>
  <desc id="hero-desc">AI &amp; Data Science Graduate, AI Systems Developer, Scalable Backends and Flutter Developer. Meenakshi Sundararajan Engineering College.</desc>

  <defs>
    <radialGradient id="hero-bg" cx="72%" cy="38%" r="80%">
      <stop offset="0" stop-color="#0e2318"/>
      <stop offset=".55" stop-color="#0a1711"/>
      <stop offset="1" stop-color="#050c08"/>
    </radialGradient>
    <radialGradient id="hero-light-a" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#10b981" stop-opacity=".45"/>
      <stop offset="1" stop-color="#059669" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hero-light-b" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#34d399" stop-opacity=".2"/>
      <stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="hero-name-grad" gradientUnits="userSpaceOnUse" x1="60" y1="0" x2="520" y2="0">
      <stop offset="0" stop-color="#f0fdf4"/>
      <stop offset=".55" stop-color="#6ee7b7"/>
      <stop offset="1" stop-color="#10b981"/>
    </linearGradient>
    <linearGradient id="hero-sheen" gradientUnits="userSpaceOnUse" x1="-260" y1="0" x2="-40" y2="0">
      <stop offset="0" stop-color="#f0fdf4" stop-opacity="0"/>
      <stop offset=".5" stop-color="#ffffff" stop-opacity=".85"/>
      <stop offset="1" stop-color="#f0fdf4" stop-opacity="0"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0;880 0;880 0" keyTimes="0;.35;1" dur="8s" begin="3s" repeatCount="indefinite"/>
    </linearGradient>
    <linearGradient id="hero-scan" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#34d399" stop-opacity="0"/>
      <stop offset=".5" stop-color="#34d399" stop-opacity=".06"/>
      <stop offset="1" stop-color="#34d399" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hero-rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#34d399" stop-opacity="0"/>
      <stop offset=".2" stop-color="#10b981"/>
      <stop offset=".75" stop-color="#047857"/>
      <stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hero-orbit-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6ee7b7" stop-opacity=".6"/>
      <stop offset="1" stop-color="#047857" stop-opacity=".05"/>
    </linearGradient>
    <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#10b981" stroke-opacity=".07" stroke-width="1"/>
    </pattern>
    <radialGradient id="hero-grid-fade" cx="68%" cy="45%" r="55%">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#000"/>
    </radialGradient>
    <mask id="hero-grid-mask">
      <rect width="1200" height="480" fill="url(#hero-grid-fade)"/>
    </mask>
    <filter id="hero-glow" x="-20%" y="-200%" width="140%" height="500%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="hero-clip"><rect width="1200" height="480" rx="20"/></clipPath>
  </defs>

  <style>
    .hero-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .hero-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .hero-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }

    .hero-rise { animation: hero-rise 1.4s cubic-bezier(.16,1,.3,1) both; }
    .hero-fade { animation: hero-fade 1.6s cubic-bezier(.16,1,.3,1) both; }
    .d1 { animation-delay: .15s; } .d2 { animation-delay: .35s; } .d3 { animation-delay: .6s; }
    .d4 { animation-delay: .9s; } .d5 { animation-delay: 1.2s; } .d6 { animation-delay: 1.5s; }

    .hero-draw { stroke-dasharray: 900; stroke-dashoffset: 900; animation: hero-draw 2.4s cubic-bezier(.65,0,.35,1) .9s forwards; }
    .hero-portrait { animation: hero-photo 1.6s cubic-bezier(.16,1,.3,1) .5s both; }
    @keyframes hero-photo { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
    @keyframes hero-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
    @keyframes hero-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes hero-draw { to { stroke-dashoffset: 0; } }

    @media (prefers-reduced-motion: reduce) {
      .hero-rise, .hero-fade, .hero-portrait { animation: none; }
      .hero-draw { animation: none; stroke-dashoffset: 0; }
    }
  </style>

  <g clip-path="url(#hero-clip)">
    <!-- Canvas Background -->
    <rect width="1200" height="480" fill="url(#hero-bg)"/>

    <!-- Ambient Emerald Light Fields -->
    <ellipse cx="920" cy="140" rx="420" ry="300" fill="url(#hero-light-a)">
      <animateTransform attributeName="transform" type="translate" values="0 0; -50 25; 0 0" dur="22s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1; .45 0 .55 1"/>
    </ellipse>
    <ellipse cx="180" cy="460" rx="360" ry="220" fill="url(#hero-light-b)">
      <animateTransform attributeName="transform" type="translate" values="0 0; 60 -20; 0 0" dur="28s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1; .45 0 .55 1"/>
    </ellipse>

    <!-- Technical Grid -->
    <rect width="1200" height="480" fill="url(#hero-grid)" mask="url(#hero-grid-mask)"/>

    <!-- Slow scan line -->
    <rect x="0" y="-140" width="1200" height="140" fill="url(#hero-scan)">
      <animate attributeName="y" values="-140;480" dur="11s" begin="2s" repeatCount="indefinite"/>
    </rect>

    <!-- Drifting Emerald Particles -->
    <g fill="#34d399">
      <circle cx="560" cy="120" r="1.5"><animate attributeName="opacity" values="0;.9;0" dur="4.2s" repeatCount="indefinite"/><animate attributeName="cy" values="120;96" dur="4.2s" repeatCount="indefinite"/></circle>
      <circle cx="720" cy="70" r="1.2"><animate attributeName="opacity" values="0;.8;0" dur="5.6s" begin="1s" repeatCount="indefinite"/><animate attributeName="cy" values="70;48" dur="5.6s" begin="1s" repeatCount="indefinite"/></circle>
      <circle cx="1120" cy="380" r="1.6"><animate attributeName="opacity" values="0;.9;0" dur="4.8s" begin="2s" repeatCount="indefinite"/><animate attributeName="cy" values="380;352" dur="4.8s" begin="2s" repeatCount="indefinite"/></circle>
      <circle cx="760" cy="420" r="1.3"><animate attributeName="opacity" values="0;.7;0" dur="6s" begin=".5s" repeatCount="indefinite"/><animate attributeName="cy" values="420;396" dur="6s" begin=".5s" repeatCount="indefinite"/></circle>
      <circle cx="1060" cy="60" r="1.4"><animate attributeName="opacity" values="0;.85;0" dur="5s" begin="3s" repeatCount="indefinite"/><animate attributeName="cy" values="60;40" dur="5s" begin="3s" repeatCount="indefinite"/></circle>
      <circle cx="640" cy="250" r="1.1"><animate attributeName="opacity" values="0;.7;0" dur="4.4s" begin="2.5s" repeatCount="indefinite"/><animate attributeName="cy" values="250;226" dur="4.4s" begin="2.5s" repeatCount="indefinite"/></circle>
    </g>

    <!-- Orbital Cyber Ring on Right Visual -->
    <g transform="translate(970 236)" class="hero-fade d3">
      <circle r="212" fill="none" stroke="#10b981" stroke-opacity=".15" stroke-dasharray="1 10">
        <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="140s" repeatCount="indefinite"/>
      </circle>
      <circle r="190" fill="none" stroke="url(#hero-orbit-grad)" stroke-width="1.2"/>
      <circle r="160" fill="none" stroke="#34d399" stroke-opacity=".18" stroke-dasharray="2 7"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="95s" repeatCount="indefinite"/>
        <circle cx="0" cy="160" r="3" fill="#6ee7b7" filter="url(#hero-glow)"/>
        <circle cx="-160" cy="0" r="2.2" fill="#10b981" fill-opacity=".8"/>
      </g>
    </g>

    <!-- Right-Side Visual: Futuristic Cyber Emblem & HUD -->
    <g class="hero-portrait" transform="translate(850 96)">
      <!-- Main Glassmorphic Card -->
      <rect width="240" height="280" rx="16" fill="#0d1e15" fill-opacity=".92" stroke="#10b981" stroke-opacity=".4" stroke-width="1.5"/>
      <rect x="0" y="0" width="240" height="280" rx="16" fill="none" stroke="#34d399" stroke-opacity=".15"/>

      <!-- Top HUD Header -->
      <path d="M0 16 a16 16 0 0 1 16 -16 H224 a16 16 0 0 1 16 16 V38 H0 Z" fill="#132a1e"/>
      <line x1="0" y1="38" x2="240" y2="38" stroke="#10b981" stroke-opacity=".25"/>
      <circle cx="20" cy="19" r="4.5" fill="#10b981"/>
      <circle cx="34" cy="19" r="4.5" fill="#047857"/>
      <circle cx="48" cy="19" r="4.5" fill="#064e3b"/>
      <text class="hero-mono" x="120" y="23" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="#6ee7b7">PORTFOLIO // JAGA</text>

      <!-- Center Hexagonal / Core Emblem -->
      <g transform="translate(120 128)">
        <polygon points="0,-52 45,-26 45,26 0,52 -45,26 -45,-26" fill="#09140e" stroke="#10b981" stroke-opacity=".6" stroke-width="1.5"/>
        <polygon points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21" fill="none" stroke="#34d399" stroke-opacity=".3" stroke-dasharray="3 4">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite"/>
        </polygon>
        <circle r="30" fill="#0d2419" stroke="#10b981" stroke-opacity=".8"/>
        <!-- JPA Monogram -->
        <text class="hero-mono" y="8" text-anchor="middle" font-size="20" font-weight="700" fill="#f0fdf4" letter-spacing="2">JPA</text>
      </g>

      <!-- Status Indicator -->
      <g transform="translate(24 212)">
        <circle cx="6" cy="6" r="3.5" fill="#34d399">
          <animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text class="hero-mono" x="18" y="10" font-size="10.5" letter-spacing="1.5" fill="#a7f3d0">STATUS · ACTIVE</text>
        <text class="hero-sans" x="0" y="32" font-size="12" fill="#f0fdf4" font-weight="500">AI &amp; Data Science</text>
        <text class="hero-mono" x="0" y="48" font-size="10" fill="#94a3b8">B.Tech 2022–2026 · Chennai</text>
      </g>
    </g>

    <!-- Left Content Column -->
    <g class="hero-rise d1">
      <text class="hero-mono" x="56" y="86" font-size="12" letter-spacing="3.2" fill="#34d399">AI &amp; DATA SCIENCE · FULL-STACK &amp; AI ENGINEER</text>
    </g>

    <!-- Name & Title -->
    <g class="hero-rise d2">
      <text class="hero-serif" x="54" y="162" font-size="64" font-weight="300" letter-spacing="-1.5" fill="url(#hero-name-grad)">Jagavantha PA</text>
      <text class="hero-serif" x="54" y="162" font-size="64" font-weight="300" letter-spacing="-1.5" fill="url(#hero-sheen)">Jagavantha PA</text>
    </g>

    <g class="hero-rise d3">
      <text class="hero-sans" x="56" y="210" font-size="21" font-weight="300" fill="#f0fdf4">Engineering intelligence. <tspan fill="#6ee7b7" font-style="italic">Building resilient systems.</tspan></text>
      <text class="hero-sans" x="56" y="248" font-size="14.5" fill="#94a3b8" width="680">
        AI &amp; Data Science engineer skilled in building AI-powered systems, Flutter applications,
      </text>
      <text class="hero-sans" x="56" y="270" font-size="14.5" fill="#94a3b8">
        and scalable backends with FastAPI and LLMs. Shipped self-healing CI/CD, predictive platforms,
      </text>
      <text class="hero-sans" x="56" y="292" font-size="14.5" fill="#94a3b8">
        and production apps on Google Play.
      </text>
    </g>

    <line class="hero-draw" x1="56" y1="324" x2="740" y2="324" stroke="url(#hero-rule)" stroke-width="1.2"/>

    <!-- Key Skill Pills -->
    <g class="hero-rise d4" transform="translate(56 348)">
      <g>
        <rect width="138" height="34" rx="17" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/>
        <text class="hero-mono" x="69" y="21" text-anchor="middle" font-size="11.5" fill="#6ee7b7">FastAPI &amp; LLMs</text>
      </g>
      <g transform="translate(148 0)">
        <rect width="168" height="34" rx="17" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/>
        <text class="hero-mono" x="84" y="21" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Flutter &amp; Web Apps</text>
      </g>
      <g transform="translate(326 0)">
        <rect width="162" height="34" rx="17" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/>
        <text class="hero-mono" x="81" y="21" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Multi-Agent Systems</text>
      </g>
      <g transform="translate(498 0)">
        <rect width="176" height="34" rx="17" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/>
        <text class="hero-mono" x="88" y="21" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Self-Healing CI/CD</text>
      </g>
    </g>

    <!-- Meta Details Footer -->
    <g class="hero-fade d5" transform="translate(56 422)">
      <text class="hero-mono" font-size="11.5" fill="#a7f3d0">
        <tspan fill="#34d399">GITHUB</tspan> @jaga0001   ·   <tspan fill="#34d399">LOCATION</tspan> Chennai, India   ·   <tspan fill="#34d399">EDUCATION</tspan> B.Tech AI &amp; DS (2022–2026)
      </text>
    </g>

    <!-- Outer Frame -->
    <rect x=".5" y=".5" width="1199" height="479" rx="19.5" fill="none" stroke="#10b981" stroke-opacity=".25"/>
  </g>
</svg>`;

// ==========================================
// 2. SECTION TITLES
// ==========================================
function makeTitleSvg(num, title, subtitle, italicWord) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" width="1200" height="120" role="img" aria-label="${num} ${title}: ${subtitle}">
  <defs>
    <linearGradient id="t-line" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="1160" y2="0">
      <stop offset="0" stop-color="#34d399"/><stop offset=".6" stop-color="#047857"/><stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="t-sheen" gradientUnits="userSpaceOnUse" x1="-300" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#6ee7b7"/><stop offset=".5" stop-color="#f0fdf4"/><stop offset="1" stop-color="#6ee7b7"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0;1500 0;1500 0" keyTimes="0;.4;1" dur="7s" begin="1.5s" repeatCount="indefinite"/>
    </linearGradient>
    <radialGradient id="t-pulse"><stop offset="0" stop-color="#f0fdf4"/><stop offset=".5" stop-color="#6ee7b7" stop-opacity=".6"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/></radialGradient>
  </defs>
  <style>
    .t-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .t-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .t-in { animation: t-in 1.1s cubic-bezier(.16,1,.3,1) both; }
    .t-d2 { animation-delay: .2s; } .t-d3 { animation-delay: .45s; }
    .t-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: t-draw 1.8s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes t-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes t-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .t-in { animation: none; } .t-draw { animation: none; stroke-dashoffset: 0; } }
  </style>
  <g class="t-in">
    <text class="t-mono" x="40" y="34" font-size="12" letter-spacing="3" fill="#34d399"><tspan fill="#6ee7b7">${num}</tspan>   ${title.toUpperCase()}</text>
  </g>
  <g class="t-in t-d2">
    <text class="t-serif" x="38" y="84" font-size="44" font-weight="300" letter-spacing="-1" fill="#f0fdf4">${subtitle.replace(italicWord, `<tspan font-style="italic" fill="url(#t-sheen)">${italicWord}</tspan>`)}</text>
  </g>
  <g class="t-in t-d3">
    <text class="t-mono" x="1160" y="34" text-anchor="end" font-size="10.5" letter-spacing="2.4" fill="#94a3b8">${title.toUpperCase()} SPEC</text>
  </g>
  <path class="t-draw" d="M40 106 H1160" stroke="url(#t-line)" stroke-width="1"/>
  <circle cx="40" cy="106" r="7" fill="url(#t-pulse)" opacity="0">
    <animate attributeName="cx" values="40;1160" dur="6s" begin="2.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1"/>
    <animate attributeName="opacity" values="0;1;0" keyTimes="0;.15;1" dur="6s" begin="2.3s" repeatCount="indefinite"/>
  </circle>
</svg>`;
}

// ==========================================
// 3. ABOUT INTRO TERMINAL
// ==========================================
const aboutIntroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420" role="img" aria-labelledby="ab-t ab-d">
  <title id="ab-t">About Jagavantha PA</title>
  <desc id="ab-d">AI &amp; Data Science Graduate at Meenakshi Sundararajan Engineering College. Building AI-powered systems, Flutter apps, and scalable FastAPI backends.</desc>
  <defs>
    <linearGradient id="ab-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1711"/><stop offset="1" stop-color="#050c08"/></linearGradient>
    <radialGradient id="ab-glow" cx="80%" cy="20%" r="70%"><stop offset="0" stop-color="#059669" stop-opacity=".4"/><stop offset="1" stop-color="#047857" stop-opacity="0"/></radialGradient>
    <pattern id="ab-scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#f0fdf4" opacity=".025"/></pattern>
    <clipPath id="ab-c0"><rect class="ab-type" x="68" y="112" width="89" height="22" style="animation-delay:0.40s;animation-duration:0.41s;animation-timing-function:steps(6)"/></clipPath>
    <clipPath id="ab-c1"><rect class="ab-type" x="68" y="137" width="580" height="22" style="animation-delay:0.90s;animation-duration:0.53s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c2"><rect class="ab-type" x="68" y="162" width="179" height="22" style="animation-delay:1.50s;animation-duration:0.56s;animation-timing-function:steps(17)"/></clipPath>
    <clipPath id="ab-c3"><rect class="ab-type" x="68" y="187" width="560" height="22" style="animation-delay:2.10s;animation-duration:0.53s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c4"><rect class="ab-type" x="68" y="212" width="188" height="22" style="animation-delay:2.70s;animation-duration:0.59s;animation-timing-function:steps(18)"/></clipPath>
    <clipPath id="ab-c5"><rect class="ab-type" x="68" y="237" width="580" height="22" style="animation-delay:3.30s;animation-duration:0.53s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c6"><rect class="ab-type" x="68" y="262" width="138" height="22" style="animation-delay:3.90s;animation-duration:0.41s;animation-timing-function:steps(12)"/></clipPath>
    <clipPath id="ab-c7"><rect class="ab-type" x="68" y="287" width="580" height="22" style="animation-delay:4.40s;animation-duration:0.53s;animation-timing-function:steps(1)"/></clipPath>
    <clipPath id="ab-c8"><rect class="ab-type" x="68" y="312" width="163" height="22" style="animation-delay:5.00s;animation-duration:0.49s;animation-timing-function:steps(15)"/></clipPath>
    <clipPath id="ab-c9"><rect class="ab-type" x="68" y="337" width="560" height="22" style="animation-delay:5.50s;animation-duration:0.53s;animation-timing-function:steps(1)"/></clipPath>
  </defs>
  <style>
    .ab-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .ab-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .ab-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .ab-type { transform-box: fill-box; transform-origin: left center; animation-name: ab-type; animation-fill-mode: both; }
    .ab-card { animation: ab-in 1s cubic-bezier(.16,1,.3,1) both; }
    .ab-fade { animation: ab-fade 1s ease both; }
    @keyframes ab-type { 0% { transform: scaleX(0); } 85%, 100% { transform: scaleX(1); } }
    @keyframes ab-in { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: none; } }
    @keyframes ab-fade { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .ab-type, .ab-card, .ab-fade { animation: none; } }
  </style>
  <rect width="1200" height="420" rx="20" fill="url(#ab-bg)"/>
  <rect width="1200" height="420" rx="20" fill="url(#ab-glow)"/>
  <rect x=".5" y=".5" width="1199" height="419" rx="19.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>

  <!-- Terminal window -->
  <g class="ab-fade">
    <rect x="40" y="40" width="760" height="340" rx="14" fill="#050d09" stroke="#10b981" stroke-opacity=".35"/>
    <rect x="40" y="40" width="760" height="340" rx="14" fill="url(#ab-scan)"/>
    <path d="M40 54 a14 14 0 0 1 14 -14 H786 a14 14 0 0 1 14 14 V76 H40 Z" fill="#0d1e15"/>
    <line x1="40" y1="76" x2="800" y2="76" stroke="#10b981" stroke-opacity=".2"/>
    <circle cx="62" cy="58" r="5" fill="#10b981"/><circle cx="80" cy="58" r="5" fill="#047857"/><circle cx="98" cy="58" r="5" fill="#064e3b"/>
    <text class="ab-mono" x="420" y="62" text-anchor="middle" font-size="11" letter-spacing="1.5" fill="#6ee7b7">jaga@portfolio: ~</text>
  </g>
  <g class="ab-mono" font-size="13">
      <g clip-path="url(#ab-c0)"><text x="72" y="128" fill="#34d399">$</text><text x="94" y="128" fill="#f0fdf4">whoami</text></g>
      <g clip-path="url(#ab-c1)"><text x="72" y="153" fill="#10b981">→</text><text x="94" y="153" fill="#a7f3d0">Jagavantha PA · AI &amp; Data Science · AI Systems &amp; Backend Dev</text></g>
      <g clip-path="url(#ab-c2)"><text x="72" y="178" fill="#34d399">$</text><text x="94" y="178" fill="#f0fdf4">cat education.txt</text></g>
      <g clip-path="url(#ab-c3)"><text x="72" y="203" fill="#10b981">→</text><text x="94" y="203" fill="#94a3b8">B.Tech AI &amp; DS · Meenakshi Sundararajan Engineering College (2022–2026)</text></g>
      <g clip-path="url(#ab-c4)"><text x="72" y="228" fill="#34d399">$</text><text x="94" y="228" fill="#f0fdf4">cat experience.txt</text></g>
      <g clip-path="url(#ab-c5)"><text x="72" y="253" fill="#10b981">→</text><text x="94" y="253" fill="#94a3b8">EnnVee Solutions (Intern) · NLTVC - VHGlobal (SE Trainee)</text></g>
      <g clip-path="url(#ab-c6)"><text x="72" y="278" fill="#34d399">$</text><text x="94" y="278" fill="#f0fdf4">ls ./shipped</text></g>
      <g clip-path="url(#ab-c7)"><text x="72" y="303" fill="#10b981">→</text><text x="94" y="303" fill="#6ee7b7">repo-pilot  atom-preincident  bench-management  googleplay-apk</text></g>
      <g clip-path="url(#ab-c8)"><text x="72" y="328" fill="#34d399">$</text><text x="94" y="328" fill="#f0fdf4">echo $MISSION</text></g>
      <g clip-path="url(#ab-c9)"><text x="72" y="353" fill="#10b981">→</text><text x="94" y="353" fill="#94a3b8">architecting self-healing, reliable AI pipelines &amp; production backends</text></g>
  </g>
  <rect x="72" y="364" width="8" height="16" fill="#34d399" class="ab-fade" style="animation-delay:6.2s">
    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1.1s" repeatCount="indefinite"/>
  </rect>

  <!-- Right Cards -->
  <g class="ab-card" style="animation-delay:0.8s"><g transform="translate(836 70)">
    <rect width="324" height="88" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".3"/>
    <rect x="0" y="0" width="3" height="88" rx="1.5" fill="#10b981"/>
    <text class="ab-mono" x="22" y="26" font-size="10" letter-spacing="2" fill="#34d399">CORE ARCHITECTURE</text>
    <text class="ab-serif" x="22" y="58" font-size="28" font-weight="300" fill="#f0fdf4">FastAPI &amp; LLMs</text>
    <text class="ab-sans" x="22" y="78" font-size="12" fill="#94a3b8">Multi-Agent Systems · RAG · Vector DB</text>
  </g></g>
  <g class="ab-card" style="animation-delay:1.2s"><g transform="translate(836 174)">
    <rect width="324" height="88" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".3"/>
    <rect x="0" y="0" width="3" height="88" rx="1.5" fill="#10b981"/>
    <text class="ab-mono" x="22" y="26" font-size="10" letter-spacing="2" fill="#34d399">MOBILE &amp; FRONTEND</text>
    <text class="ab-serif" x="22" y="58" font-size="28" font-weight="300" fill="#f0fdf4">Flutter &amp; Dart</text>
    <text class="ab-sans" x="22" y="78" font-size="12" fill="#94a3b8">Play Store published · Flutter Web</text>
  </g></g>
  <g class="ab-card" style="animation-delay:1.6s"><g transform="translate(836 278)">
    <rect width="324" height="88" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".3"/>
    <rect x="0" y="0" width="3" height="88" rx="1.5" fill="#10b981"/>
    <text class="ab-mono" x="22" y="26" font-size="10" letter-spacing="2" fill="#34d399">SPECIALIZATION</text>
    <text class="ab-serif" x="22" y="58" font-size="28" font-weight="300" fill="#f0fdf4">System Reliability</text>
    <text class="ab-sans" x="22" y="78" font-size="12" fill="#94a3b8">Pre-incident forecasting · Time-series</text>
  </g></g>
</svg>`;

// ==========================================
// 4. RECOGNITION MOTIF
// ==========================================
const recognitionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 430" width="1200" height="430" role="img" aria-labelledby="ach-title ach-desc">
  <title id="ach-title">Recognition &amp; Achievements</title>
  <desc id="ach-desc">3rd Prize at AI Innovate Hackathon (Sri Eshwar Engg College, cash prize Rs 10,000). Top 12 Finalist at Beach Hacks Season 07 (Christ Engg College). Top 8 Finalist at HackRx 6.0 (RV College). AI Epoch Club Vice President.</desc>

  <defs>
    <linearGradient id="ach-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a1711"/>
      <stop offset="1" stop-color="#050c08"/>
    </linearGradient>
    <radialGradient id="ach-glow-a" cx="85%" cy="0%" r="90%">
      <stop offset="0" stop-color="#059669" stop-opacity=".7"/>
      <stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="ach-glow-b" cx="90%" cy="0%" r="90%">
      <stop offset="0" stop-color="#10b981" stop-opacity=".35"/>
      <stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ach-hair" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#34d399" stop-opacity="0"/>
      <stop offset=".4" stop-color="#34d399"/>
      <stop offset=".6" stop-color="#6ee7b7"/>
      <stop offset="1" stop-color="#6ee7b7" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="ach-outline" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6ee7b7" stop-opacity=".45"/>
      <stop offset="1" stop-color="#6ee7b7" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="ach-sheen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f0fdf4" stop-opacity="0"/>
      <stop offset=".5" stop-color="#f0fdf4" stop-opacity=".08"/>
      <stop offset="1" stop-color="#f0fdf4" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="ach-clip-a"><rect x="0" y="0" width="700" height="250" rx="16"/></clipPath>
    <clipPath id="ach-clip-b"><rect x="0" y="0" width="476" height="250" rx="16"/></clipPath>
    <linearGradient id="ach-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0fdf4"/><stop offset=".45" stop-color="#6ee7b7"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <style>
    .ach-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .ach-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .ach-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .ach-in { animation: ach-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .a1 { animation-delay: .1s; } .a2 { animation-delay: .35s; } .a3 { animation-delay: .6s; }
    .ach-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: ach-draw 2.6s cubic-bezier(.65,0,.35,1) .8s forwards; }
    @keyframes ach-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes ach-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .ach-in { animation: none; }
      .ach-draw { animation: none; stroke-dashoffset: 0; }
    }
    .ach-trace-a { stroke-dasharray: 340 1900; stroke-dashoffset: 2240; animation: ach-trace-a 6s linear infinite; }
    .ach-trace-b { stroke-dasharray: 260 1452; stroke-dashoffset: 1712; animation: ach-trace-b 6s linear -3s infinite; }
    @keyframes ach-trace-a { to { stroke-dashoffset: 0; } }
    @keyframes ach-trace-b { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .ach-trace-a, .ach-trace-b { display: none; } }
  </style>

  <rect width="1200" height="430" rx="20" fill="url(#ach-bg)"/>
  <rect x=".5" y=".5" width="1199" height="429" rx="19.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>

  <!-- Card 1: 3rd Prize AI Innovate Hackathon -->
  <g class="ach-in a1"><g transform="translate(24 24)">
    <g clip-path="url(#ach-clip-a)">
      <rect width="700" height="250" fill="#0d1e15"/>
      <rect width="700" height="250" fill="url(#ach-glow-a)"/>
      <text class="ach-serif" x="684" y="130" text-anchor="end" font-size="124" font-weight="300" letter-spacing="-6" fill="url(#ach-outline)">₹10,000</text>
      <rect x="-300" y="0" width="260" height="250" fill="url(#ach-sheen)" transform="skewX(-18)">
        <animate attributeName="x" values="-300;900;900" keyTimes="0;.35;1" dur="9s" begin="2s" repeatCount="indefinite"/>
      </rect>
    </g>
    <rect x=".5" y=".5" width="699" height="249" rx="15.5" fill="none" stroke="#10b981" stroke-opacity=".38"/>
    <rect class="ach-trace-a" x=".5" y=".5" width="699" height="249" rx="15.5" fill="none" stroke="url(#ach-trace)" stroke-width="1.8" stroke-linecap="round"/>
    <rect x="40" y="0" width="300" height="1" fill="url(#ach-hair)"/>
    <text class="ach-mono" x="36" y="146" font-size="12" letter-spacing="2.6" fill="#34d399">SRI ESHWAR ENGINEERING COLLEGE · HACKATHON</text>
    <text class="ach-serif" x="34" y="196" font-size="44" font-weight="300" letter-spacing="-1" fill="#f0fdf4">3rd Prize &amp; Cash Award</text>
    <text class="ach-sans" x="36" y="226" font-size="14" fill="#a7f3d0">Accident Hotspot Prediction System — predictive spatial modeling &amp; risk analytics</text>
  </g></g>

  <!-- Card 2: Beach Hacks Season 07 Finalist -->
  <g class="ach-in a2"><g transform="translate(700 24)">
    <g transform="translate(24 0)">
      <g clip-path="url(#ach-clip-b)">
        <rect width="476" height="250" fill="#0d1e15"/>
        <rect width="476" height="250" fill="url(#ach-glow-b)"/>
        <text class="ach-serif" x="490" y="132" text-anchor="end" font-size="140" font-style="italic" font-weight="300" letter-spacing="-6" fill="none" stroke="#6ee7b7" stroke-opacity=".25">TOP 12</text>
      </g>
      <rect x=".5" y=".5" width="475" height="249" rx="15.5" fill="none" stroke="#10b981" stroke-opacity=".3"/>
      <rect class="ach-trace-b" x=".5" y=".5" width="475" height="249" rx="15.5" fill="none" stroke="url(#ach-trace)" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="40" y="0" width="220" height="1" fill="url(#ach-hair)"/>
      <text class="ach-mono" x="32" y="146" font-size="12" letter-spacing="2.6" fill="#34d399">CHRIST ENGG COLLEGE, KERALA · BEACH HACKS S07</text>
      <text class="ach-serif" x="30" y="196" font-size="44" font-weight="300" letter-spacing="-1" fill="#f0fdf4">Top 12 Finalist</text>
      <text class="ach-sans" x="32" y="226" font-size="14" fill="#a7f3d0">ATOM — selected among 750+ teams across India</text>
    </g>
  </g></g>

  <!-- Animated connector across the score strip -->
  <path class="ach-draw" d="M24 300 H1176" stroke="#10b981" stroke-opacity=".3"/>

  <!-- Row 2: Secondary Highlights & Leadership -->
  <g class="ach-in a3" transform="translate(24 324)">
    <g transform="translate(36 0)">
      <text class="ach-mono" font-size="11" letter-spacing="2" fill="#34d399">HACKRX 6.0 · R.V. COLLEGE BENGALURU</text>
      <text class="ach-serif" y="38" font-size="26" font-weight="300" fill="#f0fdf4">Top 8 Finalist</text>
      <text class="ach-sans" y="60" font-size="12.5" fill="#94a3b8">Top 8 out of 620+ participants · RAG Query System</text>
    </g>
    <g transform="translate(420 0)">
      <text class="ach-mono" font-size="11" letter-spacing="2" fill="#34d399">AI EPOCH CLUB</text>
      <text class="ach-serif" y="38" font-size="26" font-weight="300" fill="#f0fdf4">Vice President</text>
      <text class="ach-sans" y="60" font-size="12.5" fill="#94a3b8">Led seminars &amp; hackathons for 100+ members in ML/DL</text>
    </g>
    <g transform="translate(800 0)">
      <text class="ach-mono" font-size="11" letter-spacing="2" fill="#34d399">PROMPTOMANIA</text>
      <text class="ach-serif" y="38" font-size="26" font-weight="300" fill="#f0fdf4">Lead Coordinator</text>
      <text class="ach-sans" y="60" font-size="12.5" fill="#94a3b8">Mentored 200+ students on Generative AI &amp; Gemini APIs</text>
    </g>
  </g>
</svg>`;

// ==========================================
// 5. PROJECT 1: REPO-PILOT
// ==========================================
const repoPilotSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-labelledby="p1-t">
  <title id="p1-t">Repo-Pilot: Autonomous Self-Healing CI/CD Pipeline</title>
  <defs>
    <linearGradient id="p1-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1711"/><stop offset="1" stop-color="#050c08"/>
    </linearGradient>
    <radialGradient id="p1-glow" cx="82%" cy="30%" r="55%">
      <stop offset="0" stop-color="#059669" stop-opacity=".55"/><stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p1-grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#10b981" stroke-opacity=".08"/>
    </pattern>
    <filter id="p1-glowf" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="p1-clip"><rect width="1200" height="370" rx="18"/></clipPath>
    <linearGradient id="p1-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0fdf4"/><stop offset=".45" stop-color="#6ee7b7"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .p1-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .p1-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .p1-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .p1-in { animation: p1-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .p1-d1 { animation-delay: .15s; } .p1-d2 { animation-delay: .4s; }
    .p1-chip { animation: p1-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p1-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p1-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p1-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p1-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes p1-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p1-in, .p1-chip { animation: none; } .p1-draw { animation: none; stroke-dashoffset: 0; } }
    .p1-trace { stroke-dasharray: 564 3136; stroke-dashoffset: 3700; animation: p1-trace 7s linear infinite; }
    @keyframes p1-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p1-trace { display: none; } }
  </style>
  <g clip-path="url(#p1-clip)">
    <rect width="1200" height="370" fill="url(#p1-bg)"/>
    <rect x="720" width="480" height="370" fill="url(#p1-grid)"/>
    <rect width="1200" height="370" fill="url(#p1-glow)"/>
    
    <g class="p1-in p1-d1">
      <text class="p1-mono" x="56" y="62" font-size="12" letter-spacing="2.6" fill="#34d399">01 · AUTONOMOUS AGENT · CI/CD · RAG · MARCH 2026</text>
      <text class="p1-serif" x="54" y="126" font-size="52" font-weight="300" letter-spacing="-1.5" fill="#f0fdf4">Repo-Pilot</text>
      <text class="p1-sans" x="56" y="166" font-size="17" fill="#a7f3d0">Autonomous self-healing CI/CD pipeline resolving build and deployment failures.</text>
      <text class="p1-mono" x="56" y="200" font-size="12.5" fill="#6ee7b7"><tspan fill="#34d399">BUILT ›</tspan> Automated error detection, Elasticsearch log indexing, LLM-powered root-cause repair</text>
      <line class="p1-draw" x1="56" y1="226" x2="680" y2="226" stroke="#10b981" stroke-opacity=".3"/>
      
      <g transform="translate(56 266)"><text class="p1-serif" font-size="34" font-weight="300" fill="#f0fdf4">Real-Time</text><text class="p1-sans" y="24" font-size="12.5" fill="#94a3b8">failure detection &amp; patch</text></g>
      <g transform="translate(261 266)"><text class="p1-serif" font-size="34" font-weight="300" fill="#f0fdf4">Elasticsearch</text><text class="p1-sans" y="24" font-size="12.5" fill="#94a3b8">log indexing &amp; fast retrieval</text></g>
      <g transform="translate(466 266)"><text class="p1-serif" font-size="34" font-weight="300" fill="#f0fdf4">Self-Healing</text><text class="p1-sans" y="24" font-size="12.5" fill="#94a3b8">automated retry workflows</text></g>

      <g class="p1-chip" style="animation-delay:0.80s"><rect x="56" y="314" width="70" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p1-mono" x="91" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">FastAPI</text></g>
      <g class="p1-chip" style="animation-delay:0.92s"><rect x="134" y="314" width="65" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p1-mono" x="166" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Python</text></g>
      <g class="p1-chip" style="animation-delay:1.04s"><rect x="207" y="314" width="55" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p1-mono" x="234" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">LLMs</text></g>
      <g class="p1-chip" style="animation-delay:1.16s"><rect x="270" y="314" width="50" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p1-mono" x="295" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">RAG</text></g>
      <g class="p1-chip" style="animation-delay:1.28s"><rect x="328" y="314" width="80" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p1-mono" x="368" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Vector DB</text></g>
      <g class="p1-chip" style="animation-delay:1.40s"><rect x="416" y="314" width="105" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p1-mono" x="468" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Elasticsearch</text></g>
    </g>

    <!-- Right Graphic: Interactive Pipeline Visualizer -->
    <g class="p1-in p1-d2" transform="translate(760 60)">
      <rect width="380" height="250" rx="16" fill="#0d1e15" stroke="#10b981" stroke-opacity=".35"/>
      <path d="M0 16 a16 16 0 0 1 16 -16 H364 a16 16 0 0 1 16 16 V34 H0 Z" fill="#132a1e"/>
      <circle cx="20" cy="17" r="4" fill="#10b981"/><circle cx="32" cy="17" r="4" fill="#047857"/><circle cx="44" cy="17" r="4" fill="#064e3b"/>
      <text class="p1-mono" x="190" y="21" text-anchor="middle" font-size="10.5" fill="#6ee7b7">CI/CD // SELF_HEALING_AGENT</text>

      <!-- Pipeline Steps -->
      <g transform="translate(30 65)">
        <!-- Step 1: Git Push -->
        <rect width="90" height="42" rx="8" fill="#09140e" stroke="#10b981" stroke-opacity=".4"/>
        <text class="p1-mono" x="45" y="24" text-anchor="middle" font-size="10" fill="#a7f3d0">GIT COMMIT</text>
        <circle cx="85" cy="21" r="3" fill="#10b981"/>

        <!-- Arrow 1 -->
        <line x1="90" y1="21" x2="115" y2="21" stroke="#34d399" stroke-width="1.5"/>

        <!-- Step 2: Build / Test -->
        <rect x="115" width="90" height="42" rx="8" fill="#09140e" stroke="#10b981" stroke-opacity=".4"/>
        <text class="p1-mono" x="160" y="24" text-anchor="middle" font-size="10" fill="#a7f3d0">BUILD TEST</text>
        
        <!-- Arrow 2 -->
        <line x1="205" y1="21" x2="230" y2="21" stroke="#34d399" stroke-width="1.5"/>

        <!-- Step 3: Failure Catch -->
        <rect x="230" width="90" height="42" rx="8" fill="#1f140e" stroke="#eab308" stroke-opacity=".6"/>
        <text class="p1-mono" x="275" y="24" text-anchor="middle" font-size="10" fill="#fde047">ERROR CATCH</text>
      </g>

      <!-- Healing Loop Node -->
      <g transform="translate(50 135)">
        <rect width="280" height="85" rx="10" fill="#091811" stroke="#10b981" stroke-opacity=".5" stroke-dasharray="2 3"/>
        <text class="p1-mono" x="15" y="25" font-size="11" fill="#34d399">● AGENT DETECTS: Build StackTrace</text>
        <text class="p1-mono" x="15" y="45" font-size="10.5" fill="#a7f3d0">&gt; Query VectorDB &amp; Auto-patch fix</text>
        <text class="p1-mono" x="15" y="65" font-size="10.5" fill="#6ee7b7">&gt; Result: CI/CD PASSED (0s manual downtime)</text>
      </g>
    </g>

    <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>
    <rect class="p1-trace" style="animation-delay:0.0s" x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="url(#p1-trace)" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;

// ==========================================
// 6. PROJECT 2: ATOM PRE-INCIDENT PLATFORM
// ==========================================
const atomSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-labelledby="p2-t">
  <title id="p2-t">ATOM: AI-Powered Pre-Incident Forecasting for Reliable Systems</title>
  <defs>
    <linearGradient id="p2-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1711"/><stop offset="1" stop-color="#050c08"/>
    </linearGradient>
    <radialGradient id="p2-glow" cx="82%" cy="30%" r="55%">
      <stop offset="0" stop-color="#059669" stop-opacity=".55"/><stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p2-grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#10b981" stroke-opacity=".08"/>
    </pattern>
    <clipPath id="p2-clip"><rect width="1200" height="370" rx="18"/></clipPath>
    <linearGradient id="p2-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0fdf4"/><stop offset=".45" stop-color="#6ee7b7"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .p2-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .p2-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .p2-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .p2-in { animation: p2-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .p2-d1 { animation-delay: .15s; } .p2-d2 { animation-delay: .4s; }
    .p2-chip { animation: p2-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p2-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p2-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p2-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p2-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes p2-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p2-in, .p2-chip { animation: none; } .p2-draw { animation: none; stroke-dashoffset: 0; } }
    .p2-trace { stroke-dasharray: 564 3136; stroke-dashoffset: 3700; animation: p2-trace 7s linear -2s infinite; }
    @keyframes p2-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p2-trace { display: none; } }
  </style>
  <g clip-path="url(#p2-clip)">
    <rect width="1200" height="370" fill="url(#p2-bg)"/>
    <rect x="720" width="480" height="370" fill="url(#p2-grid)"/>
    <rect width="1200" height="370" fill="url(#p2-glow)"/>
    
    <g class="p2-in p2-d1">
      <text class="p2-mono" x="56" y="62" font-size="12" letter-spacing="2.6" fill="#34d399">02 · PREDICTIVE AI · TIME-SERIES · AGENTS · JANUARY 2026</text>
      <text class="p2-serif" x="54" y="126" font-size="52" font-weight="300" letter-spacing="-1.5" fill="#f0fdf4">ATOM</text>
      <text class="p2-sans" x="56" y="166" font-size="17" fill="#a7f3d0">AI-powered pre-incident forecasting platform for system reliability and uptime.</text>
      <text class="p2-mono" x="56" y="200" font-size="12.5" fill="#6ee7b7"><tspan fill="#34d399">BUILT ›</tspan> Time-series modeling, anomaly forecasting, proactive health scoring &amp; alerts</text>
      <line class="p2-draw" x1="56" y1="226" x2="680" y2="226" stroke="#10b981" stroke-opacity=".3"/>
      
      <g transform="translate(56 266)"><text class="p2-serif" font-size="34" font-weight="300" fill="#f0fdf4">Top 12</text><text class="p2-sans" y="24" font-size="12.5" fill="#94a3b8">Beach Hacks S07 Finalist</text></g>
      <g transform="translate(261 266)"><text class="p2-serif" font-size="34" font-weight="300" fill="#f0fdf4">Proactive</text><text class="p2-sans" y="24" font-size="12.5" fill="#94a3b8">pre-incident detection</text></g>
      <g transform="translate(466 266)"><text class="p2-serif" font-size="34" font-weight="300" fill="#f0fdf4">Time-Series</text><text class="p2-sans" y="24" font-size="12.5" fill="#94a3b8">telemetry anomaly modeling</text></g>

      <g class="p2-chip" style="animation-delay:0.80s"><rect x="56" y="314" width="70" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p2-mono" x="91" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">FastAPI</text></g>
      <g class="p2-chip" style="animation-delay:0.92s"><rect x="134" y="314" width="65" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p2-mono" x="166" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Python</text></g>
      <g class="p2-chip" style="animation-delay:1.04s"><rect x="207" y="314" width="65" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p2-mono" x="239" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Agents</text></g>
      <g class="p2-chip" style="animation-delay:1.16s"><rect x="280" y="314" width="95" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p2-mono" x="327" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Time-Series</text></g>
      <g class="p2-chip" style="animation-delay:1.28s"><rect x="383" y="314" width="138" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p2-mono" x="452" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Beach Hacks '26</text></g>
    </g>

    <!-- Right Graphic: Real-Time Anomaly Waveform Monitor -->
    <g class="p2-in p2-d2" transform="translate(760 60)">
      <rect width="380" height="250" rx="16" fill="#0d1e15" stroke="#10b981" stroke-opacity=".35"/>
      <path d="M0 16 a16 16 0 0 1 16 -16 H364 a16 16 0 0 1 16 16 V34 H0 Z" fill="#132a1e"/>
      <circle cx="20" cy="17" r="4" fill="#10b981"/><circle cx="32" cy="17" r="4" fill="#047857"/><circle cx="44" cy="17" r="4" fill="#064e3b"/>
      <text class="p2-mono" x="190" y="21" text-anchor="middle" font-size="10.5" fill="#6ee7b7">SYSTEM TELEMETRY FORECAST</text>

      <!-- Anomaly Chart Area -->
      <g transform="translate(25 55)">
        <rect width="330" height="110" rx="8" fill="#09140e" stroke="#10b981" stroke-opacity=".2"/>
        <line x1="10" y1="55" x2="320" y2="55" stroke="#10b981" stroke-opacity=".2" stroke-dasharray="3 3"/>
        <line x1="10" y1="28" x2="320" y2="28" stroke="#ef4444" stroke-opacity=".4" stroke-dasharray="2 2"/>
        <text class="p2-mono" x="250" y="24" font-size="9" fill="#ef4444">CRITICAL THRESHOLD</text>

        <!-- Waveform Path -->
        <path d="M10 80 Q 40 40, 70 65 T 130 50 T 190 70 T 230 40 T 270 20 T 310 15" fill="none" stroke="#34d399" stroke-width="2.5"/>
        <circle cx="270" cy="20" r="5" fill="#eab308"/>
        <circle cx="310" cy="15" r="5" fill="#ef4444"/>
      </g>

      <!-- Risk Scoring Panel -->
      <g transform="translate(25 180)">
        <rect width="158" height="50" rx="8" fill="#091811" stroke="#10b981" stroke-opacity=".4"/>
        <text class="p2-mono" x="12" y="20" font-size="10" fill="#a7f3d0">RISK INDEX</text>
        <text class="p2-mono" x="12" y="38" font-size="14" font-weight="700" fill="#ef4444">PRE-SPIKE DETECTED</text>

        <rect x="172" width="158" height="50" rx="8" fill="#091811" stroke="#10b981" stroke-opacity=".4"/>
        <text class="p2-mono" x="184" y="20" font-size="10" fill="#a7f3d0">PROACTIVE ACTION</text>
        <text class="p2-mono" x="184" y="38" font-size="14" font-weight="700" fill="#10b981">AUTOSCALE APPLIED</text>
      </g>
    </g>

    <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>
    <rect class="p2-trace" style="animation-delay:0.0s" x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="url(#p2-trace)" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;

// ==========================================
// 7. PROJECT 3: BENCH MANAGEMENT SYSTEM
// ==========================================
const benchManagementSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 370" width="1200" height="370" role="img" aria-labelledby="p3-t">
  <title id="p3-t">Bench Management System: Project Allocation Platform</title>
  <defs>
    <linearGradient id="p3-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1711"/><stop offset="1" stop-color="#050c08"/>
    </linearGradient>
    <radialGradient id="p3-glow" cx="82%" cy="30%" r="55%">
      <stop offset="0" stop-color="#059669" stop-opacity=".55"/><stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <pattern id="p3-grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#10b981" stroke-opacity=".08"/>
    </pattern>
    <clipPath id="p3-clip"><rect width="1200" height="370" rx="18"/></clipPath>
    <linearGradient id="p3-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0fdf4"/><stop offset=".45" stop-color="#6ee7b7"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .p3-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .p3-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .p3-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .p3-in { animation: p3-in 1.2s cubic-bezier(.16,1,.3,1) both; }
    .p3-d1 { animation-delay: .15s; } .p3-d2 { animation-delay: .4s; }
    .p3-chip { animation: p3-chip .7s cubic-bezier(.34,1.56,.64,1) both; }
    @keyframes p3-chip { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .p3-draw { stroke-dasharray: 600; stroke-dashoffset: 600; animation: p3-draw 2s cubic-bezier(.65,0,.35,1) .5s forwards; }
    @keyframes p3-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes p3-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p3-in, .p3-chip { animation: none; } .p3-draw { animation: none; stroke-dashoffset: 0; } }
    .p3-trace { stroke-dasharray: 564 3136; stroke-dashoffset: 3700; animation: p3-trace 7s linear -4s infinite; }
    @keyframes p3-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .p3-trace { display: none; } }
  </style>
  <g clip-path="url(#p3-clip)">
    <rect width="1200" height="370" fill="url(#p3-bg)"/>
    <rect x="720" width="480" height="370" fill="url(#p3-grid)"/>
    <rect width="1200" height="370" fill="url(#p3-glow)"/>
    
    <g class="p3-in p3-d1">
      <text class="p3-mono" x="56" y="62" font-size="12" letter-spacing="2.6" fill="#34d399">03 · FULL-STACK · ENTERPRISE · RESOURCE PLATFORM · JANUARY 2026</text>
      <text class="p3-serif" x="54" y="126" font-size="52" font-weight="300" letter-spacing="-1.5" fill="#f0fdf4">Bench Management System</text>
      <text class="p3-sans" x="56" y="166" font-size="17" fill="#a7f3d0">Scalable project allocation platform enabling efficient employee-project mapping.</text>
      <text class="p3-mono" x="56" y="200" font-size="12.5" fill="#6ee7b7"><tspan fill="#34d399">BUILT ›</tspan> Role-based dashboards, RESTful APIs, session persistence, Flutter Web UI</text>
      <line class="p3-draw" x1="56" y1="226" x2="680" y2="226" stroke="#10b981" stroke-opacity=".3"/>
      
      <g transform="translate(56 266)"><text class="p3-serif" font-size="34" font-weight="300" fill="#f0fdf4">FastAPI</text><text class="p3-sans" y="24" font-size="12.5" fill="#94a3b8">REST backend architecture</text></g>
      <g transform="translate(261 266)"><text class="p3-serif" font-size="34" font-weight="300" fill="#f0fdf4">Flutter Web</text><text class="p3-sans" y="24" font-size="12.5" fill="#94a3b8">role-based dashboards</text></g>
      <g transform="translate(466 266)"><text class="p3-serif" font-size="34" font-weight="300" fill="#f0fdf4">PostgreSQL</text><text class="p3-sans" y="24" font-size="12.5" fill="#94a3b8">session auth &amp; persistence</text></g>

      <g class="p3-chip" style="animation-delay:0.80s"><rect x="56" y="314" width="70" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p3-mono" x="91" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">FastAPI</text></g>
      <g class="p3-chip" style="animation-delay:0.92s"><rect x="134" y="314" width="90" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p3-mono" x="179" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">PostgreSQL</text></g>
      <g class="p3-chip" style="animation-delay:1.04s"><rect x="232" y="314" width="95" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p3-mono" x="279" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">Flutter Web</text></g>
      <g class="p3-chip" style="animation-delay:1.16s"><rect x="335" y="314" width="80" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p3-mono" x="375" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">REST APIs</text></g>
      <g class="p3-chip" style="animation-delay:1.28s"><rect x="423" y="314" width="85" height="26" rx="13" fill="#0d2419" stroke="#10b981" stroke-opacity=".4"/><text class="p3-mono" x="465" y="331" text-anchor="middle" font-size="11.5" fill="#6ee7b7">RBAC Auth</text></g>
    </g>

    <!-- Right Graphic: Dashboard & Allocation Visualizer -->
    <g class="p3-in p3-d2" transform="translate(760 60)">
      <rect width="380" height="250" rx="16" fill="#0d1e15" stroke="#10b981" stroke-opacity=".35"/>
      <path d="M0 16 a16 16 0 0 1 16 -16 H364 a16 16 0 0 1 16 16 V34 H0 Z" fill="#132a1e"/>
      <circle cx="20" cy="17" r="4" fill="#10b981"/><circle cx="32" cy="17" r="4" fill="#047857"/><circle cx="44" cy="17" r="4" fill="#064e3b"/>
      <text class="p3-mono" x="190" y="21" text-anchor="middle" font-size="10.5" fill="#6ee7b7">RESOURCE ALLOCATION PLATFORM</text>

      <!-- Allocation Matrix Mockup -->
      <g transform="translate(25 50)">
        <!-- Row 1 -->
        <rect width="330" height="42" rx="8" fill="#09140e" stroke="#10b981" stroke-opacity=".3"/>
        <circle cx="22" cy="21" r="10" fill="#0d2419" stroke="#10b981"/>
        <text class="p3-mono" x="42" y="25" font-size="11" fill="#f0fdf4">Project Alpha (FastAPI / AI)</text>
        <rect x="235" y="10" width="80" height="22" rx="11" fill="#047857"/>
        <text class="p3-mono" x="275" y="25" text-anchor="middle" font-size="9.5" fill="#f0fdf4">ALLOCATED</text>

        <!-- Row 2 -->
        <g transform="translate(0 50)">
          <rect width="330" height="42" rx="8" fill="#09140e" stroke="#10b981" stroke-opacity=".3"/>
          <circle cx="22" cy="21" r="10" fill="#0d2419" stroke="#34d399"/>
          <text class="p3-mono" x="42" y="25" font-size="11" fill="#f0fdf4">Flutter Mobile App Suite</text>
          <rect x="235" y="10" width="80" height="22" rx="11" fill="#10b981"/>
          <text class="p3-mono" x="275" y="25" text-anchor="middle" font-size="9.5" fill="#050c08" font-weight="700">IN REVIEW</text>
        </g>

        <!-- Row 3 -->
        <g transform="translate(0 100)">
          <rect width="330" height="42" rx="8" fill="#09140e" stroke="#10b981" stroke-opacity=".3"/>
          <circle cx="22" cy="21" r="10" fill="#0d2419" stroke="#6ee7b7"/>
          <text class="p3-mono" x="42" y="25" font-size="11" fill="#f0fdf4">PostgreSQL Cluster Migration</text>
          <rect x="235" y="10" width="80" height="22" rx="11" fill="#047857"/>
          <text class="p3-mono" x="275" y="25" text-anchor="middle" font-size="9.5" fill="#f0fdf4">COMPLETED</text>
        </g>
      </g>
    </g>

    <rect x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>
    <rect class="p3-trace" style="animation-delay:0.0s" x=".5" y=".5" width="1199" height="369" rx="17.5" fill="none" stroke="url(#p3-trace)" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;

// ==========================================
// 8. TECH CONSTELLATION: tech-constellation-v2.svg
// ==========================================
const techConstellationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="1200" height="500" role="img" aria-labelledby="tc-title tc-desc">
  <title id="tc-title">Tech stack — Jagavantha PA</title>
  <desc id="tc-desc">Languages: Python (primary), Dart, C, SQL. AI &amp; Agents: LLMs, CrewAI, Multi-Agents, RAG, Time-Series. Frontend &amp; Apps: Flutter, Flutter Web, Android Studio. Backend &amp; APIs: FastAPI, REST APIs, RBAC. Data &amp; Cloud: PostgreSQL, Supabase, Pinecone, Elasticsearch, GCP, Render. Tools &amp; DevOps: Docker, Git, GitHub, VS Code.</desc>
  <defs>
    <linearGradient id="tc-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a1711"/><stop offset="1" stop-color="#050c08"/>
    </linearGradient>
    <radialGradient id="tc-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0" stop-color="#059669" stop-opacity=".3"/><stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tc-pulse">
      <stop offset="0" stop-color="#f0fdf4"/><stop offset=".5" stop-color="#6ee7b7" stop-opacity=".6"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="tc-trace" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0fdf4"/><stop offset=".45" stop-color="#6ee7b7"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .tc-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .tc-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .tc-panel { animation: tc-in 1.1s cubic-bezier(.16,1,.3,1) both; }
    .tc-p1 { animation-delay: .05s; } .tc-p2 { animation-delay: .2s; } .tc-p3 { animation-delay: .35s; }
    .tc-p4 { animation-delay: .5s; } .tc-p5 { animation-delay: .65s; } .tc-p6 { animation-delay: .8s; }
    .tc-web { stroke-dasharray: 1800; stroke-dashoffset: 1800; animation: tc-draw 3s cubic-bezier(.65,0,.35,1) 1s forwards; }
    @keyframes tc-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes tc-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .tc-panel { animation: none; }
      .tc-web { animation: none; stroke-dashoffset: 0; }
    }
    .tc-trace { stroke-dasharray: 201 1120; stroke-dashoffset: 1321; animation: tc-trace 7s linear infinite; }
    @keyframes tc-trace { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .tc-trace { display: none; } }
  </style>

  <rect width="1200" height="500" rx="20" fill="url(#tc-bg)"/>
  <rect width="1200" height="500" rx="20" fill="url(#tc-glow)"/>
  <rect x=".5" y=".5" width="1199" height="499" rx="19.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>

  <!-- Constellation: gutters linking the six groups -->
  <path class="tc-web" d="M24 250 H1176 M406 24 V476 M794 24 V476" fill="none" stroke="#10b981" stroke-opacity=".22"/>
  <circle cx="0" cy="250" r="8" fill="url(#tc-pulse)" opacity="0">
    <animate attributeName="cx" values="24;1176" dur="9s" begin="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".45 0 .55 1"/>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.9;1" dur="9s" begin="3s" repeatCount="indefinite"/>
  </circle>
  <g fill="#050c08" stroke="#6ee7b7">
    <rect x="400" y="244" width="12" height="12" transform="rotate(45 406 250)"/>
    <rect x="788" y="244" width="12" height="12" transform="rotate(45 794 250)"/>
  </g>

  <!-- Row 1 -->
  <g class="tc-panel tc-p1"><g transform="translate(32 32)">
    <rect width="360" height="200" rx="14" fill="#0d1e15" fill-opacity=".85" stroke="#10b981" stroke-opacity=".25"/>
    <rect class="tc-trace" style="animation-delay:0.00s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="tc-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#34d399">01  LANGUAGES</text>
    <text class="tc-serif" x="24" y="96" font-size="40" font-weight="300" fill="#f0fdf4">Python <tspan font-size="13" class="tc-mono" fill="#34d399" dy="-18">PRIMARY</tspan></text>
    <text class="tc-serif" x="24" y="146" font-size="34" font-weight="300" fill="#f0fdf4">Dart</text>
    <text class="tc-serif" x="24" y="180" font-size="22" font-weight="300" fill="#94a3b8">C  ·  SQL  ·  Docker</text>
  </g></g>
  <g class="tc-panel tc-p2"><g transform="translate(420 32)">
    <rect width="360" height="200" rx="14" fill="#0d1e15" fill-opacity=".85" stroke="#10b981" stroke-opacity=".25"/>
    <rect class="tc-trace" style="animation-delay:-1.15s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="tc-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#34d399">02  AI · ML · AGENTS</text>
    <text class="tc-serif" x="24" y="90" font-size="30" font-weight="300" fill="#f0fdf4">LLMs  ·  CrewAI</text>
    <text class="tc-serif" x="24" y="130" font-size="24" font-weight="300" fill="#f0fdf4">Multi-Agent Systems</text>
    <text class="tc-serif" x="24" y="164" font-size="24" font-weight="300" fill="#94a3b8">RAG  ·  Time-Series</text>
    <text class="tc-mono" x="24" y="186" font-size="10" letter-spacing="1.4" fill="#34d399">PREDICTIVE ANOMALY MODELING</text>
  </g></g>
  <g class="tc-panel tc-p3"><g transform="translate(808 32)">
    <rect width="360" height="200" rx="14" fill="#0d1e15" fill-opacity=".85" stroke="#10b981" stroke-opacity=".25"/>
    <rect class="tc-trace" style="animation-delay:-2.30s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="tc-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#34d399">03  MOBILE &amp; FRONTEND</text>
    <text class="tc-serif" x="24" y="96" font-size="40" font-weight="300" fill="#f0fdf4">Flutter</text>
    <text class="tc-serif" x="24" y="140" font-size="26" font-weight="300" fill="#f0fdf4">Flutter Web</text>
    <text class="tc-serif" x="24" y="176" font-size="22" font-weight="300" fill="#94a3b8">Android Studio  ·  Play Store</text>
  </g></g>

  <!-- Row 2 -->
  <g class="tc-panel tc-p4"><g transform="translate(32 268)">
    <rect width="360" height="200" rx="14" fill="#0d1e15" fill-opacity=".85" stroke="#10b981" stroke-opacity=".25"/>
    <rect class="tc-trace" style="animation-delay:-3.45s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="tc-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#34d399">04  BACKEND &amp; APIS</text>
    <text class="tc-serif" x="24" y="90" font-size="32" font-weight="300" fill="#f0fdf4">FastAPI</text>
    <text class="tc-serif" x="24" y="132" font-size="24" font-weight="300" fill="#f0fdf4">RESTful APIs</text>
    <text class="tc-serif" x="24" y="170" font-size="22" font-weight="300" fill="#94a3b8">Session Persistence  ·  RBAC</text>
  </g></g>
  <g class="tc-panel tc-p5"><g transform="translate(420 268)">
    <rect width="360" height="200" rx="14" fill="#0d1e15" fill-opacity=".85" stroke="#10b981" stroke-opacity=".25"/>
    <rect class="tc-trace" style="animation-delay:-4.60s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="tc-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#34d399">05  DATA &amp; CLOUD</text>
    <text class="tc-serif" x="24" y="90" font-size="30" font-weight="300" fill="#f0fdf4">PostgreSQL  ·  Supabase</text>
    <text class="tc-serif" x="24" y="130" font-size="24" font-weight="300" fill="#f0fdf4">Pinecone  ·  Elasticsearch</text>
    <text class="tc-serif" x="24" y="166" font-size="22" font-weight="300" fill="#94a3b8">Google Cloud Platform  ·  Render</text>
  </g></g>
  <g class="tc-panel tc-p6"><g transform="translate(808 268)">
    <rect width="360" height="200" rx="14" fill="#0d1e15" fill-opacity=".85" stroke="#10b981" stroke-opacity=".25"/>
    <rect class="tc-trace" style="animation-delay:-5.75s" width="360" height="200" rx="14" fill="none" stroke="url(#tc-trace)" stroke-width="1.4" stroke-linecap="round"/>
    <text class="tc-mono" x="24" y="38" font-size="11" letter-spacing="2.4" fill="#34d399">06  TOOLS &amp; DEVOPS</text>
    <text class="tc-serif" x="24" y="90" font-size="30" font-weight="300" fill="#f0fdf4">Git  ·  GitHub  ·  VS Code</text>
    <text class="tc-serif" x="24" y="130" font-size="24" font-weight="300" fill="#f0fdf4">Docker  ·  CI/CD Pipelines</text>
    <text class="tc-serif" x="24" y="166" font-size="22" font-weight="300" fill="#94a3b8">Google Play Console  ·  Postman</text>
  </g></g>
</svg>`;

// ==========================================
// 9. CERTIFICATIONS & EDUCATION
// ==========================================
const certificationsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420" role="img" aria-labelledby="ce-t ce-d">
  <title id="ce-t">Certifications &amp; Coursework</title>
  <desc id="ce-d">Google AI Professional Certificate (Coursera); Python and AI Fundamentals (GUVI); Introduction to C Programming (NPTEL); B.Tech in Artificial Intelligence and Data Science (Meenakshi Sundararajan Engineering College).</desc>
  <defs>
    <linearGradient id="ce-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1711"/><stop offset="1" stop-color="#050c08"/></linearGradient>
    <radialGradient id="ce-glow" cx="15%" cy="100%" r="70%"><stop offset="0" stop-color="#059669" stop-opacity=".4"/><stop offset="1" stop-color="#047857" stop-opacity="0"/></radialGradient>
    <linearGradient id="ce-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0fdf4"/><stop offset=".5" stop-color="#6ee7b7"/><stop offset="1" stop-color="#10b981" stop-opacity="0"/></linearGradient>
  </defs>
  <style>
    .ce-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .ce-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .ce-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
    .ce-tile { animation: ce-in 1s cubic-bezier(.34,1.3,.64,1) both; }
    .ce-edge { stroke-dasharray: 870; stroke-dashoffset: 870; animation: ce-edge 6s cubic-bezier(.65,0,.35,1) infinite; }
    @keyframes ce-in { from { opacity: 0; transform: translateY(18px) scale(.97); } to { opacity: 1; transform: none; } }
    @keyframes ce-edge { 0% { stroke-dashoffset: 870; opacity: 1; } 40% { stroke-dashoffset: 0; opacity: 1; } 60%, 100% { stroke-dashoffset: 0; opacity: 0; } }
    @media (prefers-reduced-motion: reduce) { .ce-tile { animation: none; } .ce-edge { display: none; } }
  </style>
  <rect width="1200" height="420" rx="20" fill="url(#ce-bg)"/>
  <rect width="1200" height="420" rx="20" fill="url(#ce-glow)"/>
  <rect x=".5" y=".5" width="1199" height="419" rx="19.5" fill="none" stroke="#10b981" stroke-opacity=".2"/>

  <!-- Coursera: Google AI Professional Certificate -->
  <g class="ce-tile" style="animation-delay:0.20s"><g transform="translate(40 40)">
    <rect width="530" height="150" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".28"/>
    <rect width="530" height="150" rx="14" fill="none" stroke="url(#ce-edge)" stroke-width="1.2" class="ce-edge" style="animation-delay:2.00s"/>
    <text class="ce-mono" x="24" y="34" font-size="11.5" letter-spacing="2.6" fill="#34d399">COURSERA</text>
    <circle cx="500" cy="30" r="3.5" fill="#10b981"/><circle cx="488" cy="30" r="3.5" fill="#10b981"/>
    <line x1="24" y1="48" x2="506" y2="48" stroke="#10b981" stroke-opacity=".2"/>
    <text class="ce-serif" x="24" y="82" font-size="20" fill="#f0fdf4">Google AI Professional Certificate</text>
    <text class="ce-sans" x="24" y="106" font-size="13" fill="#a7f3d0">Comprehensive training in AI fundamentals &amp; real-world applications</text>
    <text class="ce-sans" x="24" y="126" font-size="12" fill="#94a3b8">Model building · AI-driven problem solving · Modern AI tools</text>
  </g></g>

  <!-- GUVI: Python and AI Fundamentals -->
  <g class="ce-tile" style="animation-delay:0.35s"><g transform="translate(630 40)">
    <rect width="530" height="150" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".28"/>
    <rect width="530" height="150" rx="14" fill="none" stroke="url(#ce-edge)" stroke-width="1.2" class="ce-edge" style="animation-delay:2.40s"/>
    <text class="ce-mono" x="24" y="34" font-size="11.5" letter-spacing="2.6" fill="#34d399">GUVI</text>
    <circle cx="500" cy="30" r="3.5" fill="#10b981"/><circle cx="488" cy="30" r="3.5" fill="#10b981"/>
    <line x1="24" y1="48" x2="506" y2="48" stroke="#10b981" stroke-opacity=".2"/>
    <text class="ce-serif" x="24" y="82" font-size="20" fill="#f0fdf4">Python &amp; AI Fundamentals</text>
    <text class="ce-sans" x="24" y="106" font-size="13" fill="#a7f3d0">Core Python data structures, scripting &amp; algorithm design</text>
    <text class="ce-sans" x="24" y="126" font-size="12" fill="#94a3b8">Machine learning foundations &amp; contextual AI implementations</text>
  </g></g>

  <!-- NPTEL: Introduction to C Programming -->
  <g class="ce-tile" style="animation-delay:0.50s"><g transform="translate(40 230)">
    <rect width="530" height="150" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".28"/>
    <rect width="530" height="150" rx="14" fill="none" stroke="url(#ce-edge)" stroke-width="1.2" class="ce-edge" style="animation-delay:2.80s"/>
    <text class="ce-mono" x="24" y="34" font-size="11.5" letter-spacing="2.6" fill="#34d399">NPTEL</text>
    <circle cx="500" cy="30" r="3.5" fill="#10b981"/><circle cx="488" cy="30" r="3.5" fill="#10b981"/>
    <line x1="24" y1="48" x2="506" y2="48" stroke="#10b981" stroke-opacity=".2"/>
    <text class="ce-serif" x="24" y="82" font-size="20" fill="#f0fdf4">Introduction to C Programming</text>
    <text class="ce-sans" x="24" y="106" font-size="13" fill="#a7f3d0">Low-level computational logic &amp; structured programming</text>
    <text class="ce-sans" x="24" y="126" font-size="12" fill="#94a3b8">Memory management, pointers, and algorithmic problem-solving</text>
  </g></g>

  <!-- MSEC: Academic B.Tech Background -->
  <g class="ce-tile" style="animation-delay:0.65s"><g transform="translate(630 230)">
    <rect width="530" height="150" rx="14" fill="#0d1e15" stroke="#10b981" stroke-opacity=".28"/>
    <rect width="530" height="150" rx="14" fill="none" stroke="url(#ce-edge)" stroke-width="1.2" class="ce-edge" style="animation-delay:3.20s"/>
    <text class="ce-mono" x="24" y="34" font-size="11.5" letter-spacing="2.6" fill="#34d399">ACADEMICS · 2022 – 2026</text>
    <circle cx="500" cy="30" r="3.5" fill="#10b981"/><circle cx="488" cy="30" r="3.5" fill="#10b981"/>
    <line x1="24" y1="48" x2="506" y2="48" stroke="#10b981" stroke-opacity=".2"/>
    <text class="ce-serif" x="24" y="82" font-size="20" fill="#f0fdf4">B.Tech Artificial Intelligence &amp; Data Science</text>
    <text class="ce-sans" x="24" y="106" font-size="13" fill="#a7f3d0">Meenakshi Sundararajan Engineering College, Chennai</text>
    <text class="ce-sans" x="24" y="126" font-size="12" fill="#94a3b8">Relevant: Agentic AI · Generative AI · System Design · Statistics</text>
  </g></g>
</svg>`;

// ==========================================
// 10. FOOTER SIGNATURE: footer-signature-v2.svg
// ==========================================
const footerSignatureSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 230" width="1200" height="230" role="img" aria-labelledby="sig-title">
  <title id="sig-title">Jagavantha — Engineering intelligence. Building resilient systems.</title>
  <defs>
    <linearGradient id="sig-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#050c08"/>
      <stop offset="1" stop-color="#0a1711"/>
    </linearGradient>
    <radialGradient id="sig-glow" cx="50%" cy="100%" r="70%">
      <stop offset="0" stop-color="#059669" stop-opacity=".6"/>
      <stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sig-line" gradientUnits="userSpaceOnUse" x1="100" y1="0" x2="1100" y2="0">
      <stop offset="0" stop-color="#047857" stop-opacity="0"/>
      <stop offset=".5" stop-color="#34d399"/>
      <stop offset="1" stop-color="#047857" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .sig-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
    .sig-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    .sig-name {
      stroke: #6ee7b7; stroke-width: 1; fill: #6ee7b7; fill-opacity: 0;
      stroke-dasharray: 900; stroke-dashoffset: 900;
      animation: sig-write 3.6s cubic-bezier(.65,0,.35,1) .3s forwards;
    }
    .sig-rule { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: sig-draw 2.4s cubic-bezier(.65,0,.35,1) 1.6s forwards; }
    .sig-in { animation: sig-in 1.4s ease 2.6s both; }
    @keyframes sig-write { 70% { stroke-dashoffset: 0; fill-opacity: 0; } 100% { stroke-dashoffset: 0; fill-opacity: 1; } }
    @keyframes sig-draw { to { stroke-dashoffset: 0; } }
    @keyframes sig-in { from { opacity: 0; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .sig-name { animation: none; stroke-dashoffset: 0; fill-opacity: 1; }
      .sig-rule { animation: none; stroke-dashoffset: 0; }
      .sig-in { animation: none; }
      .sig-sparks { display: none; }
    }
  </style>

  <rect width="1200" height="230" rx="20" fill="url(#sig-bg)"/>
  <rect width="1200" height="230" rx="20" fill="url(#sig-glow)"/>

  <g class="sig-sparks" fill="#6ee7b7" opacity=".9">
    <circle cx="451" cy="230" r="1.0"><animate attributeName="cy" values="232;108" dur="7.3s" begin="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="7.3s" begin="2.4s" repeatCount="indefinite"/></circle>
    <circle cx="216" cy="230" r="1.5"><animate attributeName="cy" values="232;44" dur="5.3s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="5.3s" begin="0.3s" repeatCount="indefinite"/></circle>
    <circle cx="697" cy="230" r="1.7"><animate attributeName="cy" values="232;94" dur="4.2s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="4.2s" begin="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="915" cy="230" r="1.5"><animate attributeName="cy" values="232;78" dur="5.1s" begin="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="5.1s" begin="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="275" cy="230" r="2.0"><animate attributeName="cy" values="232;49" dur="7.3s" begin="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="7.3s" begin="2.5s" repeatCount="indefinite"/></circle>
  </g>

  <text class="sig-serif sig-name" x="600" y="104" text-anchor="middle" font-size="76" font-style="italic" font-weight="300" letter-spacing="-1">Jagavantha</text>

  <path class="sig-rule" d="M100 134 H1100" stroke="url(#sig-line)" stroke-width="1"/>
  <circle cx="600" cy="134" r="3" fill="#f0fdf4" class="sig-in">
    <animate attributeName="r" values="3;5;3" dur="3.2s" repeatCount="indefinite"/>
  </circle>

  <g class="sig-in">
    <text class="sig-serif" x="600" y="176" text-anchor="middle" font-size="20" font-style="italic" fill="#f0fdf4">Engineering intelligence. Building resilient systems.</text>
    <text class="sig-mono" x="600" y="206" text-anchor="middle" font-size="11" letter-spacing="3" fill="#94a3b8">AI &amp; DATA SCIENCE · FASTAPI · FLUTTER · LLMS</text>
  </g>
</svg>`;

// ==========================================
// 11. SEPARATOR
// ==========================================
const separatorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 40" width="1200" height="40">
  <defs>
    <linearGradient id="sep-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#10b981" stop-opacity="0"/>
      <stop offset=".5" stop-color="#34d399" stop-opacity=".6"/>
      <stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <line x1="100" y1="20" x2="1100" y2="20" stroke="url(#sep-grad)" stroke-width="1"/>
  <circle cx="600" cy="20" r="3" fill="#6ee7b7"/>
</svg>`;

// Writing all SVG files
fs.writeFileSync("assets/jaga-hero.svg", heroSvg, "utf8");

fs.writeFileSync("assets/title-about.svg", makeTitleSvg("01", "About", "Hello, I'm Jagavantha.", "Jagavantha."), "utf8");
fs.writeFileSync("assets/about-intro.svg", aboutIntroSvg, "utf8");

fs.writeFileSync("assets/title-recognition.svg", makeTitleSvg("02", "Recognition", "Proof, on the record.", "on the record."), "utf8");
fs.writeFileSync("assets/achievement-motif-v2.svg", recognitionSvg, "utf8");

fs.writeFileSync("assets/title-work.svg", makeTitleSvg("03", "Selected Work", "Products, not assignments.", "not assignments."), "utf8");
fs.writeFileSync("assets/project-repopilot.svg", repoPilotSvg, "utf8");
fs.writeFileSync("assets/project-atom.svg", atomSvg, "utf8");
fs.writeFileSync("assets/project-bench-management.svg", benchManagementSvg, "utf8");

fs.writeFileSync("assets/title-toolkit.svg", makeTitleSvg("04", "Toolkit", "The tools I reach for.", "I reach for."), "utf8");
fs.writeFileSync("assets/tech-constellation-v2.svg", techConstellationSvg, "utf8");

fs.writeFileSync("assets/title-commits.svg", makeTitleSvg("05", "Commit Log", "A year of building, one commit at a time.", "one commit"), "utf8");

fs.writeFileSync("assets/title-certifications.svg", makeTitleSvg("06", "Certifications", "Credentials, verified.", "verified."), "utf8");
fs.writeFileSync("assets/certifications.svg", certificationsSvg, "utf8");

fs.writeFileSync("assets/title-connect.svg", makeTitleSvg("07", "Connect", "Let's build something extraordinary.", "something extraordinary."), "utf8");

fs.writeFileSync("assets/footer-signature-v2.svg", footerSignatureSvg, "utf8");
fs.writeFileSync("assets/separator.svg", separatorSvg, "utf8");

console.log("Successfully generated all green SVG assets for Jagavantha PA!");

