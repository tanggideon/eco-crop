import { mockDataNotification } from "@/constants/mockData"
import DashboardCards from "../(components)/Cards"
import Header from "../(components)/Header"
import { DataGrid } from "@mui/x-data-grid"


const Notifications = () => {

  const columns = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "requestType",
      headerName: "Request Type",
      flex: 1
    },
    {
      field: "dateTime",
      headerName: "Date Time",
      flex: 1
    },
    {
      field: "requestResponse",
      headerName: "Response",

    },
    
  ]
  return (
    <div className="flex flex-col">
      <Header name="Notifications"/>
      <hr />
      <div className="w-full h-full mt-3">
        <DataGrid rows={mockDataNotification} columns={columns}/>
      </div>
    </div>
  )
}

export default Notifications