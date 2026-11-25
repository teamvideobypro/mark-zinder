import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function BookingForm({
  defaultEventType = 'Cruise Ship Enrichment Series',
  defaultTopic = 'Beyond AI: What in the World Happens Next?',
  compact = false,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: defaultEventType,
    topic: defaultTopic,
    eventDate: '',
    audienceSize: '500–1,000+ Guests',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const isCruise = formData.eventType === 'Cruise Ship Enrichment Series';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess(formData);
  };

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2
          size={44}
          color="#D9641E"
          style={{ margin: '0 auto 14px' }}
          aria-hidden="true"
        />
        <h3
          className="font-serif"
          style={{ fontSize: '1.6rem', color: 'var(--navy-900)', margin: '0 0 10px' }}
        >
          Availability Request Received
        </h3>
        <p style={{ color: 'var(--slate-600)', margin: '0 0 18px' }}>
          Thank you, <strong>{formData.name || 'Friend'}</strong>. Mark Zinder’s speaking desk
          will respond within 24 hours regarding{' '}
          <strong>{formData.eventType}</strong>
          {formData.organization ? ` for ${formData.organization}` : ''}.
        </p>
        <button
          type="button"
          className="btn btn--outline-navy btn--sm"
          onClick={() => setSubmitted(false)}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor={`name-${compact ? 'm' : 'p'}`}>Full Name *</label>
          <input
            id={`name-${compact ? 'm' : 'p'}`}
            name="name"
            type="text"
            required
            placeholder="e.g., Claire Donovan"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor={`email-${compact ? 'm' : 'p'}`}>Email Address *</label>
          <input
            id={`email-${compact ? 'm' : 'p'}`}
            name="email"
            type="email"
            required
            placeholder="claire@cruiseline.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor={`org-${compact ? 'm' : 'p'}`}>
            {isCruise ? 'Cruise Line / Ship Name' : 'Organization / Event Name'}
          </label>
          <input
            id={`org-${compact ? 'm' : 'p'}`}
            name="organization"
            type="text"
            placeholder={
              isCruise ? 'e.g., Regent Seven Seas / World Cruise' : 'e.g., Global Innovation Forum'
            }
            value={formData.organization}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor={`type-${compact ? 'm' : 'p'}`}>Engagement Type</label>
          <select
            id={`type-${compact ? 'm' : 'p'}`}
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
          >
            <option value="Cruise Ship Enrichment Series">Cruise Ship Enrichment Series</option>
            <option value="Corporate / Executive Keynote">Corporate / Executive Keynote</option>
            <option value="University / Cultural Forum">University / Cultural Forum</option>
            <option value="Private Symposium / Gala">Private Symposium / Gala</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor={`topic-${compact ? 'm' : 'p'}`}>Preferred Program</label>
          <select
            id={`topic-${compact ? 'm' : 'p'}`}
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          >
            <option value="Full 3-Part Sea-Day Enrichment Series">
              Full 3-Part Sea-Day Enrichment Series
            </option>
            <option value="How We Got to Now">How We Got to Now</option>
            <option value="Beyond AI: What in the World Happens Next?">
              Beyond AI: What in the World Happens Next?
            </option>
            <option value="What Are the Odds?">What Are the Odds?</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor={`date-${compact ? 'm' : 'p'}`}>
            {isCruise ? 'Target Sailing Dates / Voyage' : 'Target Event Date / City'}
          </label>
          <input
            id={`date-${compact ? 'm' : 'p'}`}
            name="eventDate"
            type="text"
            placeholder={isCruise ? 'e.g., Oct 2026 Mediterranean' : 'e.g., Nov 14, 2026 · Chicago'}
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>

        {!compact && (
          <div className="form-field form-field--full">
            <label htmlFor="notes-p">Tell Us About Your Audience</label>
            <textarea
              id="notes-p"
              name="notes"
              rows={3}
              placeholder="Share theater capacity, sea-day count, or themes your guests will love..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn--primary"
        style={{ width: '100%', marginTop: 22 }}
      >
        <Send size={17} aria-hidden="true" />
        <span>
          {isCruise ? 'Request Sea-Day Availability' : 'Check Mark’s Availability'}
        </span>
      </button>
    </form>
  );
}
