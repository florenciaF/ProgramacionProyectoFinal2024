import { Route, Routes, Navigate} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { DashboardAdmin } from "../components/DashboardAdmin";
import { Panel } from "../components/Panel";

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/panel" element={<Panel />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
