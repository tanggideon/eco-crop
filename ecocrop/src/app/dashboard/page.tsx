import DashboardCards from "../(components)/Cards"
import OrderBarChart from "../(components)/orderChart"
import Header from "../(components)/Header";
import EventCalendar from "../(components)/calendar"
import Count from "../(components)/Count";
import RevenueCharts from "../(components)/revenue";


const recents = [
  {
    id: 1,
    eventType: "Update",
    description: "Updated Product (Maize) Quantity",
    time: "November, 13th 2024 - 12:49pm"
  },
  {
    id: 2,
    eventType: "Enrolment",
    description: "Added New Supplier",
    time: "November, 13th 2024 - 12:49pm"
  },
  {
    id: 3,
    eventType: "Enrolment",
    description: "Added New Supplier",
    time: "November, 13th 2024 - 12:49pm"
  },
  {
    id: 4,
    eventType: "Update",
    description: "Update on Supplier Information",
    time: "November, 13th 2024 - 12:49pm"
  }
];

const Dashboard = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">

      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <DashboardCards category="Farmers" count="1,025" />
          <DashboardCards category="Customers" count="1,127" />
          <DashboardCards category="Delivery" count="125" />
          <DashboardCards category="Products" count="25" />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row my-5">
          <div className="w-full lg:w-1/3 h-[450px]">
            <Count />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <RevenueCharts />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <OrderBarChart />
        </div>
      </div>
    
      <div className="w-full lg:w-1/3 flex flex-col gap-8 shadow-md p-4">
        <EventCalendar />
        <Header name="Recent Activity" />
        <div className="flex flex-col gap-4">
          {recents.map(activity => (
            <div className="p-5 rounded-md border-2 border-gray-300 border-t-4" key={activity.id}>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{activity.eventType}</h1>
                <span className="text-gray-400 text-xs">{activity.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-xs">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard