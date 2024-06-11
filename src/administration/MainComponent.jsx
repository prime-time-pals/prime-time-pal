import { FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCollection } from "../firebase/firebase";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const MainComponent = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
    async function fetchData() {
        const collection = await getCollection();
        console.log(collection)
        setData(collection)
    }
    fetchData();
   },[])

    return (
        <div className="p-6">
            <div className="flex justify-between border-b pb-4 border-b-[#454545]">
                <h1 className="font-saeada-regular text-[28px] text-[#0684FF]">All Entries</h1>
                <div className="flex justify-center items-center gap-2">
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className=""
                        table="table-to-xls"
                        filename="primetimepalxls"
                        sheet="tablexls"
                        buttonText=""
                    />
                        <p className="font-saeada-light">Export All Entries</p>
                        <FaDownload className="text-[#000000] cursor-pointer" onClick={() => document.getElementById('test-table-xls-button').click()}/>
                    
                </div>
            </div>
            <div>
            <table id="table-to-xls" className="mt-6">
                <thead>
                <tr>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Firstname</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Surname</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Age</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Accessibility</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Hear About</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Hobbies</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Volunteer</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Topics</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Reasons</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Gender</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Involvement</th>
                    <th className="text-[#454545] font-saeada-extraLight text-sm border text-left px-8 py-4">Location</th>
                    {/* Add more fields as necessary */}
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="font-saeada-light">
                    <td className="whitespace-nowrap border px-8 py-4 text-[#0070FF]">{item.firstname}</td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.surname}</td>
                    <td className="whitespace-nowrap border text-[#FF4D0A] px-8 py-4">{item.age}</td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.accessibility}</td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.hearAbout}</td>
                    <td className="whitespace-nowrap border px-8 py-4">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {item.hobbies.map((hobby, index) => (
                            <span className="whitespace-nowrap flex gap-3" key={index}><span className="text-[#CC3694]">{index+1}</span> {hobby}</span>
                            ))}
                        </div>
                    </td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.volunteering}</td>
                    <td className="whitespace-nowrap border px-8 py-4">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {item.topics.map((topic, index) => (
                            <span className="whitespace-nowrap flex gap-3" key={index}><span className="text-[#CC3694]">{index+1}</span> {topic}</span>
                            ))}
                        </div>
                    </td>
                    <td className="whitespace-nowrap border px-8 py-4">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {item.reasons.map((reason, index) => (
                            <span className="whitespace-nowrap flex gap-3" key={index}><span className="text-[#CC3694]">{index+1}</span> {reason}</span>
                            ))}
                        </div>
                    </td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.gender}</td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.involvement}</td>
                    <td className="whitespace-nowrap border px-8 py-4">{item.location}</td>
                    {/* Add more fields as necessary */}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default MainComponent;