/**
 * ═══════════════════════════════════════════════════════════════
 *  DigiArtz — AI Assistant Data File
 *  /src/data/aiAssistantData.js
 *
 *  This is the ONLY file you need to edit to:
 *   - Change welcome / help center messages
 *   - Add or remove categories
 *   - Add new questions & answers within a category
 *   - Add or edit speech bubble messages
 *
 *  The chatbot component reads everything from this object
 *  and renders it dynamically — no code changes needed.
 * ═══════════════════════════════════════════════════════════════
 */

window.ZEO_DATA = {

  /* ─────────────────────────────────────────────
     SCREEN 1 — Shown automatically on open
  ───────────────────────────────────────────── */
  welcomeMessage: "Welcome! I'm Zeo, your AI assistant. Whether you need answers, guidance, or quick assistance, just select one of the options below and I'll be happy to help.",

  /* Initial options shown below the welcome message.
     Each item: { id, label }
     The id maps to a handler key (see `screens` below). */
  welcomeOptions: [
    { id: "helpCenter", label: "Need Help?" }
  ],

  /* ─────────────────────────────────────────────
     SCREEN 2 — Help Center landing
  ───────────────────────────────────────────── */
  helpCenterMessage: "Welcome to the Help Center. Choose a category below to get started, and I'll provide quick, accurate assistance tailored to your selection.",

  /* Categories — add objects here to create new help sections.
     Each category: { id, icon, label, description }
     Leave the array empty for now — the UI will show a
     "coming soon" placeholder automatically.              */
  categories: [
    /* Example (uncomment to activate):
    {
      id: "gettingStarted",
      icon: "🚀",
      label: "Getting Started",
      description: "New here? Start with the basics."
    },
    {
      id: "artworks",
      icon: "🎨",
      label: "Artworks & Gallery",
      description: "Questions about the artwork gallery."
    },
    {
      id: "templates",
      icon: "📦",
      label: "Website Templates",
      description: "Explore and use DigiArtz templates."
    },
    {
      id: "account",
      icon: "👤",
      label: "Account & Profile",
      description: "Login, signup, and account settings."
    }
    */
  ],

  /* ─────────────────────────────────────────────
     RESPONSES — keyed by category id
     Each response: { question, answer }
     Add as many Q&As as needed per category.
  ───────────────────────────────────────────── */
  responses: {
    /* Example (matches category id above):
    gettingStarted: [
      {
        question: "What is DigiArtz?",
        answer: "DigiArtz is a digital art portfolio and community by KOE — showcasing original character art, car designs, landscapes, and more."
      },
      {
        question: "How do I browse artwork?",
        answer: "Scroll down on the homepage to explore the gallery, or use the navigation to jump to specific sections."
      }
    ],
    artworks: [
      {
        question: "Can I download artworks?",
        answer: "Some artworks are available for download. Look for the download button when viewing a piece in the lightbox."
      }
    ]
    */
  },

  /* ─────────────────────────────────────────────
     SPEECH BUBBLE MESSAGES
     These cycle randomly above the floating bot icon.
     Add, remove, or edit messages freely.
  ───────────────────────────────────────────── */
  speechBubbles: [
    "👋 Hey! Need a hand?",
    "😊 Need some help?",
    "✨ I'm here to help!",
    "👀 Looking for something?",
    "🚀 Ready to begin?",
    "💡 Got a question?",
    "🤝 Let's figure it out!",
    "🌟 Need a quick answer?",
    "😄 What can I do for you?",
    "🤖 Zeo is here to help!"
  ]

};
