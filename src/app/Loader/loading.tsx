import { Spinner } from "@/components/global/loader/spinner"
import { Loader } from "@/components/global/loader/index"

export default function SpinnerDemo() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-lg font-medium mb-4">Spinner Sizes</h2>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted-foreground">Extra Large</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Spinner Variants</h2>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="default" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="primary" />
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="secondary" />
            <span className="text-xs text-muted-foreground">Secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="ghost" />
            <span className="text-xs text-muted-foreground">Ghost</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Loader Component</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 border rounded-md">
            <Loader text="Loading..." />
          </div>
          <div className="p-4 border rounded-md">
            <Loader text="Processing data..." size="lg" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  )
}
