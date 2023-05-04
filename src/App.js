import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/Home/HomeComponent';
import {Routes, Route , BrowserRouter } from "react-router-dom"
import RegComponent from './components/Register/RegisterComponent';
import AboutComponent from './components/About/AboutComponent';
import EventComponent from './components/Events/EventComponent';
import ProjectComponent from './components/Projects/ProjectComponent';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeComponent/>}/>
          <Route path='/register' exact element={<RegComponent/>}/>
          <Route path='/about' exact element={<AboutComponent/>}/>
          <Route path='/event' exact element={<EventComponent/>}/>
          <Route path='/project' exact element={<ProjectComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
