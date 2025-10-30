import React from 'react';

interface ServerStatusBannerProps {
  serverStatus: 'connected' | 'connecting' | null;
}

const ServerStatusBanner: React.FC<ServerStatusBannerProps> = ({ serverStatus }) => {
  if (!serverStatus) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '6px 8px',
        textAlign: 'center',
        zIndex: 9999,
        background: serverStatus === 'connected' ? '#c8e6c9' : '#ffb6c1',
        color: '#000',
      }}
    >
      {serverStatus === 'connected' ? 'Connected' : 'Connecting to server'}
    </div>
  );
};

export default ServerStatusBanner;
