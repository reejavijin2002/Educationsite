import React, { useState } from "react";
import Headersection from "../components/header/Headersection";
import Footer from "../components/footer/Footer";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Field, Form, Formik } from "formik";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject,setSubject]=useState("");
  const [message, setMessage] = useState("");
  const initialvalues1 = {
    name: "",
    email: "",
    subject:"",
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
    if (!subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };
  return (
    <div>
      <Headersection />
      <div className="p-10 bg-stone-100 md:px-28">
        <h2 className="mt-14 text-center font-bold text-4xl font-sans">Contacts</h2>
        <p className="text-center mb-20 text-xs text-gray-400">
          Home / Contacts
        </p>
        <div className="md:flex mb-20">
          <div className="md:w-1/3 xs:w-full">
            <h6 className="mb-3 text-xl">Location:</h6>
            <p className="mb-3 text-lg">123, New Lenox Chicago, IL 60606</p>
            <h6 className="mb-3 text-xl">Phone:</h6>
            <p className="mb-3 text-lg text-red-500">1(800)-456-789</p>
            <h6 className="mb-3 text-xl">Email:</h6>
            <p className="mb-3 text-lg text-red-500">info@yoursite.com</p>
            <h6 className="mb-3 text-xl">Social:</h6>
            <div className="flex gap-2 mb-5">
              <FaTwitter/>
              <FaFacebookF />
              <FaInstagramSquare />
            </div>


          </div>
          <Formik initialValues={{ initialvalues1 }} validate={validateForm}>
            {(formik)=>(
          <Form className="md:w-2/3 xs:w-full">
            <div className="md:flex w-full">
              <div className=" w-full">
              <Field
                type="text"
                placeholder="Your Name"
                className="md:w-[98%] xs:w-full mr-4 xs:mb-6 md:mb-0 bg-white p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value.trim())}
              />
               {!name ? (
                      <div className="validate md:w-[100%] xs:w-full mr-4 xs:mb-6 md:mb-0">{formik.errors.name}</div>
                    ) : null}
              </div>
              <div className=" w-full">
                
              <Field
                type="email"
                placeholder="Your Email"
                className="md:w-[98%] xs:w-full md:ml-2 p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
               {!email ? (
                      <div className="validate md:w-[50%] md:ml-2 xs:w-full  xs:mb-6 md:mb-0">{formik.errors.email}</div>
                    ) : null}
              </div>
                
            </div>
           
            <Field
              type="text"
              placeholder="subject"
              className="w-full mt-4 p-2 h-10 rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value.trim())}
            />
               {!subject ? (
                      <div className="validate">{formik.errors.subject}</div>
                    ) : null}
            <Field
              type="text"
              placeholder="Your Message"
              className="w-full mt-4 h-32 p-2 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value.trim())}
            />
               {!message ? (
                  <div className="validate">{formik.errors.message}</div>
                ) : null}
            <button className="bg-green-500 text-white h-14 w-40 rounded mt-4 font-bold"  onClick={() => formik.handleSubmit}>
              SEND MESSAGE
            </button>
          </Form>
          )}
          </Formik>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158847.04231435373!2d-80.3571336750387!3d25.77998961948965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a1b361e9ef%3A0x509b089f7b16557b!2sNaduvilangadi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1643830955566!5m2!1sen!2sus"
        style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
        title="location"
      ></iframe>

      <Footer />
    </div>
  );
};

export default Contact;
