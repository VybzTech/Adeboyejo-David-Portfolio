

import { cn } from "@/lib/utils";
import { Moon, Sun } from "@phosphor-icons/react"

const Theme = ({ theme, toggleTheme, isScrolled }: { theme: string; toggleTheme: () => void, isScrolled: boolean }) => {
    const size = 24;
    return (
        <button
            onClick={toggleTheme}
            className={cn("p-2 cursor-pointer", "rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5",
                " text-[var(--text-primary)]",
                isScrolled && (theme === "light" ? "on-scroll-white" : "on-scroll-dark")
            )}
            aria-label="Toggle theme"
        >
            {theme === "light" ?
                // <Sun size={size} weight={isScrolled ? "bold" : "regular"} />
                <Sun size={size} />
                :
                <Moon size={size} />
                // <Moon size={size} weight="fill" />
            }
        </button>
    )
}

export default Theme