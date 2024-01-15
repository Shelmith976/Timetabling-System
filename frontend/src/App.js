import Header from "./components/Header";
import ResetPassword from "./components/ResetPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Tt from "./components/pages/Tt"
import AddLec from "./components/pages/AddLec"
import {  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddRoom from "./components/pages/AddRoom";
import AddCourse from "./components/pages/AddCourse";
import Department from "./components/pages/Department"
import AddUnit from "./components/pages/AddUnit";
import CreateBatch from "./components/pages/CreateBatch";
function App() {
  return (
    <Router>
      <div className="App">

      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={ <NavBar/> } />
        <Route path="login" element={ <SignIn/> } />
        <Route path="signup" element={ <SignUp/> } />
        <Route path="forget-password" element={ <ResetPassword/> } />
        <Route path="createtimetable" element={ <Tt/> } />
        <Route path="addlecturer" element={ <AddLec/> } />
        <Route path="addroom" element={ <AddRoom/> } />
        <Route path="addcourse" element={ <AddCourse/> } />
        <Route path="addcourse" element={ <AddCourse/> } />
        <Route path="adddepartment" element={ <Department/> } />
        <Route path="addunit" element={ <AddUnit/> } />
        <Route path="createbatch" element={ <CreateBatch/> } />


      </Routes>
      {/* <Header/> */}
      {/* <SignIn /> */}
      {/* <SignUp/> */}
      {/* <ResetPassword/> */}
    </div>
    </Router>
    
  );
}

export default App;
