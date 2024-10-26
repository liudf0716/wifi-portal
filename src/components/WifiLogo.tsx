import React from 'react';

export function WifiLogo() {
  return (
    <svg 
      className="w-28 h-28 md:w-32 md:h-32"
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Wi-Fi Arc */}
      <path 
        d="M32 8C17.64 8 5.53 14.93 0 24l4 4C10.44 22.58 20.71 16 32 16s21.56 6.58 28 12l4-4C58.47 14.93 46.36 8 32 8z" 
        fill="#FFC107"
      />
      {/* Middle Wi-Fi Arc */}
      <path 
        d="M32 24c-8.84 0-16.69 4.29-22 9l4 4c4.37-3.63 10.36-7 18-7s13.63 3.37 18 7l4-4c-5.31-4.71-13.16-9-22-9z" 
        fill="#FFC107"
      />
      {/* Inner Wi-Fi Arc */}
      <path 
        d="M32 36c-3.53 0-6.61 1.43-9 3.5l4 4C29.07 41.21 30.5 40 32 40s2.93 1.21 5 3.5l4-4C38.61 37.43 35.53 36 32 36z" 
        fill="#FF0000"
      />
      {/* Wi-Fi Dot */}
      <circle 
        cx="32" 
        cy="50" 
        r="4" 
        fill="#FF0000"
      />
    </svg>
  );
}