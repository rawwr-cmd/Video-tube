import React from "react";

class SearchBar extends React.Component {
  //we don't call the function for eventlistner(e) but pass the reference to call at any instance of time in future
  //we can call the handleInputChange directly too

  //   handleInputChange(e) {
  //     console.log(e.target.value);
  //   }

  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmition(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
