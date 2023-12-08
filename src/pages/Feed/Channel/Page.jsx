import Sidebar from "../../../components/Layouts/Sidebar"
import Topnav from "../../../components/Layouts/Topnav"
import Channel from "../../../components/Feed/Channel/Channel"
const Page = () => {
  return (
    <div className="flex flex-col text-white">
        <Topnav/>
        <div className="mt-[50px] bg-transparent flex">
        <Sidebar/>
        <div className="w-full">
          <div className="xl:ml-[260px] mt-5 max-xl:ml-[70px] bg-transparent">
            <Channel/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Page
