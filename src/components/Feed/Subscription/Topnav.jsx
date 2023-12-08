import {AiOutlineUnorderedList} from 'react-icons/ai'
import {BsGrid3X2GapFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Topnav = ({toggleChangeStyleOff, toggleChangeStyleOn}) => {
    return (
        <div className='flex justify-between items-center w-full'>
            <h1 className='capitalize text-lg font-bold'>terbaru</h1>
            <div className='flex items-center gap-5'>
                <Link to='/feed/channels'
                    className='text-blue-500 capitalize hover:bg-white hover:bg-opacity-25 p-3 rounded-full'>kelola</Link>
                <button className='text-[20px]' onClick={toggleChangeStyleOff}><BsGrid3X2GapFill/></button>
                <button className='text-[20px]' onClick={toggleChangeStyleOn}><AiOutlineUnorderedList/></button>
            </div>
        </div>
    )
}

export default Topnav
