export default {
  updateImages: (state, payloadQuery) => {
    state.loading = payloadQuery.loading;
    state.images = payloadQuery.images;
    state.searchQuery = payloadQuery.searchQuery;
  },
  resetLoadingState: (state, loading) => {
    state.loading = loading;
    state.images = [];
  },
};
