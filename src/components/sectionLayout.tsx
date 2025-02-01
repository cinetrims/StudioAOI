import React from 'react';

export default function SectionLayout({ children, className   }) {
  return <div className={`max-w-screen-2xl mx-auto w-full ${className}`}>{children}</div>;
}
