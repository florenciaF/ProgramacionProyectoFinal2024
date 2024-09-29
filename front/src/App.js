import { Navbar } from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { UserContext } from "./context/UserContext";


function App() {

  const [user, setUser] = useState({
    logged:false,
    role:'',
    id: ''
  });

  console.log('user logged:', user.logged); // Debugging

  return (
    <div>      
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          {
            user.logged ? (
              <Route path="/*" element={<PrivateRoutes />} /> 
            ):(
              <Route path="/*" element={<PublicRoutes />} />
            )
          } 
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

{/* <Navbar />
        
<Routes>
  <Route exact path="/dolar" element={ <Dolar />} />
  <Route exact path="/home" element={ <Home />} />
  <Route exact path="/login" element={ <Login />} />
  <Route exact path="/register" element={ <Register />}/>
</Routes> */}