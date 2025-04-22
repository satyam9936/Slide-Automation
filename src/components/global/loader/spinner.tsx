import type * as React from "react"
import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "primary" | "secondary" | "ghost"
}

export function Spinner({ size = "md", variant = "default", className, ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
    xl: "h-12 w-12 border-4",
  }

  const variantClasses = {
    default: "border-muted-foreground/20 border-t-muted-foreground/60",
    primary: "border-primary/30 border-t-primary",
    secondary: "border-secondary/30 border-t-secondary",
    ghost: "border-gray-200/30 border-t-gray-200",
  }

  return (
    <div
      className={cn("animate-spin rounded-full", sizeClasses[size], variantClasses[variant], className)}
      role="status"
      aria-label="Loading"
      {...props}
    />
  )
}
