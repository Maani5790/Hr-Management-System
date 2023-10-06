import './App.css';
import { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Screenshot from './pages/Screenshot';
import Form from './pages/Form';
import MyTeamPage from './pages/MyTeam';
import Overview from './pages/Overview';


function App() {
  return (
   <Fragment>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Form />} />
    <Route path='/myteam' element={<MyTeamPage />} />
    <Route path='/home' element={<Home />} />
    <Route path='/screen-shots' element={<Screenshot />} />
    <Route path='/overv
    iew' element={<Overview />} />
   </Routes>
   </BrowserRouter>
   </Fragment>
  );
}

export default App;
