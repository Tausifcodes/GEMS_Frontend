// VideoSection.js
import React, { useState } from 'react';
import VideoCard from './VideoCard';

const VideoSection = ({ videos, loadMore }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter(video => {
    const isCategoryMatch = !selectedCategory || video.category === selectedCategory;
    const isTitleMatch = !searchTerm || video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isTitleMatch;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="video-section">
      <div className="container">
        <div className="category-buttons">
          <button onClick={() => handleCategoryClick(null)}>All</button>
          <button onClick={() => handleCategoryClick('Tech')}>Tech</button>
          <button onClick={() => handleCategoryClick('Gaming')}>Gaming</button>
          <button onClick={() => handleCategoryClick('Music')}>Music</button>
          {/* Add more category buttons as needed */}
        </div>
        <input
          type="text"
          placeholder="Search videos by title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="video-list">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <button onClick={loadMore}>Load More</button>
      </div>
    </section>
  );
};

export default VideoSection;
