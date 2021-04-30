import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return(
        <div> 
            <h3>Introduzca una busqueda para contenido</h3>
        </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="container">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoSrc} allowFullScreen title="Video player" />
    </div>
    <br></br>
    <div className="container">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>  
    </div>
  );
};

export default VideoDetail;