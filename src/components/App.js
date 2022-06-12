import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(x) {
    console.log(x);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
