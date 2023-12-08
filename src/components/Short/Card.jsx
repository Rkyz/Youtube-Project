import { AiFillDislike, AiFillLike } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"
import { MdComment } from "react-icons/md"

const Card = () => {
  return (
    <div className="max-h-screen w-full h-screen bg-transparent p-5 flex items-center justify-center">
      <div className="bg-transparent pb-[40px] max-w-[450px] w-full h-full">
        <div className="w-full bg-transparent h-full flex">
            <div className="w-[370px] h-[650px] bg-black rounded-xl overflow-hidden">
            <iframe
              width="100%"   // Set the width to 100% to fill the container
              height="100%"  // Set the height to 100% to fill the container
              src="https://www.youtube.com/embed/ceOgB4_aAt8?autoplay=1"  // Updated YouTube video URL
              title="YouTube Video"
              allowFullScreen
            ></iframe>
            </div>
            <div className=" w-[80px] h-[650px] bg-transparent flex flex-col justify-end items-center gap-5">
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <AiFillLike className="text-xl"/>
                </button>
                <p className="capitalize">176</p>
                </div>
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <AiFillDislike className="text-xl"/>
                </button>
                <p className="capitalize">tidak ada</p>
                </div>
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <MdComment className="text-xl"/>
                </button>
                <p>116</p>
                </div>
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <BsShareFill className="text-lg"/>
                </button>
                <p>Bagikan</p>
                </div>
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    . . .
                </button>
                <div className="w-[40px] h-[40px] rounded-md overflow-hidden">
                    <img src="https://yt3.ggpht.com/2X-HjBym6OQmTotwrWe-7ngAkWPeNX1EtN09EdKlTdwH-E4oUaJO6ND7LPU3t7NFCWRIp5TzbQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
            </div>
        </div>
        <div className="w-full bg-transparent h-full flex">
            <div className="w-[370px] h-[650px] bg-black rounded-xl overflow-hidden">
            <iframe
              width="100%"   // Set the width to 100% to fill the container
              height="100%"  // Set the height to 100% to fill the container
              src="https://www.youtube.com/embed/ceOgB4_aAt8?autoplay=1"  // Updated YouTube video URL
              title="YouTube Video"
              allowFullScreen
            ></iframe>
            </div>
            <div className=" w-[80px] h-[650px] bg-transparent flex flex-col justify-end items-center gap-5">
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <AiFillLike className="text-xl"/>
                </button>
                <p className="capitalize">176</p>
                </div>
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <AiFillDislike className="text-xl"/>
                </button>
                <p className="capitalize">tidak ada</p>
                </div>
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <MdComment className="text-xl"/>
                </button>
                <p>116</p>
                </div>
                <div className="flex flex-col items-center">
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    <BsShareFill className="text-lg"/>
                </button>
                <p>Bagikan</p>
                </div>
                <button className="text-base w-[48px] h-[48px] font-bold flex items-center justify-center bg-gray-500 bg-opacity-20 hover:bg-opacity-30 rounded-full">
                    . . .
                </button>
                <div className="w-[40px] h-[40px] rounded-md overflow-hidden">
                    <img src="https://yt3.ggpht.com/2X-HjBym6OQmTotwrWe-7ngAkWPeNX1EtN09EdKlTdwH-E4oUaJO6ND7LPU3t7NFCWRIp5TzbQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
