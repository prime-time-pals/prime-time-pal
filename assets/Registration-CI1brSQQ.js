import{r as Ot,j as p,L as Gl}from"./index-zfSNCPR2.js";import{S as Kl,e as Oi}from"./notistack.esm-CAjRbBsX.js";import{w as ds,F as Wl}from"./Footer-CZ7Zv69i.js";const Ql=({steps:n,currentStep:t})=>{const[e,r]=Ot.useState([]),i=Ot.useRef(),o=(u,h)=>{const f=[...h];let y=0;for(;y<f.length;)y===u?(f[y]={...f[y],highlighted:!0,selected:!0,completed:!0},y++):y<u?(f[y]={...f[y],selected:!1,completed:!0,highlighted:!0},y++):(f[y]={...f[y],highlighted:!1,selected:!1,completed:!1},y++);return f};Ot.useEffect(()=>{const u=n.map((f,y)=>Object.assign({},{description:f,completed:!1,highlighted:y===0,selected:y===0}));i.current=u;const h=o(t-1,i.current);r(h)},[n,t]);const l=e.map((u,h)=>p.jsx("div",{className:"w-full flex items-center",children:p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("div",{className:`min-w-[100px] sm:min-w-[170px] md:min-w-[170px] border-t-2 transition duration-500 ease-in-out ${u.description==="Personal"&&u.completed?"border-[#0070ff]":u.description==="Choices"&&u.highlighted?"border-[#FF3301]":u.description==="Identification"&&u.highlighted?"border-[#A92473]":"border-gray-300"}`}),p.jsx("div",{className:`rounded-full transition duration-500 ease-in-out border-2
                                       h-4 w-4 flex items-center justify-center 
                                     ${u.description==="Personal"&&u.highlighted?"bg-[#0070ff] border-[#0070ff]":u.description==="Choices"&&u.highlighted?"bg-[#FF3301] border-[#FF3301]":u.description==="Identification"&&u.highlighted?"bg-[#A92473] border-[#A92473]":""}`,children:u.completed?p.jsx("span",{className:"text-black font-bold text-xl"}):""})]}),p.jsx("div",{children:p.jsx("div",{className:` font-saeada-light md:text-[20px] text-center mt-4 md:w-32 
                            text-xs font-medium  
                            ${u.description==="Personal"&&u.highlighted?"text-[#0070ff]":u.description==="Choices"&&u.highlighted?"text-[#FF3301]":u.description==="Identification"&&u.highlighted?"text-[#A92473]":"text-[#B0B0B0]"}`,children:u.description})})]})},h));return p.jsx("div",{className:"w-full flex justify-center items-center",children:l})},Li="data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.4247%2023.2801C11.6397%2023.4829%2011.9242%2023.5957%2012.2197%2023.5951C12.5142%2023.5977%2012.7965%2023.4782%2012.9997%2023.2651C13.2141%2023.0562%2013.3351%2022.7695%2013.3351%2022.4701C13.3351%2022.1707%2013.2141%2021.884%2012.9997%2021.6751L4.44962%2013.125H24.28C24.9013%2013.125%2025.405%2012.6213%2025.405%2012C25.405%2011.3787%2024.9013%2010.875%2024.28%2010.875H4.44633L13.0147%202.28009C13.2291%202.07116%2013.3501%201.78448%2013.3501%201.48509C13.3501%201.18571%2013.2291%200.899026%2013.0147%200.690094C12.5755%200.251414%2011.8639%200.251414%2011.4247%200.690094L0.924713%2011.1901C0.486033%2011.6293%200.486033%2012.3409%200.924713%2012.7801L11.4247%2023.2801Z'%20fill='black'/%3e%3c/svg%3e",Xl=({handleClick:n,steps:t,currentStep:e})=>p.jsx("div",{className:"container flex justify-around mt-b mb-8",children:e===1?p.jsx(Gl,{to:"/prime-time-pals/",children:p.jsx("button",{className:"absolute top-12 left-4 md:left-12 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer opacity-100",children:p.jsx("img",{src:Li,alt:"back icon"})})}):p.jsx("button",{onClick:r=>n("prev",r),className:"absolute top-12 left-4 md:left-12 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer opacity-100",children:p.jsx("img",{src:Li,alt:"back icon"})})});function Yl({handleChange:n,handleClick:t,steps:e,currentStep:r,formError:i}){return p.jsxs("div",{id:"myForm",className:"grid gap-4 grid-cols-1 md:grid-cols-2",children:[p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",children:["Do you have any specific hobbies or activities you'd like to participate in within the community? (Choose all that applies). If other, please specify",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"arts and crafts",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Arts and crafts"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"cooking or baking",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Cooking or baking"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"gardening",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Gardening"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"fitness or exercise",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Fitness or exercise"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"dancing",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Dancing"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"games",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Games (board games, card games, etc)"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"outdoor activities",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Outdoor activities (hiking, walking, etc)"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"hobbies",value:"traveling",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Traveling"})]}),p.jsxs("label",{className:"mb-4 flex font-bold tracking-widest font-saeada-extraLight",children:[" Other:",p.jsx("input",{type:"text",name:"hobbies",className:"ml-4 border-b-2 w-full border-black outline-none",onChange:n})]})]}),i.hobbies&&p.jsx("span",{id:"hobbiesError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:i.hobbies})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",children:["Are there any particular topics or themes you'd like to see discussed or explored within the community? (Check all that apply). If other, please specify.",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"health and wellness",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Health and wellness"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"travel experiences",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Travel experiences"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"cultural events",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Cultural events"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"family and relationships",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Family and relationships"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"personal development",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Personal development"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"current affairs and news",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Current affairs and news"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"entertainment",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Entertainment (movies, TV shows, etc.)"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"topics",value:"education and learning",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Education and learning"})]}),p.jsxs("label",{className:"mb-4 flex font-bold tracking-widest font-saeada-extraLight",children:[" Other:",p.jsx("input",{type:"text",name:"topics",className:"ml-4 border-b-2 w-full border-black outline-none",onChange:n})]})]}),i.topics&&p.jsx("span",{id:"topicsError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:i.topics})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",htmlFor:"involvement",children:["Have you ever participated in a social or community group before?",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"involvement",value:"yes",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Yes"})]}),p.jsxs("label",{className:"radio-label",children:[p.jsx("input",{type:"radio",name:"involvement",value:"no",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"No"})]})]}),i.involvement&&p.jsx("span",{id:"involvementError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:i.involvement})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsx("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",htmlFor:"accessibility",children:"Do you have any accessibility needs or preferences we should be aware of?"}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"accessibility",value:"yes",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Yes"})]}),p.jsxs("label",{className:"radio-label",children:[p.jsx("input",{type:"radio",name:"accessibility",value:"no",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"No"})]})]}),i.accessibility&&p.jsx("span",{id:"reasonsError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:i.accessibility})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",htmlFor:"volunteering",children:["Would you be interested in volunteering to help organize or facilitate group activities?",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"volunteering",value:"yes",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Yes"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"volunteering",value:"no",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"No"})]}),p.jsxs("label",{className:"radio-label",children:[p.jsx("input",{type:"radio",name:"volunteering",value:"maybe",onChange:n})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Maybe"})]})]}),i.volunteering&&p.jsx("span",{id:"volunteeringError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:i.volunteering})]}),p.jsx("div",{className:"col-span-full",children:p.jsxs("button",{onClick:o=>t("next",o),className:"outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light",children:[p.jsx("img",{src:ds,alt:"background Image",className:"opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay "}),p.jsx("p",{children:r===e.length?"Submit":"Next"})]})})]})}const Jl="data:image/svg+xml,%3csvg%20width='20'%20height='25'%20viewBox='0%200%2020%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.9213%200.419584L18.9135%208.19292C19.4566%208.7019%2019.475%209.54193%2018.9547%2010.0729C18.6972%2010.3253%2018.3469%2010.4673%2017.9813%2010.4673C17.6158%2010.4673%2017.2654%2010.3253%2017.008%2010.0729L11.3189%204.57958V18.7529C11.3189%2019.4893%2010.7051%2020.0863%209.94798%2020.0863C9.19087%2020.0863%208.5771%2019.4893%208.5771%2018.7529V4.57958L2.92908%2010.0729C2.38517%2010.526%201.57439%2010.4955%201.06803%2010.003C0.56167%209.51051%200.530353%208.72193%200.996146%208.19292L8.98837%200.419584C9.52306%20-0.0973808%2010.3866%20-0.0973808%2010.9213%200.419584Z'%20fill='%234F4F4F'/%3e%3cpath%20d='M3.09359%2021.4196H16.8024C17.5595%2021.4196%2018.1733%2022.0165%2018.1733%2022.7529C18.1733%2023.4893%2017.5595%2024.0863%2016.8024%2024.0863H3.09359C2.33647%2024.0863%201.72271%2023.4893%201.72271%2022.7529C1.72271%2022.0165%202.33647%2021.4196%203.09359%2021.4196Z'%20fill='%234F4F4F'/%3e%3c/svg%3e";function Zl({handleChange:n,formError:t,progress:e,handleClick:r,steps:i,setFormData:o,isDisabled:l,currentStep:u}){console.log(e);const[h,f]=Ot.useState(""),y=A=>{const x=A.currentTarget.files[0];o(C=>({...C,image:x})),f(x?x.name:"")};return p.jsxs("div",{id:"myForm",className:"grid gap-4 grid-cols-1 md:grid-cols-2",children:[p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsx("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",children:"Please provide a valid Means Of Identification (NIN, international passport, Driver’s license)"}),p.jsxs("div",{className:"relative my-4 overflow-hidden flex justify-center items-center",children:[p.jsxs("button",{className:"p-4 border-2 flex gap-2 flex-col text-[14px] rounded-[20px] justify-center items-center border-[#D1D1D1]",children:[p.jsx("img",{src:Jl,alt:"upload icon"}),"Upload ID"]}),p.jsx("input",{className:"absolute left-0 top-0 text-[100px] opacity-0",type:"file",name:"image",onChange:y})]}),h&&p.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Selected file: ",h]})]}),t.image&&p.jsx("span",{id:"hobbiesError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:t.image})]}),p.jsx("div",{className:"col-span-full",children:p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsx("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",children:"Is there anything else you’d like us to know?"}),p.jsx("label",{className:"mb-4 flex font-bold tracking-widest font-saeada-extraLight",children:p.jsx("input",{type:"text",name:"additional",className:"border-b-2 w-full border-black outline-none",onChange:n})})]})}),p.jsx("div",{className:"col-span-full",children:p.jsxs("button",{onClick:A=>r("next",A),disabled:l,className:"outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light",children:[p.jsx("img",{src:ds,alt:"background Image",className:"opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay "}),e>0&&e<100?p.jsxs("div",{role:"status",children:[p.jsxs("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),p.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),p.jsx("span",{className:"sr-only",children:"Loading..."})]}):e===100?p.jsx("p",{children:"Submitted"}):p.jsx("p",{children:u===i.length?"Submit":"Next"})]})})]})}function tc({data:n,handleChange:t,handleClick:e,steps:r,currentStep:i,formError:o}){return p.jsxs("div",{id:"myForm",className:"grid gap-4 grid-cols-1 md:grid-cols-2",children:[p.jsxs("div",{className:"",children:[p.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"firstname",children:["First Name",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:p.jsx("input",{id:"firstName",type:"text",name:"firstname",value:n.firstname,placeholder:"first name",onChange:t,className:"appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),o.firstname&&p.jsx("span",{id:"firstNameError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:o.firstname})]}),p.jsxs("div",{className:"",children:[p.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"surname",children:["Surname",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:p.jsx("input",{id:"surname",type:"text",name:"surname",value:n.surname,placeholder:"surname",onChange:t,className:"appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),o.surname&&p.jsx("span",{id:"surnameError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:o.surname})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"age",children:["Age",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:p.jsx("input",{id:"age",type:"text",name:"age",value:n.age,placeholder:"Age",onChange:t,className:"appearance-none w-full h-full outline-none border-none focus:outline-none required"})}),o.age&&p.jsx("span",{id:"ageError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:o.age})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsx("label",{className:"font-saeada-extraLight font-bold tracking-widest",htmlFor:"location",children:"Location (City/State)"}),p.jsx("div",{className:"p-2 md:p-4 border rounded-md mt-4 border-gray-300",children:p.jsx("input",{id:"location",type:"text",name:"location",value:n.location,placeholder:"Location (City/State)",onChange:t,className:"bg-transparent appearance-none w-full h-full outline-none border-none focus:outline-none"})})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",htmlFor:"gender",children:["Gender",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"gender",value:"male",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Male"})]}),p.jsxs("label",{className:"radio-label",children:[p.jsx("input",{type:"radio",name:"gender",value:"female",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Female"})]})]}),o.gender&&p.jsx("span",{id:"genderError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:o.gender})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",children:["How did you hear about Prime Time Pal? If other, (Please specify).",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"hearAbout",value:"social media",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Social media (Facebook, Twitter, Instagram, etc.)"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"hearAbout",value:"word of mouth",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Word of mouth"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"hearAbout",value:"online search",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Online search"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"radio",name:"hearAbout",value:"advertisement",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Advertisement"})]}),p.jsxs("label",{className:"mb-4 flex font-bold tracking-widest font-saeada-extraLight",children:[" Other:",p.jsx("input",{type:"text",name:"hearAbout",className:"ml-4 border-b-2 w-full border-black outline-none",onChange:t})]})]}),o.hearAbout&&p.jsx("span",{id:"hearAboutError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:o.hearAbout})]}),p.jsxs("div",{className:"col-span-full",children:[p.jsxs("div",{className:"p-2 md:p-4 flex flex-col border rounded-md mt-4 border-gray-300",children:[p.jsxs("label",{className:"font-saeada-extraLight mb-4 font-bold tracking-widest",children:["Why do you want to join Prime Time Pal? (Choose all that applies)",p.jsx("span",{style:{color:"red"},children:"*"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"reasons",value:"friendship",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Looking for friendship/companionship"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"reasons",value:"hangout",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Looking for people to hangout with/party with"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"reasons",value:"hobbies",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Looking for people to share hobbies with"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"reasons",value:"spendTime",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Looking to kill time once in a while"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"reasons",value:"partner",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Looking for a partner"})]}),p.jsxs("label",{className:"radio-label mb-4",children:[p.jsx("input",{type:"checkbox",name:"reasons",value:"travelCompanion",onChange:t})," ",p.jsx("span",{className:"text-[14px] radio-text ml-2 font-bold tracking-widest font-saeada-extraLight",children:"Looking for travel buddies"})]})]}),o.reasons&&p.jsx("span",{id:"reasonsError",className:"font-saeada-extraLight tracking-widest text-red-500 text-xs",children:o.reasons})]}),p.jsx("div",{className:"col-span-full",children:p.jsxs("button",{onClick:l=>e("next",l),className:"outline-none border-none col-span-full relative text-white bg-gradient-to-r from-[#0070FF] to-[#0070FF] h-[50px] rounded-[25px] w-full font-saeada-light",children:[p.jsx("img",{src:ds,alt:"background Image",className:"opacity-20 w-full h-full object-cover top-0 absolute mix-blend-overlay "}),p.jsx("p",{children:i===r.length?"Submit":"Next"})]})})]})}var Mi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ec=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,u=l?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,y=o>>2,A=(o&3)<<4|u>>4;let x=(u&15)<<2|f>>6,C=f&63;h||(C=64,l||(x=64)),r.push(e[y],e[A],e[x],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ec(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||A==null)throw new nc;const x=o<<2|u>>4;if(r.push(x),f!==64){const C=u<<4&240|f>>2;if(r.push(C),A!==64){const N=f<<6&192|A;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rc=function(n){const t=xo(n);return Ro.encodeByteArray(t,!0)},Wn=function(n){return rc(n).replace(/\./g,"")},sc=function(n){try{return Ro.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=()=>ic().__FIREBASE_DEFAULTS__,ac=()=>{if(typeof process>"u"||typeof Mi>"u")return;const n=Mi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&sc(n[1]);return t&&JSON.parse(t)},fs=()=>{try{return oc()||ac()||lc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cc=n=>{var t,e;return(e=(t=fs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Po=n=>{const t=cc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Co=()=>{var n;return(n=fs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wn(JSON.stringify(e)),Wn(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dc(){var n;const t=(n=fs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fc(){return!dc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pc(){try{return typeof indexedDB=="object"}catch{return!1}}function mc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="FirebaseError";class fe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=gc,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?_c(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new fe(i,u,r)}}function _c(n,t){return n.replace(yc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const yc=/\{\$([^}]+)}/g;function Yr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(ji(o)&&ji(l)){if(!Yr(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ji(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){return n&&n._delegate?n._delegate:n}class be{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new uc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wc(t))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=re){return this.instances.has(t)}getOptions(t=re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ec(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=re){return this.component?this.component.multipleInstances?t:re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ec(n){return n===re?void 0:n}function wc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const bc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Ic=q.INFO,Ac={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},xc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Ac[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ko{constructor(t){this.name=t,this._logLevel=Ic,this._logHandler=xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const Rc=(n,t)=>t.some(e=>n instanceof e);let Fi,Ui;function Pc(){return Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cc(){return Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Do=new WeakMap,Jr=new WeakMap,Vo=new WeakMap,Br=new WeakMap,ps=new WeakMap;function Sc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Gt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Do.set(e,n)}).catch(()=>{}),ps.set(t,n),t}function Nc(n){if(Jr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Jr.set(n,t)}let Zr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Jr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Vo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function kc(n){Zr=n(Zr)}function Dc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call($r(this),t,...e);return Vo.set(r,t.sort?t.sort():[t]),Gt(r)}:Cc().includes(n)?function(...t){return n.apply($r(this),t),Gt(Do.get(this))}:function(...t){return Gt(n.apply($r(this),t))}}function Vc(n){return typeof n=="function"?Dc(n):(n instanceof IDBTransaction&&Nc(n),Rc(n,Pc())?new Proxy(n,Zr):n)}function Gt(n){if(n instanceof IDBRequest)return Sc(n);if(Br.has(n))return Br.get(n);const t=Vc(n);return t!==n&&(Br.set(n,t),ps.set(t,n)),t}const $r=n=>ps.get(n);function Oc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),u=Gt(l);return r&&l.addEventListener("upgradeneeded",h=>{r(Gt(l.result),h.oldVersion,h.newVersion,Gt(l.transaction),h)}),e&&l.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Lc=["get","getKey","getAll","getAllKeys","count"],Mc=["put","add","delete","clear"],qr=new Map;function Bi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qr.get(t))return qr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Mc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lc.includes(e)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),i&&h.done]))[0]};return qr.set(t,o),o}kc(n=>({...n,get:(t,e,r)=>Bi(t,e)||n.get(t,e,r),has:(t,e)=>!!Bi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Fc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Fc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ts="@firebase/app",$i="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new ko("@firebase/app"),Uc="@firebase/app-compat",Bc="@firebase/analytics-compat",$c="@firebase/analytics",qc="@firebase/app-check-compat",Hc="@firebase/app-check",zc="@firebase/auth",Gc="@firebase/auth-compat",Kc="@firebase/database",Wc="@firebase/database-compat",Qc="@firebase/functions",Xc="@firebase/functions-compat",Yc="@firebase/installations",Jc="@firebase/installations-compat",Zc="@firebase/messaging",tu="@firebase/messaging-compat",eu="@firebase/performance",nu="@firebase/performance-compat",ru="@firebase/remote-config",su="@firebase/remote-config-compat",iu="@firebase/storage",ou="@firebase/storage-compat",au="@firebase/firestore",lu="@firebase/vertexai-preview",cu="@firebase/firestore-compat",uu="firebase",hu="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]",du={[ts]:"fire-core",[Uc]:"fire-core-compat",[$c]:"fire-analytics",[Bc]:"fire-analytics-compat",[Hc]:"fire-app-check",[qc]:"fire-app-check-compat",[zc]:"fire-auth",[Gc]:"fire-auth-compat",[Kc]:"fire-rtdb",[Wc]:"fire-rtdb-compat",[Qc]:"fire-fn",[Xc]:"fire-fn-compat",[Yc]:"fire-iid",[Jc]:"fire-iid-compat",[Zc]:"fire-fcm",[tu]:"fire-fcm-compat",[eu]:"fire-perf",[nu]:"fire-perf-compat",[ru]:"fire-rc",[su]:"fire-rc-compat",[iu]:"fire-gcs",[ou]:"fire-gcs-compat",[au]:"fire-fst",[cu]:"fire-fst-compat",[lu]:"fire-vertex","fire-js":"fire-js",[uu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Map,fu=new Map,ns=new Map;function qi(n,t){try{n.container.addComponent(t)}catch(e){le.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function on(n){const t=n.name;if(ns.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;ns.set(t,n);for(const e of Qn.values())qi(e,n);for(const e of fu.values())qi(e,n);return!0}function Oo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new No("app","Firebase",pu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=hu;function Mo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:es,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(e||(e=Co()),!e)throw Kt.create("no-options");const o=Qn.get(i);if(o){if(Yr(e,o.options)&&Yr(r,o.config))return o;throw Kt.create("duplicate-app",{appName:i})}const l=new Tc(i);for(const h of ns.values())l.addComponent(h);const u=new mu(e,r,l);return Qn.set(i,u),u}function jo(n=es){const t=Qn.get(n);if(!t&&n===es&&Co())return Mo();if(!t)throw Kt.create("no-app",{appName:n});return t}function Wt(n,t,e){var r;let i=(r=du[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),le.warn(u.join(" "));return}on(new be(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="firebase-heartbeat-database",_u=1,an="firebase-heartbeat-store";let Hr=null;function Fo(){return Hr||(Hr=Oc(gu,_u,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(an)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),Hr}async function yu(n){try{const e=(await Fo()).transaction(an),r=await e.objectStore(an).get(Uo(n));return await e.done,r}catch(t){if(t instanceof fe)le.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});le.warn(e.message)}}}async function Hi(n,t){try{const r=(await Fo()).transaction(an,"readwrite");await r.objectStore(an).put(t,Uo(n)),await r.done}catch(e){if(e instanceof fe)le.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});le.warn(r.message)}}}function Uo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=1024,Eu=30*24*60*60*1e3;class wu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new bu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=Eu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zi(),{heartbeatsToSend:r,unsentEntries:i}=Tu(this._heartbeatsCache.heartbeats),o=Wn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function zi(){return new Date().toISOString().substring(0,10)}function Tu(n,t=vu){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Gi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Gi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class bu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pc()?mc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await yu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Gi(n){return Wn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){on(new be("platform-logger",t=>new jc(t),"PRIVATE")),on(new be("heartbeat",t=>new wu(t),"PRIVATE")),Wt(ts,$i,n),Wt(ts,$i,"esm2017"),Wt("fire-js","")}Iu("");var Au="firebase",xu="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(Au,xu,"app");var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(v,E,b){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return m.prototype[E].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)v[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)v[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],E=w.g[2];var b=w.g[3],g=m+(b^_&(E^b))+v[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=b+(E^m&(_^E))+v[1]+3905402710&4294967295,b=m+(g<<12&4294967295|g>>>20),g=E+(_^b&(m^_))+v[2]+606105819&4294967295,E=b+(g<<17&4294967295|g>>>15),g=_+(m^E&(b^m))+v[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(b^_&(E^b))+v[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(E^m&(_^E))+v[5]+1200080426&4294967295,b=m+(g<<12&4294967295|g>>>20),g=E+(_^b&(m^_))+v[6]+2821735955&4294967295,E=b+(g<<17&4294967295|g>>>15),g=_+(m^E&(b^m))+v[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(b^_&(E^b))+v[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(E^m&(_^E))+v[9]+2336552879&4294967295,b=m+(g<<12&4294967295|g>>>20),g=E+(_^b&(m^_))+v[10]+4294925233&4294967295,E=b+(g<<17&4294967295|g>>>15),g=_+(m^E&(b^m))+v[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(b^_&(E^b))+v[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(E^m&(_^E))+v[13]+4254626195&4294967295,b=m+(g<<12&4294967295|g>>>20),g=E+(_^b&(m^_))+v[14]+2792965006&4294967295,E=b+(g<<17&4294967295|g>>>15),g=_+(m^E&(b^m))+v[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^b&(_^E))+v[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^E&(m^_))+v[6]+3225465664&4294967295,b=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(b^m))+v[11]+643717713&4294967295,E=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(E^b))+v[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^b&(_^E))+v[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^E&(m^_))+v[10]+38016083&4294967295,b=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(b^m))+v[15]+3634488961&4294967295,E=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(E^b))+v[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^b&(_^E))+v[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^E&(m^_))+v[14]+3275163606&4294967295,b=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(b^m))+v[3]+4107603335&4294967295,E=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(E^b))+v[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^b&(_^E))+v[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^E&(m^_))+v[2]+4243563512&4294967295,b=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(b^m))+v[7]+1735328473&4294967295,E=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(E^b))+v[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^b)+v[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^E)+v[8]+2272392833&4294967295,b=m+(g<<11&4294967295|g>>>21),g=E+(b^m^_)+v[11]+1839030562&4294967295,E=b+(g<<16&4294967295|g>>>16),g=_+(E^b^m)+v[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^b)+v[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^E)+v[4]+1272893353&4294967295,b=m+(g<<11&4294967295|g>>>21),g=E+(b^m^_)+v[7]+4139469664&4294967295,E=b+(g<<16&4294967295|g>>>16),g=_+(E^b^m)+v[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^b)+v[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^E)+v[0]+3936430074&4294967295,b=m+(g<<11&4294967295|g>>>21),g=E+(b^m^_)+v[3]+3572445317&4294967295,E=b+(g<<16&4294967295|g>>>16),g=_+(E^b^m)+v[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^b)+v[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^E)+v[12]+3873151461&4294967295,b=m+(g<<11&4294967295|g>>>21),g=E+(b^m^_)+v[15]+530742520&4294967295,E=b+(g<<16&4294967295|g>>>16),g=_+(E^b^m)+v[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~b))+v[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~E))+v[7]+1126891415&4294967295,b=m+(g<<10&4294967295|g>>>22),g=E+(m^(b|~_))+v[14]+2878612391&4294967295,E=b+(g<<15&4294967295|g>>>17),g=_+(b^(E|~m))+v[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~b))+v[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~E))+v[3]+2399980690&4294967295,b=m+(g<<10&4294967295|g>>>22),g=E+(m^(b|~_))+v[10]+4293915773&4294967295,E=b+(g<<15&4294967295|g>>>17),g=_+(b^(E|~m))+v[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~b))+v[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~E))+v[15]+4264355552&4294967295,b=m+(g<<10&4294967295|g>>>22),g=E+(m^(b|~_))+v[6]+2734768916&4294967295,E=b+(g<<15&4294967295|g>>>17),g=_+(b^(E|~m))+v[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~b))+v[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~E))+v[11]+3174756917&4294967295,b=m+(g<<10&4294967295|g>>>22),g=E+(m^(b|~_))+v[2]+718787259&4294967295,E=b+(g<<15&4294967295|g>>>17),g=_+(b^(E|~m))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,v=this.B,E=this.h,b=0;b<m;){if(E==0)for(;b<=_;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(v[E++]=w.charCodeAt(b++),E==this.blockSize){i(this,v),E=0;break}}else for(;b<m;)if(v[E++]=w[b++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)w[_++]=this.g[m]>>>v&255;return w};function o(w,m){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function l(w,m){this.h=m;for(var _=[],v=!0,E=w.length-1;0<=E;E--){var b=w[E]|0;v&&b==m||(_[E]=b,v=!1)}this.g=_}var u={};function h(w){return-128<=w&&128>w?o(w,function(m){return new l([m|0],0>m?-1:0)}):new l([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return A;if(0>w)return k(f(-w));for(var m=[],_=1,v=0;w>=_;v++)m[v]=w/_|0,_*=4294967296;return new l(m,0)}function y(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return k(y(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),v=A,E=0;E<w.length;E+=8){var b=Math.min(8,w.length-E),g=parseInt(w.substring(E,E+b),m);8>b?(b=f(Math.pow(m,b)),v=v.j(b).add(f(g))):(v=v.j(_),v=v.add(f(g)))}return v}var A=h(0),x=h(1),C=h(16777216);n=l.prototype,n.m=function(){if(D(this))return-k(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);w+=(0<=v?v:4294967296+v)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(D(this))return"-"+k(this).toString(w);for(var m=f(Math.pow(w,6)),_=this,v="";;){var E=U(_,m).g;_=j(_,E.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=E,N(_))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=j(this,w),D(w)?-1:N(w)?0:1};function k(w){for(var m=w.g.length,_=[],v=0;v<m;v++)_[v]=~w.g[v];return new l(_,~w.h).add(x)}n.abs=function(){return D(this)?k(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0,E=0;E<=m;E++){var b=v+(this.i(E)&65535)+(w.i(E)&65535),g=(b>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);v=g>>>16,b&=65535,g&=65535,_[E]=g<<16|b}return new l(_,_[_.length-1]&-2147483648?-1:0)};function j(w,m){return w.add(k(m))}n.j=function(w){if(N(this)||N(w))return A;if(D(this))return D(w)?k(this).j(k(w)):k(k(this).j(w));if(D(w))return k(this.j(k(w)));if(0>this.l(C)&&0>w.l(C))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<w.g.length;E++){var b=this.i(v)>>>16,g=this.i(v)&65535,kt=w.i(E)>>>16,ke=w.i(E)&65535;_[2*v+2*E]+=g*ke,F(_,2*v+2*E),_[2*v+2*E+1]+=b*ke,F(_,2*v+2*E+1),_[2*v+2*E+1]+=g*kt,F(_,2*v+2*E+1),_[2*v+2*E+2]+=b*kt,F(_,2*v+2*E+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new l(_,0)};function F(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function O(w,m){this.g=w,this.h=m}function U(w,m){if(N(m))throw Error("division by zero");if(N(w))return new O(A,A);if(D(w))return m=U(k(w),m),new O(k(m.g),k(m.h));if(D(m))return m=U(w,k(m)),new O(k(m.g),m.h);if(30<w.g.length){if(D(w)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=x,v=m;0>=v.l(w);)_=wt(_),v=wt(v);var E=tt(_,1),b=tt(v,1);for(v=tt(v,2),_=tt(_,2);!N(v);){var g=b.add(v);0>=g.l(w)&&(E=E.add(_),b=g),v=tt(v,1),_=tt(_,1)}return m=j(w,E.j(m)),new O(E,m)}for(E=A;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=f(_),g=b.j(m);D(g)||0<g.l(w);)_-=v,b=f(_),g=b.j(m);N(b)&&(b=x),E=E.add(b),w=j(w,g)}return new O(E,w)}n.A=function(w){return U(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&w.i(v);return new l(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|w.i(v);return new l(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^w.i(v);return new l(_,this.h^w.h)};function wt(w){for(var m=w.g.length+1,_=[],v=0;v<m;v++)_[v]=w.i(v)<<1|w.i(v-1)>>>31;return new l(_,w.h)}function tt(w,m){var _=m>>5;m%=32;for(var v=w.g.length-_,E=[],b=0;b<v;b++)E[b]=0<m?w.i(b+_)>>>m|w.i(b+_+1)<<32-m:w.i(b+_);return new l(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=y,Bo=l}).apply(typeof Ki<"u"?Ki:typeof self<"u"?self:typeof window<"u"?window:{});var jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $o,qo,Ze,Ho,zn,rs,zo,Go,Ko;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof jn=="object"&&jn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in c))break t;c=c[T]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,T={next:function(){if(!d&&c<s.length){var I=c++;return{value:a(I,s[I]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function y(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function x(s,a,c){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:A,x.apply(null,arguments)}function C(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function N(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,T,I){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return a.prototype[T].apply(d,S)}}function D(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function k(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=s.length||0,I=d.length||0;s.length=T+I;for(let S=0;S<I;S++)s[T+S]=d[S]}else s.push(d)}}class j{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function F(s){return/^[\s\xa0]*$/.test(s)}function O(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function U(s){return U[" "](s),s}U[" "]=function(){};var wt=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function tt(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function w(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,a){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)s[c]=d[c];for(let I=0;I<_.length;I++)c=_[I],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function b(s){u.setTimeout(()=>{throw s},0)}function g(){var s=_r;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,c){const d=ke.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var ke=new j(()=>new hl,s=>s.reset());class hl{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Ve=!1,_r=new kt,Os=()=>{const s=u.Promise.resolve(void 0);De=()=>{s.then(dl)}};var dl=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){b(c)}var a=ke;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ve=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var fl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Oe(s,a){if(ut.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(wt){t:{try{U(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:pl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Oe.aa.h.call(this)}}N(Oe,ut);var pl={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),ml=0;function gl(s,a,c,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=T,this.key=++ml,this.da=this.fa=!1}function wn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Tn(s){this.src=s,this.g={},this.h=0}Tn.prototype.add=function(s,a,c,d,T){var I=s.toString();s=this.g[I],s||(s=this.g[I]=[],this.h++);var S=vr(s,a,d,T);return-1<S?(a=s[S],c||(a.fa=!1)):(a=new gl(a,this.src,I,!!d,T),a.fa=c,s.push(a)),a};function yr(s,a){var c=a.type;if(c in s.g){var d=s.g[c],T=Array.prototype.indexOf.call(d,a,void 0),I;(I=0<=T)&&Array.prototype.splice.call(d,T,1),I&&(wn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function vr(s,a,c,d){for(var T=0;T<s.length;++T){var I=s[T];if(!I.da&&I.listener==a&&I.capture==!!c&&I.ha==d)return T}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),wr={};function Ls(s,a,c,d,T){if(Array.isArray(a)){for(var I=0;I<a.length;I++)Ls(s,a[I],c,d,T);return null}return c=Fs(c),s&&s[En]?s.K(a,c,f(d)?!!d.capture:!!d,T):_l(s,a,c,!1,d,T)}function _l(s,a,c,d,T,I){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,z=br(s);if(z||(s[Er]=z=new Tn(s)),c=z.add(a,c,d,S,I),c.proxy)return c;if(d=yl(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)fl||(T=S),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(js(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function yl(){function s(c){return a.call(s.src,s.listener,c)}const a=vl;return s}function Ms(s,a,c,d,T){if(Array.isArray(a))for(var I=0;I<a.length;I++)Ms(s,a[I],c,d,T);else d=f(d)?!!d.capture:!!d,c=Fs(c),s&&s[En]?(s=s.i,a=String(a).toString(),a in s.g&&(I=s.g[a],c=vr(I,c,d,T),-1<c&&(wn(I[c]),Array.prototype.splice.call(I,c,1),I.length==0&&(delete s.g[a],s.h--)))):s&&(s=br(s))&&(a=s.g[a.toString()],s=-1,a&&(s=vr(a,c,d,T)),(c=-1<s?a[s]:null)&&Tr(c))}function Tr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[En])yr(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(js(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=br(a))?(yr(c,s),c.h==0&&(c.src=null,a[Er]=null)):wn(s)}}}function js(s){return s in wr?wr[s]:wr[s]="on"+s}function vl(s,a){if(s.da)s=!0;else{a=new Oe(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&Tr(s),s=c.call(d,a)}return s}function br(s){return s=s[Er],s instanceof Tn?s:null}var Ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fs(s){return typeof s=="function"?s:(s[Ir]||(s[Ir]=function(a){return s.handleEvent(a)}),s[Ir])}function ht(){Bt.call(this),this.i=new Tn(this),this.M=this,this.F=null}N(ht,Bt),ht.prototype[En]=!0,ht.prototype.removeEventListener=function(s,a,c,d){Ms(this,s,a,c,d)};function yt(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ut(a,s);else if(a instanceof ut)a.target=a.target||s;else{var T=a;a=new ut(d,s),v(a,T)}if(T=!0,c)for(var I=c.length-1;0<=I;I--){var S=a.g=c[I];T=bn(S,d,!0,a)&&T}if(S=a.g=s,T=bn(S,d,!0,a)&&T,T=bn(S,d,!1,a)&&T,c)for(I=0;I<c.length;I++)S=a.g=c[I],T=bn(S,d,!1,a)&&T}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)wn(c[d]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},ht.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function bn(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,I=0;I<a.length;++I){var S=a[I];if(S&&!S.da&&S.capture==c){var z=S.listener,ot=S.ha||S.src;S.fa&&yr(s.i,S),T=z.call(ot,d)!==!1&&T}}return T&&!d.defaultPrevented}function Us(s,a,c){if(typeof s=="function")c&&(s=x(s,c));else if(s&&typeof s.handleEvent=="function")s=x(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Bs(s){s.g=Us(()=>{s.g=null,s.i&&(s.i=!1,Bs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class El extends Bt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Bs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){Bt.call(this),this.h=s,this.g={}}N(Le,Bt);var $s=[];function qs(s){tt(s.g,function(a,c){this.g.hasOwnProperty(c)&&Tr(a)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),qs(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ar=u.JSON.stringify,wl=u.JSON.parse,Tl=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function xr(){}xr.prototype.h=null;function Hs(s){return s.h||(s.h=s.i())}function zs(){}var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rr(){ut.call(this,"d")}N(Rr,ut);function Pr(){ut.call(this,"c")}N(Pr,ut);var Zt={},Gs=null;function In(){return Gs=Gs||new ht}Zt.La="serverreachability";function Ks(s){ut.call(this,Zt.La,s)}N(Ks,ut);function je(s){const a=In();yt(a,new Ks(a))}Zt.STAT_EVENT="statevent";function Ws(s,a){ut.call(this,Zt.STAT_EVENT,s),this.stat=a}N(Ws,ut);function vt(s){const a=In();yt(a,new Ws(a,s))}Zt.Ma="timingevent";function Qs(s,a){ut.call(this,Zt.Ma,s),this.size=a}N(Qs,ut);function Fe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Ue(){this.g=!0}Ue.prototype.xa=function(){this.g=!1};function bl(s,a,c,d,T,I){s.info(function(){if(s.g)if(I)for(var S="",z=I.split("&"),ot=0;ot<z.length;ot++){var H=z[ot].split("=");if(1<H.length){var dt=H[0];H=H[1];var ft=dt.split("_");S=2<=ft.length&&ft[1]=="type"?S+(dt+"="+H+"&"):S+(dt+"=redacted&")}}else S=null;else S=I;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+c+`
`+S})}function Il(s,a,c,d,T,I,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+c+`
`+I+" "+S})}function me(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+xl(s,c)+(d?" "+d:"")})}function Al(s,a){s.info(function(){return"TIMEOUT: "+a})}Ue.prototype.info=function(){};function xl(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var I=T[0];if(I!="noop"&&I!="stop"&&I!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return Ar(c)}catch{return a}}var An={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cr;function xn(){}N(xn,xr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Cr=new xn;function $t(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ys}function Ys(){this.i=null,this.g="",this.h=!1}var Js={},Sr={};function Nr(s,a,c){s.L=1,s.v=Sn(Dt(a)),s.m=c,s.P=!0,Zs(s,null)}function Zs(s,a){s.F=Date.now(),Rn(s),s.A=Dt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),fi(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Ys,s.g=Ni(s.j,c?a:null,!s.m),0<s.O&&(s.M=new El(x(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&($s[0]=T.toString()),T=$s);for(var I=0;I<T.length;I++){var S=Ls(c,T[I],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),bl(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const a=this.M;a&&Vt(s)==3?a.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const ft=Vt(this.g);var a=this.g.Ba();const ye=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ei(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ye?je(3):je(2)),kr(this);var c=this.g.Z();this.X=c;e:if(ti(this)){var d=Ei(this.g);s="";var T=d.length,I=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),Be(this);var S="";break e}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(I&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=c==200,Il(this.i,this.u,this.A,this.l,this.R,ft,c),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(z)){var H=z;break e}}H=null}if(c=H)me(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dr(this,c);else{this.o=!1,this.s=3,vt(12),te(this),Be(this);break t}}if(this.P){c=!0;let xt;for(;!this.J&&this.C<S.length;)if(xt=Rl(this,S),xt==Sr){ft==4&&(this.s=4,vt(14),c=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Js){this.s=4,vt(15),me(this.i,this.l,S,"[Invalid Chunk]"),c=!1;break}else me(this.i,this.l,xt,null),Dr(this,xt);if(ti(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||S.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)me(this.i,this.l,S,"[Invalid Chunked Response]"),te(this),Be(this);else if(0<S.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Fr(dt),dt.M=!0,vt(11))}}else me(this.i,this.l,S,null),Dr(this,S);ft==4&&te(this),this.o&&!this.J&&(ft==4?Ri(this.j,this):(this.o=!1,Rn(this)))}else Hl(this.g),c==400&&0<S.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),te(this),Be(this)}}}catch{}finally{}};function ti(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Rl(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?Sr:(c=Number(a.substring(c,d)),isNaN(c)?Js:(d+=1,d+c>a.length?Sr:(a=a.slice(d,d+c),s.C=d+c,a)))}$t.prototype.cancel=function(){this.J=!0,te(this)};function Rn(s){s.S=Date.now()+s.I,ei(s,s.I)}function ei(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Fe(x(s.ba,s),a)}function kr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Al(this.i,this.A),this.L!=2&&(je(),vt(17)),te(this),this.s=2,Be(this)):ei(this,this.S-s)};function Be(s){s.j.G==0||s.J||Ri(s.j,s)}function te(s){kr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,qs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Dr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Vr(c.h,s))){if(!s.K&&Vr(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)On(c),Dn(c);else break t;jr(c),vt(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=Fe(x(c.Za,c),6e3));if(1>=si(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ne(c,11)}else if((s.K||c.g==s)&&On(c),!F(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let H=T[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const dt=H[3];dt!=null&&(c.la=dt,c.j.info("VER="+c.la));const ft=H[4];ft!=null&&(c.Aa=ft,c.j.info("SVER="+c.Aa));const ye=H[5];ye!=null&&typeof ye=="number"&&0<ye&&(d=1.5*ye,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const xt=s.g;if(xt){const Mn=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mn){var I=d.h;I.g||Mn.indexOf("spdy")==-1&&Mn.indexOf("quic")==-1&&Mn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Or(I,I.h),I.h=null))}if(d.D){const Ur=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ur&&(d.ya=Ur,K(d.I,d.D,Ur))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var S=s;if(d.qa=Si(d,d.J?d.ia:null,d.W),S.K){ii(d.h,S);var z=S,ot=d.L;ot&&(z.I=ot),z.B&&(kr(z),Rn(z)),d.g=S}else Ai(d);0<c.i.length&&Vn(c)}else H[0]!="stop"&&H[0]!="close"||ne(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ne(c,7):Mr(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}je(4)}catch{}}var Pl=class{constructor(s,a){this.g=s,this.map=a}};function ni(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ri(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function si(s){return s.h?1:s.g?s.g.size:0}function Vr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Or(s,a){s.g?s.g.add(a):s.h=a}function ii(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ni.prototype.cancel=function(){if(this.i=oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function oi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return D(s.i)}function Cl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function Sl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function ai(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Sl(s),d=Cl(s),T=d.length,I=0;I<T;I++)a.call(void 0,d[I],c&&c[I],s)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nl(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),T=null;if(0<=d){var I=s[c].substring(0,d);T=s[c].substring(d+1)}else I=s[c];a(I,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ee(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ee){this.h=s.h,Pn(this,s.j),this.o=s.o,this.g=s.g,Cn(this,s.s),this.l=s.l;var a=s.i,c=new He;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ci(this,c),this.m=s.m}else s&&(a=String(s).match(li))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=$e(a[2]||""),this.g=$e(a[3]||"",!0),Cn(this,a[4]),this.l=$e(a[5]||"",!0),ci(this,a[6]||"",!0),this.m=$e(a[7]||"")):(this.h=!1,this.i=new He(null,this.h))}ee.prototype.toString=function(){var s=[],a=this.j;a&&s.push(qe(a,ui,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(qe(a,ui,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(qe(c,c.charAt(0)=="/"?Vl:Dl,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",qe(c,Ll)),s.join("")};function Dt(s){return new ee(s)}function Pn(s,a,c){s.j=c?$e(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Cn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ci(s,a,c){a instanceof He?(s.i=a,Ml(s.i,s.h)):(c||(a=qe(a,Ol)),s.i=new He(a,s.h))}function K(s,a,c){s.i.set(a,c)}function Sn(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function $e(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function qe(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,kl),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function kl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ui=/[#\/\?@]/g,Dl=/[#\?:]/g,Vl=/[#\?]/g,Ol=/[#\?@]/g,Ll=/#/g;function He(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&Nl(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=He.prototype,n.add=function(s,a){qt(this),this.i=null,s=ge(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function hi(s,a){qt(s),a=ge(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function di(s,a){return qt(s),a=ge(s,a),s.g.has(a)}n.forEach=function(s,a){qt(this),this.g.forEach(function(c,d){c.forEach(function(T){s.call(a,T,d,this)},this)},this)},n.na=function(){qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const T=s[d];for(let I=0;I<T.length;I++)c.push(a[d])}return c},n.V=function(s){qt(this);let a=[];if(typeof s=="string")di(this,s)&&(a=a.concat(this.g.get(ge(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return qt(this),this.i=null,s=ge(this,s),di(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function fi(s,a,c){hi(s,a),0<c.length&&(s.i=null,s.g.set(ge(s,a),D(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const I=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var T=I;S[d]!==""&&(T+="="+encodeURIComponent(String(S[d]))),s.push(T)}}return this.i=s.join("&")};function ge(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Ml(s,a){a&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(hi(this,d),fi(this,T,c))},s)),s.j=a}function jl(s,a){const c=new Ue;if(u.Image){const d=new Image;d.onload=C(Ht,c,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Ht,c,"TestLoadImage: error",!1,a,d),d.onabort=C(Ht,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Ht,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Fl(s,a){const c=new Ue,d=new AbortController,T=setTimeout(()=>{d.abort(),Ht(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(I=>{clearTimeout(T),I.ok?Ht(c,"TestPingServer: ok",!0,a):Ht(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ht(c,"TestPingServer: error",!1,a)})}function Ht(s,a,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function Ul(){this.g=new Tl}function Bl(s,a,c){const d=c||"";try{ai(s,function(T,I){let S=T;f(T)&&(S=Ar(T)),a.push(d+I+"="+encodeURIComponent(S))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function ze(s){this.l=s.Ub||null,this.j=s.eb||!1}N(ze,xr),ze.prototype.g=function(){return new Nn(this.l,this.j)},ze.prototype.i=function(s){return function(){return s}}({});function Nn(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Nn,ht),n=Nn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ke(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ge(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function pi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ge(this):Ke(this),this.readyState==3&&pi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ge(this))},n.Qa=function(s){this.g&&(this.response=s,Ge(this))},n.ga=function(){this.g&&Ge(this)};function Ge(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ke(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Ke(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function mi(s){let a="";return tt(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function Lr(s,a,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=mi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):K(s,a,c))}function J(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(J,ht);var $l=/^https?$/i,ql=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cr.g(),this.v=this.o?Hs(this.o):Hs(Cr),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(I){gi(this,I);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const I of d.keys())c.set(I,d.get(I));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(I=>I.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ql,a,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,S]of c)this.g.setRequestHeader(I,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vi(this),this.u=!0,this.g.send(s),this.u=!1}catch(I){gi(this,I)}};function gi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,_i(s),kn(s)}function _i(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yi(this):this.bb())},n.bb=function(){yi(this)};function yi(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Vt(s)!=4||s.Z()!=2)){if(s.u&&Vt(s)==4)Us(s.Ea,0,s);else if(yt(s,"readystatechange"),Vt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var d;if(d=S===0){var T=String(s.D).match(li)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!$l.test(T?T.toLowerCase():"")}c=d}if(c)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var I=2<Vt(s)?s.g.statusText:""}catch{I=""}s.l=I+" ["+s.Z()+"]",_i(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){vi(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{c.onreadystatechange=d}catch{}}}function vi(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Vt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),wl(a)}};function Ei(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Hl(s){const a={};s=(s.g&&2<=Vt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(F(s[d]))continue;var c=E(s[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const I=a[T]||[];a[T]=I,I.push(c)}w(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function wi(s){this.Aa=0,this.i=[],this.j=new Ue,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=We("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=We("baseRetryDelayMs",5e3,s),this.cb=We("retryDelaySeedMs",1e4,s),this.Wa=We("forwardChannelMaxRetries",2,s),this.wa=We("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ni(s&&s.concurrentRequestLimit),this.Da=new Ul,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wi.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,d){vt(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Si(this,null,this.W),Vn(this)};function Mr(s){if(Ti(s),s.G==3){var a=s.U++,c=Dt(s.I);if(K(c,"SID",s.K),K(c,"RID",a),K(c,"TYPE","terminate"),Qe(s,c),a=new $t(s,s.j,a),a.L=2,a.v=Sn(Dt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Ni(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Rn(a)}Ci(s)}function Dn(s){s.g&&(Fr(s),s.g.cancel(),s.g=null)}function Ti(s){Dn(s),s.u&&(u.clearTimeout(s.u),s.u=null),On(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Vn(s){if(!ri(s.h)&&!s.s){s.s=!0;var a=s.Ga;De||Os(),Ve||(De(),Ve=!0),_r.add(a,s),s.B=0}}function zl(s,a){return si(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Fe(x(s.Ga,s,a),Pi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new $t(this,this.j,s);let I=this.o;if(this.S&&(I?(I=m(I),v(I,this.S)):I=this.S),this.m!==null||this.O||(T.H=I,I=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ii(this,T,a),c=Dt(this.I),K(c,"RID",s),K(c,"CVER",22),this.D&&K(c,"X-HTTP-Session-Id",this.D),Qe(this,c),I&&(this.O?a="headers="+encodeURIComponent(String(mi(I)))+"&"+a:this.m&&Lr(c,this.m,I)),Or(this.h,T),this.Ua&&K(c,"TYPE","init"),this.P?(K(c,"$req",a),K(c,"SID","null"),T.T=!0,Nr(T,c,null)):Nr(T,c,a),this.G=2}}else this.G==3&&(s?bi(this,s):this.i.length==0||ri(this.h)||bi(this))};function bi(s,a){var c;a?c=a.l:c=s.U++;const d=Dt(s.I);K(d,"SID",s.K),K(d,"RID",c),K(d,"AID",s.T),Qe(s,d),s.m&&s.o&&Lr(d,s.m,s.o),c=new $t(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ii(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Or(s.h,c),Nr(c,d,a)}function Qe(s,a){s.H&&tt(s.H,function(c,d){K(a,d,c)}),s.l&&ai({},function(c,d){K(a,d,c)})}function Ii(s,a,c){c=Math.min(s.i.length,c);var d=s.l?x(s.l.Na,s.l,s):null;t:{var T=s.i;let I=-1;for(;;){const S=["count="+c];I==-1?0<c?(I=T[0].g,S.push("ofs="+I)):I=0:S.push("ofs="+I);let z=!0;for(let ot=0;ot<c;ot++){let H=T[ot].g;const dt=T[ot].map;if(H-=I,0>H)I=Math.max(0,T[ot].g-100),z=!1;else try{Bl(dt,S,"req"+H+"_")}catch{d&&d(dt)}}if(z){d=S.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,d}function Ai(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;De||Os(),Ve||(De(),Ve=!0),_r.add(a,s),s.v=0}}function jr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Fe(x(s.Fa,s),Pi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Fe(x(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Dn(this),xi(this))};function Fr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function xi(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Dt(s.qa);K(a,"RID","rpc"),K(a,"SID",s.K),K(a,"AID",s.T),K(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(a,"TO",s.ja),K(a,"TYPE","xmlhttp"),Qe(s,a),s.m&&s.o&&Lr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Sn(Dt(a)),c.m=null,c.P=!0,Zs(c,s)}n.Za=function(){this.C!=null&&(this.C=null,Dn(this),jr(this),vt(19))};function On(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Ri(s,a){var c=null;if(s.g==a){On(s),Fr(s),s.g=null;var d=2}else if(Vr(s.h,a))c=a.D,ii(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=In(),yt(d,new Qs(d,c)),Vn(s)}else Ai(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&zl(s,a)||d==2&&jr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:ne(s,5);break;case 4:ne(s,10);break;case 3:ne(s,6);break;default:ne(s,2)}}}function Pi(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function ne(s,a){if(s.j.info("Error code "+a),a==2){var c=x(s.fb,s),d=s.Xa;const T=!d;d=new ee(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Pn(d,"https"),Sn(d),T?jl(d.toString(),c):Fl(d.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(a),Ci(s),Ti(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Ci(s){if(s.G=0,s.ka=[],s.l){const a=oi(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Si(s,a,c){var d=c instanceof ee?Dt(c):new ee(c);if(d.g!="")a&&(d.g=a+"."+d.g),Cn(d,d.s);else{var T=u.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var I=new ee(null);d&&Pn(I,d),a&&(I.g=a),T&&Cn(I,T),c&&(I.l=c),d=I}return c=s.D,a=s.ya,c&&a&&K(d,c,a),K(d,"VER",s.la),Qe(s,d),d}function Ni(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new ze({eb:c})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ki(){}n=ki.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ln(){}Ln.prototype.g=function(s,a){return new It(s,a)};function It(s,a){ht.call(this),this.g=new wi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!F(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!F(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new _e(this)}N(It,ht),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Mr(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Ar(s),s=c);a.i.push(new Pl(a.Ya++,s)),a.G==3&&Vn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Mr(this.g),delete this.g,It.aa.N.call(this)};function Di(s){Rr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(Di,Rr);function Vi(){Pr.call(this),this.status=1}N(Vi,Pr);function _e(s){this.g=s}N(_e,ki),_e.prototype.ua=function(){yt(this.g,"a")},_e.prototype.ta=function(s){yt(this.g,new Di(s))},_e.prototype.sa=function(s){yt(this.g,new Vi)},_e.prototype.ra=function(){yt(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Ko=function(){return new Ln},Go=function(){return In()},zo=Zt,rs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},An.NO_ERROR=0,An.TIMEOUT=8,An.HTTP_ERROR=6,zn=An,Xs.COMPLETE="complete",Ho=Xs,zs.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ze=zs,qo=ze,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,$o=J}).apply(typeof jn<"u"?jn:typeof self<"u"?self:typeof window<"u"?window:{});const Wi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new ko("@firebase/firestore");function Xe(){return ce.logLevel}function V(n,...t){if(ce.logLevel<=q.DEBUG){const e=t.map(ms);ce.debug(`Firestore (${Ce}): ${n}`,...e)}}function ue(n,...t){if(ce.logLevel<=q.ERROR){const e=t.map(ms);ce.error(`Firestore (${Ce}): ${n}`,...e)}}function Xn(n,...t){if(ce.logLevel<=q.WARN){const e=t.map(ms);ce.warn(`Firestore (${Ce}): ${n}`,...e)}}function ms(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n="Unexpected state"){const t=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: `+n;throw ue(t),new Error(t)}function it(n,t){n||B()}function W(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends fe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ru{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Pu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Cu{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ie,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ie)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(it(typeof r.accessToken=="string"),new Wo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return it(t===null||typeof t=="string"),new mt(t)}}class Su{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nu{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Su(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ku{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Du{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(it(typeof e.token=="string"),this.R=e.token,new ku(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Vu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function Ie(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new st(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.timestamp=t}static fromTimestamp(t){return new X(t)}static min(){return new X(new st(0,0))}static max(){return new X(new st(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,r){e===void 0?e=0:e>t.length&&B(),r===void 0?r=t.length-e:r>t.length-e&&B(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ln.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ln?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),l=e.get(i);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends ln{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const Ou=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends ln{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return Ou.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(l=!l,i++):u!=="."||l?(r+=u,i++):(o(),i++)}if(o(),l)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Z.fromString(t))}static fromName(t){return new M(Z.fromString(t).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Z(t.slice()))}}function Lu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new st(e+1,0):new st(e,r));return new Xt(i,M.empty(),t)}function Mu(n){return new Xt(n.readTime,n.key,-1)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(X.min(),M.empty(),-1)}static max(){return new Xt(X.max(),M.empty(),-1)}}function ju(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Fu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,l=!1;t.forEach(u=>{++i,u.next(()=>{++o,l&&o===i&&e()},h=>r(h))}),l=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,l=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(y=>{l[f]=y,++u,u===o&&r(l)},y=>i(y))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Bu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ar(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Yo.oe=-1;function gs(n){return n==null}function Yn(n){return n===0&&1/n==-1/0}function $u(n){return typeof n=="number"&&Number.isInteger(n)&&!Yn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function pn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Jo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new bt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fn(this.root,t,this.comparator,!0)}}class Fn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.comparator=t,this.data=new bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new _t(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ie(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qu("Invalid base64 string: "+o):o}}(t);return new Ut(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const Hu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(n){if(it(!!n),typeof n=="string"){let t=0;const e=Hu.exec(n);if(it(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cn(n){return typeof n=="string"?Ut.fromBase64String(n):Ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Zo(n){const t=n.mapValue.fields.__previous_value__;return _s(t)?Zo(t):t}function Jn(n){const t=he(n.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e,r,i,o,l,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class Zn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Zn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_s(n)?4:Gu(n)?9007199254740991:10:B()}function Nt(n,t){if(n===t)return!0;const e=Ae(n);if(e!==Ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Jn(n).isEqual(Jn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=he(i.timestampValue),u=he(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return cn(i.bytesValue).isEqual(cn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return lt(i.geoPointValue.latitude)===lt(o.geoPointValue.latitude)&&lt(i.geoPointValue.longitude)===lt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return lt(i.integerValue)===lt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=lt(i.doubleValue),u=lt(o.doubleValue);return l===u?Yn(l)===Yn(u):isNaN(l)&&isNaN(u)}return!1}(n,t);case 9:return Ie(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:return function(i,o){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Qi(l)!==Qi(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!Nt(l[h],u[h])))return!1;return!0}(n,t);default:return B()}}function un(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=Ae(n),r=Ae(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,l){const u=lt(o.integerValue||o.doubleValue),h=lt(l.integerValue||l.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Yi(n.timestampValue,t.timestampValue);case 4:return Yi(Jn(n),Jn(t));case 5:return G(n.stringValue,t.stringValue);case 6:return function(o,l){const u=cn(o),h=cn(l);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const u=o.split("/"),h=l.split("/");for(let f=0;f<u.length&&f<h.length;f++){const y=G(u[f],h[f]);if(y!==0)return y}return G(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const u=G(lt(o.latitude),lt(l.latitude));return u!==0?u:G(lt(o.longitude),lt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const u=o.values||[],h=l.values||[];for(let f=0;f<u.length&&f<h.length;++f){const y=xe(u[f],h[f]);if(y)return y}return G(u.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===Un.mapValue&&l===Un.mapValue)return 0;if(o===Un.mapValue)return 1;if(l===Un.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=l.fields||{},y=Object.keys(f);h.sort(),y.sort();for(let A=0;A<h.length&&A<y.length;++A){const x=G(h[A],y[A]);if(x!==0)return x;const C=xe(u[h[A]],f[y[A]]);if(C!==0)return C}return G(h.length,y.length)}(n.mapValue,t.mapValue);default:throw B()}}function Yi(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=he(n),r=he(t),i=G(e.seconds,r.seconds);return i!==0?i:G(e.nanos,r.nanos)}function Re(n){return ss(n)}function ss(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=he(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return cn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ss(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${ss(e.fields[l])}`;return i+"}"}(n.mapValue):B()}function is(n){return!!n&&"integerValue"in n}function ys(n){return!!n&&"arrayValue"in n}function Gn(n){return!!n&&"mapValue"in n}function tn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return pn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=tn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Gu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tn(e)}setAll(t){let e=ct.emptyPath(),r={},i=[];t.forEach((l,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}l?r[u.lastSegment()]=tn(l):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Gn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){pn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Pt(tn(this.value))}}function ta(n){const t=[];return pn(n.fields,(e,r)=>{const i=new ct([e]);if(Gn(r)){const o=ta(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,i,o,l,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new Rt(t,0,X.min(),X.min(),X.min(),Pt.empty(),0)}static newFoundDocument(t,e,r,i){return new Rt(t,1,e,X.min(),r,i,0)}static newNoDocument(t,e){return new Rt(t,2,e,X.min(),X.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,X.min(),X.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.position=t,this.inclusive=e}}function Ji(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(l.referenceValue),e.key):r=xe(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zi(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ku(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{}class rt extends ea{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Qu(t,e,r):e==="array-contains"?new Ju(t,r):e==="in"?new Zu(t,r):e==="not-in"?new th(t,r):e==="array-contains-any"?new eh(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Xu(t,r):new Yu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(xe(e,this.value)):e!==null&&Ae(this.value)===Ae(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends ea{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Yt(t,e)}matches(t){return na(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function na(n){return n.op==="and"}function ra(n){return Wu(n)&&na(n)}function Wu(n){for(const t of n.filters)if(t instanceof Yt)return!1;return!0}function os(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Re(n.value);if(ra(n))return n.filters.map(t=>os(t)).join(",");{const t=n.filters.map(e=>os(e)).join(",");return`${n.op}(${t})`}}function sa(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(n,t):n instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,u)=>o&&sa(l,i.filters[u]),!0):!1}(n,t):void B()}function ia(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Re(e.value)}`}(n):n instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(ia).join(" ,")+"}"}(n):"Filter"}class Qu extends rt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xu extends rt{constructor(t,e){super(t,"in",e),this.keys=oa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Yu extends rt{constructor(t,e){super(t,"not-in",e),this.keys=oa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Ju extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ys(e)&&un(e.arrayValue,this.value)}}class Zu extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class th extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!un(this.value.arrayValue,e)}}class eh extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>un(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e=null,r=[],i=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=u,this.ue=null}}function to(n,t=null,e=[],r=[],i=null,o=null,l=null){return new nh(n,t,e,r,i,o,l)}function vs(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>os(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Re(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Re(r)).join(",")),t.ue=e}return t.ue}function Es(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ku(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!sa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Zi(n.startAt,t.startAt)&&Zi(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e=null,r=[],i=[],o=null,l="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rh(n,t,e,r,i,o,l,u){return new lr(n,t,e,r,i,o,l,u)}function sh(n){return new lr(n)}function eo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ih(n){return n.collectionGroup!==null}function en(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new _t(ct.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new er(o,r))}),e.has(ct.keyField().canonicalString())||t.ce.push(new er(ct.keyField(),r))}return t.ce}function oe(n){const t=W(n);return t.le||(t.le=oh(t,en(n))),t.le}function oh(n,t){if(n.limitType==="F")return to(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new er(i.field,o)});const e=n.endAt?new tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new tr(n.startAt.position,n.startAt.inclusive):null;return to(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function as(n,t,e){return new lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function aa(n,t){return Es(oe(n),oe(t))&&n.limitType===t.limitType}function la(n){return`${vs(oe(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>ia(i)).join(", ")}]`),gs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Re(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Re(i)).join(",")),`Target(${r})`}(oe(n))}; limitType=${n.limitType})`}function ws(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of en(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,u,h){const f=Ji(l,u,h);return l.inclusive?f<=0:f<0}(r.startAt,en(r),i)||r.endAt&&!function(l,u,h){const f=Ji(l,u,h);return l.inclusive?f>=0:f>0}(r.endAt,en(r),i))}(n,t)}function ah(n){return(t,e)=>{let r=!1;for(const i of en(n)){const o=lh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function lh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,l,u){const h=l.data.field(o),f=u.data.field(o);return h!==null&&f!==null?xe(h,f):B()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){pn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Jo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new bt(M.comparator);function nr(){return ch}const ca=new bt(M.comparator);function Bn(...n){let t=ca;for(const e of n)t=t.insert(e.key,e);return t}function ua(n){let t=ca;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function se(){return nn()}function ha(){return nn()}function nn(){return new Se(n=>n.toString(),(n,t)=>n.isEqual(t))}const uh=new bt(M.comparator),hh=new _t(M.comparator);function gt(...n){let t=hh;for(const e of n)t=t.add(e);return t}const dh=new _t(G);function fh(){return dh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(t)?"-0":t}}function fa(n){return{integerValue:""+n}}function ph(n,t){return $u(t)?fa(t):da(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this._=void 0}}function mh(n,t,e){return n instanceof rr?function(i,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&_s(o)&&(o=Zo(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof hn?ma(n,t):n instanceof dn?ga(n,t):function(i,o){const l=pa(i,o),u=no(l)+no(i.Pe);return is(l)&&is(i.Pe)?fa(u):da(i.serializer,u)}(n,t)}function gh(n,t,e){return n instanceof hn?ma(n,t):n instanceof dn?ga(n,t):e}function pa(n,t){return n instanceof sr?function(r){return is(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rr extends cr{}class hn extends cr{constructor(t){super(),this.elements=t}}function ma(n,t){const e=_a(t);for(const r of n.elements)e.some(i=>Nt(i,r))||e.push(r);return{arrayValue:{values:e}}}class dn extends cr{constructor(t){super(),this.elements=t}}function ga(n,t){let e=_a(t);for(const r of n.elements)e=e.filter(i=>!Nt(i,r));return{arrayValue:{values:e}}}class sr extends cr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function no(n){return lt(n.integerValue||n.doubleValue)}function _a(n){return ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function _h(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof hn&&i instanceof hn||r instanceof dn&&i instanceof dn?Ie(r.elements,i.elements,Nt):r instanceof sr&&i instanceof sr?Nt(r.Pe,i.Pe):r instanceof rr&&i instanceof rr}(n.transform,t.transform)}class yh{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Kn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ur{}function ya(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ea(n.key,Lt.none()):new mn(n.key,n.data,Lt.none());{const e=n.data,r=Pt.empty();let i=new _t(ct.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new pe(n.key,r,new Ct(i.toArray()),Lt.none())}}function vh(n,t,e){n instanceof mn?function(i,o,l){const u=i.value.clone(),h=so(i.fieldTransforms,o,l.transformResults);u.setAll(h),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,t,e):n instanceof pe?function(i,o,l){if(!Kn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const u=so(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(va(i)),h.setAll(u),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function rn(n,t,e,r){return n instanceof mn?function(o,l,u,h){if(!Kn(o.precondition,l))return u;const f=o.value.clone(),y=io(o.fieldTransforms,h,l);return f.setAll(y),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof pe?function(o,l,u,h){if(!Kn(o.precondition,l))return u;const f=io(o.fieldTransforms,h,l),y=l.data;return y.setAll(va(o)),y.setAll(f),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,l,u){return Kn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,t,e)}function Eh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=pa(r.transform,i||null);o!=null&&(e===null&&(e=Pt.empty()),e.set(r.field,o))}return e||null}function ro(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ie(r,i,(o,l)=>_h(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class mn extends ur{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pe extends ur{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function va(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function so(n,t,e){const r=new Map;it(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,u=t.data.field(o.field);r.set(o.field,gh(l,u,e[i]))}return r}function io(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,mh(o,l,t))}return r}class Ea extends ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wh extends ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&vh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=rn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=rn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ha();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(i.key)?null:u;const h=ya(l,u);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),gt())}isEqual(t){return this.batchId===t.batchId&&Ie(this.mutations,t.mutations,(e,r)=>ro(e,r))&&Ie(this.baseMutations,t.baseMutations,(e,r)=>ro(e,r))}}class Ts{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){it(t.mutations.length===r.length);let i=function(){return uh}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ts(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,$;function Ih(n){switch(n){default:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Ah(n){if(n===void 0)return ue("GRPC error has no .code"),P.UNKNOWN;switch(n){case et.OK:return P.OK;case et.CANCELLED:return P.CANCELLED;case et.UNKNOWN:return P.UNKNOWN;case et.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case et.INTERNAL:return P.INTERNAL;case et.UNAVAILABLE:return P.UNAVAILABLE;case et.UNAUTHENTICATED:return P.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case et.NOT_FOUND:return P.NOT_FOUND;case et.ALREADY_EXISTS:return P.ALREADY_EXISTS;case et.PERMISSION_DENIED:return P.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case et.ABORTED:return P.ABORTED;case et.OUT_OF_RANGE:return P.OUT_OF_RANGE;case et.UNIMPLEMENTED:return P.UNIMPLEMENTED;case et.DATA_LOSS:return P.DATA_LOSS;default:return B()}}($=et||(et={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bo([4294967295,4294967295],0);class xh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ls(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ph(n,t){return ls(n,t.toTimestamp())}function Te(n){return it(!!n),X.fromTimestamp(function(e){const r=he(e);return new st(r.seconds,r.nanos)}(n))}function wa(n,t){return cs(n,t).canonicalString()}function cs(n,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ch(n){const t=Z.fromString(n);return it(Mh(t)),t}function us(n,t){return wa(n.databaseId,t.path)}function Sh(n){const t=Ch(n);return t.length===4?Z.emptyPath():kh(t)}function Nh(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kh(n){return it(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function oo(n,t,e){return{name:us(n,t),fields:e.value.mapValue.fields}}function Dh(n,t){let e;if(t instanceof mn)e={update:oo(n,t.key,t.value)};else if(t instanceof Ea)e={delete:us(n,t.key)};else if(t instanceof pe)e={update:oo(n,t.key,t.data),updateMask:Lh(t.fieldMask)};else{if(!(t instanceof wh))return B();e={verify:us(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const u=l.transform;if(u instanceof rr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof hn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof dn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof sr)return{fieldPath:l.field.canonicalString(),increment:u.Pe};throw B()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ph(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B()}(n,t.precondition)),e}function Vh(n,t){return n&&n.length>0?(it(t!==void 0),n.map(e=>function(i,o){let l=i.updateTime?Te(i.updateTime):Te(o);return l.isEqual(X.min())&&(l=Te(o)),new yh(l,i.transformResults||[])}(e,t))):[]}function Oh(n){let t=Sh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){it(r===1);const y=e.from[0];y.allDescendants?i=y.collectionId:t=t.child(y.collectionId)}let o=[];e.where&&(o=function(A){const x=Ta(A);return x instanceof Yt&&ra(x)?x.getFilters():[x]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(x=>function(N){return new er(Ee(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(x))}(e.orderBy));let u=null;e.limit&&(u=function(A){let x;return x=typeof A=="object"?A.value:A,gs(x)?null:x}(e.limit));let h=null;e.startAt&&(h=function(A){const x=!!A.before,C=A.values||[];return new tr(C,x)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const x=!A.before,C=A.values||[];return new tr(C,x)}(e.endAt)),rh(t,i,l,o,u,"F",h,f)}function Ta(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ee(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ee(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ee(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ee(e.unaryFilter.field);return rt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(Ee(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(r=>Ta(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(n):B()}function Ee(n){return ct.fromServerFormat(n.fieldPath)}function Lh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.ct=t}}function Fh(n){const t=Oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?as(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this._n=new Bh}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Xt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Bh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new _t(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new _t(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Pe(0)}static Ln(){return new Pe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.changes=new Se(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&rn(r.mutation,i,Ct.empty(),st.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,gt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=gt()){const i=se();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=Bn();return o.forEach((u,h)=>{l=l.insert(u,h.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,gt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,u)=>{e.set(l,u)})})}computeViews(t,e,r,i){let o=nr();const l=nn(),u=function(){return nn()}();return e.forEach((h,f)=>{const y=r.get(f.key);i.has(f.key)&&(y===void 0||y.mutation instanceof pe)?o=o.insert(f.key,f):y!==void 0?(l.set(f.key,y.mutation.getFieldMask()),rn(y.mutation,f,y.mutation.getFieldMask(),st.now())):l.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,y)=>l.set(f,y)),e.forEach((f,y)=>{var A;return u.set(f,new qh(y,(A=l.get(f))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(t,e){const r=nn();let i=new bt((l,u)=>l-u),o=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const u of l)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let y=r.get(h)||Ct.empty();y=u.applyToLocalView(f,y),r.set(h,y);const A=(i.get(u.batchId)||gt()).add(h);i=i.insert(u.batchId,A)})}).next(()=>{const l=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,y=h.value,A=ha();y.forEach(x=>{if(!o.has(x)){const C=ya(e.get(x),r.get(x));C!==null&&A.set(x,C),o=o.add(x)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(l){return M.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ih(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(se());let u=-1,h=o;return l.next(f=>R.forEach(f,(y,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(y)?R.resolve():this.remoteDocumentCache.getEntry(t,y).next(x=>{h=h.insert(y,x)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,gt())).next(y=>({batchId:u,changes:ua(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=Bn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Bn();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,h=>{const f=function(A,x){return new lr(x,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(y=>{y.forEach((A,x)=>{l=l.insert(A,x)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((h,f)=>{const y=f.getKey();l.get(y)===null&&(l=l.insert(y,Rt.newInvalidDocument(y)))});let u=Bn();return l.forEach((h,f)=>{const y=o.get(h);y!==void 0&&rn(y.mutation,f,Ct.empty(),st.now()),ws(e,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Te(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:Fh(i.bundledQuery),readTime:Te(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.overlays=new bt(M.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=se();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=se(),o=e.length+1,l=new M(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new bt((f,y)=>f-y);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let y=o.get(f.largestBatchId);y===null&&(y=se(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const u=se(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,y)=>u.set(f,y)),!(u.size()>=i)););return R.resolve(u)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new bh(e,r));let o=this.hr.get(e);o===void 0&&(o=gt(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.Pr=new _t(nt.Ir),this.Tr=new _t(nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new nt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new nt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new M(new Z([])),r=new nt(e,t),i=new nt(e,t+1),o=[];return this.Tr.forEachInRange([r,i],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new Z([])),r=new nt(e,t),i=new nt(e,t+1);let o=gt();return this.Tr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new nt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||G(t.pr,e.pr)}static Er(t,e){return G(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new _t(nt.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Th(o,e,r,i);this.mutationQueue.push(l);for(const u of i)this.wr=this.wr.add(new nt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new nt(e,0),i=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],l=>{const u=this.Sr(l.pr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new _t(G);return e.forEach(i=>{const o=new nt(i,0),l=new nt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],u=>{r=r.add(u.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const l=new nt(new M(o),0);let u=new _t(G);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.pr)),!0)},l),R.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){it(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(e.mutations,i=>{const o=new nt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new nt(e,0),i=this.wr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.vr=t,this.docs=function(){return new bt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=nr();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Rt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=nr();const l=e.path,u=new M(l.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:y}}=h.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||ju(Mu(y),r)<=0||(i.has(y.key)||ws(e,y))&&(o=o.insert(y.key,y.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){B()}Fr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Qh(this)}getSize(t){return R.resolve(this.size)}}class Qh extends $h{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.persistence=t,this.Mr=new Se(e=>vs(e),Es),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new bs,this.targetCount=0,this.Lr=Pe.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((l,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e){this.Br={},this.overlays={},this.kr=new Yo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Xh(this),this.indexManager=new Uh,this.remoteDocumentCache=function(i){return new Wh(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jh(e),this.$r=new zh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Gh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Kh(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Jh(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Jh extends Uu{constructor(t){super(),this.currentSequenceNumber=t}}class Is{constructor(t){this.persistence=t,this.zr=new bs,this.jr=null}static Hr(t){return new Is(t)}get Jr(){if(this.jr)return this.jr;throw B()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const i=M.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,X.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=gt(),i=gt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new As(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fc()?8:Bu(hc())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Zh;return this.Ji(t,e,l).next(u=>{if(o.result=u,this.Ui)return this.Yi(t,e,l,u.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Xe()<=q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Xe()<=q.DEBUG&&V("QueryEngine","Query:",Ye(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Xe()<=q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,oe(e))):R.resolve())}ji(t,e){if(eo(e))return R.resolve(null);let r=oe(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=as(e,null,"F"),r=oe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=gt(...o);return this.zi.getDocuments(t,l).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,u);return this.Xi(e,f,l,h.readTime)?this.ji(t,as(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,i){return eo(e)||i.isEqual(X.min())?R.resolve(null):this.zi.getDocuments(t,r).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,r,i)?R.resolve(null):(Xe()<=q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ye(e)),this.es(t,l,e,Lu(i,-1)).next(u=>u))})}Zi(t,e){let r=new _t(ah(t));return e.forEach((i,o)=>{ws(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return Xe()<=q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.zi.getDocumentsMatchingQuery(t,e,Xt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new bt(G),this.rs=new Se(o=>vs(o),Es),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function nd(n,t,e,r){return new ed(n,t,e,r)}async function ba(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],u=[];let h=gt();for(const f of i){l.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}for(const f of o){u.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:l,addedBatchIds:u}))})})}function rd(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(u,h,f,y){const A=f.batch,x=A.keys();let C=R.resolve();return x.forEach(N=>{C=C.next(()=>y.getEntry(h,N)).next(D=>{const k=f.docVersions.get(N);it(k!==null),D.version.compareTo(k)<0&&(A.applyToRemoteDocument(D,f),D.isValidDocument()&&(D.setReadTime(f.commitVersion),y.addEntry(D)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=gt();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function sd(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function id(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ao{constructor(){this.activeTargetIds=fh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class od{constructor(){this.no=new ao,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ao,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n=null;function zr(){return $n===null?$n=function(){return 268435456+Math.round(2147483648*Math.random())}():$n++,"0x"+$n.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class ud extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,l){const u=zr(),h=this.vo(e,r.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${u}:`,h,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,l),this.Mo(e,h,f,i).then(y=>(V("RestConnection",`Received RPC '${e}' ${u}: `,y),y),y=>{throw Xn("RestConnection",`RPC '${e}' ${u} failed with error: `,y,"url: ",h,"request:",i),y})}xo(e,r,i,o,l,u){return this.Co(e,r,i,o,l)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ce}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}vo(e,r){const i=ld[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=zr();return new Promise((l,u)=>{const h=new $o;h.setWithCredentials(!0),h.listenOnce(Ho.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zn.NO_ERROR:const y=h.getResponseJson();V(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(y)),l(y);break;case zn.TIMEOUT:V(pt,`RPC '${t}' ${o} timed out`),u(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const A=h.getStatus();if(V(pt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const C=x==null?void 0:x.error;if(C&&C.status&&C.message){const N=function(k){const j=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(C.status);u(new L(N,C.message))}else u(new L(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{V(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);V(pt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const i=zr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Ko(),u=Go(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new qo({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const y=o.join("");V(pt,`Creating RPC '${t}' stream ${i}: ${y}`,h);const A=l.createWebChannel(y,h);let x=!1,C=!1;const N=new cd({lo:k=>{C?V(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(x||(V(pt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),x=!0),V(pt,`RPC '${t}' stream ${i} sending:`,k),A.send(k))},ho:()=>A.close()}),D=(k,j,F)=>{k.listen(j,O=>{try{F(O)}catch(U){setTimeout(()=>{throw U},0)}})};return D(A,Ze.EventType.OPEN,()=>{C||(V(pt,`RPC '${t}' stream ${i} transport opened.`),N.mo())}),D(A,Ze.EventType.CLOSE,()=>{C||(C=!0,V(pt,`RPC '${t}' stream ${i} transport closed`),N.po())}),D(A,Ze.EventType.ERROR,k=>{C||(C=!0,Xn(pt,`RPC '${t}' stream ${i} transport errored:`,k),N.po(new L(P.UNAVAILABLE,"The operation could not be completed")))}),D(A,Ze.EventType.MESSAGE,k=>{var j;if(!C){const F=k.data[0];it(!!F);const O=F,U=O.error||((j=O[0])===null||j===void 0?void 0:j.error);if(U){V(pt,`RPC '${t}' stream ${i} received error:`,U);const wt=U.status;let tt=function(_){const v=et[_];if(v!==void 0)return Ah(v)}(wt),w=U.message;tt===void 0&&(tt=P.INTERNAL,w="Unknown error status: "+wt+" with message "+U.message),C=!0,N.po(new L(tt,w)),A.close()}else V(pt,`RPC '${t}' stream ${i} received:`,F),N.yo(F)}}),D(u,zo.STAT_EVENT,k=>{k.stat===rs.PROXY?V(pt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===rs.NOPROXY&&V(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function Gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return new xh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e,r,i,o,l,u,h){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ia(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ue(e.toString()),ue("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new L(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dd extends hd{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(it(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Vh(t.writeResults,t.commitTime),r=Te(t.commitTime);return this.listener.A_(r,e)}return it(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Nh(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Dh(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,cs(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(P.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.xo(t,cs(e,r),i,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new L(P.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class pd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ue(e),this.y_=!1):V("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{r.enqueueAndForget(async()=>{_n(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=W(h);f.M_.add(4),await gn(f),f.N_.set("Unknown"),f.M_.delete(4),await dr(f)}(this))})}),this.N_=new pd(r,i)}}async function dr(n){if(_n(n))for(const t of n.x_)await t(!0)}async function gn(n){for(const t of n.x_)await t(!1)}function _n(n){return W(n).M_.size===0}async function Aa(n,t,e){if(!ar(t))throw t;n.M_.add(1),await gn(n),n.N_.set("Offline"),e||(e=()=>sd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await dr(n)})}function xa(n,t){return t().catch(e=>Aa(n,e,t))}async function fr(n){const t=W(n),e=Jt(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;gd(t);)try{const i=await id(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,_d(t,i)}catch(i){await Aa(t,i)}Ra(t)&&Pa(t)}function gd(n){return _n(n)&&n.v_.length<10}function _d(n,t){n.v_.push(t);const e=Jt(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Ra(n){return _n(n)&&!Jt(n).Zo()&&n.v_.length>0}function Pa(n){Jt(n).start()}async function yd(n){Jt(n).V_()}async function vd(n){const t=Jt(n);for(const e of n.v_)t.d_(e.mutations)}async function Ed(n,t,e){const r=n.v_.shift(),i=Ts.from(r,t,e);await xa(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await fr(n)}async function wd(n,t){t&&Jt(n).E_&&await async function(r,i){if(function(l){return Ih(l)&&l!==P.ABORTED}(i.code)){const o=r.v_.shift();Jt(r).t_(),await xa(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await fr(r)}}(n,t),Ra(n)&&Pa(n)}async function co(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=_n(e);e.M_.add(3),await gn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await dr(e)}async function Td(n,t){const e=W(n);t?(e.M_.delete(2),await dr(e)):t||(e.M_.add(2),await gn(e),e.N_.set("Unknown"))}function Jt(n){return n.k_||(n.k_=function(e,r,i){const o=W(e);return o.f_(),new dd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:yd.bind(null,n),Ao:wd.bind(null,n),R_:vd.bind(null,n),A_:Ed.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await fr(n)):(await n.k_.stop(),n.v_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,u=new xs(t,e,l,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ca(n,t){if(ue("AsyncQueue",`${t}: ${n}`),ar(n))return new L(P.UNAVAILABLE,`${t}: ${n}`);throw n}class bd{constructor(){this.queries=new Se(t=>la(t),aa),this.onlineState="Unknown",this.z_=new Set}}function Id(n){n.z_.forEach(t=>{t.next()})}var uo,ho;(ho=uo||(uo={})).J_="default",ho.Cache="cache";class Ad{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new Se(u=>la(u),aa),this.Da=new Map,this.Ca=new Set,this.va=new bt(M.comparator),this.Fa=new Map,this.Ma=new bs,this.xa={},this.Oa=new Map,this.Na=Pe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function xd(n,t,e){const r=Sd(n);try{const i=await function(l,u){const h=W(l),f=st.now(),y=u.reduce((C,N)=>C.add(N.key),gt());let A,x;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=nr(),D=gt();return h.os.getEntries(C,y).next(k=>{N=k,N.forEach((j,F)=>{F.isValidDocument()||(D=D.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,N)).next(k=>{A=k;const j=[];for(const F of u){const O=Eh(F,A.get(F.key).overlayedDocument);O!=null&&j.push(new pe(F.key,O,ta(O.value.mapValue),Lt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,j,u)}).next(k=>{x=k;const j=k.applyToLocalDocumentSet(A,D);return h.documentOverlayCache.saveOverlays(C,k.batchId,j)})}).then(()=>({batchId:x.batchId,changes:ua(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,u,h){let f=l.xa[l.currentUser.toKey()];f||(f=new bt(G)),f=f.insert(u,h),l.xa[l.currentUser.toKey()]=f}(r,i.batchId,e),await pr(r,i.changes),await fr(r.remoteStore)}catch(i){const o=Ca(i,"Failed to persist write");e.reject(o)}}function fo(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,l)=>{const u=l.view.j_(t);u.snapshot&&i.push(u.snapshot)}),function(l,u){const h=W(l);h.onlineState=u;let f=!1;h.queries.forEach((y,A)=>{for(const x of A.U_)x.j_(u)&&(f=!0)}),f&&Id(h)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rd(n,t){const e=W(n),r=t.batch.batchId;try{const i=await rd(e.localStore,t);Na(e,r,null),Sa(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await pr(e,i)}catch(i){await Xo(i)}}async function Pd(n,t,e){const r=W(n);try{const i=await function(l,u){const h=W(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let y;return h.mutationQueue.lookupMutationBatch(f,u).next(A=>(it(A!==null),y=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,y,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y)).next(()=>h.localDocuments.getDocuments(f,y))})}(r.localStore,t);Na(r,t,e),Sa(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await pr(r,i)}catch(i){await Xo(i)}}function Sa(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Na(n,t,e){const r=W(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}async function pr(n,t,e){const r=W(n),i=[],o=[],l=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{l.push(r.Ba(h,t,e).then(f=>{if((f||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(h.targetId,f!=null&&f.fromCache?"not-current":"current"),f){i.push(f);const y=As.Ki(h.targetId,f);o.push(y)}}))}),await Promise.all(l),r.Sa.h_(i),await async function(h,f){const y=W(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,x=>R.forEach(x.qi,C=>y.persistence.referenceDelegate.addReference(A,x.targetId,C)).next(()=>R.forEach(x.Qi,C=>y.persistence.referenceDelegate.removeReference(A,x.targetId,C)))))}catch(A){if(!ar(A))throw A;V("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const x=A.targetId;if(!A.fromCache){const C=y.ns.get(x),N=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(N);y.ns=y.ns.insert(x,D)}}}(r.localStore,o))}async function Cd(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await ba(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new L(P.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await pr(e,r.us)}}function Sd(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pd.bind(null,t),t}class po{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=hr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return nd(this.persistence,new td,t.initialUser,this.serializer)}createPersistence(t){return new Yh(Is.Hr,this.serializer)}createSharedClientState(t){return new od}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cd.bind(null,this.syncEngine),await Td(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new bd}()}createDatastore(t){const e=hr(t.databaseInfo.databaseId),r=function(o){return new ud(o)}(t.databaseInfo);return function(o,l,u,h){return new fd(o,l,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,u){return new md(r,i,o,l,u)}(this.localStore,this.datastore,t.asyncQueue,e=>fo(this.syncEngine,e,0),function(){return lo.D()?new lo:new ad}())}createSyncEngine(t,e){return function(i,o,l,u,h,f,y){const A=new Ad(i,o,l,u,h,f);return y&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=W(r);V("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await gn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Qo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ca(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Kr(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ba(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function mo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Vd(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>co(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>co(t.remoteStore,i)),n._onlineComponents=t}function Dd(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Vd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Dd(e))throw e;Xn("Error using user provided cache. Falling back to memory cache: "+e),await Kr(n,new po)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Kr(n,new po);return n._offlineComponents}async function Od(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await mo(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await mo(n,new Nd))),n._onlineComponents}function Ld(n){return Od(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,t,e){if(!e)throw new L(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Md(n,t,e,r){if(t===!0&&r===!0)throw new L(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function _o(n){if(!M.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yo(n){if(M.isDocumentKey(n))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Rs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":B()}function Va(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Rs(n);throw new L(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Md("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ka((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ru;switch(r.type){case"firstParty":return new Nu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=go.get(e);r&&(V("ComponentProvider","Removing Datastore"),go.delete(e),r.terminate())}(this),Promise.resolve()}}function jd(n,t,e,r={}){var i;const o=(n=Va(n,mr))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=mt.MOCK_USER;else{u=So(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new mt(f)}n._authCredentials=new Pu(new Wo(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ps(this.firestore,t,this._query)}}class Mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mt(this.firestore,t,this._key)}}class Qt extends Ps{constructor(t,e,r){super(t,e,sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mt(this.firestore,null,new M(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function Fd(n,t,...e){if(n=Ft(n),Da("collection","path",t),n instanceof mr){const r=Z.fromString(t,...e);return yo(r),new Qt(n,null,r)}{if(!(n instanceof Mt||n instanceof Qt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return yo(r),new Qt(n.firestore,null,r)}}function Ud(n,t,...e){if(n=Ft(n),arguments.length===1&&(t=Qo.newId()),Da("doc","path",t),n instanceof mr){const r=Z.fromString(t,...e);return _o(r),new Mt(n,null,new M(r))}{if(!(n instanceof Mt||n instanceof Qt))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return _o(r),new Mt(n.firestore,n instanceof Qt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ia(this,"async_queue_retry"),this.hu=()=>{const e=Gr();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Gr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ie;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!ar(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw ue("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=xs.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&B()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Oa extends mr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Bd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||La(this),this._firestoreClient.terminate()}}function $d(n,t){const e=typeof n=="object"?n:jo(),r=typeof n=="string"?n:"(default)",i=Oo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Po("firestore");o&&jd(i,...o)}return i}function qd(n){return n._firestoreClient||La(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function La(n){var t,e,r;const i=n._freezeSettings(),o=function(u,h,f,y){return new zu(u,h,f,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,ka(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new kd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fn(Ut.fromBase64String(t))}catch(e){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new fn(Ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=/^__.*__$/;class zd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new mn(t,this.data,e,this.fieldTransforms)}}function Ua(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Cs{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Cs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ir(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Ua(this.fu)&&Hd.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Gd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||hr(t)}Fu(t,e,r,i=!1){return new Cs({fu:t,methodName:e,vu:r,path:ct.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kd(n){const t=n._freezeSettings(),e=hr(n._databaseId);return new Gd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Wd(n,t,e,r,i,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);Ha("Data must be an object, but it was:",l,r);const u=$a(r,l);let h,f;if(o.merge)h=new Ct(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const A of o.mergeFields){const x=Qd(t,A,e);if(!l.contains(x))throw new L(P.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Jd(y,x)||y.push(x)}h=new Ct(y),f=l.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=l.fieldTransforms;return new zd(new Pt(u),h,f)}function Ba(n,t){if(qa(n=Ft(n)))return Ha("Unsupported field value:",t,n),$a(n,t);if(n instanceof ja)return function(r,i){if(!Ua(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const u of r){let h=Ba(u,i.bu(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ph(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:ls(i.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ls(i.serializer,o)}}if(r instanceof Fa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:Rh(i.serializer,r._byteString)};if(r instanceof Mt){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Rs(r)}`)}(n,t)}function $a(n,t){const e={};return Jo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pn(n,(r,i)=>{const o=Ba(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function qa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof Fa||n instanceof fn||n instanceof Mt||n instanceof ja)}function Ha(n,t,e){if(!qa(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Rs(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Qd(n,t,e){if((t=Ft(t))instanceof Ma)return t._internalPath;if(typeof t=="string")return Yd(n,t);throw ir("Field path arguments must be of type string or ",n,!1,void 0,e)}const Xd=new RegExp("[~\\*/\\[\\]]");function Yd(n,t,e){if(t.search(Xd)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ma(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ir(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new L(P.INVALID_ARGUMENT,u+n+h)}function Jd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function tf(n,t){const e=Va(n.firestore,Oa),r=Ud(n),i=Zd(n.converter,t);return ef(e,[Wd(Kd(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function ef(n,t){return function(r,i){const o=new ie;return r.asyncQueue.enqueueAndForget(async()=>xd(await Ld(r),i,o)),o.promise}(qd(n),t)}(function(t,e=!0){(function(i){Ce=i})(Lo),on(new be("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new Oa(new Cu(r.getProvider("auth-internal")),new Du(r.getProvider("app-check-internal")),function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zn(f.options.projectId,y)}(l,i),l);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Wt(Wi,"4.6.2",t),Wt(Wi,"4.6.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="firebasestorage.googleapis.com",Ga="storageBucket",nf=2*60*1e3,rf=10*60*1e3,sf=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends fe{constructor(t,e,r=0){super(Wr(t),`Firebase Storage: ${e} (${Wr(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Y.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Wr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function Wr(n){return"storage/"+n}function Ss(){const n="An unknown error occurred, please check the error payload for server response.";return new Y(Q.UNKNOWN,n)}function of(n){return new Y(Q.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function af(n){return new Y(Q.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lf(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Y(Q.UNAUTHENTICATED,n)}function cf(){return new Y(Q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uf(n){return new Y(Q.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ka(){return new Y(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wa(){return new Y(Q.CANCELED,"User canceled the upload/download.")}function hf(n){return new Y(Q.INVALID_URL,"Invalid URL '"+n+"'.")}function df(n){return new Y(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ff(){return new Y(Q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ga+"' property when initializing the app?")}function Qa(){return new Y(Q.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function pf(){return new Y(Q.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function mf(){return new Y(Q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function gf(n){return new Y(Q.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hs(n){return new Y(Q.INVALID_ARGUMENT,n)}function Xa(){return new Y(Q.APP_DELETED,"The Firebase app was deleted.")}function _f(n){return new Y(Q.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sn(n,t){return new Y(Q.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Je(n){throw new Y(Q.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=At.makeFromUrl(t,e)}catch{return new At(t,"")}if(r.path==="")return r;throw df(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+i+l,"i"),h={bucket:1,path:3};function f(U){U.path_=decodeURIComponent(U.path)}const y="v[A-Za-z0-9_]+",A=e.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",C=new RegExp(`^https?://${A}/${y}/b/${i}/o${x}`,"i"),N={bucket:1,path:3},D=e===za?"(?:storage.googleapis.com|storage.cloud.google.com)":e,k="([^?#]*)",j=new RegExp(`^https?://${D}/${i}/${k}`,"i"),O=[{regex:u,indices:h,postModify:o},{regex:C,indices:N,postModify:f},{regex:j,indices:{bucket:1,path:2},postModify:f}];for(let U=0;U<O.length;U++){const wt=O[U],tt=wt.regex.exec(t);if(tt){const w=tt[wt.indices.bucket];let m=tt[wt.indices.path];m||(m=""),r=new At(w,m),wt.postModify(r);break}}if(r==null)throw hf(t);return r}}class yf{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n,t,e){let r=1,i=null,o=null,l=!1,u=0;function h(){return u===2}let f=!1;function y(...k){f||(f=!0,t.apply(null,k))}function A(k){i=setTimeout(()=>{i=null,n(C,h())},k)}function x(){o&&clearTimeout(o)}function C(k,...j){if(f){x();return}if(k){x(),y.call(null,k,...j);return}if(h()||l){x(),y.call(null,k,...j);return}r<64&&(r*=2);let O;u===1?(u=2,O=0):O=(r+Math.random())*1e3,A(O)}let N=!1;function D(k){N||(N=!0,x(),!f&&(i!==null?(k||(u=2),clearTimeout(i),A(0)):k||(u=1)))}return A(0),o=setTimeout(()=>{l=!0,D(!0)},e),D}function Ef(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){return n!==void 0}function Tf(n){return typeof n=="function"}function bf(n){return typeof n=="object"&&!Array.isArray(n)}function gr(n){return typeof n=="string"||n instanceof String}function Eo(n){return Ns()&&n instanceof Blob}function Ns(){return typeof Blob<"u"}function wo(n,t,e,r){if(r<t)throw hs(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw hs(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Ya(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ae||(ae={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,e,r,i,o,l,u,h,f,y,A,x=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=y,this.connectionFactory_=A,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new qn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=u=>{const h=u.loaded,f=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const u=o.getErrorCode()===ae.NO_ERROR,h=o.getStatus();if(!u||Ja(h,this.additionalRetryCodes_)&&this.retry){const y=o.getErrorCode()===ae.ABORT;r(!1,new qn(!1,null,y));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new qn(f,o))})},e=(r,i)=>{const o=this.resolve_,l=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());wf(h)?o(h):o()}catch(h){l(h)}else if(u!==null){const h=Ss();h.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,h)):l(h)}else if(i.canceled){const h=this.appDelete_?Xa():Wa();l(h)}else{const h=Ka();l(h)}};this.canceled_?e(!1,new qn(!1,null,!0)):this.backoffId_=vf(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ef(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Af(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function xf(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Rf(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Pf(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Cf(n,t,e,r,i,o,l=!0){const u=Ya(n.urlParams),h=n.url+u,f=Object.assign({},n.headers);return Rf(f,t),Af(f,e),xf(f,o),Pf(f,r),new If(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nf(...n){const t=Sf();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(Ns())return new Blob(n);throw new Y(Q.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kf(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){if(typeof atob>"u")throw gf("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qr{constructor(t,e){this.data=t,this.contentType=e||null}}function Vf(n,t){switch(n){case St.RAW:return new Qr(Za(t));case St.BASE64:case St.BASE64URL:return new Qr(tl(n,t));case St.DATA_URL:return new Qr(Lf(t),Mf(t))}throw Ss()}function Za(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,l=n.charCodeAt(++e);r=65536|(o&1023)<<10|l&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Of(n){let t;try{t=decodeURIComponent(n)}catch{throw sn(St.DATA_URL,"Malformed data URL.")}return Za(t)}function tl(n,t){switch(n){case St.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw sn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw sn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=Df(t)}catch(i){throw i.message.includes("polyfill")?i:sn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}class el{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw sn(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=jf(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Lf(n){const t=new el(n);return t.base64?tl(St.BASE64,t.rest):Of(t.rest)}function Mf(n){return new el(n).contentType}function jf(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){let r=0,i="";Eo(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Eo(this.data_)){const r=this.data_,i=kf(r,t,e);return i===null?null:new zt(i)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new zt(r,!0)}}static getBlob(...t){if(Ns()){const e=t.map(r=>r instanceof zt?r.data_:r);return new zt(Nf.apply(null,e))}else{const e=t.map(l=>gr(l)?Vf(St.RAW,l).data:l.data_);let r=0;e.forEach(l=>{r+=l.byteLength});const i=new Uint8Array(r);let o=0;return e.forEach(l=>{for(let u=0;u<l.length;u++)i[o++]=l[u]}),new zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){let t;try{t=JSON.parse(n)}catch{return null}return bf(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Uf(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function rl(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n,t){return t}class Et{constructor(t,e,r,i){this.server=t,this.local=e||t,this.writable=!!r,this.xform=i||Bf}}let Hn=null;function $f(n){return!gr(n)||n.length<2?n:rl(n)}function sl(){if(Hn)return Hn;const n=[];n.push(new Et("bucket")),n.push(new Et("generation")),n.push(new Et("metageneration")),n.push(new Et("name","fullPath",!0));function t(o,l){return $f(l)}const e=new Et("name");e.xform=t,n.push(e);function r(o,l){return l!==void 0?Number(l):l}const i=new Et("size");return i.xform=r,n.push(i),n.push(new Et("timeCreated")),n.push(new Et("updated")),n.push(new Et("md5Hash",null,!0)),n.push(new Et("cacheControl",null,!0)),n.push(new Et("contentDisposition",null,!0)),n.push(new Et("contentEncoding",null,!0)),n.push(new Et("contentLanguage",null,!0)),n.push(new Et("contentType",null,!0)),n.push(new Et("metadata","customMetadata",!0)),Hn=n,Hn}function qf(n,t){function e(){const r=n.bucket,i=n.fullPath,o=new At(r,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function Hf(n,t,e){const r={};r.type="file";const i=e.length;for(let o=0;o<i;o++){const l=e[o];r[l.local]=l.xform(r,t[l.server])}return qf(r,n),r}function il(n,t,e){const r=nl(t);return r===null?null:Hf(n,r,e)}function zf(n,t,e,r){const i=nl(t);if(i===null||!gr(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(f=>{const y=n.bucket,A=n.fullPath,x="/b/"+l(y)+"/o/"+l(A),C=yn(x,e,r),N=Ya({alt:"media",token:f});return C+N})[0]}function ol(n,t){const e={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Ne{constructor(t,e,r,i){this.url=t,this.method=e,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){if(!n)throw Ss()}function ks(n,t){function e(r,i){const o=il(n,i,t);return jt(o!==null),o}return e}function Gf(n,t){function e(r,i){const o=il(n,i,t);return jt(o!==null),zf(o,i,n.host,n._protocol)}return e}function vn(n){function t(e,r){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=cf():i=lf():e.getStatus()===402?i=af(n.bucket):e.getStatus()===403?i=uf(n.path):i=r,i.status=e.getStatus(),i.serverResponse=r.serverResponse,i}return t}function al(n){const t=vn(n);function e(r,i){let o=t(r,i);return r.getStatus()===404&&(o=of(n.path)),o.serverResponse=i.serverResponse,o}return e}function Kf(n,t,e){const r=t.fullServerUrl(),i=yn(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,u=new Ne(i,o,ks(n,e),l);return u.errorHandler=al(t),u}function Wf(n,t,e){const r=t.fullServerUrl(),i=yn(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,u=new Ne(i,o,Gf(n,e),l);return u.errorHandler=al(t),u}function Qf(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function ll(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=Qf(null,t)),r}function Xf(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function u(){let O="";for(let U=0;U<2;U++)O=O+Math.random().toString().slice(2);return O}const h=u();l["Content-Type"]="multipart/related; boundary="+h;const f=ll(t,r,i),y=ol(f,e),A="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,x=`\r
--`+h+"--",C=zt.getBlob(A,r,x);if(C===null)throw Qa();const N={name:f.fullPath},D=yn(o,n.host,n._protocol),k="POST",j=n.maxUploadRetryTime,F=new Ne(D,k,ks(n,e),j);return F.urlParams=N,F.headers=l,F.body=C.uploadData(),F.errorHandler=vn(t),F}class or{constructor(t,e,r,i){this.current=t,this.total=e,this.finalized=!!r,this.metadata=i||null}}function Ds(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{jt(!1)}return jt(!!e&&(t||["active"]).indexOf(e)!==-1),e}function Yf(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),l=ll(t,r,i),u={name:l.fullPath},h=yn(o,n.host,n._protocol),f="POST",y={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},A=ol(l,e),x=n.maxUploadRetryTime;function C(D){Ds(D);let k;try{k=D.getResponseHeader("X-Goog-Upload-URL")}catch{jt(!1)}return jt(gr(k)),k}const N=new Ne(h,f,C,x);return N.urlParams=u,N.headers=y,N.body=A,N.errorHandler=vn(t),N}function Jf(n,t,e,r){const i={"X-Goog-Upload-Command":"query"};function o(f){const y=Ds(f,["active","final"]);let A=null;try{A=f.getResponseHeader("X-Goog-Upload-Size-Received")}catch{jt(!1)}A||jt(!1);const x=Number(A);return jt(!isNaN(x)),new or(x,r.size(),y==="final")}const l="POST",u=n.maxUploadRetryTime,h=new Ne(e,l,o,u);return h.headers=i,h.errorHandler=vn(t),h}const To=256*1024;function Zf(n,t,e,r,i,o,l,u){const h=new or(0,0);if(l?(h.current=l.current,h.total=l.total):(h.current=0,h.total=r.size()),r.size()!==h.total)throw pf();const f=h.total-h.current;let y=f;i>0&&(y=Math.min(y,i));const A=h.current,x=A+y;let C="";y===0?C="finalize":f===y?C="upload, finalize":C="upload";const N={"X-Goog-Upload-Command":C,"X-Goog-Upload-Offset":`${h.current}`},D=r.slice(A,x);if(D===null)throw Qa();function k(U,wt){const tt=Ds(U,["active","final"]),w=h.current+y,m=r.size();let _;return tt==="final"?_=ks(t,o)(U,wt):_=null,new or(w,m,tt==="final",_)}const j="POST",F=t.maxUploadRetryTime,O=new Ne(e,j,k,F);return O.headers=N,O.body=D.uploadData(),O.progressCallback=u||null,O.errorHandler=vn(n),O}const Tt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xr(n){switch(n){case"running":case"pausing":case"canceling":return Tt.RUNNING;case"paused":return Tt.PAUSED;case"success":return Tt.SUCCESS;case"canceled":return Tt.CANCELED;case"error":return Tt.ERROR;default:return Tt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,e,r){if(Tf(t)||e!=null||r!=null)this.next=t,this.error=e??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class ep{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ae.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ae.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ae.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,i){if(this.sent_)throw Je("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Je("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Je("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Je("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Je("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class np extends ep{initXhr(){this.xhr_.responseType="text"}}function we(){return new np}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,e,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=r,this._mappings=sl(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Q.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(Ja(i.status,[]))if(o)i=Ka();else{this.sleepTime=Math.max(this.sleepTime*2,sf),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Q.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,r])=>{switch(this._state){case"running":t(e,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const r=Yf(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,we,t,e);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,r)=>{const i=Jf(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,we,e,r);this._request=o,o.getPromise().then(l=>{l=l,this._request=void 0,this._updateProgress(l.current),this._needToFetchStatus=!1,l.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=To*this._chunkMultiplier,e=new or(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let l;try{l=Zf(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const u=this._ref.storage._makeRequest(l,we,i,o,!1);this._request=u,u.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){To*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const r=Kf(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,we,t,e);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const r=Xf(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,we,t,e);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Wa(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Xr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,r,i){const o=new tp(e||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Xr(this._state)){case Tt.SUCCESS:ve(this._resolve.bind(null,this.snapshot))();break;case Tt.CANCELED:case Tt.ERROR:const e=this._reject;ve(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Xr(this._state)){case Tt.RUNNING:case Tt.PAUSED:t.next&&ve(t.next.bind(t,this.snapshot))();break;case Tt.SUCCESS:t.complete&&ve(t.complete.bind(t))();break;case Tt.CANCELED:case Tt.ERROR:t.error&&ve(t.error.bind(t,this._error))();break;default:t.error&&ve(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){this._service=t,e instanceof At?this._location=e:this._location=At.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new de(t,e)}get root(){const t=new At(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rl(this._location.path)}get storage(){return this._service}get parent(){const t=Ff(this._location.path);if(t===null)return null;const e=new At(this._location.bucket,t);return new de(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw _f(t)}}function sp(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new rp(n,new zt(t),e)}function ip(n){n._throwIfRoot("getDownloadURL");const t=Wf(n.storage,n._location,sl());return n.storage.makeRequestWithTokens(t,we).then(e=>{if(e===null)throw mf();return e})}function op(n,t){const e=Uf(n._location.path,t),r=new At(n._location.bucket,e);return new de(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){return/^[A-Za-z]+:\/\//.test(n)}function lp(n,t){return new de(n,t)}function cl(n,t){if(n instanceof Vs){const e=n;if(e._bucket==null)throw ff();const r=new de(e,e._bucket);return t!=null?cl(r,t):r}else return t!==void 0?op(n,t):n}function cp(n,t){if(t&&ap(t)){if(n instanceof Vs)return lp(n,t);throw hs("To use ref(service, url), the first argument must be a Storage instance.")}else return cl(n,t)}function bo(n,t){const e=t==null?void 0:t[Ga];return e==null?null:At.makeFromBucketSpec(e,n)}function up(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:So(i,n.app.options.projectId))}class Vs{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=za,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nf,this._maxUploadRetryTime=rf,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=bo(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,t):this._bucket=bo(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){wo("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){wo("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new de(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new yf(Xa());{const l=Cf(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const Io="@firebase/storage",Ao="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="storage";function hp(n,t,e){return n=Ft(n),sp(n,t,e)}function dp(n){return n=Ft(n),ip(n)}function fp(n,t){return n=Ft(n),cp(n,t)}function pp(n=jo(),t){n=Ft(n);const r=Oo(n,ul).getImmediate({identifier:t}),i=Po("storage");return i&&mp(r,...i),r}function mp(n,t,e,r={}){up(n,t,e,r)}function gp(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Vs(e,r,i,t,Lo)}function _p(){on(new be(ul,gp,"PUBLIC").setMultipleInstances(!0)),Wt(Io,Ao,""),Wt(Io,Ao,"esm2017")}_p();const yp=Mo({apiKey:"AIzaSyBm4EYV2guS5xNra_uoJOfyH4_GKqwcrLE",authDomain:"prime-time-pals.firebaseapp.com",projectId:"prime-time-pals",storageBucket:"prime-time-pals.appspot.com",messagingSenderId:"94046890357",appId:"1:94046890357:web:85054ee5f4466cf9c78b3c",measurementId:"G-XGV2K3MK53"}),vp=$d(yp),Ep=pp(),wp=async(n,t)=>{const e=fp(Ep,`images/${n.name}`),r=hp(e,n);return new Promise((i,o)=>{r.on("state_changed",l=>{const u=Math.round(l.bytesTransferred/l.totalBytes*100);console.log("Upload is "+u+"% done"),t(u)},l=>{switch(l.code){}o(l)},()=>{dp(r.snapshot.ref).then(l=>{console.log("File available at",l),i(l)}).catch(l=>{o(l)})})})},Tp=async n=>{console.log(n);try{const t=await tf(Fd(vp,"users"),n);return console.log("Document written with ID",t.id),t}catch(t){console.error("Error adding document: ",t)}};console.log("Hello there, Firestore!");function Cp(){const[n,t]=Ot.useState(0),[e,r]=Ot.useState(1),[i,o]=Ot.useState(!1),[l,u]=Ot.useState({}),[h,f]=Ot.useState({firstname:"",surname:"",age:"",location:"",gender:"",hearAbout:"",reasons:[],hobbies:[],topics:[],involvement:"",accessibility:"",volunteering:"",image:null,additional:""}),y=["Personal","Choices","Identification"],A=N=>{let D={};return N===1&&(h.firstname||(D.firstname="First name is required"),h.surname||(D.surname="Surname is required"),h.age?isNaN(h.age)&&(D.age="Age must be a number"):D.age="Age is required",h.gender||(D.gender="Gender is required"),h.hearAbout||(D.hearAbout="Please let us know how you heard about Prime Time Pals"),h.reasons.length===0&&(D.reasons="Check at least one option")),N===2&&(h.hobbies.length===0&&(D.hobbies="Please tell us about your hobbies"),h.topics.length===0&&(D.topics="Please let us know the kind of topics you're interested in"),h.involvement||(D.involvement="Please select an option"),h.accessibility||(D.accessibility="Please select an option"),h.volunteering||(D.volunteering="Please select an option")),N===3&&(h.image||(D.image="Please upload a valid means of identification")),u(D),Object.keys(D).length===0},x=N=>{const{name:D,value:k,type:j,checked:F}=N.target;f(O=>{if(j==="checkbox"){if(F&&!(O[D]||[]).includes(k))return{...O,[D]:[...O[D]||[],k]};if(!F)return{...O,[D]:(O[D]||[]).filter(U=>U!==k)}}else return{...O,[D]:k};return O})},C=async(N,D)=>{D.preventDefault();let k=e;if(!(N==="next"&&!A(e))&&(N==="next"?k++:k--,k>0&&k<=y.length&&r(k),e===y.length)){o(!0);const j=await wp(h.image,t);f(O=>({...O,image:j})),await Tp({...h,image:j})?Oi("Thank you for joining the waitlist for primetime pal. We’ll send updates to you soon",{variant:"success",persist:!0}):Oi("Error occurred!",{variant:"error",persist:!0})}};return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"mx-8",children:[p.jsx(Kl,{}),p.jsx("h2",{className:"font-saeada-regular text-[22px] mt-28 text-[#0070ff] mb-4 font-bold md:text-[30px] text-center",children:"Join Prime TIme Pals"}),p.jsx("p",{className:"text-[#4f4f4f] text-center mt-3 font-bold tracking-widest hidden md:block font-saeada-thin",children:"Join us on an adventure and journey that transcends geographical boundaries, uniting hearts nationwide."}),p.jsxs("div",{className:"sm:w-1/2 mx-auto pb-2 bg-white",children:[p.jsxs("div",{className:"container horizontal mt-5",children:[p.jsx(Ql,{steps:y,currentStep:e}),p.jsx("form",{action:"",children:p.jsxs("div",{className:"my-4 p-4",children:[e===1&&p.jsx(tc,{data:h,handleChange:x,handleClick:C,currentStep:e,steps:y,formError:l}),e===2&&p.jsx(Yl,{data:h,handleChange:x,handleClick:C,currentStep:e,steps:y,formError:l}),e===3&&p.jsx(Zl,{data:h,handleChange:x,handleClick:C,currentStep:e,steps:y,setFormData:f,formError:l,progress:n,isDisabled:i})]})})]}),e!==y.length+1&&p.jsx(Xl,{handleClick:C,currentStep:e,steps:y})]})]}),p.jsx(Wl,{})]})}export{Cp as Registration};
