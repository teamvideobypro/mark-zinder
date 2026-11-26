import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  Compass,
  Play,
  Users,
} from 'lucide-react';
import ClientLogos from '../components/ClientLogos';
import BookingForm from '../components/BookingForm';
import { CRUISE_SERIES_DAYS, TESTIMONIALS, VIDEO_REELS } from '../data/siteContent';

export default function CruiseShipPage({ onOpenVideo, onOpenBooking }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentDay = CRUISE_SERIES_DAYS[activeDayIdx];

  return (
    <>
      {/* 1. MARITIME HERO (MINIMALIST ARCHITECTURAL NAVY) */}
      <section className="cruise-hero-flat" aria-label="Cruise Ship Speaking Hero">
        <div className="hero-arch-grid" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--gold-300)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to MarkZinder.com</span>
          </Link>

          <div style={{ maxWidth: 780 }}>
            <span className="hero-kicker" style={{ marginBottom: 16 }}>
              Stand-up comedy meets intellectual discovery
            </span>

            <h1 className="hero-viewport__title" style={{ marginBottom: 12 }}>
              Captivating Audiences Across the Seven Seas.
            </h1>

            <p className="hero-viewport__subtitle" style={{ maxWidth: '62ch', marginBottom: 18 }}>
              Designed for Cruise Directors seeking headline Special Interest talent and educated
              60+ guests. Mark packs 1,000-seat cruise ship theaters with talks on AI, history, and
              future trends where audiences retain 7x more information because they laugh while
              learning.
            </p>

            <div className="hero__ctas">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  document
                    .getElementById('cruise-booking')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <CalendarCheck size={17} aria-hidden="true" />
                <span>Book Mark for Your Next Sailing</span>
              </button>

              <button
                type="button"
                className="btn btn--outline-light"
                onClick={() => onOpenVideo(VIDEO_REELS[1])}
              >
                <Play size={17} fill="currentColor" aria-hidden="true" />
                <span>Watch Stage Preview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY CRUISE IMPACT METRICS */}
      <div className="container">
        <div className="stats-ribbon" aria-label="Cruise speaking impact">
          <div className="stat-card">
            <div className="stat-card__num">
              7<span>×</span>
            </div>
            <div className="stat-card__title">Higher Information Retention</div>
            <p className="stat-card__desc">
              Audiences retain 7x more information because they laugh while learning.
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-card__num">
              1,000<span>+</span>
            </div>
            <div className="stat-card__title">Seat Theaters Packed</div>
            <p className="stat-card__desc">
              Turns midday sea-day slots into buzzing main-stage events across the ship.
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-card__num">
              100<span>%</span>
            </div>
            <div className="stat-card__title">Pure Enrichment</div>
            <p className="stat-card__desc">
              Zero sales pitches. Just sharp stories, AI clarity, and genuine humor.
            </p>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE SEA-DAY ENRICHMENT SERIES */}
      <section className="section section--ivory-soft" style={{ marginTop: 48 }} aria-labelledby="series-heading">
        <div className="container">
          <div style={{ maxWidth: 740, marginBottom: 32 }}>
            <span className="section-kicker">Signature 3-Part Voyage Arc</span>
            <h2 id="series-heading" className="section-heading">
              A Multi-Day Enrichment Series Guests Plan Their Sea Days Around
            </h2>
            <p className="section-lead">
              Select a sea day below to preview how Mark builds curiosity, laughter, and repeat
              attendance across the voyage.
            </p>
          </div>

          <div className="series-tabs" role="tablist" aria-label="Sea-day lecture series">
            {CRUISE_SERIES_DAYS.map((item, idx) => (
              <button
                key={item.day}
                type="button"
                role="tab"
                aria-selected={idx === activeDayIdx}
                className={`series-tab ${idx === activeDayIdx ? 'series-tab--active' : ''}`}
                onClick={() => setActiveDayIdx(idx)}
              >
                {item.day}: {item.tag}
              </button>
            ))}
          </div>

          <div className="series-panel" role="tabpanel">
            <div>
              <span className="topic-card__tag">
                {currentDay.day} · {currentDay.duration}
              </span>
              <h3
                className="font-serif"
                style={{ fontSize: '1.9rem', color: 'var(--navy-900)', margin: '8px 0 12px', lineHeight: 1.2 }}
              >
                {currentDay.title}
              </h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '1.04rem', margin: '0 0 20px' }}>
                {currentDay.summary}
              </p>

              <ul className="check-list" style={{ marginTop: 0 }}>
                {currentDay.highlights.map((hl) => (
                  <li key={hl}>
                    <CheckCircle2 size={18} color="#D9641E" aria-hidden="true" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="series-flat-aside">
              <span className="series-flat-aside__kicker">Audience Fit</span>
              <p>
                Built for 60+ world-cruise and ocean-liner guests who enjoy lively debate, sharp
                humor, and optimistic insight.
              </p>
              <button
                type="button"
                className="btn btn--gold btn--sm"
                onClick={() => onOpenBooking(`Cruise Series: ${currentDay.title}`)}
              >
                Request Full Series Deck
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUEST EXPERIENCE VS CRUISE DIRECTOR VALUE */}
      <section className="section" aria-labelledby="why-cruise-heading">
        <div className="container">
          <div style={{ maxWidth: 700, marginBottom: 42 }}>
            <span className="section-kicker">Built for Luxury Voyages</span>
            <h2 id="why-cruise-heading" className="section-heading">
              Why Both Voyagers and Cruise Directors Love Having Mark Aboard
            </h2>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <Compass size={24} color="#D9641E" aria-hidden="true" />
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--navy-900)', margin: 0 }}>
                  For Discerning 60+ Voyagers
                </h3>
              </div>
              <p style={{ color: 'var(--slate-600)', margin: 0 }}>
                Well-traveled guests arrive eager for substance without stuffiness.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>
                    <strong>Laughing While Learning:</strong> Guests remember 7x more because history
                    and AI are served with comedy-club timing.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>
                    <strong>Optimistic &amp; Refreshing:</strong> Clear breakthroughs in solar
                    energy, vertical farming, and supercomputing without tech panic.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>
                    <strong>Approachable Salon Host:</strong> Mark mingles warmly after talks,
                    continuing conversations across the ship.
                  </span>
                </li>
              </ul>
            </div>

            <div className="comparison-card comparison-card--navy">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <Users size={24} color="#E7BC48" aria-hidden="true" />
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#FFFFFF', margin: 0 }}>
                  For Cruise &amp; Enrichment Directors
                </h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Dependable backstage professionalism paired with main-theater drawing power.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>
                    <strong>Packs 1,000-Seat Theaters:</strong> Turns quiet sea-day slots into
                    marquee enrichment highlights with strong comment cards.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>
                    <strong>Plug-and-Play AV:</strong> Self-contained 16:9 visuals built cleanly
                    for theater projection and wireless mics.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>
                    <strong>Adaptable Multi-Lecture Arcs:</strong> Ready for crossings, 7-day
                    sailings, or multi-week World Cruise segments.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PAST CLIENTS + QUOTE */}
      <section className="section section--ivory-soft" aria-label="Credibility and testimonial">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="section-kicker">World-Stage Pedigree</span>
            <p
              className="font-serif"
              style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.95rem)', color: 'var(--navy-900)', margin: '14px 0 12px', lineHeight: 1.38 }}
            >
              “{TESTIMONIALS[0].quote}”
            </p>
            <div style={{ fontWeight: 700, color: 'var(--orange-600)' }}>
              {TESTIMONIALS[0].author}, {TESTIMONIALS[0].role}
            </div>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* 6. CRUISE DIRECTOR BOOKING FORM */}
      <section id="cruise-booking" className="section section--navy" aria-labelledby="cruise-book-heading">
        <div className="container">
          <div className="booking-grid">
            <div>
              <span className="section-kicker section-kicker--light">
                Cruise Line &amp; Charter Bookings
              </span>
              <h2 id="cruise-book-heading" className="section-heading section-heading--light">
                Reserve Mark Zinder for Your Upcoming Sailings
              </h2>
              <p className="section-lead section-lead--light" style={{ marginBottom: 24 }}>
                Available for Ocean, Expedition, and Luxury River itineraries worldwide. Send your
                sailing dates to receive Mark’s Cruise Enrichment One-Sheet.
              </p>

              <div className="booking-info-list">
                <div className="booking-info-item">
                  <Anchor size={20} aria-hidden="true" />
                  <div>
                    <strong style={{ display: 'block', color: '#FFFFFF' }}>
                      Special Interest Enrichment
                    </strong>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                      AI · World History · Future Trends · Comedy &amp; Human Resilience
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-form-card">
              <h3
                className="font-serif"
                style={{ fontSize: '1.6rem', color: 'var(--navy-900)', margin: '0 0 8px' }}
              >
                Cruise Enrichment Inquiry
              </h3>
              <p style={{ color: 'var(--slate-600)', margin: '0 0 22px', fontSize: '0.95rem' }}>
                Direct priority scheduling for Cruise Directors and Programming Teams.
              </p>
              <BookingForm
                defaultEventType="Cruise Ship Enrichment Series"
                defaultTopic="Full 3-Part Sea-Day Enrichment Series"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
