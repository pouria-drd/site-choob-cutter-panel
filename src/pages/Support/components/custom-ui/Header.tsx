import { ReactNode } from "react";

interface HeaderProps {
    title: string;
    children: ReactNode;
    fontSize?: string;
    className?: string;
    description?: string;
}

const Header = ({ title, description, className, children, fontSize = 'text-3xl' }: HeaderProps) => {
    return (
        <div className={`flex flex-row-reverse items-center justify-between cursor-default w-full ${className} gap-10`}>
            <div className="flex flex-col gap-2">
                <h1 className={`text-sc-black text-right ${fontSize} font-semibold`}>
                    {title}
                </h1>

                {description &&
                    <p className="text-sc-gray-500 text-right text-xs sm:text-base">
                        {description}
                    </p>
                }
            </div>

            <div className="flex flex-col justify-start sm:justify-end h-full">
                {children}
            </div>
        </div>
    )
}

export default Header
