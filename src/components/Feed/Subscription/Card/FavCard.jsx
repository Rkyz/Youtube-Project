
import { BsCheck2} from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
const FavCard = ({changeStyle}) => {
  return (
    <div className='w-full bg-transparent py-5 max-h-screen h-full'>
      <div className={`bg-Black w-full h-full grid  ${changeStyle ? 'grid-cols-1 gap-5':'grid-cols-3 gap-2'}`}>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/yNwHrfTe8ss/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>SPY×FAMILY - Episode 29 (S2E04) [Takarir Indonesia]</h1>


              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>10 rb x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>1 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>muse indonesia</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/MK6Y6n1qmVA/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>[🍁 2023] That Time I Got Reincarnated As A Slime: Coleus' Dream - PV 01</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>muse indonesia</p>
                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>159 x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        <div className={`w-full bg-transparent overflow-hidden flex ${changeStyle ? 'flex-col h-auto pb-5 border-b border-gray-600 gap-5':'max-h-[400px] h-[400px] flex-col gap-2 '} `}>
          <div className={`${changeStyle ? 'flex gap-5 items-center':'hidden'}`}>
          <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.googleusercontent.com/ytc/APkrFKYnVeRMr-0SJ7fv64krbdi_2NUv4bDPQWv-Vgfcfw=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
              </div>
            <h1 className='text-xl capitalize '>gadgetIn</h1>
          </div>
          <div className={`flex ${changeStyle ? 'gap-4':'w-full h-full gap-2 flex-col'} `}>
          <div className={`flex items-center justify-center bg-black rounded-[15px] overflow-hidden ${changeStyle ? ' max-h-[134px] h-[134px] w-[247px]':' max-h-[240px] h-[240px] w-full'}`}>
            <img src="https://i3.ytimg.com/vi/oSdY1ggKQNU/maxresdefault.jpg" alt="" className='w-full h-full' />
          </div>
          <div className={`flex justify-center text-white bg-transparent gap-2 ${changeStyle ? 'max-w-[700px] w-full bg-transparent':'w-full'} `}>
            <div className={`w-[50px] h-full  ${changeStyle ? 'hidden':''}`}>
              <div className={`w-[36px] h-[36px] rounded-full overflow-hidden`}>
              <img src="https://yt3.ggpht.com/gFUCcNt3vDqhE01l4anDMf6SWBIoZ1n7VvFfL4xoYblDlx_HI7IkJ3AYikno8XdE_kCaIeUJYQ=s68-c-k-c0x00ffffff-no-rj" alt="" className='w-full h-full' />
              </div>
            </div>
            <div className='w-full'>
              <h1 className=' font-medium'>Rakit PC Pribadi Part 2: WAKTUNYA NGERAKIT SEMUANYA!</h1>

              <div className={`${changeStyle ? 'flex gap-3 text-[13px]':''}`}>
            <a className='flex items-center gap-2'>
                <p className='capitalize text-gray-400'>gadgetIn</p>

                <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
                 <BsCheck2 className='text-Black text-[10px]'/>
                </div>
            </a>
            <div className='flex gap-[25px] items-center'>
                <p className='text-gray-400'>4.9 jt x ditonton</p>
                <ul className='list-disc text-gray-400'>
                  <li className=''>10 hari yang lalu</li>
                </ul>
            </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default FavCard

