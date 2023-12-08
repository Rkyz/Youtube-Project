import { useState } from "react";
import FavCard from "./Card/FavCard"
import Topnav from "./Topnav"

const Subs = () => {

    const [changeStyle, setChangeStyle] = useState(false);

    const toggleChangeStyleOn = () =>{
        setChangeStyle(true)
    }
    const toggleChangeStyleOff = () =>{
        setChangeStyle(false)
    }

    return (
        <div className='text-white bg-transparent py-7 flex items-center px-[35px]'>
            <div className='w-full'>
                <Topnav toggleChangeStyleOn={toggleChangeStyleOn} toggleChangeStyleOff={toggleChangeStyleOff}/>
                <div className=' w-full max-h-screen bg-transparent'>
                    <div className='w-full h-full bg-transparent'>
                        <FavCard changeStyle={changeStyle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subs
