import React from "react";
import Youtube from "../API/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    // console.log("From the app: ", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmition={this.onSearchSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
