import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from './VideoListItem.jsx';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  return (<React.Fragment>
    {videoItems}
  </React.Fragment>);
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
};

export default VideoList;
