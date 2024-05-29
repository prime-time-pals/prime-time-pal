import { SnackbarProvider, enqueueSnackbar } from "notistack";
import whitePattern from "../assets/images/pattern-svg.svg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
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
            "service_62hdxkg",
            "contact_form",
            form.current,
            "gw9i_GpL0pKGAexmA"
          )
          .then(
            (result) => {
              console.log(result.text);
              setLoading(false);
              setIsSubmitted(true);
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
        if (!firstName || !surname || !email || !message) {
            return;
        }

        setLoading(true);
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

                <button type="submit" disabled={loading} className="outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light">
                    <img src={whitePattern} alt="background Image" className="opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay " />
                    {isSubmitted ? 'Submitted' : (loading ? 
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> 
                    : 'Submit')}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
