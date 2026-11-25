import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Play,
  Sparkles,
  Star,
} from 'lucide-react';
import SizzleReelBackground from '../components/SizzleReelBackground';
import ClientLogos from '../components/ClientLogos';
import BookingForm from '../components/BookingForm';
import {
  FAQ_ITEMS,
  HERO_CONTENT,
  SITE_META,
  SPEAKING_TOPICS,
  TESTIMONIALS,
  VIDEO_REELS,
} from '../data/siteContent';

const BENTO_CARDS = [
  {
    num: '01',
    title: SPEAKING_TOPICS[0].title,
    subtitle: SPEAKING_TOPICS[0].subtitle,
    image: '/images/sizzle-future-trends.jpg',
    type: 'topic',
    payload: SPEAKING_TOPICS[0],
  },
  {
    num: '02',
    title: SPEAKING_TOPICS[1].title,
    subtitle: SPEAKING_TOPICS[1].subtitle,
    image: '/images/hero-stage-speaker.jpg',
    type: 'topic',
    payload: SPEAKING_TOPICS[1],
  },
  {
    num: '03',
    title: SPEAKING_TOPICS[2].title,
    subtitle: SPEAKING_TOPICS[2].subtitle,
    image: '/images/cruise-theater-packed.jpg',
    type: 'topic',
    payload: SPEAKING_TOPICS[2],
  },
  {
    num: '04',
    title: VIDEO_REELS[0].title,
    subtitle: VIDEO_REELS[0].description,
    image: '/images/mark-zinder-portrait.jpg',
    type: 'video',
    payload: VIDEO_REELS[0],
  },
];

export default function HomePage({ onOpenVideo, onOpenBooking, onOpenTopic }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  return (
    <>
      {/* 1. FULL-WIDTH 100% VIEWPORT HERO (SUMMITRA COMPOSITION) */}
      <section className="hero-viewport" aria-label="Introduction">
        <SizzleReelBackground />

        <div className="hero-viewport__inner">
          <div className="hero-viewport__top">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              <span>{HERO_CONTENT.badge}</span>
            </div>
          </div>

          <div className="hero-viewport__headline-wrap">
            <span className="hero-tilted-tag">AI · HISTORY · HUMOR</span>
            <h1 className="hero-viewport__title">
              {HERO_CONTENT.headline}
              <em>{HERO_CONTENT.headlineAccent}</em>
            </h1>
          </div>

          <div className="hero-viewport__bottom">
            <div className="hero-viewport__left-col">
              <p className="hero-viewport__subtitle">{HERO_CONTENT.subheadline}</p>

              <div className="hero__ctas">
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => onOpenVideo(VIDEO_REELS[0])}
                >
                  <Play size={16} fill="currentColor" aria-hidden="true" />
                  <span>{HERO_CONTENT.primaryCta}</span>
                </button>

                <button
                  type="button"
                  className="btn btn--outline-light"
                  onClick={() => onOpenBooking('Keynote Speaking Inquiry')}
                >
                  <CalendarCheck size={16} aria-hidden="true" />
                  <span>{HERO_CONTENT.secondaryCta}</span>
                </button>
              </div>
            </div>

            <div className="hero-stat-pills" aria-label="Key speaker metrics">
              <div className="hero-stat-pill">
                <strong>7×</strong>
                <span>Laughing While Learning</span>
              </div>
              <div className="hero-stat-pill">
                <strong>1,000+</strong>
                <span>Cruise Theater Seats</span>
              </div>
              <div className="hero-stat-pill">
                <strong>40+</strong>
                <span>Years on Global Stages</span>
              </div>
              <div className="hero-stat-pill">
                <strong>NASA · IBM</strong>
                <span>&amp; Global Forums</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2x2 BENTO GRID — SPEAKING TOPICS & KEYNOTE HIGHLIGHTS */}
      <section id="topics" className="section section--ivory-soft" aria-labelledby="topics-heading">
        <div className="container">
          <div className="malcom-centered-head">
            <span className="eyebrow">Signature Keynotes</span>
            <h2 id="topics-heading" className="section-heading">
              Practical Insights, Sharp Humor &amp; Unforgettable Keynotes
            </h2>
            <p className="section-lead" style={{ margin: '0 auto 24px' }}>
              Zero jargon. Zero dry slides. Select a keynote pillar below to explore takeaways
              and stage outlines.
            </p>
            <div className="malcom-head-actions">
              <button
                type="button"
                className="btn btn--navy btn--sm"
                onClick={() => onOpenBooking('Custom Keynote Program')}
              >
                Book Mark Zinder
              </button>
              <span className="malcom-rating-pill">
                <Star size={14} fill="currentColor" aria-hidden="true" />
                <span>7× Higher Retention · 40+ Years on Global Stages</span>
              </span>
            </div>
          </div>

          <div className="bento-grid-2x2">
            {BENTO_CARDS.map((card) => (
              <button
                key={card.num}
                type="button"
                className="bento-card"
                onClick={() =>
                  card.type === 'topic' ? onOpenTopic(card.payload) : onOpenVideo(card.payload)
                }
              >
                <div className="bento-card__header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="bento-card__num">{card.num}</span>
                    <div style={{ textAlign: 'left' }}>
                      <h3 className="bento-card__title">{card.title}</h3>
                      <span className="bento-card__sub">{card.subtitle}</span>
                    </div>
                  </div>
                  <span className="bento-card__arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="bento-card__media">
                  <img src={card.image} alt={card.title} />
                </div>
              </button>
            ))}
          </div>

          {/* 3-Card Horizontal Idea Strip (Malcom Compact Row) */}
          <div style={{ marginTop: 64 }}>
            <div className="malcom-centered-head" style={{ marginBottom: 32 }}>
              <h3 className="font-serif" style={{ fontSize: '1.85rem', color: 'var(--navy-900)', margin: 0 }}>
                Why Audiences &amp; Organizers Remember Every Word
              </h3>
            </div>
            <div className="mini-strip-grid">
              <div className="mini-strip-card">
                <img src="/images/hero-stage-speaker.jpg" alt="Laughing while learning" />
                <div>
                  <span className="mini-strip-card__num">01 · RETENTION</span>
                  <strong>7× More Information</strong>
                  <p>Audiences retain 7× more because they are laughing while they learn.</p>
                </div>
              </div>
              <div className="mini-strip-card">
                <img src="/images/cruise-theater-packed.jpg" alt="Packed 1,000-seat theater" />
                <div>
                  <span className="mini-strip-card__num">02 · AT SEA</span>
                  <strong>1,000-Seat Cruise Theaters</strong>
                  <p>Stand-up comedy meets intellectual discovery for discerning 60+ guests.</p>
                </div>
              </div>
              <div className="mini-strip-card">
                <img src="/images/sizzle-future-trends.jpg" alt="Optimistic futurism" />
                <div>
                  <span className="mini-strip-card__num">03 · PEDIGREE</span>
                  <strong>NASA, IBM &amp; Global Forums</strong>
                  <p>Four decades translating complex trends into optimistic clarity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SPLIT SECTION (WARM SURFACE) */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-portrait-frame">
              <img
                src="/images/mark-zinder-portrait.jpg"
                alt="Editorial portrait of Historian and Futurist Mark Zinder"
              />
            </div>

            <div>
              <span className="eyebrow">About Mark Zinder</span>
              <h2 id="about-heading" className="section-heading">
                Hi, I’m Mark Zinder.
              </h2>
              <p className="section-lead" style={{ marginBottom: 16, color: 'var(--navy-900)', fontWeight: 500 }}>
                From Comedy Clubs &amp; Magic Stages to NASA and the High Seas.
              </p>
              <p style={{ color: 'var(--slate-600)', margin: '0 0 16px', fontSize: '1.04rem' }}>
                Before sharing global stages with pioneers at NASA and IBM — or serving for years
                as National Spokesman alongside legendary global thinker Sir John Templeton — I cut
                my teeth managing comedy clubs and performing sleight-of-hand magic.
              </p>
              <p style={{ color: 'var(--slate-600)', margin: '0 0 26px', fontSize: '1.04rem' }}>
                That unusual combination is my favorite tool on stage: holding a 1,000-seat theater
                in warmth and laughter while translating AI, history, and future breakthroughs into
                stories guests talk about for the rest of the voyage.
              </p>

              <button
                type="button"
                className="btn btn--navy"
                onClick={() => onOpenBooking('About Mark — Speaking Inquiry')}
              >
                <span>Book Mark Zinder</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="trust-inline-wrap" style={{ marginTop: 64 }}>
            <p className="trust-bar__label" style={{ marginBottom: 18 }}>
              Trusted on Global Stages &amp; Executive Forums Including
            </p>
            <ClientLogos />
          </div>
        </div>
      </section>

      {/* 4. STICKY WALKTHROUGH — A THOUGHTFUL PATH FROM HISTORY TO FUTURE */}
      <section className="section section--ivory-soft" aria-labelledby="path-heading">
        <div className="container">
          <div className="malcom-centered-head" style={{ marginBottom: 52 }}>
            <span className="eyebrow">The Keynote Arc</span>
            <h2 id="path-heading" className="section-heading">
              A Thoughtful Path From History to Tomorrow
            </h2>
          </div>

          <div className="sticky-path-grid">
            <div className="sticky-path__media">
              <img
                src="/images/sizzle-future-trends.jpg"
                alt="Historical astrolabe morphing into solar and vertical farming breakthroughs"
              />
            </div>

            <div className="sticky-path__steps">
              {SPEAKING_TOPICS.map((topic) => (
                <div key={topic.id} className="path-step">
                  <span className="path-step__num">PILLAR {topic.number} · {topic.tag}</span>
                  <h3 className="path-step__title">{topic.title}</h3>
                  <p className="path-step__desc">{topic.description}</p>
                  <div className="path-step__box">
                    <strong>Key Audience Takeaway</strong>
                    <p>{topic.takeaways[0]}</p>
                    <button
                      type="button"
                      className="text-link-btn"
                      style={{ marginTop: 10, fontSize: '0.9rem' }}
                      onClick={() => onOpenTopic(topic)}
                    >
                      <span>View Full Keynote Outline</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STAGE REELS & VIDEO PROGRAMS (3-CARD RESOURCE GRID) */}
      <section id="videos" className="section" aria-labelledby="videos-heading">
        <div className="container">
          <div className="malcom-centered-head" style={{ marginBottom: 44 }}>
            <span className="eyebrow">Keynote Speaking Programs &amp; Stage Reels</span>
            <h2 id="videos-heading" className="section-heading">
              Stories &amp; Insights That Move Audiences Forward
            </h2>
          </div>

          <div className="resource-cards-grid">
            {VIDEO_REELS.slice(0, 3).map((reel) => (
              <button
                key={reel.id}
                type="button"
                className="resource-card"
                onClick={() => onOpenVideo(reel)}
              >
                <div className="resource-card__thumb">
                  <img src={reel.thumb} alt={reel.title} />
                  <span className="resource-card__play">
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                  </span>
                </div>
                <div className="resource-card__body">
                  <span className="resource-card__tag">{reel.tag}</span>
                  <h3 className="resource-card__title">{reel.title}</h3>
                  <p className="resource-card__desc">{reel.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onOpenVideo(VIDEO_REELS[3] || VIDEO_REELS[0])}
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              <span>Watch “Is It Different This Time?” Preview</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS GRID */}
      <section className="section section--ivory-soft" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="malcom-centered-head" style={{ marginBottom: 44 }}>
            <span className="eyebrow">Audience &amp; Organizer Praise</span>
            <h2 id="testimonials-heading" className="section-heading">
              Words From Audiences &amp; Directors
            </h2>
          </div>

          <div className="summitra-testimonials-grid">
            {[TESTIMONIALS[1], TESTIMONIALS[0], TESTIMONIALS[2]].map((item) => (
              <blockquote
                key={item.author}
                className={`summitra-testimonial-card ${
                  item.featured ? 'summitra-testimonial-card--accent' : ''
                }`}
                style={{ margin: 0 }}
              >
                <div>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="summitra-testimonial-card__quote">“{item.quote}”</p>
                </div>
                <footer className="testimonial-card__author">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK ROUNDED CRUISE SPOTLIGHT CARD (MALCOM "WHAT'S COMING UP" CONTAINER) */}
      <section className="section" aria-labelledby="cruise-spotlight-heading">
        <div className="container">
          <div className="malcom-dark-feature">
            <div className="malcom-dark-feature__media">
              <img
                src="/images/cruise-theater-packed.jpg"
                alt="1,000-seat luxury cruise ship theater"
              />
            </div>

            <div className="malcom-dark-feature__content">
              <span className="eyebrow eyebrow--light">Special Interest Enrichment at Sea</span>
              <h2 id="cruise-spotlight-heading" className="section-heading section-heading--light">
                Captivating Audiences Across the Seven Seas.
              </h2>
              <div className="vibe-pill">
                <Sparkles size={14} aria-hidden="true" />
                <span>Stand-up comedy meets intellectual discovery.</span>
              </div>
              <p className="section-lead section-lead--light" style={{ marginBottom: 24 }}>
                Audiences retain <strong style={{ color: '#F3D57A' }}>7× more information</strong>{' '}
                because they are laughing while they learn — turning sea-day afternoons into{' '}
                <strong style={{ color: '#F3D57A' }}>1,000-seat cruise ship theaters</strong>{' '}
                buzzing with conversation.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link to="/cruise-ship-speaking" className="btn btn--gold">
                  <span>Explore Cruise Ship Speaking</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  className="btn btn--outline-light"
                  onClick={() => onOpenBooking('Cruise Ship Enrichment Series')}
                >
                  Check Sailing Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="section section--ivory-soft" aria-labelledby="faq-heading">
        <div className="container">
          <div className="malcom-centered-head" style={{ marginBottom: 38 }}>
            <span className="eyebrow">Organizer Details</span>
            <h2 id="faq-heading" className="section-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = idx === openFaqIdx;
              return (
                <div key={item.question} className="faq-item">
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && <div className="faq-answer">{item.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CENTERED CTA & CONTACT BOOKING */}
      <section id="contact" className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="malcom-centered-head" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Book Mark Zinder</span>
            <h2 id="contact-heading" className="section-heading">
              Ready to Bring History, AI &amp; Laughter to Your Stage?
            </h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              Share your sailing dates or event details and our Nashville speaking desk will reply
              within 24 hours.
            </p>
          </div>

          <div className="booking-grid">
            <div>
              <div className="booking-info-list" style={{ marginTop: 0 }}>
                <div className="booking-info-item booking-info-item--light">
                  <Mail size={20} aria-hidden="true" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--navy-900)' }}>
                      Direct Booking Desk
                    </strong>
                    <span style={{ color: 'var(--slate-600)' }}>{SITE_META.email}</span>
                  </div>
                </div>
                <div className="booking-info-item booking-info-item--light">
                  <Phone size={20} aria-hidden="true" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--navy-900)' }}>
                      Speaker Office
                    </strong>
                    <span style={{ color: 'var(--slate-600)' }}>{SITE_META.phone}</span>
                  </div>
                </div>
                <div className="booking-info-item booking-info-item--light">
                  <MapPin size={20} aria-hidden="true" />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--navy-900)' }}>
                      Home Base &amp; Ports
                    </strong>
                    <span style={{ color: 'var(--slate-600)' }}>
                      {SITE_META.location} · Easy embarkation globally
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-form-card" style={{ border: '1px solid var(--ivory-200)' }}>
              <h3
                className="font-serif"
                style={{ fontSize: '1.55rem', color: 'var(--navy-900)', margin: '0 0 8px' }}
              >
                Request Date Availability
              </h3>
              <p style={{ color: 'var(--slate-600)', margin: '0 0 22px', fontSize: '0.95rem' }}>
                For cruise directors, conference planners, and enrichment teams.
              </p>
              <BookingForm defaultEventType="Cruise Ship Enrichment Series" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
