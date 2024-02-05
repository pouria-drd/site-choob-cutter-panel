import { ReactNode } from 'react';
import CloseIcon from './Icons/CloseIcon';
import ModalBackDrop from './ModalBackDrop';

interface NewCutModalProps {
    isOpen: boolean;
    onClose: () => void;

    title?: string;
    useBase?: boolean;
    className?: string;
    children?: ReactNode;
}

const Modal = ({ isOpen, onClose, title, useBase, className, children }: NewCutModalProps) => {
    return (
        <>
            {isOpen && (
                <ModalBackDrop onClose={onClose}>
                    <div className={`bg-white flex flex-col items-center justify-start rounded-lg relative z-20 
                    max-h-[80vh] mx-auto p-6 gap-4 ${className} font-peyda`}>

                        {useBase ?
                            (<>
                                <div className="flex items-center justify-between w-full">
                                    <span
                                        className="cursor-pointer text-sc-purple-400 hover:text-gray-400"
                                        onClick={onClose}>
                                        <CloseIcon size={15} />
                                    </span>

                                    <h2 className="font-bold text-xl sm:text-2xl text-sc-blue-normal r2l">
                                        {title}
                                    </h2>
                                </div>


                                <div className="flex flex-col overflow-y-auto overflow-x-hidden 
                                            w-full px-4 py-1 gap-4">
                                    {children}
                                </div>
                            </>) :

                            <>
                                {children}
                            </>
                        }
                    </div>
                </ModalBackDrop>
            )}
        </>
    );
};

export default Modal;
