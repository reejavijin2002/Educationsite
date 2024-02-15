import { useState } from "react";
import img1 from "../assets/image/control.png";
import img2 from "../assets/image/logo.png";
import img3 from "../assets/image/monitor.png";
import img4 from "../assets/image/mail-inbox-app.png";
import img5 from "../assets/image/user (2).png";
import img6 from "../assets/image/calendar.png";
import img7 from "../assets/image/loupe.png";
import img8 from "../assets/image/dashboard.png";
import img9 from "../assets/image/document.png";
import img10 from "../assets/image/setting.png";
import logo from "../assets/image/mellon_brand._logo_FIN__2__page-0001-removebg-preview.png";
import { Link } from "react-router-dom";
import home from "../assets/image/main.jpg";
import img11 from "../assets/image/down-arrow.png";
import img12 from "../assets/image/clock.png";


const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeListItem, setActiveListItem] = useState("Dashboard"); // Track active list item

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-[20%]" : "w-20 "
        } bg-gradient-to-r from-green-500 via-green-600 to-green-500  h-auto p-0 firstdiv  pt-0 relative  duration-300 rounded-3xl m-1 `}
      >
        <img
          src={logo}
          className={`cursor-pointer duration-500  h-28 ${
            open && "rotate-[360deg] w-36"
          }`}
        />
        <ul className="pt-0" id="ul1">
          <li
            className={`flex  rounded-md  px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-0 bg-light-white ${
              activeListItem === "Dashboard" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("Dashboard")}
          >
            {" "}
            <img src={img3} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Dashboard
            </span>
          </li>
          <li
            className={`flex  rounded-md px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold  text-sm items-center gap-x-4 mt-3 bg-light-white ${
              activeListItem === "inbox" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("inbox")}
          >
            {" "}
            <img src={img4} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Inbox
            </span>
          </li>
          <li
            className={`flex  rounded-md px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-3 bg-light-white ${
              activeListItem === "Accounts" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("Accounts")}
          >
            {" "}
            <img src={img5} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Accounts
            </span>
          </li>
          <li
            className="flex  rounded-md px-2 py-2 cursor-pointer hover:bg-green-400 hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-3 bg-light-white"
            onClick={toggleDropdown}
          >
            <img src={img6} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Schedule
            </span>
            <img src={img11} className="ml-auto" />
          </li>
          {showDropdown && (
            <div className=" ">
              <li
                className={`flex  rounded-md ml-4 px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white ${
                  activeListItem === "Time" ? "activeListItem" : ""
                }`}
                onClick={() => setActiveListItem("Time")}
              >
                {" "}
                <img src={img12} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Time
                </span>
              </li>
              <li
                className={`flex  rounded-md ml-4 px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white ${
                  activeListItem === "Date" ? "activeListItem" : ""
                }`}
                onClick={() => setActiveListItem("Date")}
              >
                {" "}
                <img src={img6} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Date
                </span>
              </li>
            </div>
          )}
          <li
            className={`flex  rounded-md px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-3 bg-light-white ${
              activeListItem === "Search" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("Search")}
          >
            {" "}
            <img src={img7} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Search
            </span>
          </li>
          <li
            className={`flex  rounded-md px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-3 bg-light-white ${
              activeListItem === "Analytics" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("Analytics")}
          >
            {" "}
            <img src={img8} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Analytics
            </span>
          </li>
          <li
            className={`flex  rounded-md px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-3 bg-light-white ${
              activeListItem === "File" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("File")}
          >
            {" "}
            <img src={img9} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Files
            </span>
          </li>
          <li
            className={`flex  rounded-md px-2 py-2 hover:bg-green-400 transition cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-3 bg-light-white ${
              activeListItem === "Settings" ? "activeListItem" : ""
            }`}
            onClick={() => setActiveListItem("Settings")}
          >
            {" "}
            <img src={img10} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Setting
            </span>
          </li>
        </ul>
        <img
          src={img1}
          className={`absolute cursor-pointer -right-3 slidingicon xs:invisible sm:visible top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="h-screen flex-1 p-2 w-[80%] seconddiv xs:invisible sm:visible">
        <header className="bg-stone-50 sticky   top-0   shadow border-slate-200z-30 ">
          <div className="px-4 ">
            <div className="flex items-center justify-between h-16 ">
              <Link to="/">
                <div className="flex caret-transparent">
                  <div>
                    <img src={logo} alt="" width="100px" height="45px" />
                  </div>{" "}
                  <div className="font-bold text-xl lg:text-2xl mt-2  "></div>
                </div>
              </Link>

              <div className="flex items-center space-x-3">
                <div></div>
                <div className=" xs:hidden sm:hidden md:flex text-sm">
                  <div className="ml-4 mr-2">
                    <div className="flex  cursor-pointer "></div>
                  </div>
                  <Link to="">
                    <img
                      className="rounded-full  border border-fuchsia-950 "
                      style={{
                        border: "0.2rem solid fuchsia",
                        width: "40px",
                        height: "40px",
                        transition: "border-color 0.3s ease", // Adding transition for a smoother effect
                      }}
                      src={home}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = "transparent"; // Change border color to transparent on hover
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderColor = "fuchsia"; // Change border color back to the original color on mouse out
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Dashboard;
