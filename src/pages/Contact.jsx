import React from "react";
import Headersection from "../components/header/Headersection";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Headersection />
      <div className="p-10 bg-stone-100">
      <h2 className="mt-14 text-center font-extrabold">Contacts</h2>
      <p className="text-center mb-20 text-gray-400">Home / Contacts</p>
      <div className="flex mb-20">
        <div className="w-1/3">
          <h6 className="mb-10">Location:</h6>
          <p className="mb-10 text-sm">123, New Lenox Chicago, IL 60606</p>
          <h6 className="mb-10">Phone:</h6>
          <p className="mb-10 text-sm text-red-500">1(800)-456-789</p>
          <h6 className="mb-10">Email:</h6>
          <p className="mb-10 text-sm text-red-500">info@yoursite.com</p>
        </div>
        <div className="w-2/3">
          <div className="flex w-full">
            <input type="text" placeholder="Your Name" className="w-[50%] mr-4 bg-white p-2 rounded"  />
            <input type="email" placeholder="Your Email" className="w-[50%] p-2 rounded" />
          </div>
          <input type="text" placeholder="subject" className="w-full mt-4 p-2 h-10 rounded" />
          <input type="text" placeholder="Your Message" className="w-full mt-4 h-32 p-2 rounded" />
          <button className="bg-green-500 text-white h-14 w-40 rounded mt-4 font-bold">
            SEND MESSAGE
          </button>
        </div>
        </div>

      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158847.04231435373!2d-80.3571336750387!3d25.77998961948965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a1b361e9ef%3A0x509b089f7b16557b!2sNaduvilangadi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1643830955566!5m2!1sen!2sus" style={{width: "100%", height: "400px", border: "1px solid #ccc"}}></iframe>

      <Footer />
    </div>
  );
};

export default Contact;