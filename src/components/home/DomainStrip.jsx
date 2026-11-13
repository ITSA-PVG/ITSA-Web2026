import React from 'react';
import { domainsData } from '../../data/homeData';

const DomainsStrip = ({ onNavigate }) => {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: 'transparent', color: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#adf4ff' }}>
          Our Domains
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          {domainsData.map((domain) => (
            <button
              key={domain.id}
              onClick={() => onNavigate && onNavigate('vision')}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(173, 244, 255, 0.2)',
                borderRadius: '12px',
                padding: '2rem 1.5rem',
                color: '#f5f5f5',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#adf4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(173, 244, 255, 0.2)';
              }}
            >
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: '#adf4ff' }}>
                {domain.title}
              </h3>
              <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                Explore domain &rarr;
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsStrip;
