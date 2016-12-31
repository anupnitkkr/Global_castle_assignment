import React from 'react';

class ImagesGrid extends React.Component {
  render() {
  	return (this.props.data.length == 0) ? <p>No Images to display</p> : (
  		<div> 
        {this.props.data.map((item) => <img src={item.src} key={item.key} /> )}  
      </div>
    )
    return template;
  }

}

export default ImagesGrid
