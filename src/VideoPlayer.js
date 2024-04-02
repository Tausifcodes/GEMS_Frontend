// VideoPlayer.js
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="video-player">
      <ReactPlayer url={url} controls />
    </div>
  );
};
