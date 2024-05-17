import { SnackbarProvider, enqueueSnackbar } from "notistack";
import whitePattern from "../assets/images/pattern-svg.svg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactForm() {

    const form = useRef();
    
    // const handleVerification = (response) => {
    //     // The response parameter contains the reCAPTCHA token
    //     if (response) {
    //     setVerified(true);
    //     }
    // };

    const sendEmail = () => {
        
        emailjs
          .sendForm(
            "service_eahmcs9",
            "contact_form",
            form.current,
            "UfB4pSdLlpE4v_uk5"
          )
          .then(
            (result) => {
              console.log(result.text);

              enqueueSnackbar('Your message has been received! We will get back to you soon.', { 
                variant: 'success',
                persist: true
              })
            },
            (error) => {
              console.log(error.text);

              enqueueSnackbar('Error occurred!', { 
                variant: 'error',
                persist: true
              })
            }
          );
        
      };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Validate form inputs
        const firstName = event.target.elements.user_name.value.trim();
        const surname = event.target.elements.user_surname.value.trim();
        const email = event.target.elements.user_email.value.trim();
        const number = event.target.elements.user_number.value.trim();
        const message = event.target.elements.message.value.trim();

        const firstNameError = document.getElementById("firstNameError");
        const surnameError = document.getElementById("surnameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        if (!firstName) {
            firstNameError.innerText = "Please enter your first name";
        } else {
            firstNameError.innerText = "";
        }

        if (!surname) {
            surnameError.innerText = "Please enter your surname";
        } else {
            surnameError.innerText = "";
        }

        if (!email) {
            emailError.innerText = "Please enter your email address";
        } else {
            emailError.innerText = "";
        }

        if (!message) {
            messageError.innerText = "Please enter your message";
        } else {
            messageError.innerText = "";
        }
        
        // Check if any field is empty
        if (!firstName || !surname || !email || !number || !message) {
            return;
        }

        sendEmail();
        event.target.reset();
    };
    
    return (
        <div className="mb-16 md:w-[1040px] px-8 md:mx-auto">
            <SnackbarProvider />
            <h2 className="font-saeada-regular text-[22px] text-[#922263] mb-4 font-bold md:text-[30px] text-center">Reach Out and Connect</h2>
            <p className="font-saeada-light md:tracking-widest mb-8 text-[#888888] text-center">
                For general Inquiries, partnerships and collaborations, 
                feedback and suggestions, please feel free to reach out to us using the contact form provided, 
                and we'll be happy to assist and connect with you.
            </p>
            <form ref={form} onSubmit={handleSubmit} id="myForm" className="p-8 border border-gray-300 grid gap-4 grid-cols-1 md:grid-cols-2 rounded-[32px] mb-4">
                
                <div className="">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="user_name">First Name<span style={{color: 'red'}}>*</span></label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="firstName" type="text" name="user_name" placeholder="first name" className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                        <span id="firstNameError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs"></span>
                </div>
                <div className="">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="user_surname">Surname<span style={{color: 'red'}}>*</span></label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="surname" type="text" name="user_surname" placeholder="surname" className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                        <span id="surnameError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs"></span>
                </div>
                <div className="col-span-full">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="user_email">Email Address<span style={{color: 'red'}}>*</span></label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="email" type="text" name="user_email" placeholder="email address" className="appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                        <span id="emailError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs"></span>
                </div>
                <div className="col-span-full">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="user_number">Phone Number</label>
                    <div className="p-2 md:p-4 border rounded-md mt-4 border-gray-300">
                        <input id="number" type="text" name="user_number" placeholder="phone number" className="bg-transparent appearance-none w-full h-full outline-none border-none focus:outline-none" />
                    </div>
                </div>
                <div className="col-span-full">
                    <label className="font-saeada-extraLight font-bold tracking-widest" htmlFor="message">Message<span style={{color: 'red'}}>*</span></label>
                    <div className="p-4 border rounded-md mt-4 border-gray-300">
                        <textarea id="message" name="message" placeholder="message" className="bg-transparent appearance-none w-full h-full outline-none border-none focus:outline-none required" />
                    </div>
                        <span id="messageError" className="font-saeada-extraLight tracking-widest text-red-500 text-xs"></span>
                </div>
                {/* <div className="col-span-full">
                <ReCAPTCHA
                  sitekey="6Lfzd5MpAAAAAJTxzEESE7guohKaTFdogVA-YFrV"
                  onChange={handleVerification}
                />
                </div> */}

                <button type="submit" className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                    <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                    <p>Submit</p>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
