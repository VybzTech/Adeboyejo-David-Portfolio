import { cn } from '@/lib/utils'
import React from 'react'

export const Label = ({ name, className }: { name: string, className?: string }) => {
    return (
        <label className={cn("text-sm font-body font-light text-slate-600 mb-2 inline-block pl-0.5"
            , className)}>{name}</label>
    )
}