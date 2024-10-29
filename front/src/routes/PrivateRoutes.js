import { Route, Routes, Navigate} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { DashboardAdmin } from "../components/DashboardAdmin";
import { Panel } from "../components/Panel";
import { AddEvent } from "../components/AddEvent";
import { ListEvents } from "../components/ListEvents";
import { MyAttendances } from "../components/MyAttendances"

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/listEvents" element={<ListEvents />} />
        <Route path="/myAttendances" element={<MyAttendances />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
