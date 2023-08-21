import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary click:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/applications"
        className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Applications
      </Link>
      <Link
        href="/dashboard/settings"
        className="text-xl font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}
