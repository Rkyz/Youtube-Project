import Sidebar from "../../../components/Layouts/Sidebar"
import Topnav from "../../../components/Layouts/Topnav"
import Subs from "../../../components/Feed/Subscription/Subs"
const Page = () => {
  return (
    <div className="flex flex-col text-white">
        <Topnav/>
        <div className="mt-[50px] bg-transparent flex">
        <Sidebar/>
        <div className="w-full">
          <div className="xl:ml-[260px] mt-5 max-xl:ml-[70px] bg-transparent">
            <Subs/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Page
