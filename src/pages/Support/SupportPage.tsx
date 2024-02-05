import { useState } from "react";
import Header from "./components/custom-ui/Header";
import Button from "../../components/custom-ui/Button/Button";
import FilterButton from "./components/custom-ui/FilterButton";
import BaseCard from "../../components/custom-ui/Cards/BaseCard";
import Table, { TableData } from "./components/custom-ui/Table";
import NewSupportModal from "./components/Modals/NewSupportModal";

const SupportPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const data: TableData[] = [
        { title: 'عنوان 1', priority: 'اولویت 1', time: 'زمان 1', status: '0' },
        { title: 'عنوان 2', priority: 'اولویت 2', time: 'زمان 2', status: '1' },
        { title: 'عنوان 3', priority: 'اولویت 3', time: 'زمان 3', status: '2' },
        { title: 'عنوان 4', priority: 'اولویت 4', time: 'زمان 4', status: '0' },
        { title: 'عنوان 5', priority: 'اولویت 5', time: 'زمان 5', status: '1' },
        { title: 'عنوان 6', priority: 'اولویت 6', time: 'زمان 6', status: '2' },
        { title: 'عنوان 7', priority: 'اولویت 7', time: 'زمان 7', status: '0' },
        { title: 'عنوان 8', priority: 'اولویت 8', time: 'زمان 8', status: '1' },
        { title: 'عنوان 9', priority: 'اولویت 9', time: 'زمان 9', status: '2' },
        { title: 'عنوان 10', priority: 'اولویت 10', time: 'زمان 10', status: '0' },
    ];


    return (
        <>
            <BaseCard>
                <div className="flex flex-col w-full h-full max-h-screen gap-10">

                    <Header
                        title="پشتیبانی"
                        description="پشتیبانی 24 ساعته سایت چوب؛ کافیست دکمه ((ارسال درخواست)) را بزنید"
                        fontSize="text-3xl"
                    >
                        <Button onClick={handleOpen}>
                            ارسال درخواست
                        </Button>
                    </Header>


                    <div className="bg-white flex flex-col rounded-md w-full h-full">


                        <div className="flex flex-col justify-start h-full">
                            <Header
                                className="p-7 w-full"
                                title="درخواست های ثبت شده"
                                fontSize="text-base sm:text-xl"
                            >
                                <FilterButton />
                            </Header>



                            <div className="overflow-auto w-full max-h-96 pb-4 sm:pb-0">
                                <Table data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </BaseCard>

            <NewSupportModal isOpen={isOpen} onClose={handleClose} />
        </>
    )
}

export default SupportPage
