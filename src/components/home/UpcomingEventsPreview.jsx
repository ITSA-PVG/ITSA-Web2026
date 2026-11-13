import React from 'react';
import { itsaEvents } from '../../data/eventsData';

const UpcomingEventsPreview = ({ onNavigate }) => {
  const upcoming = Array.isArray(itsaEvents)
    ? itsaEvents.filter((e) => e.status === 'Upcoming').slice(0, 3)
    : [];

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: 'transparent', color: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header + Link to Events Page */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '2rem', margin: 0, color: '#adf4ff' }}>
            Upcoming Events
          </h2>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            style={{
              background: 'transparent',
              border: '1px solid #adf4ff',
              color: '#adf4ff',
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: 'bold'
            }}
          >
            View All Events &rarr;
          </button>
        </div>

        {/* Empty State Handling */}
        {upcoming.length === 0 ? (
          <p style={{ opacity: 0.7, textAlign: 'center', padding: '2rem 0' }}>
            No upcoming events scheduled right now. Check back soon!
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {upcoming.map((event) => (
              <div
                key={event.id}
                onClick={() => onNavigate && onNavigate('events')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate && onNavigate('events');
                  }
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <span style={{
                  alignSelf: 'flex-start',
                  fontSize: '0.8rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  background: 'rgba(173, 244, 255, 0.15)',
                  color: '#adf4ff'
                }}>
                  {event.tag}
                </span>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{event.title}</h3>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                  {event.date} &bull; {event.location}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default UpcomingEventsPreview;
