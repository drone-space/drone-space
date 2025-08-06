import React from 'react';

export default function Glass({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backdropFilter: 'blur(8px) saturate(180%)',
        WebkitBackdropFilter: 'blur(8px) saturate(180%)',
      }}
    >
      {children}
    </div>
  );
}
