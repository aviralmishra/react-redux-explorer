import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="search-result-selected-item">
      <div>
        <iframe src={url}/>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object
};

export default VideoDetail;
