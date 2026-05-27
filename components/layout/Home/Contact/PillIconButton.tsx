import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";

export const PillIconButton = ({
    icon,
    title,
    isLoading,
    disabled,
    className,
}: {
    icon: React.ReactNode;
    title: string;
    isLoading: boolean;
    disabled: boolean;
    className?: string;
}) => {
    return (
        <Button
            type="submit"
            isLoading={isLoading}
            disabled={disabled}
            className={cn( "capitalize cursor-pointer tracking-tight",
                "w-fit relative rounded-full py-3 px-8 font-semibold text-white",
                "bg-gradient-to-br from-blue-400 to-primary hover:from-blue-500 hover:to-blue-800",
                "transition-all duration-300 shadow-lg hover:shadow-xl mx-auto",
                "flex items-center justify-center gap-3 ease-in-out",
                disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] hover:cursor-pointer"
            )}
        >
            <span className="relative z-10 font-semibold">{isLoading ? "Loading..." : title}</span>
            {!isLoading && (
                <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: disabled ? 0 : -25 }}
                >
                    {icon}
                </motion.div>
            )}
        </Button>
    )
}