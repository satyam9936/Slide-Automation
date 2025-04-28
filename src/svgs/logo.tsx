"use client";

import { useState } from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  width = 200,
  height = 80,
  className = "",
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className} ${
        isHovered ? "scale-102" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />{" "}
          {/* Softer purple */}
          <stop
            offset="50%"
            style={{ stopColor: "#7C3AED", stopOpacity: 1 }}
          />{" "}
          {/* Mid purple */}
          <stop
            offset="100%"
            style={{ stopColor: "#6366F1", stopOpacity: 1 }}
          />{" "}
          {/* Soft indigo */}
        </linearGradient>
        <filter id="softShadow">
          <feGaussianBlur stdDeviation="1.5" result="shadow" />
          <feComposite
            in="shadow"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlur"
          />
          <feFlood floodColor="#8B5CF6" floodOpacity="0.3" />
          <feComposite in2="shadowBlur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={isHovered ? "url(#softShadow)" : ""}>
        {/* Message bubble shape behind DM */}
        <path
          d="M50 60C50 44.536 62.536 32 78 32H220C235.464 32 248 44.536 248 60V100C248 115.464 235.464 128 220 128H78C62.536 128 50 115.464 50 100V60Z"
          fill="url(#logoGradient)"
          fillOpacity="0.1"
          className="transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.15 : 0.1 }}
        />

        {/* DM text */}
        <path
          d="M85 40C85 40 105 40 115 40C125 40 130 45 130 55V105C130 115 125 120 115 120H85V40Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M140 40H160L180 80L200 40H220V120H200V80L180 120L160 80V120H140V40Z"
          fill="url(#logoGradient)"
        />

        {/* Stylized dot */}
        <circle
          cx="240"
          cy="80"
          r="8"
          fill="url(#logoGradient)"
          className={`transform transition-all duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        />

        {/* AI text */}
        <path
          d="M280 120L300 40H320L340 120H320L315 100H285L280 120ZM290 80H310L300 50L290 80Z"
          fill="url(#logoGradient)"
        />
        <path d="M360 40H380V120H360V40Z" fill="url(#logoGradient)" />
      </g>

      {/* Subtle message indicators */}
      <g
        className={`transition-opacity duration-300 ${
          isHovered ? "opacity-60" : "opacity-30"
        }`}
      >
        <circle cx="70" cy="140" r="3" fill="url(#logoGradient)" />
        <circle cx="85" cy="140" r="3" fill="url(#logoGradient)" />
        <circle cx="100" cy="140" r="3" fill="url(#logoGradient)" />
      </g>
    </svg>
  );
}
