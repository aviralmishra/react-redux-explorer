import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        className="search-bar-input"/>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

Search.propTypes = {
  onSearchTermChange: PropTypes.func
};

export default Search;
