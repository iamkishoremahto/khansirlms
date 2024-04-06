
import Breadcrumb from "../componenets/Breadcrumb";
import { BiBroadcast } from "react-icons/bi";
import Dashboardnavlinks from "../componenets/Dashboardnavlinks";
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <Breadcrumb data={{ title: "Dashboard" }} />
      <div className=" flex justify-center items-center">
        <div className=" flex container">
          <Dashboardnavlinks />
          <div className=" w-full min-h-full">
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
