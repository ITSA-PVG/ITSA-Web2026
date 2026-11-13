import React from 'react';
import { quoteData } from '../../data/homeData';

const QuoteBand = () => {
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
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2.5rem 1.5rem',
          borderTop: '1px solid rgba(173, 244, 255, 0.25)',
          borderBottom: '1px solid rgba(173, 244, 255, 0.25)'
        }}
      >
        <blockquote
          style={{
            margin: '0 0 1rem 0',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            fontWeight: 'bold',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            color: '#f5f5f5'
          }}
        >
          &ldquo;{quoteData.quote}&rdquo;
        </blockquote>

        <span
          style={{
            display: 'inline-block',
            fontSize: '1.15rem',
            fontWeight: 'bold',
            letterSpacing: '0.12em',
            color: '#adf4ff'
          }}
        >
          {quoteData.hashtag}
        </span>
      </div>
    </section>
  );
};

export default QuoteBand;
