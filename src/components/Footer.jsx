import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Anchor, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_META } from '../data/siteContent';

export default function Footer({ onOpenBooking }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="malcom-footer">
      <div className="container">
        <div className="malcom-footer-card">
          <div className="malcom-footer-card__portrait">
            <img
              src="/images/mark-zinder-portrait.jpg"
              alt="Mark Zinder — Historian, Futurist & Keynote Storyteller"
            />
          </div>

          <div>
            <div className="brand-mark" style={{ marginBottom: 16 }}>
              <img src="/images/mz-logo.png" alt="Mark Zinder MZ Logo" className="brand-mark__logo" />
              <span className="brand-mark__name">{SITE_META.speakerName.toUpperCase()}</span>
            </div>
            <strong className="malcom-footer-heading">Navigation</strong>
            <ul className="malcom-footer-links">
              <li>
                <a href="/#about" onClick={(e) => handleAnchor(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a href="/#topics" onClick={(e) => handleAnchor(e, 'topics')}>
                  Speaking Topics
                </a>
              </li>
              <li>
                <Link
                  to="/cruise-ship-speaking"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--orange-600)', fontWeight: 600 }}
                >
                  <Anchor size={14} aria-hidden="true" />
                  <span>Cruise Ship Speaking</span>
                </Link>
              </li>
              <li>
                <a href="/#videos" onClick={(e) => handleAnchor(e, 'videos')}>
                  Videos
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={(e) => handleAnchor(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <strong className="malcom-footer-heading">Speaking Desk</strong>
            <ul className="malcom-footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={15} color="#D9641E" aria-hidden="true" />
                <a href={`mailto:${SITE_META.email}`}>{SITE_META.email}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={15} color="#D9641E" aria-hidden="true" />
                <span>{SITE_META.phone}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={15} color="#D9641E" aria-hidden="true" />
                <span>{SITE_META.location}</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn--navy btn--sm"
              style={{ marginTop: 18 }}
              onClick={() => onOpenBooking('Footer Availability Inquiry')}
            >
              Book Mark Zinder
            </button>
          </div>
        </div>

        <div className="malcom-footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Mark Zinder &amp; Associates. All rights reserved.
          </span>
          <span>AI · History · Future Trends · Special Interest Enrichment</span>
        </div>
      </div>
    </footer>
  );
}
