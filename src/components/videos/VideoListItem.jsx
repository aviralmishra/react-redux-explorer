import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="search-result-item" onClick={() => onVideoSelect(video)}>
      <div>
        <img src={imageUrl}/>
      </div>
      <div>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func
};

export default VideoListItem;
