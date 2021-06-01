import React from "react";
import './VideoEmbed.css'

const VideoEmbed = ({ video }) => {

  console.log(video);
    return (
        // if video isnt from Youtube, dont show
        video.site === "Youtube" ?  <div></div> :     
        <div className="video-responsive">
        <iframe
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

    );
}

export default VideoEmbed;