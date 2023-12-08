const ShortTwo = () => {

    return (
        <div
            className='w-full max-1nm:pl-[100px] 1nm:pl-[260px] max-3nm:px-[30px] bg-transparent py-5  h-full 1nm:pr-[10px] max-1nm:pr-[40px] flex flex-col gap-10  '>
            <div className='bg-Black w-full overflow-x-auto  '>
                <div className='grid grid-cols-5 gap-2 h-full '>
                    <div className='w-full bg-transparent flex flex-col gap-1'>
                        <div className='w-full h-[380px] rounded-lg overflow-hidden bg-black '>
                            <img
                                src="https://i3.ytimg.com/vi/_60SWq3DZ_4/maxresdefault.jpg"
                                alt=""
                                className="w-full h-full"/>
                        </div>
                     <h1 className="capitalize font-medium">
                        Baiklah kita rakitdiv si gundam 3000an ini
                    </h1>
                    <p className='text-gray-400'>769 x ditonton</p>
                    </div>
                    <div className='w-full bg-transparent flex flex-col gap-1'>
                        <div className='w-full h-[380px] rounded-lg overflow-hidden bg-black '>
                            <img
                                src="https://i3.ytimg.com/vi/_60SWq3DZ_4/maxresdefault.jpg"
                                alt=""
                                className="w-full h-full"/>
                        </div>
                     <h1 className="capitalize font-medium">
                        Baiklah kita rakit si gundam 3000an ini
                    </h1>
                    <p className='text-gray-400'>900 x ditonton</p>
                    </div>
                    <div className='w-full bg-transparent flex flex-col gap-1'>
                        <div className='w-full h-[380px] rounded-lg overflow-hidden bg-black '>
                            <img
                                src="https://i3.ytimg.com/vi/_60SWq3DZ_4/maxresdefault.jpg"
                                alt=""
                                className="w-full h-full"/>
                        </div>
                     <h1 className="capitalize font-medium">
                        Baiklah kita rakit si gundam 3000an ini
                    </h1>
                    <p className='text-gray-400'>769 x ditonton</p>
                    </div>
                    <div className='w-full bg-transparent flex flex-col gap-1'>
                        <div className='w-full h-[380px] rounded-lg overflow-hidden bg-black '>
                            <img
                                src="https://i3.ytimg.com/vi/_60SWq3DZ_4/maxresdefault.jpg"
                                alt=""
                                className="w-full h-full"/>
                        </div>
                     <h1 className="capitalize font-medium">
                        Baiklah kita rakit si gundam 3000an ini
                    </h1>
                    <p className='text-gray-400'>249 x ditonton</p>
                    </div>
                    <div className='w-full bg-transparent flex flex-col gap-1'>
                        <div className='w-full h-[380px] rounded-lg overflow-hidden bg-black '>
                            <img
                                src="https://i3.ytimg.com/vi/_60SWq3DZ_4/maxresdefault.jpg"
                                alt=""
                                className="w-full h-full"/>
                        </div>
                     <h1 className="capitalize font-medium">
                        Baiklah kita rakit si gundam 3000an ini
                    </h1>
                    <p className='text-gray-400'>239 x ditonton</p>
                    </div>
            
                    {/* Tambahkan lebih banyak div sesuai kebutuhan */}
                </div>
            </div>
                <div className="w-full h-[100px] bg-transparent flex items-center justify-center relative">
                    <button className="rounded-full border border-gray-700 py-2 bg-Black max-w-[400px] w-full hover:bg-gray-600 hover:border-gray-600">lebih banyak</button>
                    <div className="w-full h-[2px] bg-gray-700 absolute -z-10"></div>
                </div>
        </div>
    );
};

export default ShortTwo;
