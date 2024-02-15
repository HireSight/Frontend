import React, { Suspense } from 'react';

// Use React.lazy() to import the Nav component
const Nav = React.lazy(() => import('../nav'));

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}