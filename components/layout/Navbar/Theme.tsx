

import { cn } from "@/lib/utils";
import { Moon, Sun } from "@phosphor-icons/react"

const Theme = ({ theme, toggleTheme, isScrolled }: { theme: string; toggleTheme: () => void, isScrolled: boolean }) => {
    const size = 24;
    // theme === "light" ? 24 : 25;
    return (
        <button
            onClick={toggleTheme}
            className={cn("p-2 rounded-full transition-colors text-[var(--text-primary)]",
                isScrolled && (theme === "light" ? "on-scroll-white" : "on-scroll-dark"),
            )}
            aria-label="Toggle theme"
        >
            {theme === "light" ?
                <Sun size={size} weight="fill" />
                :
                <Moon size={size} weight="fill" />
            }
        </button>
    )
}

export default Theme