import { Route,Routes } from "react-router-dom"; 

//components

import LandingPage from './assets/components/LandingPage'
import TBIPrograms from "./assets/components/TBIPrograms";

const AppRoutes = () => {
    return(
        <Routes>
            <Route  path="/" element={<LandingPage/>} />
            <Route  path="/tbi-programs" element={<TBIPrograms/>} />
        </Routes>
    )
}
 
export default AppRoutes;