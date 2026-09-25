import React, { useState } from 'react';
import { Phone, MapPin, AtSign, Mail, Send, CheckCircle2, AlertCircle, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';
import { ContactIllustration } from './Illustrations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phone = '+91 7396541134';
  const email = 'sandeepbanvari2004@gmail.com';
  const locationText = 'Andhra Pradesh,\nIndia - 521001';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Banvari Sandeep,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '64px',
        paddingBottom: '80px',
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* Title: "Contacts" in Slate / Dark Teal */}
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.8rem',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Contacts
          </h2>
        </div>

        {/* 3-Column Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.15fr) minmax(280px, 1.15fr) minmax(240px, 0.85fr)',
            gap: '40px',
            alignItems: 'flex-start',
          }}
          className="contacts-three-column-grid"
        >
          {/* ==================================================
              COLUMN 1: FORM WITH NOTCH LABELS & SEND BUTTON
              ================================================== */}
          <div>
            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #99F6E4',
                  boxShadow: '0 8px 25px rgba(15, 23, 42, 0.06)',
                  padding: '36px 28px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#ECFDF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: '#0F766E',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your message is prepared for:
                  <br />
                  <span style={{ color: '#0F766E', fontWeight: 700 }}>{email}</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  style={{
                    backgroundColor: '#0F766E',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '10px 24px',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* Name Field with Notch Label */}
                <div style={{ position: 'relative' }}>
                  <label
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '20px',
                      backgroundColor: '#F8FAFC',
                      padding: '0 8px',
                      color: '#0F766E',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '20px',
                      backgroundColor: '#FFFFFF',
                      border: `1.5px solid ${errors.name ? '#EF4444' : '#CBD5E1'}`,
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      padding: '0 20px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0F766E')}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? '#EF4444' : '#CBD5E1')}
                  />
                  {errors.name && (
                    <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', paddingLeft: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field with Notch Label */}
                <div style={{ position: 'relative' }}>
                  <label
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '20px',
                      backgroundColor: '#F8FAFC',
                      padding: '0 8px',
                      color: '#0F766E',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="John@doe.com"
                    style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '20px',
                      backgroundColor: '#FFFFFF',
                      border: `1.5px solid ${errors.email ? '#EF4444' : '#CBD5E1'}`,
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      padding: '0 20px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0F766E')}
                    onBlur={(e) => (e.target.style.borderColor = errors.email ? '#EF4444' : '#CBD5E1')}
                  />
                  {errors.email && (
                    <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', paddingLeft: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field with Notch Label */}
                <div style={{ position: 'relative' }}>
                  <label
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '20px',
                      backgroundColor: '#F8FAFC',
                      padding: '0 8px',
                      color: '#0F766E',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message...."
                    style={{
                      width: '100%',
                      height: '140px',
                      borderRadius: '20px',
                      backgroundColor: '#FFFFFF',
                      border: `1.5px solid ${errors.message ? '#EF4444' : '#CBD5E1'}`,
                      color: '#0F172A',
                      fontSize: '0.95rem',
                      padding: '16px 20px',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0F766E')}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? '#EF4444' : '#CBD5E1')}
                  />
                  {errors.message && (
                    <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', paddingLeft: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Send Button */}
                <div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#0F766E',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: '9999px',
                      padding: '12px 32px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 4px 14px rgba(15, 118, 110, 0.25)',
                      transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#115E59';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(15, 118, 110, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0F766E';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 118, 110, 0.25)';
                    }}
                  >
                    <span>Send</span>
                    <Send size={18} color="#FFFFFF" strokeWidth={2.2} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ==================================================
              COLUMN 2: DIRECT CONTACT INFO + SOCIAL MEDIA ROW
              ================================================== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '38px', paddingTop: '4px' }}>
            {/* Contact Items: Email, Phone, Location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <a
                  href={`mailto:${email}`}
                  aria-label="Email Banvari Sandeep"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#ECFDF5',
                    color: '#0F766E',
                    border: '1px solid #99F6E4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    textDecoration: 'none',
                  }}
                >
                  <AtSign size={20} color="#0F766E" strokeWidth={2.4} />
                </a>
                <a
                  href={`mailto:${email}`}
                  style={{
                    color: '#0F172A',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                  }}
                >
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  aria-label="Call Banvari Sandeep"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#ECFDF5',
                    color: '#0F766E',
                    border: '1px solid #99F6E4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={19} color="#0F766E" strokeWidth={2.4} />
                </a>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  style={{
                    color: '#0F172A',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  {phone}
                </a>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#ECFDF5',
                    color: '#0F766E',
                    border: '1px solid #99F6E4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <MapPin size={20} color="#0F766E" strokeWidth={2.4} />
                </div>
                <div
                  style={{
                    color: '#0F172A',
                    fontSize: '0.98rem',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {locationText}
                </div>
              </div>
            </div>

            {/* Social Icons (Only X, GitHub, LinkedIn, Mail) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              {/* X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                style={socialCircleStyle}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <XIcon size={19} color="currentColor" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sandeepbanvari"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={socialCircleStyle}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <GithubIcon size={19} color="currentColor" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sandeep-banvari/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={socialCircleStyle}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <LinkedinIcon size={19} color="currentColor" />
              </a>

              {/* Mail */}
              <a
                href={`mailto:${email}`}
                aria-label="Email Banvari Sandeep"
                style={socialCircleStyle}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <Mail size={19} color="currentColor" strokeWidth={2.4} />
              </a>
            </div>
          </div>

          {/* COLUMN 3: LAPTOP ILLUSTRATION + FLOATING BUBBLES (hidden in responsive) */}
          <div className="responsive-hide-illustration" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <ContactIllustration />
          </div>
        </div>

        {/* Back to top circular button fixed in right down */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1px solid #CBD5E1',
            color: '#0F766E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.12)',
            zIndex: 90,
            transition: 'transform 0.2s, background-color 0.2s, color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
            e.currentTarget.style.backgroundColor = '#0F766E';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 118, 110, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0F766E';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.12)';
          }}
        >
          <ArrowUp size={22} color="currentColor" strokeWidth={2.6} />
        </button>
      </div>
    </section>
  );
}

const socialCircleStyle = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  backgroundColor: '#ECFDF5',
  color: '#0F766E',
  border: '1px solid #99F6E4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  boxShadow: '0 2px 8px rgba(15, 118, 110, 0.08)',
  transition: 'transform 0.2s, background-color 0.2s, color 0.2s, box-shadow 0.2s',
  flexShrink: 0,
};

const handleHoverEnter = (e) => {
  e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
  e.currentTarget.style.backgroundColor = '#0F766E';
  e.currentTarget.style.color = '#FFFFFF';
  e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 118, 110, 0.3)';
};

const handleHoverLeave = (e) => {
  e.currentTarget.style.transform = 'translateY(0) scale(1)';
  e.currentTarget.style.backgroundColor = '#ECFDF5';
  e.currentTarget.style.color = '#0F766E';
  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 118, 110, 0.08)';
};
