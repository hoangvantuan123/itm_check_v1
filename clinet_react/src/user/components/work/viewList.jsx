export default function ListView({ listData }) {
    console.log(listData);

    return (
        <div className="flex flex-col w-full">
            <ul className="w-full border border-gray-300">
                {listData.map((item, index) => (
                    <li key={index} className="border-b border-gray-300 p-4 flex justify-between">
                        <span>{item.date}</span>
                        <span>{item.timeIn}</span>
                        <span>{item.timeOut}</span>
                        <span>{item.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
