'use client';

import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext';
import { SocketProvider } from '@/context/SocketContext';

// export const metadata: Metadata = {
//   title: 'Global Debate Arena - Debate & Compete Worldwide',
//   description: 'Join millions in real-time debates. 1v1, 2v2, 3v3 battles with AI judging.',
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <AuthProvider>
          <SocketProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
          </SocketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
