import React, {useEffect, useState} from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./components/App.css";



import PeopleInfoHR from "pages/PeopleInfo/PeopleInfoHR";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import  Info from "./pages/Info/Info";
import InfoHR from "pages/InfoHR/InfoHR";
import InfoMv from "pages/InfoMV/Info";
import ViewOffboard from "./pages/Offboard/ViewOffboard";
import AddOffboard from "./pages/Offboard/AddOffboard";
import Viewhrsupport from "./pages/hrsupport/hrsupport";
import Home from "./pages/Home/Home";
import HomeHr from "pages/HRHome/Homehr";
import HomeMV from "pages/MVHome/HomeMV";
import RequireAuth from "./pages/Helper/RequireAuth";
import HRDash from "./pages/HR Dash/HRDash";
import Leave from "./pages/leave/Leave";
import LeaveHR from "pages/leaveHR/Leave";
import LeaveMv from "pages/leaveMV/Leave";
import ToDoHR from "./pages/ToDoHR";
import ToDo from "pages/ToDo";
import ToDoMv from "pages/ToDoMv";
import People from "./pages/People";
import PeopleHR from "pages/PeopleHR";
import PeopleMv from "pages/PeopleMv";
import ModalDetails from "./components/ToDoLeave/Modal";
import Hiring from "./pages/Hiring";
import HiringHR from "pages/HiringHR";
import HiringMV from "pages/HiringMV";
import SalarySection from "./pages/SalarySection";
import SalarySectionHR from "./pages/SalarySectionHR";
import SalarySectionMV from "pages/SalarySectionMv";
import AskHr from "pages/askhr";
import { AstPath } from "prettier";
import Home2 from "pages/Home2/home2";
import ResignForm from "components/Askhr/Resignation/ResignFlow";
import EmpLogin from "pages/Login/emplogin";
import LoginMv from "pages/Login/LoginMv";
import ResignFlow from "components/Askhr/Resignation/ResignFlow";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    window.scrollTo(0, 0); 

    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }

  }, []);
  
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        {/* home routes */}

        {/* routes for designation */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/emp" element={<EmpLogin />}></Route>
        <Route path="/mv" element={<LoginMv />}></Route>

        <Route path="home" element={<Home />}></Route>
        <Route path='homehr' element={<HomeHr />}></Route>
        <Route path='homeMv' element={<HomeMV />}></Route>
       

        {/* Admin Routes */}

        
        <Route path="/signup/:token" element={<Signup />}></Route>
        <Route path="info" element={<Info />}></Route>
        <Route path="infoHR" element={<InfoHR />}></Route>
        <Route path="infoMv" element={<InfoMv />}></Route>
        <Route path="leave" element={<Leave />}></Route>
        <Route path="leaveHR" element={<LeaveHR />}></Route>
        <Route path="leaveMv" element={<LeaveMv />}></Route>
        <Route path="todo" element={<ToDo />}></Route>
        <Route path="todoHR" element={<ToDoHR />}></Route>
        <Route path="todoMv" element={<ToDoMv />}></Route>
        <Route path="people" element={<People />}></Route>
        <Route path="peopleHR" element={<PeopleHR />}></Route>
        <Route path="PeopleInfoHR" element={<PeopleInfoHR/>}></Route>
        <Route path="peopleMv" element={<PeopleMv />}></Route>
        <Route path="hiring" element={<Hiring />}></Route>
        <Route path="hiringHR" element={<HiringHR />}></Route>
        <Route path="hiringMv" element={<HiringMV />}></Route>
        <Route path="salarysection" element={<SalarySection />}></Route>
        <Route path="salarysectionHR" element={<SalarySectionHR />}></Route>
        <Route path="salarysectionMv" element={<SalarySectionMV />}></Route>
        <Route path="askhr" element={<AskHr />}></Route>
        <Route path='home2' element={<Home2 />}></Route>
        <Route path="resignflow" element={<ResignFlow/>}></Route> 
        <Route path="PeopleInfoHR" element={<PeopleInfoHR/>}></Route>



      

       
        
        <Route path="/offboard" element={<ViewOffboard />}></Route>
        <Route path="/addoffboard" element={<AddOffboard />}></Route>
        <Route path="/hrsupport" element={<Viewhrsupport />}></Route>

        {/* </Route> */}

        {/* HR Routes */}
        {/* <Route element={<RequireAuth allowedRole={[10,9]}/>}>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/Updatejobs" element={<UpdateJobs />}></Route>
            <Route path="/viewJobs" element={<Viewjobs />}></Route>
            <Route path="/viewApplicants" element={<ViewJobApplicants/>}></Route>
            <Route path="/addApplicants" element={<AddJobApplicants/>}></Route>
            <Route path="/updateApplicants" element={<UpdateJobApplicants/>}></Route>
            <Route path="/viewApplicationTrack" element={<ViewApplicationTrack/>}></Route>
            <Route path="/addApplicationTrack" element={<AddApplicationTrack/>}></Route>

          </Route> */}

        <Route element={<RequireAuth allowedRole={[9]} />}>
          <Route path="/adminDash" element={<Home />}></Route>
        </Route>
        <Route element={<RequireAuth allowedRole={[10]} />}>
          <Route path="/hrDash" element={<HRDash />}></Route>


        </Route>
        <Route element={<RequireAuth allowedRole={[11]} />}>
          <Route path="/empDash" element={<Home />}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
