import {AiFillHome, AiOutlineFire, AiOutlineSetting} from "react-icons/ai";
import {BsDownload, BsClock, BsFillPlayFill, BsFlag} from "react-icons/bs";
import {GoHistory} from "react-icons/go";
import {CgDanger} from "react-icons/cg";
import {HiOutlineNewspaper, } from "react-icons/hi";
import {BiHelpCircle, } from "react-icons/bi";
import {HiOutlineTrophy, } from "react-icons/hi2";
import {IoMusicalNoteOutline, IoGameControllerOutline} from "react-icons/io5";
import {PiUserRectangleLight, PiFilmSlateLight} from "react-icons/pi";
import {MdOutlineSubscriptions, MdOutlineSlowMotionVideo, MdOndemandVideo, MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/md";
import {useLocation, Link,} from "react-router-dom"
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Sidebar = ({openToggle}) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [scroll, setScroll] = useState(false);

    const onMouseScrollOpen = () =>{
        setScroll(!scroll)
    }

    return (
        <div onMouseEnter={onMouseScrollOpen} onMouseLeave={onMouseScrollOpen} className={`bg-transparent z-50  fixed  text-white max-h-screen overflow-visible 1nm:overflow-x-scroll max-3nm:w-0  max-1nm:max-w-[80px] 1nm:max-w-[260px] ${scroll ? '1nm:scroll-custom scroll-custom   ':'hidden-scroll'} ${openToggle ? '1nm:max-w-[80px]':''}`}>
            <div className={`h-screen 1nm:w-[240px] bg-transparent py-[10px] max-1nm:px-[5px] 1nm:px-[10px] ${openToggle ? '':''}`}>
                <div className=" bg-transparent ">
                    <div
                        className="flex flex-col gap-[5px] 1nm:border-b border-white border-opacity-20  py-3">
                        <div
                            className={`1nm:px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link to='/' className="bg-transparent max-1nm:gap-[10px] flex max-1nm:flex-col items-center 1nm:gap-[25px]">
                                <AiFillHome className="text-[24px]"/>
                                <p className="capitalize max-1nm:text-[10px] text-[14px]">beranda</p>
                            </Link>
                        </div>
                        <div
                            className={`1nm:px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/shorts'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link to='/shorts' className="bg-transparent max-1nm:gap-[10px] flex max-1nm:flex-col items-center 1nm:gap-[25px]">
                                <MdOutlineSlowMotionVideo className="text-[24px]"/>
                                <p className="capitalize max-1nm:text-[10px] text-[14px]">shorts</p>
                            </Link>
                        </div>
                        <div
                            className={`1nm:px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/feed/subscriptions'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link to='/feed/subscriptions' className="bg-transparent max-1nm:gap-[10px] flex max-1nm:flex-col items-center 1nm:gap-[25px]">
                                <MdOutlineSubscriptions className="text-[24px]"/>
                                <p className="capitalize max-1nm:text-[10px] text-[14px]">subscription</p>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] 1nm:border-b 1nm:border-white border-opacity-20  py-3">
                        {/* <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full   ${currentPath === '/feed/you'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link to='/feed/you' className="bg-transparent flex items-center gap-[25px]">
                            <MdOndemandVideo className="text-[24px]"/>
                                <p className="capitalize flex gap-2 items-center text-[16px]">Anda
                                    <MdKeyboardArrowRight/></p>
                            </Link>
                        </div> */}
                        <div
                            className={`px-[15px] py-[10px] rounded-xl max-3nm:hidden overflow-hidden w-full   ${currentPath === '/hdbhwb'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                                <Link to='/feed/subscriptions' className="bg-transparent max-1nm:gap-[10px] flex max-1nm:flex-col items-center 1nm:gap-[25px]">
                                <MdOndemandVideo className="text-[24px] 1nm:hidden"/>
                                <p className="capitalize flex gap-2 items-center 1nm:text-[16px] max-1nm:text-[10px]">Anda
                                    <MdKeyboardArrowRight className="max-1nm:hidden"/></p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full max-1nm:hidden  ${currentPath === '/hdbhwb'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <PiUserRectangleLight className="text-[24px]"/>
                                <p className="capitalize text-[14px]">channel anda</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full max-1nm:hidden ${currentPath === '/history'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <GoHistory className="text-[24px]"/>
                                <p className="capitalize text-[14px]">history</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full max-1nm:hidden  ${currentPath === '/videoanda'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <MdOndemandVideo className="text-[24px]"/>
                                <p className="capitalize text-[14px]">video anda</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full max-1nm:hidden  ${currentPath === '/nanti'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <BsClock className="text-[24px]"/>
                                <p className="capitalize text-[14px]">tonton nanti</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl max-3nm:hidden overflow-hidden w-full  ${currentPath === '/download'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                                <Link to='/shorts' className="bg-transparent max-1nm:gap-[10px] flex max-1nm:flex-col items-center 1nm:gap-[25px]">
                                <BsDownload className="text-[24px]"/>
                                <p className="capitalize text-[14px] max-1nm:text-[10px] max-1nm:text-center">hasil download</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full max-1nm:hidden  ${currentPath === '/lebihbanyak'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <button className="bg-transparent flex items-center gap-[25px]">
                                <MdKeyboardArrowDown className="text-[24px]"/>
                                <p className="capitalize text-[14px]">lebih banyak</p>
                            </button>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] border-b border-white border-opacity-20 py-3 max-1nm:hidden">
                         <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full `}>
                                <p className="capitalize text-[16px]">subscription</p>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full ${currentPath === '/mobilelegend'
                                ? 'bg-transparent bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <div
                                    style={{
                                        width: '24px',
                                        height: '24px'
                                    }}
                                    className="w-[24px] h-[24px] rounded-full overflow-hidden">
                                    <img
                                        src="https://yt3.ggpht.com/jd2qb7vNrYceenVj1yhiON6WFZmEf7Lqv1wrUGJF1MqcnQPBjAyBnxk7yN1Xs7zz7a34Q-1jhsw=s88-c-k-c0x00ffffff-no-rj"
                                        alt=""/>
                                </div>
                                <p
                                    className="capitalize"
                                    style={{
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>mobile legend</p>
                            </Link>
                        </div>

                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full ${currentPath === '/museindonesia'
                                ? 'bg-transparent bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <div
                                    style={{
                                        width: '24px',
                                        height: '24px'
                                    }}
                                    className="w-[24px] h-[24px] rounded-full overflow-hidden">
                                    <img
                                        src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s88-c-k-c0x00ffffff-no-rj"
                                        alt=""/>
                                </div>
                                <p
                                    className="capitalize"
                                    style={{
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>muse indonesia</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full ${currentPath === '/metrotv'
                                ? 'bg-transparent bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <div
                                    style={{
                                        width: '24px',
                                        height: '24px'
                                    }}
                                    className="w-[24px] h-[24px] rounded-full overflow-hidden">
                                    <img
                                        src="https://yt3.ggpht.com/RXCiPfH_LYi15tgWbLNkEoJz3eQwouG6RDcg-df7Rirg3sFXP-gyW31SdwUdKTwZixUJQBMg=s88-c-k-c0x00ffffff-no-rj"
                                        alt=""/>
                                </div>
                                <p
                                    className="capitalize"
                                    style={{
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>metro tv</p>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] border-b border-white border-opacity-20  py-3 max-1nm:hidden">
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full `}>
                                <p className="capitalize text-[16px]">eksplorasi</p>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/trending'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <AiOutlineFire className="text-[24px]"/>
                                <p className="capitalize text-[14px]">trending</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/music'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <IoMusicalNoteOutline className="text-[24px]"/>
                                <p className="capitalize text-[14px]">musik</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/film'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <PiFilmSlateLight className="text-[24px]"/>
                                <p className="capitalize text-[14px]">film</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/game'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <IoGameControllerOutline className="text-[24px]"/>
                                <p className="capitalize text-[14px]">game</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/berita'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <HiOutlineNewspaper className="text-[24px]"/>
                                <p className="capitalize text-[14px]">berita</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/olahraga'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <HiOutlineTrophy className="text-[24px]"/>
                                <p className="capitalize text-[14px]">olahraga</p>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] border-b border-white border-opacity-20  py-3 max-1nm:hidden">
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full `}>
                                <p className="capitalize text-[16px]">lainnya dari youtube</p>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/ytpremium'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <div className="py-[4px] px-[6px] bg-red-500 text-white rounded-[4px] text-[12px]">
                                <BsFillPlayFill/>
                                </div>
                                <p className="capitalize text-[14px]">youtube premium</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/ytstudio'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                            <div className="bg-transparent w-[24px] h-[24px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" className="pointer-events-none block w-full h-full"><path fill="red" d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"></path><path fill="#fff" d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"></path><path fill="red" d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"></path><path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"></path></svg>
                                </div>
                                <p className="capitalize text-[14px]">youtube studio</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/ytmusic'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                              <Link className="bg-transparent flex items-center gap-[25px]">
                                <div className="bg-transparent w-[24px] h-[24px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        focusable="false"
                                        className="pointer-events-none block w-full h-full">
                                        <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
                                        <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "></polygon>
                                        <path
                                            fill="#FFFFFF"
                                            d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"></path>
                                    </svg>
                                </div>
                                <p className="capitalize text-[14px]">youtube music</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/ytkids'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <div className="bg-transparent w-[24px] h-[24px]">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    className="pointer-events-none block w-full h-full">
                                    <path
                                        fill="#FF0000"
                                        d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"></path>
                                    <path
                                        fill="#000"
                                        d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"></path>
                                    <path
                                        fill="#000"
                                        d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"></path>
                                    <path
                                        fill="#FFF"
                                        d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"></path>
                                </svg>
                                </div>
                                <p className="capitalize text-[14px]">youtube kids</p>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] border-b border-white border-opacity-20  py-3 max-1nm:hidden">
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <AiOutlineSetting className="text-[24px]"/>
                                <p className="capitalize text-[14px]">setelan</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/laporan'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <BsFlag className="text-[24px]"/>
                                <p className="capitalize text-[14px]">history laporan</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/bantuan'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <BiHelpCircle className="text-[24px]"/>
                                <p className="capitalize text-[14px]">bantuan</p>
                            </Link>
                        </div>
                        <div
                            className={`px-[15px] py-[10px] rounded-xl overflow-hidden w-full  ${currentPath === '/masukan'
                                ? 'xl:bg-[#F1F1F1] xl:bg-opacity-10'
                                : 'bg-transparent hover:bg-[#F1F1F1] hover:bg-opacity-10 '}`}>
                            <Link className="bg-transparent flex items-center gap-[25px]">
                                <CgDanger className="text-[24px]"/>
                                <p className="capitalize text-[14px]">kirim masukan</p>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] border-b border-white border-opacity-20  py-3 px-5 max-1nm:hidden">
                            <p className="text-gray-400 text-[12px] text-center ">
                            © 2023 Rio Alamsyah
                            </p>
                    </div>
                    <div
                        className="flex flex-col gap-[5px] border-b border-white border-opacity-20  py-3 max-1nm:hidden">
                            -
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
