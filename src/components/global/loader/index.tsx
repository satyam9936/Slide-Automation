import { Spinner } from "@/components/global/loader/spinner"

interface LoaderProps {
  text?: string
  fullScreen?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "primary" | "secondary" | "ghost"
}

export function Loader({ text, fullScreen = false, size = "md", variant = "primary" }: LoaderProps) {
  const Container = fullScreen ? "div" : "div"

  return (
    <Container
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
      )}
    >
      <Spinner size={size} variant={variant} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </Container>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
