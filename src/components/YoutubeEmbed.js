import React from 'react';

const placeholderStyle = {
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%',
  backgroundColor: '#1a1a1a',
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'default',
};

const overlayStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
};

const playIconStyle = {
  width: '64px',
  height: '64px',
  backgroundColor: 'rgba(255,255,255,0.12)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid rgba(255,255,255,0.2)',
};

const triangleStyle = {
  width: 0,
  height: 0,
  borderTop: '14px solid transparent',
  borderBottom: '14px solid transparent',
  borderLeft: '22px solid rgba(255,255,255,0.6)',
  marginLeft: '4px',
};

const badgeStyle = {
  backgroundColor: 'rgba(255, 80, 80, 0.85)',
  color: '#fff',
  fontSize: '12px',
  fontWeight: '600',
  padding: '4px 10px',
  borderRadius: '4px',
  letterSpacing: '0.5px',
};

const labelStyle = {
  color: 'rgba(255,255,255,0.5)',
  fontSize: '13px',
};

const iframeContainerStyle = {
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%',
  borderRadius: '8px',
  overflow: 'hidden',
};

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
};

export default function YoutubeEmbed({ id, title }) {
  if (!id) {
    return (
      <div style={placeholderStyle}>
        <div style={overlayStyle}>
          <div style={playIconStyle}>
            <div style={triangleStyle} />
          </div>
          <span style={badgeStyle}>🚧 PROCHAINEMENT</span>
          {title && <span style={labelStyle}>{title}</span>}
        </div>
      </div>
    );
  }

  return (
    <div style={iframeContainerStyle}>
      <iframe
        style={iframeStyle}
        src={`https://www.youtube.com/embed/${id}`}
        title={title || 'Vidéo YouTube'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
