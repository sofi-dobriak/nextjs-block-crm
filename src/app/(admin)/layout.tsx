import Sidebar from '@/app/components/sidebar';
import React from 'react';

export interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
