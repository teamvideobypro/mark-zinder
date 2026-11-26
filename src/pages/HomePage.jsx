import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  Eye,
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
  WORK_WITH_MARK_STEPS,
} from '../data/siteContent';

const WORK_STEP_ICONS = {
  see: Eye,
  'reach-out': Mail,
  book: CalendarCheck,
  captivate: Sparkles,
};

export default function HomePage({ onOpenVideo, onOpenBooking, onOpenTopic }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  return (
    <>
      {/* 1. FULL-WIDTH 100% VIEWPORT MINIMALIST ARCHITECTURAL HERO */}
      <section className="hero-viewport" aria-label="Introduction">
        <SizzleReelBackground />

        <div className="hero-viewport__inner">
          <div className="hero-viewport__main-stack">
            <span className="hero-kicker">{HERO_CONTENT.badge}</span>

            <h1 className="hero-viewport__title">{HERO_CONTENT.headline}</h1>

            <div className="hero-viewport__body-cta">
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
          </div>

          <div className="hero-viewport__bottom-bar">
            <div className="hero-metrics-flat" aria-label="Speaker highlights">
              <div className="hero-metric-item">
                <strong>7×</strong>
                <span>Higher retention</span>
              </div>
              <div className="hero-metric-item">
                <strong>1,000+</strong>
                <span>Theater seats</span>
              </div>
              <div className="hero-metric-item">
                <strong>40+</strong>
                <span>Years on stage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPEAKING TOPICS: CLEAN 3-COLUMN TYPOGRAPHIC GRID */}
      <section id="topics" className="section section--ivory-soft" aria-labelledby="topics-heading">
        <div className="container">
          <div className="section-head-flat">
            <div>
              <span className="section-kicker">Signature Keynotes</span>
              <h2 id="topics-heading" className="section-heading">
                Three Keynotes on History, AI, and Humor
              </h2>
            </div>
            <p className="section-lead">
              Zero jargon and zero dry slides. Select a topic to view the full stage outline and
              audience takeaways.
            </p>
          </div>

          <div className="flat-topics-grid">
            {SPEAKING_TOPICS.map((topic) => (
              <button
                key={topic.id}
                type="button"
                className="flat-topic-card"
                onClick={() => onOpenTopic(topic)}
              >
                <div className="flat-topic-card__top">
                  <span className="flat-topic-card__num">{topic.number}</span>
                  <ArrowUpRight size={18} className="flat-topic-card__arrow" aria-hidden="true" />
                </div>
                <span className="flat-topic-card__tag">{topic.tag}</span>
                <h3 className="flat-topic-card__title">{topic.title}</h3>
                <p className="flat-topic-card__desc">{topic.description}</p>
                <div className="flat-topic-card__meta">{topic.duration}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT MARK ZINDER: OFFICIAL PHOTO + BIO */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo-frame">
              <img
                src="/images/mark-zinder-official.jpg"
                alt="Mark Zinder, Historian, Futurist, and Keynote Speaker"
              />
            </div>

            <div>
              <span className="section-kicker">About Mark Zinder</span>
              <h2 id="about-heading" className="section-heading">
                From Comedy Clubs and Magic Stages to NASA and the High Seas.
              </h2>
              <p className="section-lead" style={{ marginBottom: 12 }}>
                Before sharing global stages with pioneers at NASA and IBM, or serving as National
                Spokesman alongside Sir John Templeton, Mark managed comedy clubs and performed
                magic.
              </p>
              <p style={{ color: 'var(--slate-600)', margin: '0 0 18px', fontSize: '1.04rem' }}>
                That background shapes every keynote today: holding a 1,000-seat room in warmth and
                laughter while translating AI, history, and future trends into stories guests
                remember.
              </p>

              <button
                type="button"
                className="btn btn--navy"
                onClick={() => onOpenBooking('About Mark Inquiry')}
              >
                <span>Book Mark Zinder</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="trust-inline-wrap">
            <p className="trust-bar__label">Trusted on Global Stages Including</p>
            <ClientLogos />
          </div>
        </div>
      </section>

      {/* 4. KEYNOTE PROGRAM VIDEOS (4 YOUTUBE VIDEOS WITH THUMBNAILS) */}
      <section id="videos" className="section section--ivory-soft" aria-labelledby="videos-heading">
        <div className="container">
          <div className="section-head-flat" style={{ marginBottom: 36 }}>
            <div>
              <span className="section-kicker">Keynote Programs</span>
              <h2 id="videos-heading" className="section-heading">
                Watch Mark’s Keynote Program Previews
              </h2>
            </div>
            <p className="section-lead">
              Select any keynote video below to watch the program preview.
            </p>
          </div>

          <div className="program-videos-grid">
            {VIDEO_REELS.map((reel) => (
              <button
                key={reel.id}
                type="button"
                className="program-video-card"
                onClick={() => onOpenVideo(reel)}
              >
                <div className="program-video-card__thumb">
                  <img src={reel.thumb} alt={reel.title} />
                  <span className="program-video-card__play">
                    <Play size={20} fill="currentColor" aria-hidden="true" />
                  </span>
                </div>
                <div className="program-video-card__body">
                  <span className="flat-topic-card__tag">{reel.tag}</span>
                  <h3 className="program-video-card__title">{reel.title}</h3>
                  <p className="program-video-card__desc">{reel.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HERE'S HOW TO WORK WITH MARK */}
      <section className="section" aria-labelledby="work-with-mark-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <span className="section-kicker">Simple Booking Process</span>
            <h2 id="work-with-mark-heading" className="section-heading">
              Here’s How To Work With Mark
            </h2>
          </div>

          <div className="work-steps-grid">
            {WORK_WITH_MARK_STEPS.map((step) => {
              const Icon = WORK_STEP_ICONS[step.id] || Sparkles;
              return (
                <div key={step.id} className="work-step-item">
                  <div className="work-step-icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <h3 className="work-step-title">{step.title}</h3>
                  <p className="work-step-desc">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 42 }}>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onOpenBooking('Contact Mark Inquiry')}
            >
              Contact Mark
            </button>
          </div>
        </div>
      </section>

      {/* 5. CRUISE SHIP SPEAKING FLAT SPOTLIGHT */}
      <section className="section" aria-labelledby="cruise-spotlight-heading">
        <div className="container">
          <div className="cruise-flat-banner">
            <div className="cruise-flat-banner__left">
              <span className="section-kicker section-kicker--light">
                Special Interest Enrichment at Sea
              </span>
              <h2 id="cruise-spotlight-heading" className="section-heading section-heading--light">
                Captivating Audiences Across the Seven Seas.
              </h2>
              <p className="section-lead section-lead--light" style={{ marginBottom: 16 }}>
                Stand-up comedy meets intellectual discovery. Guests retain 7× more information
                because they laugh while learning, filling 1,000-seat cruise ship theaters on sea
                days.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link to="/cruise-ship-speaking" className="btn btn--gold">
                  <Anchor size={16} aria-hidden="true" />
                  <span>Explore Cruise Ship Speaking</span>
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

            <div className="cruise-flat-banner__stats">
              <div className="cruise-stat-box">
                <strong>7×</strong>
                <span>Higher retention when audiences laugh while learning</span>
              </div>
              <div className="cruise-stat-box">
                <strong>1,000+</strong>
                <span>Main theater seats packed on sea days</span>
              </div>
              <div className="cruise-stat-box">
                <strong>0</strong>
                <span>Sales pitches. Pure enrichment only.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="section section--ivory-soft" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-head-flat" style={{ marginBottom: 36 }}>
            <div>
              <span className="section-kicker">Audience Praise</span>
              <h2 id="testimonials-heading" className="section-heading">
                Words From Audiences &amp; Directors
              </h2>
            </div>
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

      {/* 7. FAQ ACCORDION */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-head-flat" style={{ marginBottom: 32 }}>
            <div>
              <span className="section-kicker">Logistics</span>
              <h2 id="faq-heading" className="section-heading">
                Frequently Asked Questions
              </h2>
            </div>
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

      {/* 8. CONTACT & BOOKING */}
      <section id="contact" className="section section--ivory-soft" aria-labelledby="contact-heading">
        <div className="container">
          <div className="booking-grid">
            <div>
              <span className="section-kicker">Book Mark Zinder</span>
              <h2 id="contact-heading" className="section-heading">
                Bring History, AI, and Laughter to Your Stage
              </h2>
              <p className="section-lead" style={{ marginBottom: 24 }}>
                Share your sailing dates or event details. Our Nashville speaking desk replies
                within 24 hours.
              </p>

              <div className="booking-info-list">
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
                    <span style={{ color: 'var(--slate-600)' }}>{SITE_META.location}</span>
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
