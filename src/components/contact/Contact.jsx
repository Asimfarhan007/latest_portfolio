import React, { useEffect, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init("2NyqHnkQMUQGWX2nj");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the field in real-time
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Please enter your name.";
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Please enter your email.";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        error = "Please enter a valid email address.";
      }
    }

    if (name === "message" && !value.trim()) {
      error = "Please enter your message.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) &&
      formData.message.trim()
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    emailjs
      .send("service_xndh74m", "template_tk04ifj", formData)
      .then(() => {
        toast.success("Email sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });

        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((err) => {
        toast.error("Failed to send email. Please try again!", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("FAILED...", err);
      });
  };

  return (
    <div id="contact" className="container m-auto mt-6">
      {/* Heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-white sm:text-2xl">Contact</h3>
      </div>

      {/* Card */}
      <div className="contact-wrapper">
        <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center gap-5 sm:flex-col">
          <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
            <div className="flex-3 w-1/2 gap-3 flex items-end justify-end flex-col sm:w-3/4">
              <div>
                <h1 className="text-5xl sm:text-center md:text-start font-bold bg-gradient-to-r from-[#D5AF4A] via-[#F2E983] to-[#D5B14B] bg-clip-text text-transparent sm:text-3xl">
                  Get stunning
                </h1>
                <h3 className="text-xl sm:text-center md:text-start bg-gradient-to-r from-[#D5AF4A] via-[#F2E983] to-[#D5B14B] bg-clip-text text-transparent sm:text-lg">
                  Responsive designs for mobile and web. Leave a request today!
                </h3>
              </div>
            </div>
          </div>
          <div className="right flex-1">
            <form
              className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
              onSubmit={sendEmail}
            >
              {/* Email Field */}
              <div className="w-full">
                <input
                  className="px-3 text-black hover:border-blue-600 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  name="email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Name Field */}
              <div className="w-full">
                <input
                  className="px-3 text-black shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  name="name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Message Field */}
              <div className="w-full">
                <textarea
                  className="px-3 text-black shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  name="message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="bg-gradient-to-t from-[#EFFFCC] to-[#344D00] w-full rounded-lg p-[1px] hover:scale-95">
                <button
                  className={`bg-gradient-to-t from-[#49C24F] via-[#217425] to-[#176E1C] w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1 ${
                    !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={!isFormValid()}
                >
                  <span className="text-lg">Send</span>
                  <RiSendPlaneFill />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
