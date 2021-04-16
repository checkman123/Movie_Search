import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ video }) => {

    console.log("AHHHHH");
    console.log(video);




    return (
        // if video isnt from Youtube, dont show
        video.site === "Youtube" ?  <div></div> :     
        <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

    );
}

VideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoEmbed;