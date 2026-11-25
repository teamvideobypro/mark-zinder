export const SITE_META = {
  speakerName: 'Mark Zinder',
  tagline: 'Historian · Futurist · Keynote Storyteller',
  domain: 'markzinder.com',
  email: 'booking@markzinder.com',
  phone: '(800) 555-0194',
  location: 'Nashville, Tennessee · Speaking Worldwide',
};

export const NAV_LINKS = [
  { label: 'About', to: '/#about' },
  { label: 'Speaking Topics', to: '/#topics' },
  { label: 'Cruise Ship Speaking', to: '/cruise-ship-speaking', featured: true },
  { label: 'Videos', to: '/#videos' },
  { label: 'Contact', to: '/#contact' },
];

export const HERO_CONTENT = {
  badge: 'Historian · Futurist · Storyteller',
  headline: 'Understanding the Revolutions Shaping Our World — ',
  headlineAccent: 'And What Happens Next.',
  subheadline:
    'Entertaining. Enlightening. Actionable insights on AI, History, and Future Trends with Historian & Futurist Mark Zinder.',
  primaryCta: 'Watch Video',
  secondaryCta: 'Book Mark Zinder',
  proofItems: [
    { highlight: '7× Retention', text: 'Laughing while learning' },
    { highlight: '1,000-Seat Theaters', text: 'Packed from land to sea' },
    { highlight: '40+ Years', text: 'Trusted by NASA, IBM & global forums' },
  ],
};

export const SPEAKING_TOPICS = [
  {
    id: 'how-we-got-to-now',
    number: '01',
    tag: 'Historical Revolutions',
    title: 'How We Got to Now',
    subtitle: 'The historical revolutions and patterns that predict the future.',
    description:
      'Every astonishing breakthrough of our era has an echo in history. Mark connects the dots from the printing press and age of sail to modern global transformations — giving audiences a crystal-clear compass for what comes next.',
    takeaways: [
      'Why turbulent eras consistently precede golden ages of human ingenuity',
      'Surprising historical parallels from the Renaissance, Industrial Age, and Space Race',
      'How to recognize real generational shifts hidden beneath daily headlines',
    ],
    idealFor: 'Cruise Sea-Day Enrichment, University Forums & Executive Retreats',
    duration: '45–60 Min Keynote + Audience Q&A',
    outlineIntro:
      'Delivered with crisp storytelling, historical humor, and awe-inspiring visuals — zero dry academic lectures.',
  },
  {
    id: 'beyond-ai',
    number: '02',
    tag: 'Future Breakthroughs',
    title: 'Beyond AI: What in the World Happens Next?',
    subtitle:
      'Exploring extraordinary breakthroughs like solar energy, vertical farming, and supercomputing.',
    description:
      'Step past the doom-and-gloom headlines. Mark unveils the astonishing real-world inventions transforming how humanity generates clean energy, grows abundant food, heals disease, and solves once-impossible challenges.',
    takeaways: [
      'Next-generation solar abundance & the quiet revolution in global energy',
      'Vertical farming & bio-engineering feeding cities on a fraction of the water',
      'How supercomputing & human-centered AI unlock a new era of curiosity and longevity',
    ],
    idealFor: 'Curious Lifelong Learners, Innovation Summits & Luxury Voyages',
    duration: '45–60 Min Keynote + Fireside Q&A',
    outlineIntro:
      'Demystifies cutting-edge science in warm, plain language everyone in the room enjoys.',
  },
  {
    id: 'what-are-the-odds',
    number: '03',
    tag: 'Humor & Human Resilience',
    title: 'What Are the Odds?',
    subtitle:
      'A humorous, inspiring journey about overcoming obstacles and changing your life.',
    description:
      'Drawing on his early years managing comedy clubs, performing magic, and studying improbable turning points in history, Mark delivers a side-splitting yet deeply moving exploration of luck, timing, and resilience.',
    takeaways: [
      'Hilarious true stories of improbable coincidences that altered world history',
      'Why curiosity and adaptability beat rigid predictions in every chapter of life',
      'Practical wisdom for turning unexpected detours into your finest chapter',
    ],
    idealFor: 'Opening Night Galas, Special Interest Series & Cultural Foundations',
    duration: '45–60 Min Entertaining Keynote',
    outlineIntro:
      'Stand-up timing meets profound optimism — leaving audiences wiping away tears of laughter and inspiration.',
  },
];

export const VIDEO_REELS = [
  {
    id: 'ai-retaining-relevance',
    tag: 'Keynote Program · 03:20',
    title: 'Artificial Intelligence: Retaining Your Relevance',
    duration: '03:20',
    thumb: '/images/hero-stage-speaker.jpg',
    description:
      'Explore how AI is transforming our world without losing the human touch — showing why humans working alongside AI will always outperform technology alone.',
    chapters: [
      {
        time: '0:00',
        label: 'Humans Alongside AI',
        caption: '"Humans working alongside AI will replace humans working without AI — yet your curiosity, humor, and judgment remain irreplaceable."',
        image: '/images/hero-stage-speaker.jpg',
      },
      {
        time: '1:15',
        label: 'From Gutenberg to Generative Intelligence',
        caption: '"Every great tool in history sparked fear first and human flourishing second. Here is how to stay ahead of the curve with a smile."',
        image: '/images/sizzle-future-trends.jpg',
      },
    ],
  },
  {
    id: 'how-we-got-to-now-reel',
    tag: 'Keynote Program · 03:45',
    title: 'How We Got to Now',
    duration: '03:45',
    thumb: '/images/cruise-theater-packed.jpg',
    description:
      'Look backward through history’s most dramatic turning points to see clearly into tomorrow — delivered with Mark’s signature comedy-club timing.',
    chapters: [
      {
        time: '0:00',
        label: 'Historical Patterns That Predict Tomorrow',
        caption: '"History doesn’t repeat verbatim, but its rhythms are unmistakable once you know where to look."',
        image: '/images/cruise-theater-packed.jpg',
      },
      {
        time: '1:40',
        label: 'Laughing While Learning',
        caption: '"Audiences retain 7× more information when they are laughing while they learn — turning complex history into unforgettable stories."',
        image: '/images/hero-stage-speaker.jpg',
      },
    ],
  },
  {
    id: 'what-happens-next-reel',
    tag: 'Keynote Program · 04:10',
    title: 'What Happens Next?',
    duration: '04:10',
    thumb: '/images/sizzle-future-trends.jpg',
    description:
      'An optimistic, eye-opening look at solar energy, vertical farming, supercomputing, and the extraordinary breakthroughs reshaping daily life.',
    chapters: [
      {
        time: '0:00',
        label: 'Solar, Vertical Farms & Supercomputing',
        caption: '"While headlines chase today’s noise, breakthroughs in clean energy and abundant food are quietly rewriting our future."',
        image: '/images/sizzle-future-trends.jpg',
      },
      {
        time: '2:05',
        label: 'Reason for Long-Term Optimism',
        caption: '"The best chapters of human ingenuity are not behind us — they are unfolding right in front of us."',
        image: '/images/mark-zinder-portrait.jpg',
      },
    ],
  },
  {
    id: 'is-it-different-this-time',
    tag: 'Keynote Program · 02:55',
    title: 'Is It Different This Time?',
    duration: '02:55',
    thumb: '/images/mark-zinder-portrait.jpg',
    description:
      'Separating real generational shifts from passing headlines — equipping audiences with calm perspective, wit, and unmistakable clarity.',
    chapters: [
      {
        time: '0:00',
        label: 'Separating Signal From Noise',
        caption: '"Every generation believes it lives in the most turbulent moment ever recorded — and history has a surprising answer."',
        image: '/images/mark-zinder-portrait.jpg',
      },
      {
        time: '1:25',
        label: 'Standing Room Only at Sea & on Land',
        caption: '"Give an audience perspective instead of panic, and you earn their attention from the first laugh to the standing ovation."',
        image: '/images/cruise-theater-packed.jpg',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    featured: true,
    quote:
      'There are only two people I could listen to all day; one is Frank Sinatra and the other is Mark Zinder.',
    author: 'Joe Volturo',
    role: 'Executive Audience Review',
  },
  {
    featured: false,
    quote:
      'In just a few hours, word of your outstanding presentation spread like wildfire. Your delivery was dynamic and laced with facts and insights that kept the entire audience waiting for more.',
    author: 'Program Committee Review',
    role: 'Southern California Keynote Forum',
  },
  {
    featured: false,
    quote:
      'We wanted a speaker who would not only entertain, but give real reasons for long-term optimism. Mark was a home run — the audience comment cards were off the charts.',
    author: 'Event & Enrichment Director',
    role: 'National Conference & Special Interest Series',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Does Mark tailor his talks for cruise ship sea-day enrichment vs. corporate keynotes?',
    answer:
      'Yes. For ocean and luxury cruise sailings, Mark delivers a 2-to-6 part Special Interest series designed specifically for curious, well-traveled 60+ guests — blending stand-up humor, world history, and optimistic AI insights with zero sales pitches.',
  },
  {
    question: 'Why do audiences retain 7× more information in Mark’s sessions?',
    answer:
      'Rooted in his early career managing comedy clubs and performing magic, Mark pairs crisp comedic timing with clear visual storytelling. When guests are laughing while learning, complex ideas stick effortlessly.',
  },
  {
    question: 'What AV and stage setup does Mark require in a 1,000-seat theater?',
    answer:
      'A simple wireless lavalier or headset microphone and standard HDMI/16:9 projection. Mark brings self-contained, crisp visuals and requires zero complex stage rigging.',
  },
  {
    question: 'How far in advance should Cruise Directors or Event Planners reach out?',
    answer:
      'We recommend checking availability 3–9 months ahead for world cruises and headline conferences, though our Nashville speaking desk responds to all inquiries within 24 hours.',
  },
];

export const CRUISE_SERIES_DAYS = [
  {
    day: 'Sea Day 1',
    title: 'How We Got to Now: The Hidden Blueprint of History',
    tag: 'Historical Storytelling',
    summary:
      'Mark opens the voyage by weaving maritime exploration, Renaissance breakthroughs, and surprising human inventions into a thrilling narrative of how our modern world was built.',
    highlights: [
      'Sets an electric, joyful tone for the entire enrichment program',
      'Sparks lively conversation across dinner tables and lounges',
      'Accessible, witty storytelling tailored for well-traveled 60+ guests',
    ],
    duration: '45-Min Main Theater Talk + 15-Min Live Q&A',
  },
  {
    day: 'Sea Day 2',
    title: 'Beyond AI: What in the World Happens Next?',
    tag: 'Optimistic Futurism',
    summary:
      'Guests discover what truly lies beyond the AI buzzwords: dramatic advances in solar power, vertical farming, longevity science, and supercomputing explained with warmth and humor.',
    highlights: [
      'Zero intimidating tech jargon or bleak sci-fi alarmism',
      'Visual, jaw-dropping real-world breakthroughs already unfolding',
      'Frequently drives repeat attendance that fills all 1,000 seats',
    ],
    duration: '45-Min Main Theater Talk + 15-Min Live Q&A',
  },
  {
    day: 'Sea Day 3',
    title: 'What Are the Odds? Laughing Through Life’s Great Turns',
    tag: 'Comedy & Inspiration',
    summary:
      'Blending comedy-club timing, sleight-of-hand wonder, and unforgettable true stories of improbable odds, Mark delivers a joyful finale that leaves the theater roaring on its feet.',
    highlights: [
      'Stand-up comedy pacing fused with deep human inspiration',
      '7× higher retention because guests laugh from start to finish',
      'Optional evening "Ask the Futurist" fireside salon in the lounge',
    ],
    duration: '50-Min Signature Finale',
  },
];
