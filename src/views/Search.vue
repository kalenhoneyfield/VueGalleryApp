<template>
  <div class="about">
    <h1>Results for: {{ $route.params.query }}</h1>
    <Loading v-if="$store.state.Loading" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Loading from '../components/Loading.vue';

export default {
  components: {
    Loading,
  },
  methods: {
    ...mapActions(['searchFlickr', 'resetLoading']),
  },
  mounted() {
    const { query } = this.$route.params;
    this.searchFlickr(query);
  },
};
</script>
