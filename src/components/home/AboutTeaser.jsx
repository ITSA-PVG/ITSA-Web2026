import React from 'react';
import { aboutTeaserData } from '../../data/homeData';

const AboutTeaser = () => {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: 'transparent', color: 'inherit' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
        
        {/* Left Column: Text */}
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About ITSA</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>{aboutTeaserData.text}</p>
        </div>

        {/* Right Column: 3 Stat Counters */}
        <div style={{ flex: '1 1 300px', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {aboutTeaserData.stats.map((stat) => (
            <div key={stat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stat.value}</span>
              <span style={{ fontSize: '1rem', opacity: 0.8 }}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeaser;
