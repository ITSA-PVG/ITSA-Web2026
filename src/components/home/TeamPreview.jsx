import React from 'react';
import { teamMembers } from '../../data/teamData';

const TeamPreview = ({ onNavigate }) => {
  const members = Array.isArray(teamMembers) ? teamMembers : [];

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: 'transparent', color: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        <h2 style={{ fontSize: '2rem', margin: '0 0 0.75rem 0', color: '#adf4ff' }}>
          Meet the Council
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.75, marginBottom: '2.5rem' }}>
          The student team driving ITSA forward.
        </p>

        {/* Empty State Handling */}
        {members.length === 0 ? (
          <p style={{ opacity: 0.7, padding: '1.5rem 0' }}>
            Council roster coming soon.
          </p>
        ) : (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2.5rem'
          }}>
            {members.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '140px'
                }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  width={76}
                  height={76}
                  loading="lazy"
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(173, 244, 255, 0.5)',
                    marginBottom: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                  {member.name}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.2rem' }}>
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Link to Team Page (uses 'team' key from PAGE_MAP in App.jsx) */}
        <button
          onClick={() => onNavigate && onNavigate('team')}
          style={{
            background: 'transparent',
            border: '1px solid #adf4ff',
            color: '#adf4ff',
            padding: '0.75rem 1.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          View Full Team &rarr;
        </button>

      </div>
    </section>
  );
};

export default TeamPreview;
