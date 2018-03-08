import _ from 'lodash';
import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

import '../../assets/css/youtube.css';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class YouTube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('olympics');
    }
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

        return (
            <div className="t-pad-20 b-pad-200">
                <div className="txt-align-center b-pad-20"><h4>YouTube API Search</h4></div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default YouTube;