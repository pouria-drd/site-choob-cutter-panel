import './button.css'
import { ReactNode } from 'react';
import { StatusEnum } from '../../../enums/StatusEnum';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;

    fullWidth?: boolean;
    type?: StatusEnum;
    isBusy?: boolean;
    disabled?: boolean;
}

const Button = ({ children, onClick, fullWidth = false, type = StatusEnum.Info, isBusy, disabled }: ButtonProps) => {
    const typeClass = type;
    const width = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`custom-button ${typeClass} ${width}`}
            onClick={onClick}
            disabled={disabled || isBusy}
        >
            {children}
        </button>
    );
};

export default Button;
