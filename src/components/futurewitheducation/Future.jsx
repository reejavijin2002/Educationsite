import React, { useState } from "react";
import img1 from "../../assets/image/mystery-businessman-eyeglasses-sitting-by-table-cafe-with-laptop-computer-looking-away.jpg";
import img2 from "../../assets/image/man-having-coffee-while-using-his-laptop.jpg";
import img3 from "../../assets/image/lightbulb (1).png";
import img4 from "../../assets/image/bachelor (1).png";
import { Field, Form, Formik } from "formik";

const Future = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const initialvalues1 = {
    name: "",
    email: "",
    message: "",
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };
  return (
    <div>
      <div className="bg-stone-100 w-full md:flex">
        <div className="md:w-1/2 xs:w-full">
          <img src={img1} alt="" className="w-full h-[500px]" />
        </div>
        <div className="p-5 md:w-1/2 xs:w-full mt-16">
          <h5 className="text-sm text-gray-400 font-serif">The Best Choice</h5>
          <h4 className="font-bold ">We Build Future with Education</h4>
          <div className="align-top justify-left mr-auto  w-10 mt-2 mb-2 h-0.5 bg-green-500 "></div>

          <p className="text-sm  font-light mt-0 mb-5">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explore.
          </p>
          <div className="md:flex mt-10">
            <div className="flex">
              <div className="w-[15%]">
                <img src={img4} alt="" className="mr-2" />
              </div>

              <div className="w-[85%]">
                {" "}
                <h6 className="text-base text-black font-sans">
                  Professional Degree
                </h6>
                <p className="text-sm  font-light">
                  Professional degrees are degrees recognized by the US
                  Department of Education as necessary for subsequent licensing.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[15%]">
                <img src={img3} alt="" className="mr-2" />
              </div>
              <div className="w-[85%]">
                <h6 className="text-base text-black font-sans">
                  The Best Online Courses
                </h6>
                <p className="text-sm  font-light">
                  Find Courses and Specializations from top universities like
                  Yale, Michigan, Stanford, and leading companies like Google
                  and IBM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-100 w-full md:flex">
        <Formik initialValues={{ initialvalues1 }} validate={validateForm}>
          {(formik) => (
        
              <Form className="md:w-1/2 xs:w-full mt-16 p-5">
                <h5 className="text-sm text-gray-400 font-serif">
                  The Best Choice
                </h5>
                <h4 className="font-bold ">Get Free Consultation</h4>
                <div className="align-top justify-left mr-auto  w-10 mt-3 mb-2 h-0.5 bg-green-500  "></div>
                <div className="mt-10 w-full flex">
                  <div className="w-1/2">
                    <Field
                      type="text"
                      placeholder="Your Name"
                      className="bg-stone-100 w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value.trim())}
                    ></Field>
                    <div className="bg-gray-300 h-0.5 w-[90%] mt-2"></div>
                    {!name ? (
                      <div className="validate">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="w-1/2">
                    <Field
                      type="email"
                      placeholder="Your Email"
                      className="bg-stone-100 w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.trim())}
                    ></Field>
                    <div className="bg-gray-300 h-0.5 w-[90%] mt-2"></div>
                    {!email ? (
                      <div className="validate">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <Field
                  type="text"
                  placeholder="Your Message"
                  className="bg-stone-100 w-full mt-10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value.trim())}
                ></Field>
                <div className="bg-gray-300 h-0.5 w-[95%] mt-2"></div>
                {!message ? (
                  <div className="validate">{formik.errors.message}</div>
                ) : null}
                <button
                  className="mt-14 bg-green-500 h-12 text-white font-semibold px-4 rounded"
                  onClick={() => formik.handleSubmit}
                >
                  SEND MESSAGE
                </button>
              </Form>
            
          )}
        </Formik>
        <div className=" md:w-1/2 xs:w-full ">
          <img src={img2} alt="" className="w-full h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Future;
