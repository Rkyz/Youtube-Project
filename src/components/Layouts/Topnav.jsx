import {RxHamburgerMenu} from 'react-icons/rx'
import {BsFillMicFill, BsCameraVideo, BsBell} from 'react-icons/bs'
import {BiPlay} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import Youtube from '../../assets/img/YoutubeFont.png'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Topnav = ({handleOpenToggle}) => {
    return (
        <div
            className='w-full text-white z-50 bg-Black max-h-[56px] fixed max-1nm:pl-[13px] 1nm:pl-[15px] max-3nm:px-[30px] 1nm:pr-[30px] max-1nm:pr-[40px] pt-[2px] '>
            <div className='w-full h-[56px] flex items-center justify-between bg-transparent'>
                <div className='bg-transparent flex h-full w-auto gap-5 items-center'>
                    <button onClick={handleOpenToggle} className='w-[40px] h-[40px] flex items-center justify-center'>
                        <RxHamburgerMenu className='text-[24px]'/>
                    </button>
                    <Link to='/' className='flex items-center gap-2 relative cursor-pointer'>
                        <div className='bg-red-500 w-[27px] h-[20px] rounded-[4px] flex items-center justify-center'>
                            <BiPlay className='text-white bg-transparent text-[18px]'/>
                        </div>
                        {/* <img src={Youtube} alt="" className='w-[70px]' /> */}
                        <p className='font-mono font-semibold uppercase text-[17px]'>youtube</p>
                        {/* <span className='uppercase absolute right-0 -top-[10px] text-[11px] text-gray-400'>id</span> */}
                    </Link>
                </div>
                <div className='w-full h-full flex items-center max-4nm:hidden justify-center px-[60px]'>
                    <div className='max-w-[500px] w-full h-full items-center flex py-[6px] gap-5'>
                        <div className='w-full flex h-full '>
                            <input type="text" placeholder='telusuri'  className=' placeholder:capitalize w-full px-[20px] border-y border-l rounded-l-full bg-transparent border-white border-opacity-20 outline-none '/>
                            <button className='h-full w-[64px] flex items-center justify-center text-[24px] bg-[#FFFFFF14] border rounded-r-full border-white border-opacity-20'>
                              <AiOutlineSearch/>
                            </button>
                        </div>
                        <button className='w-[50px] h-full rounded-full bg-[#FFFFFF14] flex items-center justify-center text-[20px]'>
                            <BsFillMicFill/>
                        </button>
                    </div>
                </div>
                <div className='w-auto h-full bg-transparent flex items-center justify-end py-[6px] gap-[10px]'>
                    <div className=' hover:bg-[#FFFFFF14] rounded-full flex items-center justify-center text-[24px] p-3'>
                        <BsCameraVideo/>
                    </div>
                    <div className='p-3 hover:bg-[#FFFFFF14] rounded-full flex items-center justify-centerb text-[24px] relative'>
                        <BsBell/>
                        <span className='bg-red-500 text-white absolute text-[12px] rounded-full w-[20px] h-[20px] flex items-center justify-center top-[5px] right-[5px]'>90</span>
                    </div>
                    <button className='w-[40px] ml-3 h-[40px] rounded-full overflow-hidden '>
                        <img src="https://yt3.ggpht.com/yti/ADpuP3Pc_8TyOg_arzU8_8XQpOvrcj8LiXamMkvFLABjFA=s108-c-k-c0x00ffffff-no-rj" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Topnav
