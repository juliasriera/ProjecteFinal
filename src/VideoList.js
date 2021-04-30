import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return (

      <div>
        {renderedVideos}
      </div>
    ) 
};
export default VideoList;