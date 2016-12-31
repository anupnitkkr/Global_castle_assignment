import axios from 'axios';
var CancelToken = axios.CancelToken;
var prevCallCancelFn;
function searchImages(data) {
	if(typeof data != 'object') {
		throw 'data passed to searchImages service should be an object, keys should correspond to flickr api, see https://www.flickr.com/services/api/flickr.photos.search.html?ytcheck=1 for more details';
	}
	var config = {};
	config.method="GET";
	config.baseURL = 'https://api.flickr.com';
	config.url="/services/rest/";
	config.params = data || {};
	config.params.api_key = '3acfce67fa899db325684e4f7e58b9ab';
	config.params.method='flickr.photos.search';
	config.params.format='json';
	config.params.nojsoncallback=1;
	config.params.extras = 'url_s';
	typeof prevCallCancelFn === 'function' && prevCallCancelFn();
	config.cancelToken = new CancelToken(function(c) {
		prevCallCancelFn = c;
	})
	return axios(config).catch(() => {
		//console.warn('Promise failed', arguments);
	});
}

export default searchImages