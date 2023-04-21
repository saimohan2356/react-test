import Register from "../src/components/Register";
import Userform from "../src/components/Userform";
import Login from "../src/components/Login";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route index element={<Register/>}/>
      <Route path="/Userform" element={<Userform/>}/>
      <Route path="/Login" element={<Login/>}/>
</Routes>
    </div>
  );
}

export default App;
