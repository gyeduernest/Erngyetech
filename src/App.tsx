import Landingpage from "./Landingpage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import { auth } from "./firebaseConfig"
import Allprojects from "./Allprojects"





function App() {

  return (
    <>
      <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/login" element={<Login  auth={auth}/>}/>
            <Route path="/signup" element={<Signup auth={auth}/>}/>
            <Route path="/allprojects" element={<Allprojects/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
