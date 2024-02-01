import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrushOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Headersection from './components/header/Headersection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosection from './components/herosection/Herosection';
import Heroslider from './components/herosection/Heroslider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/headersection' element={<Headersection/>}/>
    <Route path='/herosection' element={<Herosection/>}/>
    <Route path='/heroslide' element={<Heroslider/>}/>



  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


