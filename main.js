"use strict";
/* ──────────────────────────────────────────────────────────────────────────
   Portfolio Data
   ────────────────────────────────────────────────────────────────────────── */
const PROFILE = {
    name: "Sakshi Beloshe",
    title: "Product Manager · CS Student, MIT-WPU",
    location: "Pune, India",
    status: "Open to internships",
    email: "beloshe.sakshi04@gmail.com",
    phone: "+91 9970001033",
    linkedin: "https://www.linkedin.com/in/sakshi-beloshe-8b41292aa/",
    github: "https://github.com/Sakshibeloshe",
    resumeUrl: "public/resume.pdf",
    collagePhotos: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=400",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=400",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=400",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=400"
    ],
    photo: "public/profile.jpg",
    bio: "Final-year B.Tech Computer Science student (MIT-WPU, 2027) with hands-on experience building and shipping consumer-facing mobile products from ideation to launch. Apple WWDC 2026 Winner — shipped ViCa, a proximity-based networking product with real users.\n\nExperienced in product requirements, user research, backlog management, sprint cycles, and data-driven decision making. Excited to drive growth for digital-first consumer brands at the intersection of product, analytics, and user experience.",
    skills: [
        "PRDs & User Stories", "Backlog Management", "Sprint Planning", "MVP Definition",
        "User Research", "A/B Testing", "Funnel Analysis", "SQL / Pandas",
        "Figma (basic)", "Agile / Scrum", "REST APIs", "Roadmapping"
    ],
    experience: [
        { company: "Infosys, Mysore", role: "Product & Development Intern", years: "Apr 2026 – May 2026" },
        { company: "Fyntrest (Fintech Startup)", role: "Web Developer & Business Analyst", years: "Sept 2024 – Mar 2025" },
        { company: "MIT World Peace University", role: "B.Tech Computer Science Engineering · CGPA 8.66", years: "2023 – 2027" }
    ]
};
const PROJECTS = [
    {
        id: "vica",
        name: "ViCa",
        tagline: "Offline-first digital identity sharing · iOS + Android",
        emoji: "📇",
        coverGradient: "linear-gradient(135deg, #ff7eb3 0%, #ff758c 50%, #6c63ff 100%)",
        badges: ["Swift", "BLE", "Apple WWDC 2026 Winner", "iOS + Android"],
        role: "Sole Designer & Developer",
        company: "Personal Project",
        duration: "2025 – Present",
        overview: "ViCa uses Bluetooth Low Energy to detect nearby users and exchange digital cards without internet, without QR codes, without friction. Both users open the app, tap once, cards are exchanged — that's it. Winner of Apple's WWDC 2026 Swift Student Challenge.",
        problem: "Sharing contact info at events is broken. AirDrop is iOS-only. QR codes require opening the camera, finding the right mode, holding steady — too many steps. Physical cards get lost or thrown away. None of it works in basements, metros, or crowded venues with bad signal. The moment two people decide to connect should be instant and effortless.",
        highlights: [
            {
                title: "4 contextual card types",
                detail: "Personal, Business, Social, and Event cards — context changes what you share. You don't hand your LinkedIn to everyone at a party, or your Instagram to everyone at a networking event. ViCa lets you pick the right card for the moment without switching apps."
            },
            {
                title: "Event Mode",
                detail: "When multiple ViCa users are in the same space, Event Mode lets everyone exchange cards simultaneously — one tap, everyone in the room gets everyone's card. Built for conferences, classrooms, and team meetups."
            },
            {
                title: "Privacy-first by design",
                detail: "Dual mutual-intent detection means no accidental sharing — a 3-second confirmation window has to be honored by both sides before a card moves. No platform owns your data; everything stays on-device until exchange."
            },
            {
                title: "BLE over NFC",
                detail: "NFC on iOS requires Apple Pay entitlements for background scanning — a non-starter for a third-party app without enterprise agreements. BLE works cross-platform, needs no special hardware permissions, and has longer range."
            }
        ],
        decision: {
            title: "Key decision: solving accidental sharing in Event Mode",
            detail: "Event Mode's hardest design problem was accidental sharing. I added a 3-second mutual confirmation window — enough friction to prevent mistakes, not enough to kill the flow. This number came directly from watching real people hesitate during early testing, not from a spec sheet."
        },
        stats: [
            { label: "WWDC Winner", value: "🏆" },
            { label: "Platforms", value: "2" },
            { label: "Card Types", value: "4" },
            { label: "Internet Needed", value: "0" }
        ],
        tech: ["Swift", "SwiftUI", "Core Bluetooth (BLE)", "Jetpack Compose", "Nearby Connections API"],
        screenshots: ["Card selection", "Personal card", "Nearby users", "Exchange confirmation", "Event Mode", "Card collection"]
    },
    {
        id: "cyster",
        name: "Cyster",
        tagline: "AI-powered PCOS health companion · Mobile",
        emoji: "🌸",
        coverGradient: "linear-gradient(135deg, #f6d365 0%, #fda085 45%, #c471ed 100%)",
        badges: ["AI / LLM", "Mobile", "Health Tech", "Patent Filed"],
        role: "Product Lead & Developer",
        company: "Personal Project",
        duration: "2025 – Present",
        overview: "Cyster helps women with PCOS (Polycystic Ovary Syndrome) — a hormonal condition affecting 1 in 10 women globally — manage their condition with guidance that actually knows them, not generic advice. Every recommendation is cycle-phase aware, and a patent has been filed on the underlying correlation engine.",
        problem: "PCOS management isn't one-size-fits-all. Your body responds differently to food, exercise, and stress depending on your cycle phase — a workout that energizes you in week 1 might exhaust you in week 4. Most apps give generic advice and most women with PCOS feel dismissed by doctors and confused by conflicting information online.",
        highlights: [
            {
                title: "Cycle-phase-aware Diet & Workout tabs",
                detail: "Follicular phase favors high-protein, cruciferous foods and HIIT/strength training. Luteal phase favors magnesium-rich foods and yoga or walking. Every plan shifts automatically with your cycle, and logs build a personal trigger database over time."
            },
            {
                title: "Adira — the AI companion",
                detail: "Adira has full context across diet, workout, symptoms, and cycle phase through a shared context engine. Ask 'why do I feel so tired today?' and she answers using your actual data — not a generic FAQ."
            },
            {
                title: "Symptom-Trigger Correlation Engine",
                detail: "Phase 1 (shipped): rule-based correlations — e.g. high sugar + luteal phase flags inflammation risk. Phase 2 (in progress): statistical confidence scoring on personal data ('dairy correlates with your bloating 71% of the time'). Phase 3 (roadmap): feeding validated personal correlations into Adira's prompts."
            },
            {
                title: "Conversational UI over dashboards",
                detail: "A dashboard full of charts feels clinical. A chatbot that knows your data and talks like a knowledgeable friend feels supportive — a deliberate product decision given the emotional weight of a PCOS diagnosis."
            }
        ],
        decision: {
            title: "Key decision: why a chatbot, not a dashboard",
            detail: "I chose a conversational delivery layer over charts and graphs because PCOS management has a real emotional dimension — accuracy alone wasn't enough, the insight needed a human-feeling delivery mechanism to actually be trusted and acted on."
        },
        stats: [
            { label: "Patent", value: "Filed" },
            { label: "Cycle Phases Tracked", value: "4" },
            { label: "Core Tabs", value: "4" },
            { label: "AI Engine", value: "Adira" }
        ],
        tech: ["React Native", "LLM / Prompt Engineering", "SharedContextEngine", "Statistical Correlation Modeling"],
        screenshots: ["Home dashboard", "Cycle phase view", "Diet tab", "Workout tab", "Adira chat", "Correlation insight"]
    },
    {
        id: "lms",
        name: "LMS",
        tagline: "Loan Management System · 3-app microservice platform",
        emoji: "🏦",
        coverGradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
        badges: ["Go", "gRPC", "Microservices", "Infosys Internship"],
        role: "Scrum Master + Backend Engineer",
        company: "Infosys",
        duration: "Internship",
        overview: "A unified loan platform built from three independently deployed apps — Borrower, Bank, and DSA — so applicants, officers, and selling agents all operate on the same real-time loan data instead of fragmented manual handoffs.",
        problem: "Traditional loan processing is fragmented: a borrower applies through one channel, a bank officer reviews in a separate system, a DSA tracks commission in yet another. No unified visibility, manual handoffs, delays at every step. The goal was one integrated system with full real-time visibility across all three parties.",
        highlights: [
            {
                title: "Borrower App",
                detail: "Apply for home/personal/business loans with KYC upload, real-time status tracking (applied → review → approved → disbursed), an EMI calculator, a repayment dashboard with amortization schedule, and a document vault."
            },
            {
                title: "Bank App",
                detail: "Officer review queues, a credit-decisioning engine (CIBIL score, FOIR, LTV with automatic risk flagging), a three-step approval pipeline (Officer → Manager → Admin, fully logged), and a portfolio analytics dashboard."
            },
            {
                title: "DSA App",
                detail: "Lead management, application submission on behalf of borrowers, real-time application status, commission tracking on disbursed loans, and a full client portfolio history."
            },
            {
                title: "EMI engine, built from scratch in Go",
                detail: "Reducing-balance (diminishing balance) interest calculation — the industry standard for home and personal loans in India — where each EMI's interest component shrinks and principal component grows as the loan is repaid."
            }
        ],
        decision: {
            title: "Key decision: 3 separate apps + gRPC, not 1 monolith over REST",
            detail: "Security and role isolation drove the 3-app split — a borrower should never see officer notes, a DSA should never see another DSA's clients, and independent deployment means a Bank App update can't take down the Borrower App. For inter-service calls, gRPC's Protocol Buffers + HTTP/2 multiplexing beat REST/JSON's serialization and round-trip overhead — machines don't need REST's human-readability."
        },
        stats: [
            { label: "Apps", value: "3" },
            { label: "User Roles", value: "4" },
            { label: "Approval Steps", value: "3" },
            { label: "Built In", value: "Go" }
        ],
        tech: ["Go", "gRPC", "Protocol Buffers", "PostgreSQL", "Microservices", "CIBIL / FOIR / LTV scoring"],
        screenshots: ["Loan application form", "Status tracker", "EMI schedule", "Officer queue", "Credit decisioning", "Analytics dashboard"]
    }
];
const state = {
    windows: [],
    minimized: [],
    activeWindow: null,
    positions: {},
    selectedIcon: null,
    searchOpen: false,
    resumeOpen: false,
    isMobile: false
};
/* ──────────────────────────────────────────────────────────────────────────
   HTML Template Generators
   ────────────────────────────────────────────────────────────────────────── */
function getFolderIconSVG(size = 64) {
    return `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
      <path d="M6 24c0-3.3 2.7-6 6-6h22.5c1.9 0 3.7.9 4.8 2.4l4.2 5.6H88c3.3 0 6 2.7 6 6v40c0 3.3-2.7 6-6 6H12c-3.3 0-6-2.7-6-6V24z" fill="#5AA7F5" />
      <path d="M6 30h88v40c0 3.3-2.7 6-6 6H12c-3.3 0-6-2.7-6-6V30z" fill="#8FC4FB" />
      <path d="M6 30h88v4H6z" fill="#ffffff" opacity="0.35" />
    </svg>
  `;
}
function getCysterPageHTML(project) {
    return `
    <div class="cyster-case-study">
      <!-- Hero section: Large editorial styling (Inspired by Glossier/Keesar) -->
      <div class="cyster-hero">
        <div class="cyster-hero-left">
          <div class="cyster-badge">🌸 Patent Filed · Health Tech</div>
          <h1 class="cyster-huge-title">Cyster</h1>
          <p class="cyster-subtitle">AI-powered PCOS health companion · Mobile</p>
          
          <div class="cyster-meta-grid">
            <div class="cyster-meta-cell">
              <span class="cyster-meta-label">Role</span>
              <span class="cyster-meta-value">${project.role}</span>
            </div>
            <div class="cyster-meta-cell">
              <span class="cyster-meta-label">Company</span>
              <span class="cyster-meta-value">${project.company}</span>
            </div>
            <div class="cyster-meta-cell">
              <span class="cyster-meta-label">Duration</span>
              <span class="cyster-meta-value">${project.duration}</span>
            </div>
          </div>
        </div>
        <div class="cyster-hero-right">
          <div style="display: flex; gap: 8px; justify-content: center; align-items: center; background: rgba(225,29,72,0.05); padding: 16px; border-radius: 24px; border: 1px solid rgba(225,29,72,0.1);">
            <div class="phone-mockup" style="max-width: 110px; border-radius: 16px; border-width: 4px;">
              <img src="public/projects/cyster/home_tab.jpg" alt="Cyster Onboarding" />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 1: Overview & Syncing (Split columns, rose theme) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="cyster-panel cyster-panel-rose">
          <div class="cyster-panel-tag">Overview</div>
          <h2 class="cyster-panel-title" style="color: #ffffff;">Cycle-Aware Health Guidance</h2>
          <p class="cyster-panel-text">${project.overview}</p>
          <div class="vica-tech-tags">
            ${project.tech.map(t => `<span class="vica-pill-tag" style="background: rgba(255,255,255,0.25); color: #ffffff; border-color: rgba(255,255,255,0.3);">${t}</span>`).join('')}
          </div>
        </div>
        
        <div class="cyster-panel cyster-panel-dark" style="display: flex; gap: 16px; justify-content: center; align-items: center;">
          <div class="phone-mockup">
            <img src="public/projects/cyster/home_tab.jpg" alt="Home Screen Dashboard" />
          </div>
          <div class="phone-mockup">
            <img src="public/projects/cyster/diet_tab.jpg" alt="Cycle Phase Diet Plan" />
          </div>
        </div>
      </div>

      <!-- Section 2: The Problem Callout (Large text, white panel with black font, editorial layout) -->
      <div class="cyster-panel cyster-panel-white" style="margin-top: 24px;">
        <div class="cyster-panel-tag" style="color: #a78b90;">The Friction</div>
        <blockquote class="vica-editorial-quote" style="color: #22181a;">
          "PCOS management isn't one-size-fits-all. Cycle phases change what your body needs — exercise that energizes you in week 1 might exhaust you in week 4. Most apps give generic advice and most women feel dismissed or confused by conflicting information online."
        </blockquote>
      </div>

      <!-- Section 3: Core UI Showcase (Workout Stack & Cycle Tracker in mockups) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="cyster-panel cyster-panel-dark">
          <div style="display: flex; justify-content: center; margin-bottom: 16px;">
            <div class="phone-mockup" style="max-width: 250px;">
              <img src="public/projects/cyster/workout_tab.jpg" alt="Workout Tab" />
            </div>
          </div>
          <h3 class="vica-section-subtitle" style="color: #22181a;">Cycle-Syncing Workouts</h3>
          <p class="cyster-panel-text" style="font-size: 13.5px; opacity: 0.85;">
            Automatically sync workouts to cycle phases. Follicular phase HIIT/strength training matches high energy levels, while Luteal phase exercises shift to yoga or low-impact walks to prevent hormone crashes.
          </p>
        </div>

        <div class="cyster-panel cyster-panel-dark">
          <div style="display: flex; justify-content: center; margin-bottom: 16px;">
            <div class="phone-mockup" style="max-width: 250px;">
              <img src="public/projects/cyster/workout_player.jpg" alt="Workout Player" />
            </div>
          </div>
          <h3 class="vica-section-subtitle" style="color: #22181a;">Interactive Active Players</h3>
          <p class="cyster-panel-text" style="font-size: 13.5px; opacity: 0.85;">
            Follow workouts directly on-device with timing guides, phase-aware difficulty scaling, and a cycle tracker interface that displays daily targets without switching apps.
          </p>
        </div>
      </div>

      <!-- Section 4: Adira - AI Companion & Symptom Log (Lavender card) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="cyster-panel cyster-panel-lavender">
          <div class="cyster-panel-tag">Adira AI Companion</div>
          <h2 class="cyster-panel-title">Context-Aware Wellness Assistant</h2>
          <p class="cyster-panel-text">
            Adira has full context across diet, workout, symptoms, and cycle phase. Instead of a clinical dashboard, a supportive conversation layer uses correlation data to give direct answers — explaining fatigue levels or predicting inflammatory flare-ups based on dairy/sugar logs.
          </p>
        </div>

        <div class="cyster-panel cyster-panel-dark" style="display: flex; justify-content: center; align-items: center;">
          <div class="phone-mockup" style="max-width: 250px;">
            <img src="public/projects/cyster/confirm_meal.jpg" alt="Meal Log Confirmation Screen" />
          </div>
        </div>
      </div>

      <!-- Section 5: Key Decision (Yellow panel for decision) -->
      <div class="cyster-panel cyster-panel-yellow" style="margin-top: 24px;">
        <div class="cyster-panel-tag">Key Decision</div>
        <h2 class="cyster-panel-title">Why a Chatbot, Not a Clinical Dashboard</h2>
        <p class="cyster-panel-text">
          PCOS management has a massive emotional dimension. Charts can feel clinical and alienating. I chose a conversational delivery layer because actionable recommendations feel safer and are more likely to be adopted when delivered like a chat with a knowledgeable, empathetic friend.
        </p>
      </div>

      <!-- Section 6: Stats Row -->
      <div class="cyster-stats-row" style="margin-top: 24px;">
        <div class="cyster-stat-box">
          <div class="cyster-stat-num">📝</div>
          <div class="cyster-stat-lbl">Patent Filed</div>
        </div>
        <div class="cyster-stat-box">
          <div class="cyster-stat-num">4</div>
          <div class="cyster-stat-lbl">Cycle Phases</div>
        </div>
        <div class="cyster-stat-box">
          <div class="cyster-stat-num">Adira</div>
          <div class="cyster-stat-lbl">Shared Context AI</div>
        </div>
        <div class="cyster-stat-box">
          <div class="cyster-stat-num">100%</div>
          <div class="cyster-stat-lbl">Personalized</div>
        </div>
      </div>
    </div>
  `;
}
function getLMSPageHTML(project) {
    return `
    <div class="lms-case-study">
      <!-- Hero section: Large editorial styling (Inspired by Glossier/Keesar) -->
      <div class="lms-hero">
        <div class="lms-hero-left">
          <div class="lms-badge">🏦 Infosys Internship · Microservices</div>
          <h1 class="lms-huge-title">LMS</h1>
          <p class="lms-subtitle">Loan Management System · 3-app microservice platform</p>
          
          <div class="lms-meta-grid">
            <div class="lms-meta-cell">
              <span class="lms-meta-label">Role</span>
              <span class="lms-meta-value">${project.role}</span>
            </div>
            <div class="lms-meta-cell">
              <span class="lms-meta-label">Company</span>
              <span class="lms-meta-value">${project.company}</span>
            </div>
            <div class="lms-meta-cell">
              <span class="lms-meta-label">Duration</span>
              <span class="lms-meta-value">${project.duration}</span>
            </div>
          </div>
        </div>
        <div class="lms-hero-right">
          <div style="display: flex; gap: 8px; justify-content: center; align-items: center; background: rgba(2,132,199,0.05); padding: 16px; border-radius: 24px; border: 1px solid rgba(2,132,199,0.1);">
            <div class="phone-mockup" style="max-width: 110px; border-radius: 16px; border-width: 4px;">
              <img src="public/projects/lms/home_screen_1.jpg" alt="LMS Portal Overview" />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 1: Overview & Microservice Split (Split columns, deep blue theme) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="lms-panel lms-panel-blue">
          <div class="lms-panel-tag">Overview</div>
          <h2 class="lms-panel-title" style="color: #ffffff;">Unified Real-Time Loan Pipeline</h2>
          <p class="lms-panel-text">${project.overview}</p>
          <div class="vica-tech-tags">
            ${project.tech.map(t => `<span class="vica-pill-tag" style="background: rgba(255,255,255,0.25); color: #ffffff; border-color: rgba(255,255,255,0.3);">${t}</span>`).join('')}
          </div>
        </div>
        
        <div class="lms-panel lms-panel-dark" style="display: flex; gap: 16px; justify-content: center; align-items: center;">
          <div class="phone-mockup">
            <img src="public/projects/lms/home_screen_1.jpg" alt="LMS Client Application Home" />
          </div>
          <div class="phone-mockup">
            <img src="public/projects/lms/home_screen_2.jpg" alt="LMS Loan Detail & Stats" />
          </div>
        </div>
      </div>

      <!-- Section 2: The Problem Callout (Large text, white panel with black font, editorial layout) -->
      <div class="lms-panel lms-panel-white" style="margin-top: 24px;">
        <div class="lms-panel-tag" style="color: #64748b;">The Friction</div>
        <blockquote class="vica-editorial-quote" style="color: #0d1727;">
          "Traditional loan processing is fragmented: borrower, officer, and agent operate on isolated systems with manual handoffs, delays, and lack of real-time visibility. The goal was a unified platform for instant processing."
        </blockquote>
      </div>

      <!-- Section 3: Core UI Showcase (Customize Loans & Descriptions in mockups) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="lms-panel lms-panel-dark">
          <div style="display: flex; justify-content: center; margin-bottom: 16px;">
            <div class="phone-mockup" style="max-width: 250px;">
              <img src="public/projects/lms/customize_loans_screen.jpg" alt="Customize Loans Screen" />
            </div>
          </div>
          <h3 class="vica-section-subtitle" style="color: #0d1727;">Interactive Interest Adjuster</h3>
          <p class="lms-panel-text" style="font-size: 13.5px; opacity: 0.85;">
            Dynamic interest selectors allow prospective borrowers to slide loan durations and amounts, getting real-time reducing-balance EMI breakdown tables calculated directly via our Go finance modules.
          </p>
        </div>

        <div class="lms-panel lms-panel-dark">
          <div style="display: flex; justify-content: center; margin-bottom: 16px;">
            <div class="phone-mockup" style="max-width: 250px;">
              <img src="public/projects/lms/loan_descriptions_screen.jpg" alt="Loan Descriptions Screen" />
            </div>
          </div>
          <h3 class="vica-section-subtitle" style="color: #0d1727;">Contextual Underwriting Offers</h3>
          <p class="lms-panel-text" style="font-size: 13.5px; opacity: 0.85;">
            LMS features context-based loan tiers (Education, Personal, Housing, Vehicle) displaying clear processing fees, down payments, and qualification guidelines built with banking standards in mind.
          </p>
        </div>
      </div>

      <!-- Section 4: Underwriting Decision Engine (Light blue card) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="lms-panel lms-panel-lightblue">
          <div class="lms-panel-tag">Decision Engine</div>
          <h2 class="lms-panel-title">Credit-Scoring Analytics</h2>
          <p class="lms-panel-text">
            To automate reviews, the backend compiles CIBIL, FOIR, and LTV metrics. Officers are presented with real-time risk alerts and credit scores mapped to a three-step approval pipeline (Officer → Manager → Admin), significantly cutting review times.
          </p>
        </div>

        <div class="lms-panel lms-panel-dark" style="display: flex; justify-content: center; align-items: center;">
          <div class="phone-mockup" style="max-width: 250px;">
            <img src="public/projects/lms/credit_score_screen.jpg" alt="Credit Score Analytics View" />
          </div>
        </div>
      </div>

      <!-- Section 5: Key Decision (Grey panel for decision) -->
      <div class="lms-panel lms-panel-grey" style="margin-top: 24px;">
        <div class="lms-panel-tag">Key Decision</div>
        <h2 class="lms-panel-title">Why 3 Separate Apps + gRPC, Not a Monolith over REST</h2>
        <p class="lms-panel-text">
          Security and role isolation drove the 3-app split: borrowers, DSAs, and bank officers require strict isolation of data access. Independent deployment guarantees stability of banking channels during borrower portal updates. Inter-service messaging uses gRPC's Protocol Buffers over HTTP/2, reducing JSON roundtrip serialization overhead.
        </p>
      </div>

      <!-- Section 6: Stats Row -->
      <div class="lms-stats-row" style="margin-top: 24px;">
        <div class="lms-stat-box">
          <div class="lms-stat-num">3</div>
          <div class="lms-stat-lbl">Target Apps</div>
        </div>
        <div class="lms-stat-box">
          <div class="lms-stat-num">4</div>
          <div class="lms-stat-lbl">User Roles</div>
        </div>
        <div class="lms-stat-box">
          <div class="lms-stat-num">gRPC</div>
          <div class="lms-stat-lbl">Go Microservices</div>
        </div>
        <div class="lms-stat-box">
          <div class="lms-stat-num">3-Step</div>
          <div class="lms-stat-lbl">Approval Flow</div>
        </div>
      </div>
    </div>
  `;
}
function getViCaPageHTML(project) {
    return `
    <div class="vica-case-study">
      <!-- Hero section: Large editorial styling (Inspired by Glossier/Keesar) -->
      <div class="vica-hero">
        <div class="vica-hero-left">
          <div class="vica-badge">🏆 Apple WWDC 2026 Winner</div>
          <h1 class="vica-huge-title">ViCa</h1>
          <p class="vica-subtitle">Offline-first digital identity sharing · iOS + Android</p>
          
          <div class="vica-meta-grid">
            <div class="vica-meta-cell">
              <span class="vica-meta-label">Role</span>
              <span class="vica-meta-value">${project.role}</span>
            </div>
            <div class="vica-meta-cell">
              <span class="vica-meta-label">Company</span>
              <span class="vica-meta-value">${project.company}</span>
            </div>
            <div class="vica-meta-cell">
              <span class="vica-meta-label">Duration</span>
              <span class="vica-meta-value">${project.duration}</span>
            </div>
          </div>
        </div>
        <div class="vica-hero-right">
          <img src="public/projects/vica/vica_app_icon.png" class="vica-app-icon-img" alt="ViCa App Icon" />
        </div>
      </div>

      <!-- Section 1: Overview & Onboarding (Split columns, pink pastel theme) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="vica-panel vica-panel-pink">
          <div class="vica-panel-tag">Overview</div>
          <h2 class="vica-panel-title">Zero Friction Sharing</h2>
          <p class="vica-panel-text">${project.overview}</p>
          <div class="vica-tech-tags">
            ${project.tech.map(t => `<span class="vica-pill-tag">${t}</span>`).join('')}
          </div>
        </div>
        
        <div class="vica-panel vica-panel-dark" style="display: flex; gap: 16px; justify-content: center; align-items: center;">
          <div class="phone-mockup">
            <img src="public/projects/vica/opening_1.jpeg" alt="Onboarding 1" />
          </div>
          <div class="phone-mockup">
            <img src="public/projects/vica/opening_2.jpeg" alt="Onboarding 2" />
          </div>
        </div>
      </div>

      <!-- Section 2: The Problem Callout (Large text, white panel with black font, editorial layout) -->
      <div class="vica-panel vica-panel-white" style="margin-top: 24px;">
        <div class="vica-panel-tag" style="color: #6b7280;">The Friction</div>
        <blockquote class="vica-editorial-quote">
          "Sharing contact info at events is broken. AirDrop is iOS-only. QR codes require too many steps. Physical cards get lost. None of it works in basements, metros, or crowded venues with bad signal. <strong>The moment two people decide to connect should be instant and effortless.</strong>"
        </blockquote>
      </div>

      <!-- Section 3: Core UI Showcase (My Stack & Connections tabs in mockups) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="vica-panel vica-panel-dark">
          <div style="display: flex; justify-content: center; margin-bottom: 16px;">
            <div class="phone-mockup" style="max-width: 250px;">
              <img src="public/projects/vica/myCards_tab.PNG" alt="My Stack Tab" />
            </div>
          </div>
          <h3 class="vica-section-subtitle">Contextual Card Types</h3>
          <p class="vica-panel-text" style="font-size: 13.5px; opacity: 0.85;">
            Personal, Business, Social, and Event cards. Context changes what you share. You don't hand your LinkedIn to everyone at a party, or your Instagram to everyone at a networking event. ViCa lets you pick the right card for the moment.
          </p>
        </div>

        <div class="vica-panel vica-panel-dark">
          <div style="display: flex; justify-content: center; margin-bottom: 16px;">
            <div class="phone-mockup" style="max-width: 250px;">
              <img src="public/projects/vica/connections_tab.PNG" alt="Connections Tab" />
            </div>
          </div>
          <h3 class="vica-section-subtitle">Inbox & Event Mode</h3>
          <p class="vica-panel-text" style="font-size: 13.5px; opacity: 0.85;">
            Manage incoming cards, search and filter through connections. When multiple ViCa users are in the same space, Event Mode lets everyone exchange cards simultaneously — one tap, everyone in the room gets everyone's card.
          </p>
        </div>
      </div>

      <!-- Section 4: BLE Technology & Interaction (Blue panel + Tap to Transfer) -->
      <div class="vica-grid-2col" style="margin-top: 24px;">
        <div class="vica-panel vica-panel-blue">
          <div class="vica-panel-tag">BLE over NFC</div>
          <h2 class="vica-panel-title">Engineering Near-Device Sharing</h2>
          <p class="vica-panel-text">
            NFC on iOS requires Apple Pay entitlements for background scanning, which is a non-starter for third-party apps. BLE works cross-platform, needs no special hardware permissions, has a longer range, and functions in completely offline environments.
          </p>
          <div style="margin-top: 16px; font-weight: 600; font-size: 13px; display: flex; align-items: center; gap: 6px;">
            <span style="display: inline-block; width: 8px; height: 8px; background: #000; border-radius: 50%;"></span>
            Dual mutual-intent detection prevents accidental sharing.
          </div>
        </div>

        <div class="vica-panel vica-panel-dark" style="display: flex; justify-content: center; align-items: center;">
          <div class="phone-mockup" style="max-width: 250px;">
            <img src="public/projects/vica/tap_to_transfer_screen.PNG" alt="Tap to Transfer Screen" />
          </div>
        </div>
      </div>

      <!-- Section 5: Key Decision & Stats (Yellow panel for decision) -->
      <div class="vica-panel vica-panel-yellow" style="margin-top: 24px;">
        <div class="vica-panel-tag">Key Decision</div>
        <h2 class="vica-panel-title">Solving Accidental Sharing</h2>
        <p class="vica-panel-text">
          During early testing of Event Mode, users expressed worry about receiving unwanted cards or sending cards to the wrong people. I introduced a <strong>3-second mutual confirmation window</strong> — enough friction to prevent mistakes, without hurting the flow. This duration came directly from watching real users hesitate in testing.
        </p>
      </div>

      <!-- Section 6: Stats Grid -->
      <div class="vica-stats-row" style="margin-top: 24px;">
        <div class="vica-stat-box">
          <div class="vica-stat-num">🏆</div>
          <div class="vica-stat-lbl">WWDC Winner</div>
        </div>
        <div class="vica-stat-box">
          <div class="vica-stat-num">2</div>
          <div class="vica-stat-lbl">Platforms</div>
        </div>
        <div class="vica-stat-box">
          <div class="vica-stat-num">4</div>
          <div class="vica-stat-lbl">Card Types</div>
        </div>
        <div class="vica-stat-box">
          <div class="vica-stat-num">100%</div>
          <div class="vica-stat-lbl">Offline-First</div>
        </div>
      </div>
    </div>
  `;
}
function getProjectPageHTML(project) {
    if (project.id === 'vica') {
        return getViCaPageHTML(project);
    }
    if (project.id === 'cyster') {
        return getCysterPageHTML(project);
    }
    if (project.id === 'lms') {
        return getLMSPageHTML(project);
    }
    const badgesHTML = project.badges.map(b => `<span class="badge">${b}</span>`).join('');
    const cellsHTML = [
        { k: "Role", v: project.role },
        { k: "Company", v: project.company },
        { k: "Duration", v: project.duration }
    ].map(f => `
    <div class="info-cell">
      <div class="cell-label">${f.k}</div>
      <div class="cell-val">${f.v}</div>
    </div>
  `).join('');
    const highlightsHTML = project.highlights.map(h => `
    <div class="highlight-card">
      <div class="highlight-title">${h.title}</div>
      <div class="highlight-detail">${h.detail}</div>
    </div>
  `).join('');
    const statsHTML = project.stats.map(st => `
    <div class="stat-card">
      <div class="stat-val">${st.value}</div>
      <div class="stat-label">${st.label}</div>
    </div>
  `).join('');
    const techHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const screenshotsHTML = project.screenshots.map(caption => `
    <div class="screenshot-placeholder">
      <span class="icon">🖼️</span>
      <span class="caption">${caption}</span>
    </div>
  `).join('');
    return `
    <div>
      <div class="window-cover" style="background: ${project.coverGradient}"></div>
      <div class="window-page-content">
        <div class="page-header">
          <div class="emoji-header">${project.emoji}</div>
          <h1 class="project-title">${project.name}</h1>
          <p class="project-tagline">${project.tagline}</p>
          <div class="badge-container">${badgesHTML}</div>
        </div>

        <div class="info-table">${cellsHTML}</div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Overview</h2>
          <p class="paragraph-text">${project.overview}</p>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">The Problem</h2>
          <div class="problem-box">
            <p>${project.problem}</p>
          </div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">What I Built</h2>
          <div class="highlights-grid">${highlightsHTML}</div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">${project.decision.title}</h2>
          <div class="decision-quote">
            <p>${project.decision.detail}</p>
          </div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">At a Glance</h2>
          <div class="stats-grid">${statsHTML}</div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Stack & Tools</h2>
          <div class="tech-tag-container">${techHTML}</div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Screenshots</h2>
          <p class="screenshot-info">
            Drop real screenshots into <code>/public/projects/${project.id}/</code> and reference them here.
          </p>
          <div class="screenshot-grid">${screenshotsHTML}</div>
        </div>
      </div>
    </div>
  `;
}
function getAboutPageHTML() {
    const skillsHTML = PROFILE.skills.map(s => `<span class="tech-tag">${s}</span>`).join('');
    const experienceHTML = PROFILE.experience.map((exp, i) => `
    <div class="exp-row">
      <div>
        <div class="exp-role" style="font-weight: 650; color: #1e293b;">${exp.role}</div>
        <div class="exp-company" style="color: #64748b;">${exp.company}</div>
      </div>
      <span class="exp-years" style="color: #94a3b8; font-weight: 500;">${exp.years}</span>
    </div>
  `).join('');
    return `
    <div>
      <div class="window-cover" style="background: linear-gradient(135deg, #a8d5a2 0%, #c8e6c9 40%, #b3d9d3 100%)"></div>
      <div class="window-page-content">
        <div class="page-header" style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 24px;">
          <img src="public/profile.jpg" alt="Profile" class="profile-avatar" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; object-position: 50% 28%; border: 3px solid rgba(255, 255, 255, 0.85); box-shadow: 0 4px 14px rgba(0,0,0,0.12); margin-bottom: 16px;" />
          <h1 class="project-title" style="font-size: 26px; font-weight: 800; color: #0f172a; margin-bottom: 6px; letter-spacing: -0.02em;">${PROFILE.name}</h1>
          <p class="project-tagline" style="font-size: 13.5px; color: #475569; margin-bottom: 12px; line-height: 1.4;">${PROFILE.title} · ${PROFILE.location}</p>
          <div class="badge-container" style="display: flex; justify-content: center; gap: 6px;">
            <span class="page-badge" style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 99px; background: rgba(76, 175, 80, 0.08); color: #2e7d32; border: 1px solid rgba(76, 175, 80, 0.15);">${PROFILE.status}</span>
          </div>
        </div>

        <div class="info-table" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 16px; margin-bottom: 24px;">
          <div class="info-cell" style="display: flex; flex-direction: column; gap: 4px;">
            <span class="info-label" style="font-size: 9.5px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Role</span>
            <span class="info-value" style="font-size: 13px; font-weight: 600; color: #1e293b;">Product Manager / CS Student</span>
          </div>
          <div class="info-cell" style="display: flex; flex-direction: column; gap: 4px;">
            <span class="info-label" style="font-size: 9.5px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Education</span>
            <span class="info-value" style="font-size: 13px; font-weight: 600; color: #1e293b;">B.Tech Computer Science (2027)</span>
          </div>
          <div class="info-cell" style="display: flex; flex-direction: column; gap: 4px;">
            <span class="info-label" style="font-size: 9.5px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Focus Areas</span>
            <span class="info-value" style="font-size: 13px; font-weight: 600; color: #1e293b;">Consumer Tech, Proximity, AI</span>
          </div>
          <div class="info-cell" style="display: flex; flex-direction: column; gap: 4px;">
            <span class="info-label" style="font-size: 9.5px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Location</span>
            <span class="info-value" style="font-size: 13px; font-weight: 600; color: #1e293b;">Pune / Bangalore, India</span>
          </div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">About Me</h2>
          ${PROFILE.bio.split('\n\n').map(p => `<p class="paragraph-text" style="font-size: 13.5px; line-height: 1.65; color: #334155; margin-bottom: 12px;">${p}</p>`).join('')}
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Key Highlights</h2>
          <div class="highlights-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 16px; margin-top: 12px;">
            <div class="highlight-item" style="border-left: 3px solid #2e7d32; padding-left: 14px;">
              <h3 class="highlight-title" style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Apple WWDC 2026 Winner</h3>
              <p class="highlight-detail" style="font-size: 12.5px; color: #475569; line-height: 1.5; margin: 0;">Designed and shipped ViCa, a proximity-based contact sharing app using BLE (Bluetooth Low Energy), selected as a global student challenge winner by Apple.</p>
            </div>
            <div class="highlight-item" style="border-left: 3px solid #0284c7; padding-left: 14px;">
              <h3 class="highlight-title" style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Patent-Filed Product Lead</h3>
              <p class="highlight-detail" style="font-size: 12.5px; color: #475569; line-height: 1.5; margin: 0;">Built Cyster, a cycle-phase aware health assistant with a custom correlation engine to analyze PCOS triggers. Filed a utility patent for the logic.</p>
            </div>
            <div class="highlight-item" style="border-left: 3px solid #6366f1; padding-left: 14px;">
              <h3 class="highlight-title" style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Agile Product Internship</h3>
              <p class="highlight-detail" style="font-size: 12.5px; color: #475569; line-height: 1.5; margin: 0;">Served as Scrum Master and Backend Developer at Infosys, leading sprints and building a reduction-balance EMI engine for a multi-role Loan System.</p>
            </div>
          </div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Skills & Competencies</h2>
          <div class="tech-tag-container" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">${skillsHTML}</div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Education & Experience</h2>
          <div class="exp-list" style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">${experienceHTML}</div>
        </div>

        <div class="section-divider"></div>
        <div>
          <h2 class="section-title">Get in Touch</h2>
          <div class="contact-container" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px;">
            <a href="mailto:${PROFILE.email}" class="contact-link" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: #2e7d32; font-weight: 600; font-size: 12.5px; border: 1px solid rgba(76, 175, 80, 0.2); padding: 8px 16px; border-radius: 12px; background: rgba(76, 175, 80, 0.04); transition: all 0.2s;">
              <i data-lucide="mail" style="width: 14px; height: 14px;"></i> ${PROFILE.email}
            </a>
            <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: #0284c7; font-weight: 600; font-size: 12.5px; border: 1px solid rgba(2, 132, 199, 0.2); padding: 8px 16px; border-radius: 12px; background: rgba(2, 132, 199, 0.04); transition: all 0.2s;">
              <i data-lucide="linkedin" style="width: 14px; height: 14px;"></i> LinkedIn
            </a>
            <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="contact-link" style="display: flex; align-items: center; gap: 6px; text-decoration: none; color: #334155; font-weight: 600; font-size: 12.5px; border: 1px solid rgba(71, 85, 105, 0.2); padding: 8px 16px; border-radius: 12px; background: rgba(71, 85, 105, 0.04); transition: all 0.2s;">
              <i data-lucide="github" style="width: 14px; height: 14px;"></i> GitHub
            </a>
            <div id="about-resume-trigger" class="resume-btn" style="display: flex; align-items: center; gap: 6px; cursor: pointer; color: #dc2626; font-weight: 600; font-size: 12.5px; border: 1px solid rgba(220, 38, 38, 0.2); padding: 8px 16px; border-radius: 12px; background: rgba(220, 38, 38, 0.04); transition: all 0.2s;">
              <i data-lucide="file-text" style="width: 14px; height: 14px;"></i> Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
/* ──────────────────────────────────────────────────────────────────────────
   Window Management & Logic
   ────────────────────────────────────────────────────────────────────────── */
function getWindowEl(id) {
    return document.getElementById(`win-${id}`);
}
function bringToFront(id) {
    state.activeWindow = id;
    const allWindows = document.querySelectorAll('.app-window');
    allWindows.forEach(win => {
        if (win.id === `win-${id}`) {
            win.classList.remove('inactive');
            win.classList.add('active');
        }
        else {
            win.classList.remove('active');
            win.classList.add('inactive');
        }
    });
}
function openWindow(id, type) {
    // If window is minimized, restore it
    if (state.minimized.includes(id)) {
        state.minimized = state.minimized.filter(w => w !== id);
        const win = getWindowEl(id);
        if (win) {
            win.classList.remove('hidden');
        }
        renderDock();
        bringToFront(id);
        return;
    }
    // Check if window is already open
    if (state.windows.some(w => w.id === id)) {
        bringToFront(id);
        return;
    }
    // Open new window
    state.windows.push({ id, type });
    // Calculate position
    const winW = 760;
    const count = state.windows.length - 1;
    const x = state.isMobile ? 0 : Math.max(40, (window.innerWidth - winW) / 2 - 60 + count * 28);
    const y = state.isMobile ? 0 : 46 + count * 20;
    state.positions[id] = { x, y };
    // Create DOM Element
    const winEl = document.createElement('div');
    winEl.id = `win-${id}`;
    winEl.className = `app-window active`;
    if (!state.isMobile) {
        winEl.style.left = `${x}px`;
        winEl.style.top = `${y}px`;
        winEl.style.width = `760px`;
        winEl.style.height = `min(70vh, 620px)`;
        winEl.style.maxHeight = `calc(100vh - 132px)`;
    }
    const isProject = type === 'project';
    const project = isProject ? PROJECTS.find(p => p.id === id) : null;
    const title = isProject && project ? `${project.emoji}  ${project.name}` : "👤  About Me";
    const bodyContent = isProject && project ? getProjectPageHTML(project) : getAboutPageHTML();
    winEl.innerHTML = `
    <div class="window-header" id="win-header-${id}">
      <div class="window-controls">
        <button class="ctrl-dot close" id="win-close-${id}">
          <span>✕</span>
        </button>
        <button class="ctrl-dot minimize" id="win-minimize-${id}">
          <span>−</span>
        </button>
        <button class="ctrl-dot maximize" id="win-maximize-${id}">
          <span>⤢</span>
        </button>
      </div>
      <div class="window-title">${title}</div>
    </div>
    <div class="window-body">${bodyContent}</div>
  `;
    document.getElementById('windows-container')?.appendChild(winEl);
    // Wire up inner button events
    document.getElementById(`win-close-${id}`)?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeWindow(id);
    });
    document.getElementById(`win-minimize-${id}`)?.addEventListener('click', (e) => {
        e.stopPropagation();
        minimizeWindow(id);
    });
    document.getElementById(`win-maximize-${id}`)?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMaximizeWindow(id);
    });
    winEl.addEventListener('click', () => {
        bringToFront(id);
    });
    // Setup dragging
    if (!state.isMobile) {
        const headerEl = document.getElementById(`win-header-${id}`);
        if (headerEl) {
            setupDragging(winEl, headerEl, id);
        }
    }
    // Setup click inside about-me resume trigger if present
    if (type === 'about') {
        document.getElementById('about-resume-trigger')?.addEventListener('click', () => {
            openResume();
        });
    }
    bringToFront(id);
    renderDock();
    updateDesktopDotStates();
    // Re-instantiate icons that were rendered dynamically
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
function closeWindow(id) {
    const win = getWindowEl(id);
    if (win) {
        win.remove();
    }
    state.windows = state.windows.filter(w => w.id !== id);
    state.minimized = state.minimized.filter(w => w !== id);
    if (state.activeWindow === id) {
        state.activeWindow = state.windows.length > 0 ? state.windows[state.windows.length - 1].id : null;
        if (state.activeWindow) {
            bringToFront(state.activeWindow);
        }
    }
    renderDock();
    updateDesktopDotStates();
}
function minimizeWindow(id) {
    const win = getWindowEl(id);
    if (win) {
        win.classList.add('hidden');
    }
    state.minimized.push(id);
    if (state.activeWindow === id) {
        // Find last open window that is NOT minimized
        const activeCandidates = state.windows.filter(w => !state.minimized.includes(w.id));
        state.activeWindow = activeCandidates.length > 0 ? activeCandidates[activeCandidates.length - 1].id : null;
        if (state.activeWindow) {
            bringToFront(state.activeWindow);
        }
    }
    renderDock();
}
function restoreWindow(id) {
    state.minimized = state.minimized.filter(w => w !== id);
    const win = getWindowEl(id);
    if (win) {
        win.classList.remove('hidden');
    }
    bringToFront(id);
    renderDock();
}
function toggleMaximizeWindow(id) {
    const win = getWindowEl(id);
    if (win) {
        win.classList.toggle('maximized');
    }
}
function closeAllWindows() {
    state.windows.forEach(w => {
        const win = getWindowEl(w.id);
        if (win)
            win.remove();
    });
    state.windows = [];
    state.minimized = [];
    state.activeWindow = null;
    renderDock();
    updateDesktopDotStates();
}
/* Dragging Engine */
function setupDragging(winEl, headerEl, id) {
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    const onMouseMove = (e) => {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newX = startLeft + dx;
        const newY = startTop + dy;
        // Bounds checking
        const clampedY = Math.max(28, newY); // Don't drag above menu bar
        winEl.style.left = `${newX}px`;
        winEl.style.top = `${clampedY}px`;
        state.positions[id] = { x: newX, y: clampedY };
    };
    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    headerEl.addEventListener('mousedown', (e) => {
        if (state.isMobile)
            return;
        bringToFront(id);
        startX = e.clientX;
        startY = e.clientY;
        const pos = state.positions[id] || { x: 120, y: 50 };
        startLeft = pos.x;
        startTop = pos.y;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        e.preventDefault();
    });
}
/* ──────────────────────────────────────────────────────────────────────────
   Spotlight Search Engine
   ────────────────────────────────────────────────────────────────────────── */
const spotlightSearchItems = [
    { id: "about", type: "about", title: "About Me", subtitle: `${PROFILE.title} · ${PROFILE.location}`, action: () => openWindow("about", "about") },
    ...PROJECTS.map(p => ({ id: p.id, type: "project", title: p.name, subtitle: p.tagline, action: () => openWindow(p.id, "project") })),
    { id: "mail", type: "link", title: "Email", subtitle: PROFILE.email, action: () => (window.location.href = `mailto:${PROFILE.email}?subject=Hi%20Sakshi%20—%20from%20your%20portfolio`) },
    { id: "linkedin", type: "link", title: "LinkedIn", subtitle: PROFILE.linkedin, action: () => window.open(PROFILE.linkedin, "_blank") },
    { id: "github", type: "link", title: "GitHub", subtitle: PROFILE.github, action: () => window.open(PROFILE.github, "_blank") },
    { id: "resume", type: "link", title: "Resume", subtitle: "View / download PDF", action: () => openResume() }
];
function toggleSpotlight(open) {
    state.searchOpen = open;
    const spotlightEl = document.getElementById('spotlight-search');
    const inputEl = document.getElementById('spotlight-input');
    if (open) {
        spotlightEl?.classList.remove('hidden');
        inputEl?.focus();
        inputEl.value = '';
        renderSpotlightResults('');
    }
    else {
        spotlightEl?.classList.add('hidden');
    }
}
function renderSpotlightResults(query) {
    const container = document.getElementById('spotlight-results');
    if (!container)
        return;
    const filtered = spotlightSearchItems.filter(item => {
        if (!query.trim())
            return true;
        const q = query.toLowerCase();
        return item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q);
    });
    if (filtered.length === 0) {
        container.innerHTML = `<div class="search-no-results">No results found</div>`;
        return;
    }
    container.innerHTML = filtered.map(item => {
        let icon = "📁";
        if (item.type === "about")
            icon = "👤";
        else if (item.type === "link")
            icon = "🔗";
        return `
      <div class="search-result-item" data-action-id="${item.id}">
        <div class="result-icon">${icon}</div>
        <div>
          <div class="result-title">${item.title}</div>
          <div class="result-subtitle">${item.subtitle}</div>
        </div>
      </div>
    `;
    }).join('');
    // Wire up selection events
    container.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
            const actId = el.getAttribute('data-action-id');
            const item = spotlightSearchItems.find(x => x.id === actId);
            if (item) {
                item.action();
                toggleSpotlight(false);
            }
        });
    });
}
/* ──────────────────────────────────────────────────────────────────────────
   Resume Viewer Overlay
   ────────────────────────────────────────────────────────────────────────── */
function openResume() {
    state.resumeOpen = true;
    const viewer = document.getElementById('resume-viewer');
    viewer?.classList.remove('hidden');
    // Set iframe and link paths
    const iframe = document.getElementById('resume-iframe');
    if (iframe && !iframe.src) {
        iframe.src = PROFILE.resumeUrl;
    }
    const downloadBtn = document.getElementById('resume-download');
    if (downloadBtn) {
        downloadBtn.href = PROFILE.resumeUrl;
    }
}
function closeResume() {
    state.resumeOpen = false;
    const viewer = document.getElementById('resume-viewer');
    viewer?.classList.add('hidden');
}
/* ──────────────────────────────────────────────────────────────────────────
   Desktop Icons & Layout Setup
   ────────────────────────────────────────────────────────────────────────── */
function selectDesktopIcon(id) {
    state.selectedIcon = id;
    document.querySelectorAll('.desktop-icon-item').forEach(el => {
        if (el.getAttribute('data-id') === id) {
            el.classList.add('selected');
        }
        else {
            el.classList.remove('selected');
        }
    });
}
function updateDesktopDotStates() {
    // Update desktop icons open dot indicator
    document.querySelectorAll('.desktop-icon-item').forEach(el => {
        const id = el.getAttribute('data-id');
        const dot = el.querySelector('.desktop-icon-dot');
        const isOpen = state.windows.some(w => w.id === id);
        if (isOpen) {
            el.classList.add('open');
            if (!dot) {
                const dotEl = document.createElement('div');
                dotEl.className = 'desktop-icon-dot';
                el.appendChild(dotEl);
            }
        }
        else {
            el.classList.remove('open');
            dot?.remove();
        }
    });
}
function renderDesktopIcons() {
    const desktopIconsContainer = document.getElementById('desktop-icons');
    if (!desktopIconsContainer)
        return;
    desktopIconsContainer.innerHTML = PROJECTS.map(project => {
        const isOpen = state.windows.some(w => w.id === project.id);
        return `
      <div class="desktop-icon-item ${isOpen ? 'open' : ''}" data-id="${project.id}">
        <div class="desktop-icon-folder">
          ${getFolderIconSVG(60)}
        </div>
        <div class="desktop-icon-label">${project.name}</div>
        ${isOpen ? '<div class="desktop-icon-dot"></div>' : ''}
      </div>
    `;
    }).join('');
    // Wire up desktop folder clicks
    desktopIconsContainer.querySelectorAll('.desktop-icon-item').forEach(el => {
        const id = el.getAttribute('data-id') || '';
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            selectDesktopIcon(id);
        });
        el.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            openWindow(id, 'project');
        });
    });
}
function renderMobileGrid() {
    const mobileGrid = document.getElementById('mobile-folders-grid');
    if (!mobileGrid)
        return;
    mobileGrid.innerHTML = PROJECTS.map(project => `
    <div class="mobile-folder-item" data-id="${project.id}">
      ${getFolderIconSVG(52)}
      <span class="mobile-folder-label">${project.name}</span>
    </div>
  `).join('');
    mobileGrid.querySelectorAll('.mobile-folder-item').forEach(el => {
        const id = el.getAttribute('data-id') || '';
        el.addEventListener('click', () => {
            openWindow(id, 'project');
        });
    });
}
function setupAboutWidget() {
    // Click handler
    document.getElementById('about-widget')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openWindow('about', 'about');
    });
}
function setupMobileProfileHeader() {
    const photo = document.getElementById('mobile-profile-photo');
    if (photo)
        photo.src = PROFILE.photo;
    const name = document.getElementById('mobile-profile-name');
    if (name)
        name.textContent = PROFILE.name;
    const title = document.getElementById('mobile-profile-title');
    if (title)
        title.textContent = PROFILE.title;
    document.getElementById('mobile-profile-widget')?.addEventListener('click', () => {
        openWindow('about', 'about');
    });
}
/* ──────────────────────────────────────────────────────────────────────────
   Menu Dropdowns Logic
   ────────────────────────────────────────────────────────────────────────── */
const MENUS = {
    Finder: [
        { label: "About This Portfolio", action: () => openWindow("about", "about") },
        { sep: true, label: "" },
        { label: "Close All Windows", action: () => closeAllWindows() }
    ],
    File: [
        { label: "Open About Me", shortcut: "⌘1", action: () => openWindow("about", "about") },
        { label: "Open Resume", shortcut: "⌘R", action: () => openResume() },
        { sep: true, label: "" },
        { label: "Close Window", shortcut: "⌘W", action: () => {
                if (state.activeWindow)
                    closeWindow(state.activeWindow);
            } }
    ],
    Edit: [
        { label: "Find…", shortcut: "⌘F", action: () => toggleSpotlight(true) }
    ],
    View: [
        { label: "as Icons", shortcut: "⌘1" },
        { label: "Clean Up Desktop", disabled: true }
    ],
    Go: [
        { label: "Desktop", shortcut: "⌘⇧D" },
        { label: "About Me", action: () => openWindow("about", "about") }
    ],
    Window: [
        { label: "Minimize", shortcut: "⌘M", disabled: true },
        { label: "Bring All to Front", disabled: true }
    ],
    Help: [
        { label: "Search…", action: () => toggleSpotlight(true) }
    ],
    Apple: [
        { label: "About This Portfolio", action: () => openWindow("about", "about") },
        { sep: true, label: "" },
        { label: "Open Resume", action: () => openResume() }
    ]
};
function renderDropdown(menuKey, leftPos) {
    const activeDropdown = document.getElementById('active-dropdown');
    const overlay = document.getElementById('dropdown-overlay');
    if (!activeDropdown || !overlay)
        return;
    const items = MENUS[menuKey] || [];
    activeDropdown.style.left = `${leftPos}px`;
    activeDropdown.innerHTML = items.map(item => {
        if (item.sep) {
            return `<div class="dropdown-divider"></div>`;
        }
        const shortcutText = item.shortcut ? `<span class="dropdown-shortcut">${item.shortcut}</span>` : '';
        const disabledClass = item.disabled ? 'disabled' : '';
        return `
      <div class="dropdown-item ${disabledClass}" data-label="${item.label}">
        <span>${item.label}</span>
        ${shortcutText}
      </div>
    `;
    }).join('');
    // Wire events
    activeDropdown.querySelectorAll('.dropdown-item').forEach(el => {
        el.addEventListener('click', () => {
            const label = el.getAttribute('data-label');
            const item = items.find(x => x.label === label);
            if (item && !item.disabled) {
                item.action?.();
                closeDropdown();
            }
        });
    });
    activeDropdown.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeDropdown() {
    document.getElementById('active-dropdown')?.classList.add('hidden');
    document.getElementById('dropdown-overlay')?.classList.add('hidden');
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
}
function setupMenuDropdowns() {
    document.querySelectorAll('.menu-item').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const menuKey = el.getAttribute('data-menu') || 'Finder';
            const isAlreadyActive = el.classList.contains('active');
            // Close any active menu first
            closeDropdown();
            if (!isAlreadyActive) {
                el.classList.add('active');
                const rect = el.getBoundingClientRect();
                renderDropdown(menuKey, rect.left);
            }
        });
    });
    // Apple Menu separate trigger
    const appleTrigger = document.getElementById('apple-menu-trigger');
    appleTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isAlreadyActive = appleTrigger.classList.contains('active');
        closeDropdown();
        if (!isAlreadyActive) {
            appleTrigger.classList.add('active');
            const rect = appleTrigger.getBoundingClientRect();
            renderDropdown('Apple', rect.left);
        }
    });
    // Overlay click to close
    document.getElementById('dropdown-overlay')?.addEventListener('click', closeDropdown);
}
/* ──────────────────────────────────────────────────────────────────────────
   Dock Minimized Updates
   ────────────────────────────────────────────────────────────────────────── */
function renderDock() {
    const minimizedContainer = document.getElementById('dock-minimized-items');
    const minimizedDivider = document.getElementById('dock-minimized-divider');
    if (!minimizedContainer || !minimizedDivider)
        return;
    const minimizedList = state.minimized;
    if (minimizedList.length === 0) {
        minimizedContainer.innerHTML = '';
        minimizedDivider.classList.add('hidden');
        return;
    }
    minimizedDivider.classList.remove('hidden');
    minimizedContainer.innerHTML = minimizedList.map(id => {
        const isAbout = id === 'about';
        const label = isAbout ? "About Me" : (PROJECTS.find(p => p.id === id)?.name || "");
        return `
      <div class="dock-item" data-restore-id="${id}" title="${label}">
        <div style="width: ${state.isMobile ? 42 : 50}px; height: ${state.isMobile ? 42 : 50}px; display: flex; align-items: center; justify-content: center;">
          ${getFolderIconSVG(state.isMobile ? 42 : 50)}
        </div>
        <div class="dock-tooltip">${label}</div>
      </div>
    `;
    }).join('');
    minimizedContainer.querySelectorAll('.dock-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-restore-id') || '';
            restoreWindow(id);
        });
    });
}
/* ──────────────────────────────────────────────────────────────────────────
   System Clock
   ────────────────────────────────────────────────────────────────────────── */
function updateClock() {
    const timeText = document.getElementById('menu-time');
    const dateText = document.getElementById('menu-date');
    if (!timeText || !dateText)
        return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    const dateStr = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    timeText.textContent = timeStr;
    dateText.textContent = dateStr;
}
/* ──────────────────────────────────────────────────────────────────────────
   Initialize Application
   ────────────────────────────────────────────────────────────────────────── */
function checkMobile() {
    state.isMobile = window.innerWidth <= 820;
}
function handleResize() {
    const wasMobile = state.isMobile;
    checkMobile();
    if (wasMobile !== state.isMobile) {
        // If layout mode changes, clean up all windows to avoid position issues
        closeAllWindows();
        const desktopMain = document.getElementById('desktop-main');
        const mobileDashboard = document.getElementById('mobile-dashboard');
        if (state.isMobile) {
            desktopMain?.classList.add('hidden');
            mobileDashboard?.classList.remove('hidden');
        }
        else {
            desktopMain?.classList.remove('hidden');
            mobileDashboard?.classList.add('hidden');
        }
        renderDock();
    }
}
function init() {
    checkMobile();
    // Show correct layout based on size
    const desktopMain = document.getElementById('desktop-main');
    const mobileDashboard = document.getElementById('mobile-dashboard');
    if (state.isMobile) {
        desktopMain?.classList.add('hidden');
        mobileDashboard?.classList.remove('hidden');
    }
    else {
        desktopMain?.classList.remove('hidden');
        mobileDashboard?.classList.add('hidden');
    }
    // Setup Clock
    updateClock();
    setInterval(updateClock, 1000);
    // Setup desktop layouts
    renderDesktopIcons();
    renderMobileGrid();
    setupAboutWidget();
    setupMobileProfileHeader();
    setupMenuDropdowns();
    // Setup general click/dismiss events
    document.addEventListener('click', () => {
        selectDesktopIcon(null);
    });
    // Spotlight search events
    document.getElementById('search-trigger')?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSpotlight(true);
    });
    document.getElementById('dock-search')?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSpotlight(true);
    });
    document.getElementById('spotlight-close')?.addEventListener('click', () => {
        toggleSpotlight(false);
    });
    document.getElementById('spotlight-search')?.addEventListener('click', () => {
        toggleSpotlight(false);
    });
    document.querySelector('.spotlight-card')?.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    document.getElementById('spotlight-input')?.addEventListener('input', (e) => {
        const q = e.target.value;
        renderSpotlightResults(q);
    });
    // Resume Overlay events
    document.getElementById('dock-resume')?.addEventListener('click', openResume);
    document.getElementById('resume-back')?.addEventListener('click', closeResume);
    // Dock items
    document.getElementById('dock-mail')?.addEventListener('click', () => {
        window.location.href = `mailto:${PROFILE.email}?subject=Hi%20Sakshi%20—%20from%20your%20portfolio`;
    });
    document.getElementById('dock-linkedin')?.addEventListener('click', () => {
        window.open(PROFILE.linkedin, "_blank");
    });
    document.getElementById('dock-github')?.addEventListener('click', () => {
        window.open(PROFILE.github, "_blank");
    });
    // Spotlight keyboard shortcuts
    window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
            e.preventDefault();
            toggleSpotlight(true);
        }
        if (e.key === 'Escape') {
            toggleSpotlight(false);
            closeResume();
        }
    });
    window.addEventListener('resize', handleResize);
    // Boot progress simulation
    let progress = 0;
    const bootTimer = setInterval(() => {
        progress += Math.random() * 4 + 1.2;
        const current = Math.min(progress, 100);
        const progressBar = document.getElementById('boot-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${current}%`;
        }
        if (current >= 100) {
            clearInterval(bootTimer);
            setTimeout(() => {
                document.getElementById('boot-screen')?.classList.add('fade-out');
                document.getElementById('desktop-env')?.classList.remove('hidden');
                // Setup initial Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 500);
            setTimeout(() => {
                document.getElementById('boot-screen')?.remove();
            }, 1300);
        }
    }, 35);
}
// Start application on page load
window.addEventListener('DOMContentLoaded', init);
