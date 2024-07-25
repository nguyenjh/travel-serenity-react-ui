import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom"

import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Payment from "./pages/payment/Payment.jsx";

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/hotels/:id/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;