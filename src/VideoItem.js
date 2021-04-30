import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)}>
            <img className="media" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='container'>
                    <h6 className=''>{video.snippet.title}</h6>
            </div>
        </div>
    )
};
export default VideoItem;