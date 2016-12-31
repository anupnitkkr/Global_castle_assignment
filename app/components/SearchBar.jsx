import React from 'react';
class SearchBar extends React.Component {
  render() {
    return ( 
      <div>
          <input type = "text" placeholder = "Enter query" onChange={this.props.onChange} />
      </div>
      
    );
  }

}

export default SearchBar
