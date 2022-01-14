import Login from "../pages/login"
 
import {BrowserRouter,
        Routes,
        Route } from "react-router-dom";

function AppRoutes () {

    return(

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element = {<Login />}/>

            </Routes>
        
        </BrowserRouter>
        
    );

}

export default AppRoutes;