import React from 'react';
import { ctaData } from '../../data/homeData';

const FinalCTA = ({ onNavigate }) => {
  return (
    <section
      style={{
        padding: '4.5rem 2rem',
        backgroundColor: 'transparent',
        color: '#f5f5f5',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '3rem 1.5rem',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(173, 244, 255, 0.2)'
        }}
      >
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', margin: '0 0 1rem 0', color: '#adf4ff' }}>
          Ready to Build With Us?
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.8, margin: '0 auto 2rem auto', maxWidth: '520px' }}>
          Be part of PVG&rsquo;s COET &amp; M Information Technology Students Association.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            style={{
              backgroundColor: '#adf4ff',
              color: '#09090b',
              border: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {ctaData.primaryLabel}
          </button>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            style={{
              backgroundColor: 'transparent',
              color: '#adf4ff',
              border: '1px solid #adf4ff',
              padding: '0.85rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {ctaData.secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
