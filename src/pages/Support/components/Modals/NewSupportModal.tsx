import CloseIcon from "./Icons/CloseIcon";
import Modal from "../../../../components/Modal/Modal";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Button from "../../../../components/custom-ui/Button/Button";

interface NewSupportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewSupportModal = ({ isOpen, onClose }: NewSupportModalProps) => {

    const options = [
        { label: 'test', value: "e" },
        { label: 'test2', value: "ex" },
    ]

    return (
        <>
            {
                isOpen &&
                <Modal isOpen={isOpen} onClose={onClose} useBase={false}
                    className="overflow-auto min-w-[350px] h-[80vh] px-8 py-14 gap-6">
                    <span onClick={onClose} className="absolute top-5 right-5 cursor-pointer">
                        <CloseIcon size={15} />
                    </span>

                    <h1 className="text-xl text-sc-blue-normal text-right w-full font-semibold">
                        درخواست پشتیبانی
                    </h1>

                    <input className="base-input w-full r2l" type="text" placeholder="عنوان" />

                    <Dropdown title="اولویت" options={options} />

                    <textarea className="base-text-area resize-none w-full min-h-28 h-28 r2l" placeholder="توضیحات" />


                    <div className="border border-dashed border-spacing-8 border-sc-purple-200 rounded-md w-full min-h-20 h-20">

                    </div>

                    <Button fullWidth={true}>
                        ثبت درخواست
                    </Button>
                </Modal>
            }
        </>
    )
}

export default NewSupportModal