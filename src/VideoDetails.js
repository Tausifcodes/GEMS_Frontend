// VideoDetails.js
import React from 'react';

const VideoDetails = ({ match }) => {
  const { id } = match.params;

  // Fetch video details based on id

  return (
    <div className="container">
      <h2 className="section-heading">Video Details</h2>
      <p>This is the details page for video with ID: {id}</p>
    </div>
  );
};

export default VideoDetails;
