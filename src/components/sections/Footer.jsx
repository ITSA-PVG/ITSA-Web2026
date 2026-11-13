import React from 'react';
import { footerData } from '../../data/homeData';

const QUICK_LINKS = [
  { label: 'About Us', page: 'about' },
  { label: 'Flagship Events', page: 'events' },
  { label: 'Our Team', page: 'team' },
  { label: 'Get in Touch', page: 'contact' },
];

const Footer = ({ onNavigate }) => {
  return (
    <footer
      style={{
        padding: '4rem 2rem 2rem 2rem',
        backgroundColor: 'rgba(9, 9, 11, 0.75)',
        borderTop: '1px solid rgba(173, 244, 255, 0.18)',
        color: '#f5f5f5',
        marginTop: '2rem'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Column 1: Logo + Tagline */}
        <div>
          <img
            src="/logo.png"
            alt="ITSA Logo"
            width={56}
            height={56}
            style={{ height: '56px', width: 'auto', objectFit: 'contain', marginBottom: '1rem' }}
          />
          <p style={{ fontSize: '0.95rem', opacity: 0.75, lineHeight: '1.6', margin: 0 }}>
            {footerData.tagline}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 style={{ fontSize: '1.05rem', color: '#adf4ff', margin: '0 0 1rem 0' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {QUICK_LINKS.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => onNavigate && onNavigate(item.page)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    color: '#f5f5f5',
                    opacity: 0.8,
                    cursor: 'pointer',
                    fontSize: '0.95rem'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Socials & Email */}
        <div>
          <h3 style={{ fontSize: '1.05rem', color: '#adf4ff', margin: '0 0 1rem 0' }}>
            Connect
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            {footerData.socials.map((social) =>
              social.link && social.link !== '#' ? (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#f5f5f5',
                    opacity: 0.85,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    borderBottom: '1px solid rgba(173, 244, 255, 0.35)',
                    paddingBottom: '2px'
                  }}
                >
                  {social.label}
                </a>
              ) : (
                <button
                  key={social.label}
                  onClick={() => onNavigate && onNavigate('socials')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(173, 244, 255, 0.35)',
                    padding: '0 0 2px 0',
                    color: '#f5f5f5',
                    opacity: 0.85,
                    cursor: 'pointer',
                    fontSize: '0.95rem'
                  }}
                >
                  {social.label}
                </button>
              )
            )}
          </div>
          <a
            href={`mailto:${footerData.email}`}
            style={{
              display: 'inline-block',
              color: '#adf4ff',
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}
          >
            {footerData.email}
          </a>
        </div>
      </div>

      {/* Bottom Bar: Credit & Copyright */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '1.5rem auto 0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.85rem',
          opacity: 0.7
        }}
      >
        <span>&copy; {new Date().getFullYear()} ITSA &mdash; PVG&rsquo;s COET &amp; M. All rights reserved.</span>
        <span>Made by ITSA Tech Team</span>
      </div>
    </footer>
  );
};

export default Footer;
