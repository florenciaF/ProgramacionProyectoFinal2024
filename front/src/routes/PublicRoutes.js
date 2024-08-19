import { Route, Routes, Navigate} from "react-router-dom";
// import { Dolar } from "../components/Dolar";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
// import { Contador } from "../components/Contador";

export const PublicRoutes = () => {
  return (
    <Routes>
  
        {/* <Route exact path="/dolar" element={ <Dolar />} /> */}
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />}/>
        {/* <Route exact path="/contador" element={ <Contador />}/> */}

        <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}
