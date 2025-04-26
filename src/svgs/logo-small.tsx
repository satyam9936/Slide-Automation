// components/logo-small.tsx

import React from 'react';
import Link from 'next/link';

const LogoSmall = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">LS</span>
      </div>
      <span className="hidden sm:inline text-lg font-semibold">LogoSmall</span>
    </Link>
  );
};

export default LogoSmall;
