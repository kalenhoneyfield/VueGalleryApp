// import axios from 'axios';

export default {
  searchFlickr: (context, query) => {
    context.commit('updateImages', query);
  },
};
