import React, { useState, useEffect } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import axios from 'axios';

const OneCard = ({ openToggle }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isConsoleLogged, setIsConsoleLogged] = useState(false);

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

  const formatViewCount = (count) => {
    if (count >= 1000000) {
      return `${Math.floor(count / 1000000)} jt x ditonton`;
    } else if (count >= 1000) {
      return `${Math.floor(count / 1000)} rb x ditonton`;
    } else {
      return `${count} x ditonton`;
    }
  };

  const handleGetVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: 'AIzaSyCoabcUZZqQRMEs_z_30t7_WbMKcCyPY8w',
          regionCode: 'ID',
          chart: 'MostPopular',
          type: 'video',
          part: 'snippet, statistics',
          maxResults: 3,
        },
      });
      // setVideos(response.data.items);
      setError('API quota limit exceeded. Please try again in one day.');
    } catch (err) {
      setError('API quota limit exceeded. Please try again in one day.');
    }
  };

  useEffect(() => {
    handleGetVideos();
    if (!isConsoleLogged) {
      console.log(videos);
      setIsConsoleLogged(true);
    }
  }, [isConsoleLogged]);

  return (
    <div className={`w-full max-4nm:px-0 max-3nm:px-[30px] bg-transparent py-5 h-full 1nm:pr-[10px] max-1nm:pr-[40px] ${openToggle ? 'pl-[100px]' : 'pl-[260px] max-1nm:pl-[100px]'}`}>
      <div className='bg-Black w-full h-full grid max-2nm:grid-cols-2 2nm:grid-cols-3 gap-2 max-4nm:grid-cols-1'>
        {error ? (
          <div className='w-full bg-transparent h-16 flex items-center justify-center text-red-500'>
            {error}
          </div>
        ) : (
          videos.map((video) => (
            <VideoCard key={video.id} video={video} formatViewCount={formatViewCount} formatRelativeTime={formatRelativeTime} />
          ))
        )}
      </div>
    </div>
  );
};

const VideoCard = ({ video, formatViewCount, formatRelativeTime }) => {
  const [channelThumbnail, setChannelThumbnail] = useState(null);

  useEffect(() => {
    const fetchChannelThumbnail = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
          params: {
            key: 'AIzaSyCoabcUZZqQRMEs_z_30t7_WbMKcCyPY8w',
            id: video.snippet.channelId,
            part: 'snippet',
          },
        });
        const thumbnailUrl = response.data.items[0].snippet.thumbnails.default.url;
        setChannelThumbnail(thumbnailUrl);
      } catch (err) {
        console.error('Error fetching channel details:', err);
      }
    };

    fetchChannelThumbnail();
  }, [video]);

  return (
    <div className='w-full bg-transparent max-h-[400px] h-[400px] overflow-hidden flex flex-col gap-2 '>
      <div className='flex items-center justify-center w-full max-h-[240px] bg-black h-[240px] rounded-[15px] overflow-hidden '>
        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
      </div>
      <div className='flex justify-center w-full h-[160px] text-white bg-transparent gap-3 '>
        <div className='w-[50px] h-full'>
          <div className='w-[36px] h-[36px] rounded-full overflow-hidden'>
            {channelThumbnail && <img src={channelThumbnail} alt={video.snippet.channelTitle} className='w-full h-full' />}
          </div>
        </div>
        <div className='w-full'>
          <h1 className=' font-bold'>{video.snippet.title}</h1>
          <a className='flex items-center gap-2'>
            <p className='capitalize text-gray-400'>{video.snippet.channelTitle}</p>
            <div className='bg-gray-400 rounded-full p-[2px] flex items-center justify-center'>
              <BsCheck2 className='text-Black text-[10px]' />
            </div>
          </a>
          <div className='flex gap-[25px] items-center'>
            <p className='text-gray-400'>{formatViewCount(video.statistics.viewCount)}</p>
            <ul className='list-disc text-gray-400'>
              <li>{formatRelativeTime(new Date(video.snippet.publishedAt))}</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OneCard;
