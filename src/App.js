import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom"
import Home from "./home/Home";
import List from "./list/List";
import Hotel from "./hotel/Hotel";

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;