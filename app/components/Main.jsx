import React from 'react';
import SearchBar from './SearchBar.jsx';
import GoogleMap from './GoogleMap.jsx';
import searchImages from '../services/searchImages';
import ImagesGrid from './ImagesGrid.jsx';
import {debounce} from 'lodash';
class Main extends React.Component {
  constructor() {
    super();
    this.initState();
    this.onTextChanged = this.onTextChanged.bind(this);
    this.onCenterChanged = this.onCenterChanged.bind(this);
  }
  initState() {
    const state = {
      imagesData: [],
      isLoading: false
    };
    if(!this.state) {
      this.state = state;
    }
    else {
      this.setState(state);
    }
  }
  onCenterChanged() {
    let center = window.global_map_instance.getCenter();
    let lat = center.lat();
    let lon = center.lng();
    this.getData({lat, lon});
  }
	getData(params) {
    this.setState({
      isLoading: true
    });
    searchImages(params).then((response) => {
      if(!response || !response.data) return;
      var imagesData = response.data.photos.photo.map((p, index) => {  return {key: index, src: p.url_s}  });
      this.setState({
        imagesData,
        isLoading: false
      })
    });
  }
  onTextChanged({currentTarget}) {
    if(!currentTarget.value)
      return this.initState();
    this.getData({
      text: currentTarget.value
    })
  }
  render() {
    const {isLoading} = this.state;
    return ( 
   	<div>
   		<div className="main-wrap">
     		<SearchBar onChange={this.onTextChanged}/>
        {isLoading ? <p>Loading...</p> : <ImagesGrid data={this.state.imagesData} />}
     	</div>
     	<div className="google-map-wrap">
     		<GoogleMap onCenterChanged={this.onCenterChanged} />
     	</div>
     </div> 
    )
  }

}

export default Main
