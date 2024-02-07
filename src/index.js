import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Headersection from './components/header/Headersection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosection from './components/herosection/Herosection';
import Heroslider from './components/herosection/Heroslider';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Gallery from './pages/Gallery';
import Galleryall from './components/gallerycomponent/Galleryall';
import Gallerynews from './components/gallerycomponent/Gallerynews';
import Galleryshedule from './components/gallerycomponent/Galleryshedule';
import Gallerytutoring from './components/gallerycomponent/Gallerytutoring';
import Events1 from './pages/Events1';
import Sidebar from './components/sidebar/Sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/headersection' element={<Headersection/>}/>
    <Route path='/herosection' element={<Herosection/>}/>
    <Route path='/heroslide' element={<Heroslider/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/events' element={<Events1/>}/>
    <Route path='/sidebar' element={<Sidebar/>}/>


    <Route path='/gallery' element={<Gallery/>}>
      <Route path='' element={<Galleryall/>} />
      <Route path='gallerynews' element={<Gallerynews/>} />
      <Route path='galleryshedule' element={<Galleryshedule/>} />
      <Route path='gallerytutoring' element={<Gallerytutoring/>} />



    </Route>






  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


