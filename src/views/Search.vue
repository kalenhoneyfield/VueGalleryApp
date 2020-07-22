<template>
  <div class="about">
    <h1>Results for: {{ $route.params.query }}</h1>
    <div v-if="$store.state.loading">
      <Loading />
    </div>
    <div v-else><PhotoGallery :images="$store.state.images" /></div>
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
    $store(test) {
      console.log(test);
    },
  },
};
</script>
