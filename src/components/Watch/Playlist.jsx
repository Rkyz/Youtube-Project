import React from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const PlaylistVideo = ({ video }) => {
  return (
    <button className='flex gap-2'>
      <div className='rounded-md overflow-hidden max-w-[100px] w-full max-h-[56px] h-full'>
        <img
          src={`https://i.ytimg.com/vi/${video.videoId}/default.jpg`}
          alt={video.videoTitle}
          className='w-full h-full'
        />
      </div>
      <div>
        <h1 className='text-[14px]'>{video.videoTitle}</h1>
        <p className='text-[#aaaaaa] text-[12px]'>Jian Shuja</p>
      </div>
    </button>
  );
};

const Playlist = ({ TitlePlaylist, videosPlaylist }) => {
  const [closePlaylist, setClosePlaylist] = useState(false);

  const HandleClosePlaylist = () => {
    setClosePlaylist(!closePlaylist);
  };

  // Extract videoId from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get('v');
  const hasPlaylist = urlParams.has('list');

  // Render the playlist only if there is a playlist parameter
  if (!hasPlaylist) {
    return null; // Don't render anything if there is no playlist
  }

  return (
    <div
      className={`rounded-xl border border-gray-700 overflow-hidden mb-5  ${
        closePlaylist ? '' : 'max-h-[570px] h-[570px] pb-[100px]'
      }`}
    >
      <div className='max-h-[100px] h-auto flex justify-between p-3 bg-[#212121] gap-[5px]'>
        <div className='h-full bg-transparent'>
          <h1
            className={`text-[14px] text-white font-semibold ${
              closePlaylist ? '' : 'hidden'
            }`}
          >
            Berikut: Asu kabeh
          </h1>
          <h1
            className={`${
                closePlaylist ? 'text-[12px] overflow-hidden line-clamp-1' : 'text-[19px]'
              }`}
          >
            {TitlePlaylist}
          </h1>
          <p
            className={`text-[12px] text-[#aaaaaa] ${
              closePlaylist ? 'hidden' : ''
            }`}
          >
            Mixes are playlists Youtube makes for you
          </p>
        </div>
        <button onClick={HandleClosePlaylist} className='z-40 text-[25px] bg-transparent'>
          <AiOutlineClose />
        </button>
      </div>

      <div
        className={`bg-transparent w-full h-full p-3 overflow-y-scroll custom-cursor flex flex-col gap-2 ${
          closePlaylist ? 'hidden' : ''
        }`}
      >
        {videosPlaylist.map((video, index) => (
          <PlaylistVideo key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
