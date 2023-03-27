import React, {Component} from "react";
import { Reader } from "./Reader";
import publications from "./Reader/publications.json";
// import { Player } from "./Player";
// import { VideoList } from "./VideoList";
// import videos from "../videos.json";

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({selectedVideo: link});
  };

  render() {
    return (
      <div
        style={{
         padding: 24
        }}
      >
        <Reader items={publications}/>
        {/* <h1>SelectedVideo: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo}/>
        <Player url={this.state.selectedVideo}/> */}
      </div>
    );
  }  
};
