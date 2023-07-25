import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast } from "react-toastify";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";

const Contect = () => {
  const form = useRef();
  const resetForm = () => {
    form.current.reset(); // Reset the form fields
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_azgh9wa",
        "template_1eyzrhs",
        form.current,
        "qZL8i6t0DTb207qk7"
      )
      .then(
        (result) => {
          console.log(result);
          toast("Email sent successfully😃"); // Show success notification
          resetForm(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="text-blue-700 text-3xl py-10 text-center font-semibold">
        Contact Me
      </h1>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row">
          {/* <img src={message} className="w-1/2  rounded-lg shadow-2xl" /> */}
          <div className="space-y-5">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-base-300 py-7 px-12 rounded-xl flex"
            >
              <div className="mt-6 -ml-5">
                <FiPhoneCall className="h-8 w-8 text-blue-700"></FiPhoneCall>
              </div>
              <div className="ml-5">
                <p className="font-bold text-xl">Contact Via Phone</p>
                <p>
                  {" "}
                  +88 01606106634 <br />
                  +88 01822423585
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-base-300 py-7 px-12 rounded-xl flex"
            >
              <div className="mt-2 -ml-5">
                <TfiEmail className="h-8 w-8 text-blue-700"></TfiEmail>
              </div>
              <div className="ml-5">
                <p className="font-bold text-xl">Contact Via Email</p>
                <p>fahim.farhad132@gmail.com </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-base-300 py-7 px-12 rounded-xl flex"
            >
              <div className="mt-2 -ml-5">
                <GoLocation className="h-8 w-8 text-blue-700" />
              </div>
              <div className="ml-5">
                <p className="font-bold text-xl">Location</p>
                <p>Mohammadpur; katashur; Sher-E Bangla Road; </p>
              </div>
            </div>
          </div>
          <StyledContactForm>
            <form
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1200"
              className=" bg-base-300 p-5 rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input className="btn" type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contect;

// style

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
