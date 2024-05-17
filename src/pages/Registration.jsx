import { useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import Footer from "../components/Footer";


import Choices from "../components/steps/Choices";
import Identification from "../components/steps/Identification";
import Personal from "../components/steps/Personal";
import { uploadImgHook, userCollection } from "../firebase/firebase";
// import Payment from "../components/steps/Payment";

export function Registration() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    age: '',
    location: '',
    gender: '',
    hearAbout: '',
    reasons: [],
    hobbies: [],
    topics: [],
    involvement: '',
    accessibility: '',
    volunteering: '',
    image: null,
    additional: ''
  });
  
  const steps = [
    "Personal",
    "Choices",
    "Identification"
  ];

  const validateForm = (step) => {
    let errors = {};

    if(step === 1) {
      if(!formData.firstname) {
        errors.firstname = "First name is required";
      }
      if(!formData.surname) {
        errors.surname = "Surname is required";
      }
      if(!formData.age) {
        errors.age = "Age is required";
      } else if (isNaN(formData.age)) {
        errors.age = "Age must be a number";
      }
      if(!formData.gender) {
        errors.gender = "Gender is required";
      }
      if(!formData.hearAbout) {
        errors.hearAbout = "Please let us know how you heard about Prime Time Pals";
      }
      if(formData.reasons.length === 0) {
        errors.reasons = "Check at least one option";
      }
    }

    if(step === 2) {
      if(formData.hobbies.length === 0) {
        errors.hobbies = "Please tell us about your hobbies";
      }
      if(formData.topics.length === 0) {
        errors.topics = "Please let us know the kind of topics you're interested in";
      }
      if(!formData.involvement) {
        errors.involvement = "Please select an option";
      }
      if(!formData.accessibility) {
        errors.accessibility = "Please select an option";
      }
      if(!formData.volunteering) {
        errors.volunteering = "Please select an option";
      }
    }

    if(step === 3) {
      if(!formData.image) {
        errors.image = "Please upload a valid means of identification";
      }
    }

    setFormError(errors);
    return Object.keys(errors).length === 0;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => {
      if (type === 'checkbox') {
          // For checkboxes, add or remove the value from the array if it's not already present
          if (checked && !(prevState[name] || []).includes(value)) {
              return { ...prevState, [name]: [...(prevState[name] || []), value] };
          } else if (!checked) {
              return { ...prevState, [name]: (prevState[name] || []).filter(item => item !== value) };
          }
      } else {
          // For other input types, set the value directly
          return { ...prevState, [name]: value };
      }
      return prevState; // Return previous state if no changes were made
  });
  };

  // const displayStep = (step) => {
  //   switch(step) {
  //     case 1: 
  //       return <Personal />
  //     case 2: 
  //       return <Choices />
  //     case 3:
  //       return <Identification />
  //     default:
  //   }
  // }

  const handleClick = async (direction, e) => {
    e.preventDefault();
    let newStep = currentStep;

    if(direction === "next" && !validateForm(currentStep)) {
      return;
    }

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    if (currentStep === steps.length) {
      const downloadUrl = await uploadImgHook(formData.image, setProgress);
      setFormData(prev => (
        {
          ...prev,
          image: downloadUrl
        }
    ))

    const user = await userCollection({ ...formData, image: downloadUrl });

    if (user) {
      enqueueSnackbar('Your message has been received! We will get back to you soon.', { 
        variant: 'success',
        persist: true
      })
    } else {
      enqueueSnackbar('Error occurred!', { 
        variant: 'error',
        persist: true
      })
    }
    }
  }

  return (
    // <div>
    //    <h2 className="font-saeada-regular text-[22px] mt-28 text-[#0070ff] mb-4 font-bold md:text-[30px] text-center">Join Prime TIme Pals</h2>
    //     <p className="text-[#4f4f4f] text-center mt-3 font-bold tracking-widest hidden md:block font-saeada-thin">Join us on an adventure and journey that transcends geographical boundaries, uniting hearts nationwide.</p>
    //   <div className="md:w-1/2 mx-auto pb-2 bg-white">
    //       <div className="container horizontal mt-5">
    //           <Stepper
    //             steps = {steps}
    //             currentStep = {currentStep}
    //           />

    //           <div className="my-4 p-4">
    //             <StepperContext.Provider value={{
    //               userData,
    //               setUserData,
    //               finalData,
    //               setFinalData
    //             }}>
    //               {displayStep(currentStep)}
    //             </StepperContext.Provider>
    //           </div>

    //       </div>
                
    //       {currentStep !== steps.length &&      
    //       <StepperControl 
    //         handleClick = {handleClick}
    //         currentStep = {currentStep}
    //         steps = {steps}
    //         />
    //       }
    //   </div>
        
    // </div>
    <>
    <div className="mx-8">
    <SnackbarProvider />
      <h2 className="font-saeada-regular text-[22px] mt-28 text-[#0070ff] mb-4 font-bold md:text-[30px] text-center">Join Prime TIme Pals</h2>
      <p className="text-[#4f4f4f] text-center mt-3 font-bold tracking-widest hidden md:block font-saeada-thin">Join us on an adventure and journey that transcends geographical boundaries, uniting hearts nationwide.</p>
      <div className="sm:w-1/2 mx-auto pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
        <form action="">
          <div className="my-4 p-4">
            {/* PERSONAL FORM. FIRST FORM */}
              
              {currentStep === 1 && (
                <Personal 
                  data={formData}
                  handleChange={handleChange}
                  handleClick={handleClick}
                  currentStep={currentStep}
                  steps={steps}
                  formError={formError}
                />
              )}
            {currentStep === 2 && (
              <Choices
                data={formData}
                handleChange={handleChange}
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
                formError={formError}
              />
            )}
            {currentStep === 3 && (
              <Identification
              data={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
              setFormData={setFormData}
              formError={formError}
              />
            )}
          </div>
        </form>
        </div>
        {currentStep !== steps.length + 1 && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
        <Footer />
    </>

  )
}