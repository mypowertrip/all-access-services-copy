import React from 'react';

export default function GCLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#111" />
      <path d="M8 24L16 8L24 24L20 24L16 16L12 24Z" fill="#EF6410" />
    </svg>
  );
}