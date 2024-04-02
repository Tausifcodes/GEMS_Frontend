// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://ypapi.formz.in/api/public/videos');
        console.log('Response:', response.data); // Check API response
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
  
    fetchVideos();
  }, []);
  

  return (
    
    <div className="video-list">
  {videos.map(video => (
    <div key={video.id} className="video-item">
      <img src={video.thumbnailUrl} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  ))}
</div>

  );

    }
export default Home;
