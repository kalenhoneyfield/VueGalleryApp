import axios from 'axios';

export default {
  searchFlickr: (context, query) => {
    const APIKEY = context.state.apiKey;
    const pageNum = 1;
    const perPage = 24;
    let payload = {};
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${query}&per_page=${perPage}&page=${pageNum}&sort=interestingness-desc&content_type=1&format=json&nojsoncallback=1`
      )
      .then(response => {
        payload = {
          images: response.data.photos.photo,
          searchQuery: query,
          loading: false,
        };
        console.log(payload);
        context.commit('updateImages', payload);
      });
  },
  resetLoading: context => {
    context.commit('resetLoadingState', true);
  },
};
