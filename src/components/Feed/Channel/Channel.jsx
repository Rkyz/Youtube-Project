import React from 'react'

const Channel = () => {
  return (
    <div className='w-full bg-transparent mt-5 max-h-screen  h-full '>
        <div className='bg-transparent w-full h-full p-2 pl-[150px] grid grid-cols-1 gap-5'>
            <div className='max-h-[136px] overflow-hidden bg-transparent h-auto w-full flex gap-[126px]'>
                <div className='w-[136px] h-[136px] bg-white text-black rounded-full overflow-hidden'>
                    <img src="https://yt3.googleusercontent.com/3KPSpmD5EjMxKEFhxRZyCBazaF22Mo5eTJ93q0lwc9cY73jNurPNm4eKqSsg6Zm5ECj7HJaBtQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="" className='w-full h-full' />
                </div>
                <div className='h-full bg-transparent py-[20px]'>
                    <div className=' bg-transparent w-[500px] flex flex-col gap-1 '>
                    <h1 className='text-[18px]'>Abyss SC Gaming</h1>
                    <div className='text-[13px] flex gap-[25px] text-gray-400'>
                    <p>58,5 rb subscriber</p>
                    <ul className='list-disc'>
                        <li>
                            1,222 video
                        </li>
                    </ul>
                    </div>
                    <p className='text-[13px] text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates error mollitia delectus, corporis dolore libero natus rem illum ex optio tempora rerum. Earum, nesciunt dolorem.</p>
                    </div>
                </div>
                <div className='h-full flex items-center justify-center'>
                    <button className='capitalize'>
                        disubscribe
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Channel
