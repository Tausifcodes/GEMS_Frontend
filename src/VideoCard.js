// VideoCard.js
import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnailUrl} alt={video.title} /> {/* Display the thumbnail */}
      <div className="video-info">
        <h2>{video.title}</h2>
        <p>{video.category}</p>
      </div>
    </div>
  );
};

export default VideoCard;
