import React from 'react'
import { cn } from '@/lib/utils'

interface CustomTooltipProps {
    content: React.ReactNode
    className?: string
}

const Tooltip = ({ content, className }: CustomTooltipProps) => {
    return (
        <div className='relative'>
            <div
                className={cn(
                    "z-10 px-3 py-2 font-extrabold rounded-lg shadow-sm",
                    "dark:bg-gray-700",
                    "transition-opacity duration-300",
                    "before:content-[''] before:absolute before:top-full",
                    "before:border-8 before:border-transparent",
                    "dark:before:border-t-gray-700 w-fit",
                    className
                )}
            >
                {content}
            </div>
        </div>

    )
}

export default Tooltip