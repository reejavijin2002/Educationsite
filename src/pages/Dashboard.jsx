import { useState } from "react";
import img1 from "../assets/image/control.png";
import img2 from "../assets/image/logo.png";
import img3 from "../assets/image/Chart_fill.png";
import img4 from "../assets/image/Chat.png";
import img5 from "../assets/image/Chart.png";
import img6 from "../assets/image/Calendar.png";
import img7 from "../assets/image/Search.png";
import img8 from "../assets/image/Chart.png";
import img9 from "../assets/image/Folder.png";
import img10 from "../assets/image/Setting.png";
import logo from "../assets/image/mellon_brand._logo_FIN__2__page-0001-removebg-preview.png";
import { Link } from "react-router-dom";
import home from "../assets/image/main.jpg";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: img3 },
    { title: "Inbox", src: img4 },
    { title: "Accounts", src: img5, gap: true },
    { title: "Schedule ", src: img6 },
    { title: "Search", src: img7 },
    { title: "Analytics", src: img8 },
    { title: "Files ", src: img9, gap: true },
    { title: "Setting", src: img10 },
  ];

  return (
    <div className="flex">
    <div
      className={`${
        open ? "w-[20%]" : "w-20 "
      } bg-green-600 h-auto p-0 firstdiv  pt-0 relative  duration-300 rounded-3xl m-1 `}
    >
      <img
        src={logo}
        className={`cursor-pointer duration-500  h-16 ${
          open && "rotate-[360deg]"
        }`}
      />
      <ul className="pt-0">
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
          <img src={img3} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Dashboard
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2">
          <img src={img4} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Inbox
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
          <img src={img5} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Accounts
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
          <img src={img6} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
          Schedule
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
          <img src={img7} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
          Search
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
          <img src={img8} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
          Analytics
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
          <img src={img9} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
          Files
          </span>
        </li>
        <li className="flex  rounded-md py-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm items-center gap-x-4 mt-2 bg-light-white">
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
    <div className="h-screen flex-1 p-7 w-[80%] seconddiv xs:invisible sm:visible">
      <header className="bg-stone-50 sticky   top-0   shadow border-slate-200z-30 ">
        <div className="px-4 ">
          <div className="flex items-center justify-between h-16 ">
            <Link to="/">
              <div className="flex caret-transparent">
                <div>
                  <img src={logo} alt="" width="45px" height="45px" />
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
