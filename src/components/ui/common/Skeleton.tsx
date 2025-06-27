import { cn } from "@/utils/tw-merge"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="skeleton"
            className={cn("bg-card animate-pulse rounded-md dark:bg-muted", className)}
            {...props}
        />
    )
}

export { Skeleton }
