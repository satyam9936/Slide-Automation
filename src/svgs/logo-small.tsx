// components/logo-small.tsx

import React from 'react';
import Link from 'next/link';

const LogoSmall = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="h-8 w-8 text-black dark:text-white"
      >
        <path
          d="M296 160H180.6l35.7-136.5c5.2-19.8-17.6-34.5-32.5-20.5L24 216c-10.6 10.2-2.8 27.8 12 27.8h115.4L116 472.5c-5.2 19.8 17.6 34.5 32.5 20.5l160-160c10.6-10.2 2.8-27.8-12-27.8z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden sm:inline text-lg font-bold">SlideName</span>
    </Link>
  );
};

export default LogoSmall;
