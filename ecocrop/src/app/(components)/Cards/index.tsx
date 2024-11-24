import { Ellipsis } from "lucide-react";

interface CardProps {
  category: string;
  count: any;

}

const DashboardCards: React.FC<CardProps> = ({category, count}) => {
  return (
    <div className="rounded-2xl shadow-md odd:bg-green-300 even:bg-blue-300 p-4 flex-1 min-w-{200px}">
      <div className="flex justify-between">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-black">01/11/2024</span>
        <Ellipsis className="w-6 h-6 text-white rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500"/>
      </div>
      <h2 className="text-2xl font-semibold my-4">{count}</h2>
      <h2 className="capitalize text-sm font-medium text-gray-500"></h2>
      {category}</div>
  )
}

export default DashboardCards