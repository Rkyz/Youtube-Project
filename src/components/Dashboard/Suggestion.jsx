import React from 'react'

const Suggestion = ({openToggle}) => {
  return (
    <div className={`bg-Black max-h-[80px] text-[14px] z-40 h-full w-full fixed flex items-center max-3nm:px-[30px] 1nm:pr-[10px] max-1nm:pl-[100px] max-1nm:pr-[40px] ${openToggle ? 'pl-[100px]':'pl-[260px]'} `}>
      <div className='text-white bg-Black w-full h-full flex items-center'>
        <div className='flex items-start bg-transparent w-full h-full gap-5 overflow-x-scroll flex-col hidden-scroll '>
            <div className='h-full w-max flex items-center gap-3 justify-start'>
     <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            semua
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            mix
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            live
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            game
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            musik
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            game petualangan asli
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            kartu
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            baru di upload
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            ditonton
        </button>
        <button className='bg-white bg-opacity-10 py-2 px-3 rounded-[10px] capitalize hover:bg-opacity-20'>
            baru untuk anda
        </button>
            </div>
        </div>
        </div>
   
      </div>
  )
}

export default Suggestion
