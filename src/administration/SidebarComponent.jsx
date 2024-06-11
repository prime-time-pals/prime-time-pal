import { getAuth, signOut } from 'firebase/auth';
import logo from '../assets/images/white-logo.svg'

// const SidebarComponent = () => {
//     return(
//         <>
//             <div className='border-b pb-4 border-b-[#D1D1D1]'>
//                 <img className='mt-4' src={logo} alt="logo" />
//             </div>
//         </>
//         )
// }

// export default SidebarComponent;
import { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();

  async function handleSignOut(){
      try{
          await signOut(auth);
      }catch(error){
          console.log(error)
      }
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`flex flex-col text-white h-screen p-4 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="flex items-center border-b pb-4 border-b-[#D1D1D1] justify-between">
          <h1 className={`text-lg font-bold ${isOpen ? 'block' : 'hidden'}`}><img className='mt-4' src={logo} alt="logo" /></h1>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg
              className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="mt-10 flex-grow">
          <SidebarItem icon={<FaHome />} text="Dashboard" isOpen={isOpen} />
          <SidebarItem icon={<FaUser />} text="Entries" isOpen={isOpen} />
          <SidebarItem icon={<FaCog />} text="Settings" isOpen={isOpen} />
        </nav>
        <div>
            <SidebarItem icon={<FaSignOutAlt className='text-[#FF3301]' />} text="Logout" isOpen={isOpen} onClick={() => {handleSignOut()}} />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen, onClick }) => {
  return (
    <div className="flex items-center mt-4 p-2 hover:bg-[#0684FF] rounded-md cursor-pointer" onClick={onClick}>
      <div className="text-2xl">{icon}</div>
      <span className={`ml-4 font-saeada-light text-md font-medium ${isOpen ? 'block' : 'hidden'}`}>{text}</span>
    </div>
  );
};

export default Sidebar;
