
import Card from "../../components/Short/Card"
import Sidebar from "../../components/Layouts/Sidebar"
import Topnav from "../../components/Layouts/Topnav"

const Page = () => {
  return (
    <div className="flex flex-col text-white">
        <Topnav/>
        <div className="mt-[50px] bg-transparent flex">
        <Sidebar/>
        <div className="w-full">
          <div className="xl:ml-[260px] max-xl:ml-[70px] bg-transparent">
            <Card/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Page
