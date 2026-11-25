import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CalendarCheck, Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_META } from '../data/siteContent';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, to) => {
    setMobileOpen(false);
    if (to.startsWith('/#')) {
      e.preventDefault();
      const targetId = to.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="brand-mark" aria-label="Mark Zinder Home">
          <img src="/images/mz-logo.png" alt="Mark Zinder MZ Logo" className="brand-mark__logo" />
          <span className="brand-mark__name">{SITE_META.speakerName.toUpperCase()}</span>
        </Link>

        <nav className="nav-pill-shell" aria-label="Primary Navigation">
          <ul className="nav-links">
            {NAV_LINKS.map((item) => {
              const isCruiseActive =
                item.to === '/cruise-ship-speaking' &&
                location.pathname === '/cruise-ship-speaking';

              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={(e) => handleNavClick(e, item.to)}
                    className={[
                      'nav-link',
                      isCruiseActive ? 'nav-link--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <span>{item.label}</span>
                    {item.featured && <span className="nav-popular-tag">Popular</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="btn btn--navy btn--sm"
            onClick={() => onOpenBooking('General Keynote Inquiry')}
          >
            <span>Book Mark Zinder</span>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={(e) => handleNavClick(e, item.to)}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="btn btn--primary"
            style={{ marginTop: 8, width: '100%' }}
            onClick={() => {
              setMobileOpen(false);
              onOpenBooking('General Keynote Inquiry');
            }}
          >
            <CalendarCheck size={16} aria-hidden="true" />
            <span>Book Mark Zinder</span>
          </button>
        </div>
      )}
    </header>
  );
}
