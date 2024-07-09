import { useState } from "react"
import LastCard from "../../components/Dashboard/Card/LastCard"
import OneCard from "../../components/Dashboard/Card/OneCard"
import Card from "../../components/Dashboard/Card/TwoCard"
import ShortOne from "../../components/Dashboard/Short/ShortOne"
import ShortTwo from "../../components/Dashboard/Short/ShortTwo"
import Suggestion from "../../components/Dashboard/Suggestion"
import Sidebar from "../../components/Layouts/Sidebar"
import Topnav from "../../components/Layouts/Topnav"
import {AiOutlineClose} from 'react-icons/ai'
import Top from "../../components/Short/Top"

const Page = () => {
   const [openToggle, setOpenToggle] = useState(false);


   const handleOpenToggle = () => {
    setOpenToggle(!openToggle)
   }

  return (
    <div className="flex flex-col text-white">
        <Topnav handleOpenToggle={handleOpenToggle}/>
        <div className="mt-[50px] bg-transparent flex">
          <div>
        <Sidebar openToggle={openToggle}/>
          </div>
          {/* <div className="">
            <MaxSidebar/>
          </div> */}
        <div className="w-full">
         <Suggestion openToggle={openToggle}/>
         <div className="mt-[70px] w-full">
          {/* <Card openToggle={openToggle}/> */}
          {/* <Top openToggle={openToggle}/> */}
          {/* <ShortOne openToggle={openToggle}/> */}
          {/* <div className={`w-full flex items-center justify-center bg-transparent ${openToggle ? 'pl-[100px]' : 'pl-[260px] max-1nm:pl-[100px]'}`}>
            <div className="w-full h-full bg-transparent flex items-center justify-center capitalize text-red-500">
            sorry short is not available for now
            </div>
          </div> */}
          {/* <OneCard openToggle={openToggle} /> */}
          {/* <Top openToggle={openToggle}/> */}
          {/* <ShortTwo openToggle={openToggle}/> */}
          {/* <div className={`w-full flex items-center justify-center bg-transparent ${openToggle ? 'pl-[100px]' : 'pl-[260px] max-1nm:pl-[100px]'}`}>
            <div className="w-full h-full bg-transparent flex items-center justify-center capitalize text-red-500">
            sorry short is not available for now
            </div>
          </div> */}
          <LastCard openToggle={openToggle}/>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Page
