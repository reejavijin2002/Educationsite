import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headersection from "./components/header/Headersection";
import "bootstrap/dist/css/bootstrap.min.css";
import Herosection from "./components/herosection/Herosection";
import Heroslider from "./components/herosection/Heroslider";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Gallery from "./pages/Gallery";
import Galleryall from "./components/gallerycomponent/Galleryall";
import Gallerynews from "./components/gallerycomponent/Gallerynews";
import Galleryshedule from "./components/gallerycomponent/Galleryshedule";
import Gallerytutoring from "./components/gallerycomponent/Gallerytutoring";
import Events1 from "./pages/Events1";
import Sidebar from "./components/sidebar/Sidebar";
import { ScaleLoader } from "react-spinners";
import Blog from "./pages/Blog";
import Blogone from "./components/blogcomponents/Blogone";
import Post1 from "./components/blogcomponents/Post1";
import Post2 from "./components/blogcomponents/Post2";
import Post3 from "./components/blogcomponents/Post3";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Dashfirst from "./components/dashfirst/Dashfirst";
import Baneradding from "./components/baneradding/Baneradding";


const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        {loading ? (
          <div className="loader-container">
            <ScaleLoader
              color={"#0bd912"}
              loading={loading}
              className="loadinganimation"
              size={150}
            />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/headersection" element={<Headersection />} />
            <Route path="/herosection" element={<Herosection />} />
            <Route path="/heroslide" element={<Heroslider />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/events" element={<Events1 />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} >
              <Route path="" element={<Dashfirst/>}/>
              <Route path="baner" element={<Baneradding/>}/>
            </Route>



            <Route path="/gallery" element={<Gallery />}>
              <Route path="" element={<Galleryall />} />
              <Route path="gallerynews" element={<Gallerynews />} />
              <Route path="galleryshedule" element={<Galleryshedule />} />
              <Route path="gallerytutoring" element={<Gallerytutoring />} />
            </Route>
            <Route path="/blog" element={<Blog />}>
              <Route path="" element={<Blogone />} />
              <Route path="post1" element={<Post1 />} />
              <Route path="post2" element={<Post2 />} />
              <Route path="post3" element={<Post3 />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </React.StrictMode>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
