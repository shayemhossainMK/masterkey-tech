import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-gray-50 contact-container h-screen">
      <div className="grid md:flex grid-cols-1 md:justify-between max-w-[800px] mx-auto py-28">
        <div className="text-center md:text-left">
          <input
            type="text"
            placeholder="Full Name"
            class="input w-full max-w-xs shadow-2xl rounded-3xl focus:outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="Company/Organization"
            class="input w-full max-w-xs my-5 rounded-3xl shadow-2xl focus:outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="Phone"
            class="input w-full max-w-xs mb-5 rounded-3xl shadow-2xl focus:outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            class="input w-full max-w-xs rounded-3xl shadow-2xl focus:outline-none"
          />
          <p className="mt-5 text-primary text-xl font-semibold md:ml-3">
            contact@masterkey.tech
          </p>
          <p className="text-secondary md:ml-3">
            <small>Click to copy the email</small>
          </p>
        </div>
        <div className="px-5 md:px-0 mt-5 md:mt-0 ">
          <textarea
            className="rounded-lg p-5 shadow-2xl focus:outline-none "
            name=""
            id=""
            cols="40"
            rows="6"
            placeholder="Please describe your requirements
            "
          ></textarea>

          <div className="mt-4 text-center md:text-start">
            <button className="btn btn-secondary px-8 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
