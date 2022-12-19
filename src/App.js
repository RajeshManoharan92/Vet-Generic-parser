import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Addeditmasterscompany } from './components/add_edit_masters_company';
import { Addeditmasterscorporation } from './components/add_edit_masters_corporation';
import { Corporate } from "./components/corporate"
import { Createuser } from "./components/create_user"
import { Dashboard } from "./components/dashboard"
import { Forgotpassword } from "./components/forgot_password"
import { Login } from "./components/login"
import { Masters } from "./components/masters"
import { Subadmin } from "./components/sub_admin"
import { Jobs } from "./components/jobs"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userslice"

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/createSubAdmin" element={<Subadmin />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/createUser" element={<Createuser />} />
              <Route path="/masters" element={<Masters />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/addCompany" element={<Addeditmasterscompany />} />
              <Route path="/addCorporate" element={<Addeditmasterscorporation />} />
            
              <Route path="/" element={<Login />} />
              <Route path="/forgot" element={<Forgotpassword />} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
