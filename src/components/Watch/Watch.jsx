import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {BsCheckLg, BsFilterLeft} from 'react-icons/bs'
import {PiShareFatLight} from 'react-icons/pi'
import {LiaDownloadSolid} from 'react-icons/lia'
import {SlOptionsVertical} from 'react-icons/sl'
import {GrFormPreviousLink} from 'react-icons/gr'
import Comment from './Comment'
import Desciption from './Desciption'
import Suggestion from './Suggestion'
import {useEffect, useState} from 'react';
import axios from 'axios'
import {ApiKey} from '../../Utils/Api'

import RecommentVideo from './RecommentVideo'
import Playlist from './Playlist'

const Watch = () => {
    const [mouseLike, setMouseLike] = useState(false)
    const [playlistId, setPlaylistId] = useState('')
    const [TitlePlaylist, setTitlePlaylist] = useState('')
    console.log(playlistId)

    const searchParams = new URLSearchParams(window.location.search);
    const videoId = searchParams.get('v');

    useEffect(() => {

        const url = window.location.href;
        const listParamIndex = url.indexOf('&list=');

        if (listParamIndex !== -1) {
            // Extract the string after '&list='
            const extractedPlaylistId = url.substring(listParamIndex + 6);
            console.log('Playlist ID:', extractedPlaylistId);
            setPlaylistId(extractedPlaylistId);
        } else {
            console.log('No playlist ID found in the URL.');
        }
    }, []);

    const onMouseLike = () => {
        setMouseLike(!mouseLike)
    }
    const [mouseDislike, setMouseDislike] = useState(false)

    const onMouseDislike = () => {
        setMouseDislike(!mouseDislike)
    }
    const [mouseShare, setMouseShare] = useState(false)

    const onMouseShare = () => {
        setMouseShare(!mouseShare)
    }
    const [mouseDownload, setMouseDownload] = useState(false)

    const onMouseDownload = () => {
        setMouseDownload(!mouseDownload)
    }

    const [length, setLength] = useState(null);

    const [playlistVideo, setPlaylist] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [videosPlaylist, setVideosPlaylist] = useState([]);

    useEffect(() => {
        const apiKey = `${ApiKey}`;
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet,statistics`;
        console.log(videoId);

        // Kirim permintaan API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setVideoData(data.items[0]);
            })
            .catch((error) => {
                console.error('Error fetching video data:', error);
            });

        const apiUrl1 = `https://www.googleapis.com/youtube/v3/playlists?key=${apiKey}&id=${playlistId}&part=snippet,contentDetails`;

        fetch(apiUrl1)
        .then((response) => response.json())
        .then((data) => {
          if (data.items.length > 0) {
            // Access the playlist details
            const playlistDetails = data.items[0].snippet;
            const playlistTitle = playlistDetails.title;
            const playlistDescription = playlistDetails.description;
            const playlistChannelTitle = playlistDetails.channelTitle;
      
            // You can access other properties here...
            
            console.log('Playlist Title:', playlistTitle);
            console.log('Playlist Description:', playlistDescription);
            console.log('Playlist Channel Title:', playlistChannelTitle);
      
            // Set the state with the playlist details
            setPlaylist(data.items[0]);
            setTitlePlaylist(playlistTitle);
          } else {
            console.log('Playlist not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching playlist data:', error);
        });
        const maxResults = 10; // Ganti dengan jumlah video yang Anda inginkan
        const apiUrl2 = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=${maxResults}`;
      fetch(apiUrl2)
        .then((response) => response.json())
        .then((data) => {
          if (data.items.length > 0) {
            const videos = data.items.map((item) => ({
              videoId: item.snippet.resourceId.videoId,
              videoTitle: item.snippet.title,
            }));
            console.log('Playlist Videos:', videos);
            setVideosPlaylist(videos)
          } else {
            console.log('No videos found in the playlist.');
          }
        })
        .catch((error) => {
          console.error('Error fetching playlist videos:', error);
  });

    }, [playlistId, videoId]);

    const [channelThumbnail, setChannelThumbnail] = useState(null);

    useEffect(() => {
        const fetchChannelThumbnail = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/channels',
                    {
                        params: {
                            key: `${ApiKey}`,
                            id: videoData.snippet.channelId,
                            part: 'snippet'
                        }
                    }
                );
                const thumbnailUrl = response
                    .data
                    .items[0]
                    .snippet
                    .thumbnails
                    .default
                    .url;
                setChannelThumbnail(thumbnailUrl);
            } catch (err) {
                console.error('Error fetching channel details:', err);
            }
        };

        fetchChannelThumbnail();
    },);

    if (!videoData) {
        return <div>Loading...</div>;
    }

    const formatViewCount = (count) => {
        if (count >= 1000000) {
            return `${Math.floor(count / 1000000)} jt `;
        } else if (count >= 1000) {
            return `${Math.floor(count / 1000)} rb`;
        } else {
            return `${count} x ditonton`;
        }
    };

    // Inside your Watch component
    const videoLike = videoData.statistics.likeCount;
    const videoView = videoData.statistics.viewCount;
    // const videoComment = videoData.statistics.commentCount;
    const PublishAt = videoData.snippet.publishedAt;
    const description = videoData.snippet.description;
    const tags = videoData.snippet.tags;
    const formattedLikeCount = formatViewCount(videoLike);
    const formattedViewCount = formatViewCount(videoView);

    // Then in your JSX, use formattedLikeCount and formattedViewCount

    const videoTitle = videoData.snippet.title;
    const videoChannelName = videoData.snippet.channelTitle;

    const formatRelativeTime = (date) => {
        const now = new Date();
        const differenceInSeconds = Math.floor((now - date) / 1000);

        if (differenceInSeconds < 60) {
            return `${differenceInSeconds} seconds yang lalu`;
        } else if (differenceInSeconds < 3600) {
            const minutes = Math.floor(differenceInSeconds / 60);
            return `${minutes} minute${minutes > 1
                ? ''
                : ''} yang lalu`;
        } else if (differenceInSeconds < 86400) {
            const hours = Math.floor(differenceInSeconds / 3600);
            return `${hours} ${hours > 1
                ? 'jam'
                : ''} yang lalu`;
        } else if (differenceInSeconds < 604800) {
            const days = Math.floor(differenceInSeconds / 86400);
            return `${days} hari${days > 1
                ? 's'
                : ''} yang lalu`;
        } else if (differenceInSeconds < 2419200) {
            const weeks = Math.floor(differenceInSeconds / 604800);
            return `${weeks} week${weeks > 1
                ? 's'
                : ''} yang lalu`;
        } else {
            const months = Math.floor(differenceInSeconds / 2419200);
            return `${months} month${months > 1
                ? 's'
                : ''} yang lalu`;
        }
    };

    return (
        <div className='bg-transparent px-[20px]'>
            <div className='bg-transparent w-full h-full flex gap-3 overflow-hidden'>
                <div
                    className='bg-transparent min-w-[700px] max-w-[1090px] w-full flex flex-col'>
                    <div className='w-full  '>
                        <div className='w-full rounded-2xl overflow-hidden max-h-[570px] h-[570px]'>
                            <iframe
                                className='w-full h-full'
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen="allowFullScreen"
                                title="YouTube Video"></iframe>
                        </div>
                    </div>
                    <h1 className='mt-[20px] text-[20px] capitalize'>
                        {videoTitle}
                    </h1>
                    <div className='w-full h-[55px] pt-[18px] flex bg-transparent items-end'>
                        <div
                            className='w-full h-full flex gap-[10px] bg-transparent items-end justify-start'>
                            <div
                                className='bg-transparent w-[40px] h-[40px] rounded-full overflow-hidden text-center'>
                                <img src={channelThumbnail} alt=""/>
                            </div>
                            <div className='flex flex-col mr-[20px] bg-tranparent'>
                                <div className='flex gap-[4px] items-center'>
                                    <h1 className='capitalize'>{videoChannelName}</h1>
                                    <div
                                        className='bg-[#AAAAAA] w-[14px] h-[14px] rounded-full flex items-center justify-center text-[10px] text-black'>
                                        <BsCheckLg/>
                                    </div>
                                </div>
                                <h1 className='text-[#AAAAAA] text-[12px]'>
                                    175 rb subscriber
                                </h1>
                            </div>
                            <div className='flex  gap-[10px] bg-transparent h-full'>
                                <button
                                    className='border px-[15px] h-full rounded-full hover:bg-[#3F3F3F] capitalize text-sm border-[#3F3F3F]'>gabung</button>
                                <button
                                    className='border px-[15px] h-full rounded-full capitalize text-sm bg-white text-black hover:opacity-90 border-[#3F3F3F]'>subscribe</button>
                            </div>
                        </div>
                        <div
                            className='w-full h-full flex gap-[15px] bg-transparent items-end justify-end'>
                            <div
                                className='w-auto h-full flex rounded-full overflow-visible items-center justify-end bg-[#3F3F3F]'>
                                <button
                                    onMouseEnter={onMouseLike}
                                    onMouseLeave={onMouseLike}
                                    className='relative hover:bg-gray-600 py-[9px] w-auto h-full flex items-center justify-center bg-[#3F3F3F] px-[10px] rounded-l-full gap-2'>
                                    <span className='text-[20px]'>
                                        <AiOutlineLike/>
                                    </span>
                                    <p className='text-[14px]'>{formattedLikeCount}</p>
                                    {
                                        mouseLike && (
                                            <div
                                                className='absolute text-[12px] bg-gray-600 p-2 top-[50px] rounded-sm whitespace-nowrap'>
                                                Saya suka ini
                                            </div>
                                        )
                                    }
                                </button>
                                <div className='bg-gray-600 w-[3px] h-full my-5'/>
                                <button
                                    onMouseEnter={onMouseDislike}
                                    onMouseLeave={onMouseDislike}
                                    className='relative hover:bg-gray-600 py-[9px] w-auto h-full flex items-center justify-center bg-[#3F3F3F] px-[10px] rounded-r-full'>
                                    <span className='text-[20px]'>
                                        <AiOutlineDislike/>
                                    </span>
                                    {
                                        mouseDislike && (
                                            <div
                                                className='absolute text-[12px] w-auto bg-gray-600 p-2 top-[50px] rounded-sm whitespace-nowrap'>
                                                Saya tidak suka ini
                                            </div>
                                        )
                                    }
                                </button>
                            </div>
                            <button
                                onMouseEnter={onMouseShare}
                                onMouseLeave={onMouseShare}
                                className='hover:bg-gray-600 py-[9px] relative capitalize w-auto h-full flex items-center justify-center bg-[#3F3F3F] px-[10px] rounded-full gap-2'>
                                <span className='text-[20px]'>

                                    <PiShareFatLight/>
                                </span>
                                <p className='text-[14px]'>bagikan</p>

                                {
                                    mouseShare && (
                                        <div
                                            className='absolute text-[12px] w-auto bg-gray-600 p-2 top-[50px] rounded-sm whitespace-nowrap'>
                                            Bagikan
                                        </div>
                                    )
                                }
                            </button>
                            <button
                                onMouseEnter={onMouseDownload}
                                onMouseLeave={onMouseDownload}
                                className='hover:bg-gray-600 py-[9px] relative capitalize w-auto h-full flex items-center justify-center bg-[#3F3F3F] px-[10px] rounded-full gap-2'>
                                <span className='text-[20px]'>
                                    <LiaDownloadSolid/>
                                </span>
                                <p className='text-[14px]'>download</p>
                                {
                                    mouseDownload && (
                                        <div
                                            className='absolute text-[12px] w-auto bg-gray-600 p-2 top-[50px] rounded-sm whitespace-nowrap'>
                                            Download
                                        </div>
                                    )
                                }
                            </button>
                            <button
                                className='hover:bg-gray-600 py-[9px] w-auto h-full flex items-center justify-center bg-[#3F3F3F] px-[10px] rounded-full'>
                                <SlOptionsVertical/>
                            </button>
                        </div>
                    </div>
                    <div className='w-full mt-[12px] bg-transparent '>
                        <Desciption
                            formattedViewCount={formattedViewCount}
                            formatRelativeTime={formatRelativeTime}
                            PublishAt={PublishAt}
                            description={description}
                            tags={tags}/>
                    </div>
                    <div className='w-full mt-[12px] bg-transparent'>
                        <div className='w-full bg-transparent flex gap-[30px] mb-[20px]'>
                            <p className='text-[20px]'>{length}
                                Komentar</p>
                            <button className='capitalize flex gap-2 items-center '>
                                <span className='text-[24px]'>
                                    <BsFilterLeft/>
                                </span>
                                <p className='text-[14px]'>urutan</p>
                            </button>
                        </div>
                        <Comment setLength={setLength}/>
                    </div>
                </div>
                <div className='max-w-[402px] w-[402px] bg-transparent h-full relative'>
                    <div className='w-full  '>
                        <button
                            className='w-[50px] shadow-[100px] max-h-[40px] bg-transparent h-full absolute -left-[1px] top-0  '>
                            <GrFormPreviousLink/>
                        </button>
                        <Playlist playlistId={playlistId} TitlePlaylist={TitlePlaylist} videosPlaylist={videosPlaylist}/>
                        <Suggestion videoChannelName={videoChannelName}/>
                        <button
                            className='w-[50px] shadow-[100px] max-h-[40px] bg-transparent h-full absolute -right-[1px] top-0'></button>
                    </div>
                    <RecommentVideo/>
                </div>
            </div>
        </div>
    )
}

export default Watch
