import React from 'react'

const Suggestion = ({openToggle, videoChannelName}) => {
  return (
    <div className={`bg-Black z-40  w-full flex items-center  `}>
      <div className='text-white bg-Black w-full h-full flex items-center'>
        <div className='flex items-start bg-transparent w-full h-full gap-5 overflow-x-scroll flex-col hidden-scroll '>
            <div className='h-full w-max flex items-center gap-3 text-[14px] justify-start'>
     <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            semua
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            dari {videoChannelName}
        </button>
     <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            terkait
        </button>
     <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            baru diupload
        </button>
     <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
            </div>
        </div>
        </div>
   
      </div>
  )
}

export default Suggestion
