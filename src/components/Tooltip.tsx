import React from 'react'
import { cn } from '@/lib/utils'

interface CustomTooltipProps {
    content: React.ReactNode
    children: React.ReactNode
    className?: string
}

const Tooltip = ({ content, children, className }: CustomTooltipProps) => {
    return (
        <div className="relative inline-block">
            <div
            >
                {children}
            </div>

            <div
                className={cn(
                    "absolute z-10 px-3 py-2 text-sm font-extrabold text-white bg-[#8BC4FF] rounded-lg shadow-sm",
                    "dark:bg-gray-700",
                    "transition-opacity duration-300",
                    "before:content-[''] before:absolute before:left-3 before:top-full",
                    "before:border-8 before:border-transparent",
                    "before:border-t-[#8BC4FF] dark:before:border-t-gray-700",
                    className
                )}
                style={{
                    bottom: 'calc(100% + 0.5rem)',
                    left: '0',
                }}
            >
                {content}
            </div>
        </div>
    )
}

export default Tooltip