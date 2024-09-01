import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/sign-in" element={<Register/>}/>
            <Route path="/log-in" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router