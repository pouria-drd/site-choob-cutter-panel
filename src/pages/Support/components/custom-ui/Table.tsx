import { StatusEnum } from "../../../../enums/StatusEnum";
import StatusChip from "../../../../components/Chips/StatusChip";

export interface TableData {
    title: string;
    priority: string;
    time: string;
    status: string;
};


interface TableProps {
    data: TableData[];
}

const Table = ({ data }: TableProps) => {
    const handleStatus = (status: string) => {
        var result = <StatusChip text={"درحال بررسی"} />

        switch (status) {
            case status = "0":
                result = <StatusChip text={"درحال بررسی"} />
                break;

            case status = "1":
                result = <StatusChip text={"پاسخ داده شده"} type={StatusEnum.Success} />
                break;

            case status = "2":
                result = <StatusChip text={"بسته شده"} type={StatusEnum.Warning} />
                break;

            default:
                result = <StatusChip text={"درحال بررسی"} />
                break;
        }

        return result
    }

    return (
        <table className="divide-y divide-gray-200 cursor-default w-full">
            <thead className="bg-sc-purple-normal sticky top-0">
                <tr className='text-right text-sm sm:text-base text-sc-gray-500 tracking-wider'>
                    <th scope="col" className="px-6 py-3">

                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        وضعیت
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        زمان
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        اولویت
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        عنوان
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, i) => (
                    <tr key={i} className='text-right text-sm sm:text-base'>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-sc-blue-normal">
                                ...مشاهده
                            </button>
                        </td>

                        <td className="flex justify-end px-6 py-4 whitespace-nowrap">
                            {handleStatus(row.status)}
                        </td>

                        <td className="text-sc-gray-500 px-6 py-4 whitespace-nowrap">
                            {row.time}
                        </td>
                        <td className="text-sc-gray-500 px-6 py-4 whitespace-nowrap">
                            {row.priority}
                        </td>

                        <td className="text-sc-black px-6 py-4 whitespace-nowrap">
                            {row.title}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
