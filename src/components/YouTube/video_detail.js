import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    else {
        window.scrollTo(0, 0); 
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-lg-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={video.snippet.title} className="embed-responsive-item" src={url} allowFullScreen />
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;