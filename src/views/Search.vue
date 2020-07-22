<template>
  <div class="about">
    <h1>Results for: {{ $route.params.query }}</h1>
    <Loading v-if="$store.state.Loading" />
    <PhotoGallery v-else :images="$store.state.images" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Loading from '../components/Loading.vue';
import PhotoGallery from '../components/PhotoGallery.vue';

export default {
  components: {
    Loading,
    PhotoGallery,
  },
  data() {
    return {
      query: null,
    };
  },
  methods: {
    ...mapActions(['searchFlickr', 'resetLoading']),
  },
  mounted() {
    this.query = this.$route.params.query;
    this.searchFlickr(this.query);
  },
  watch: {
    $route(to) {
      this.query = to.params.query;
      this.searchFlickr(this.query);
    },
  },
};
</script>
