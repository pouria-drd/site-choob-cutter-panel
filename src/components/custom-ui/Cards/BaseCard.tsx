import { ReactNode } from "react"

interface BaseCardProps {
    className?: string;
    children?: ReactNode;
}

const BaseCard = ({ className, children }: BaseCardProps) => {
    return (
        <div className={`bg-sc-gray flex flex-col items-center
         font-peyda h-full gap-4 ${className}`}>
            {children}
        </div>
    )
}

export default BaseCard