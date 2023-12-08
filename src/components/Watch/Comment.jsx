import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { ApiKey, ApiKey1 } from '../../Utils/Api';


const Comment = ({setLength}) => {
  const [comments, setComments] = useState([]);

  const searchParams = new URLSearchParams(window.location.search);
  const videoId = searchParams.get('v');

  useEffect(() => {
    const fetchChannelThumbnail = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
          params: {
            key: `${ApiKey1}`,
            videoId: videoId,
            part: 'snippet',
          },
        });
        // console.log(response)
         setComments(response.data.items);
         setLength(response.data.items.length)
      } catch (err) {
        console.error('Error fetching channel details:', err);
      }
    };

    fetchChannelThumbnail();
  },);   
  
  const formatRelativeTime = (date) => {
    const now = new Date();
    const differenceInSeconds = Math.floor((now - date) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds yang lalu`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? '' : ''} yang lalu`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} ${hours > 1 ? 'jam' : ''} yang lalu`;
    } else if (differenceInSeconds < 604800) {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} hari${days > 1 ? 's' : ''} yang lalu`;
    } else if (differenceInSeconds < 2419200) {
      const weeks = Math.floor(differenceInSeconds / 604800);
      return `${weeks} week${weeks > 1 ? 's' : ''} yang lalu`;
    } else {
      const months = Math.floor(differenceInSeconds / 2419200);
      return `${months} month${months > 1 ? 's' : ''} yang lalu`;
    }
  };
  return (
    <div className='w-full h-auto bg-transparent mb-[20px]'>
      <div className='w-full bg-transparent flex gap-3 items-center'>
        <div className='bg-white rounded-full w-[40px] h-[40px] text-center overflow-hidden'>
          <img src="https://yt3.ggpht.com/yti/ADpuP3Pc_8TyOg_arzU8_8XQpOvrcj8LiXamMkvFLABjFA=s108-c-k-c0x00ffffff-no-rj" className='w-full h-full' alt="" />
        </div>
        <div className='w-full h-full'>
          <input type="text" placeholder='tambahkan komentar' className='w-full bg-transparent outline-none border-b' />
        </div>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className='bg-transparent w-full mt-[20px]'>
          <div className='w-full h-auto flex gap-3'>
            <div className='bg-white rounded-full w-[40px] h-[40px] overflow-hidden text-center'>
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='foto' className='w-full h-full'/>
            </div>
            <div className='w-full h-full bg-transparent'>
              <div className='flex gap-2 items-end'>
                <p className='text-[13px]'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p className='text-[12px] text-[#AAAAAA]'>{formatRelativeTime(new Date (comment.snippet.topLevelComment.snippet.publishedAt))}</p>
              </div>
              <div className='text-[14px]'>
                {comment.snippet.topLevelComment.snippet.textDisplay}
              </div>
              <div className='flex gap-1 items-center'>
                <button className='w-[32px] h-[32px] text-[22px] flex items-center justify-center'>
                  <AiOutlineLike />
                </button>
                <p className='text-[12px] text-[#AAAAAA]'>{comment.snippet.topLevelComment.snippet.likeCount}</p>
                <button className='w-[32px] h-[32px] text-[22px] flex items-center justify-center'>
                  <AiOutlineDislike />
                </button>
                <button className='capitalize text-[12px] p-2'>balas</button>
              </div>
            </div>
          </div>
        </div>
      ))}
  
        </div>
  )
}

export default Comment
