import type React from "react"
import { cn } from "@/lib/utils"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "secondary" | "accent" | "white"
  thickness?: number
}

export function Loader({ size = "md", color = "primary", thickness = 2, className, ...props }: LoaderProps) {
  // Size mapping
  const sizeMap = {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 64,
  }

  // Color mapping
  const colorMap = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
    accent: "stroke-blue-500",
    white: "stroke-white",
  }

  const svgSize = sizeMap[size]
  const strokeWidth = thickness
  const viewBoxSize = svgSize + strokeWidth * 2

  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        xmlns="http://www.w3.org/2000/svg"
        className={cn("animate-spin", colorMap[color])}
      >
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={svgSize / 2}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="stroke-muted opacity-25"
        />
        <path
          d={`M ${viewBoxSize / 2} ${strokeWidth}
              a ${svgSize / 2} ${svgSize / 2} 0 0 1 ${svgSize / 2} ${svgSize / 2}`}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
