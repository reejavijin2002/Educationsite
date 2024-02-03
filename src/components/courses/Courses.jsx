import React from "react";
import img1 from "../../assets/image/slide1.jpg";
import img2 from "../../assets/image/slide2.jpg";
import img3 from "../../assets/image/slide3.jpg";
import img4 from "../../assets/image/slide4.jpg";
import img5 from "../../assets/image/slide5.jpg";

import Card from "react-bootstrap/Card";

const Courses = () => {
  return (
    <div className="bg-stone-100 pt-20 pb-10">
      <h6 className="text-center text-gray-400 font-bold font-serif">The Best Choice</h6>
      <h3 className="text-center font-extrabold mb-10">Popular Choice</h3>
      <div
        className="mb-20"
        style={{
          display: "flex",
          overflowX: "hidden",
          gap: "10px",
          width: "100%",
        
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap:"wrap",
            width: "fit-content",
            justifyContent:"center",
            gap: "10px",
          
          }}
        >
          <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={img1} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm rounded font-semibold text-white mt-[-25px]">
                IT DEVELOPMENT
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                Network Security And Configurtion
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img2} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm  rounded font-semibold text-white mt-[-25px]">
                BUSINESS & MANAGEMENT
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                Social Media And Webdesign technology
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img3} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm  rounded font-semibold text-white mt-[-25px]">
                DESIGN
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                WordPress Development With Boostrap
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img4} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm  rounded font-semibold text-white mt-[-25px]">
                IT DEVELOPMENT
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                Business Analysis And Valuation
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={img5} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm  rounded font-semibold text-white mt-[-25px]">
                BUSINESS & MANAGEMENT
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                User Experience Design Fundamentals
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={img1} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm rounded font-semibold text-white mt-[-25px]">
                IT DEVELOPMENT
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                Network Security And Configurtion
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img3} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm  rounded font-semibold text-white mt-[-25px]">
                DESIGN
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                WordPress Development With Boostrap
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img2} className="h-48" />
            <Card.Body>
              <h6 className="w-56 h-6 pt-0.5 pt-auto pb-auto bg-green-500 text-center text-sm  rounded font-semibold text-white mt-[-25px]">
                BUSINESS & MANAGEMENT
              </h6>
              <Card.Text className="px-2 text-md font-bold">
                Social Media And Webdesign technology
              </Card.Text>
              <div className="w-[16rem] h-0.5 bg-gray-100 mb-2"></div>
              <div className="flex">
              <p className="text-sm text-gray-400">Started on 12.12.2009</p>
              <h5 className="text-orange-500 text-right ml-auto">$380</h5>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
