<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Vue Flickr</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="handleSubmit">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="query"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            <b-nav-item-dropdown text="Search by Click" right v-if="wordList">
              <b-dropdown-item v-for="(word, index) in wordList" :key="index" :to="`/search/${word}`">
                {{ word }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    wordList: Array,
  },
  data() {
    return {
      query: null,
    };
  },
  methods: {
    ...mapActions(['searchFlickr', 'resetLoading']),
    handleSubmit() {
      if (this.query !== null && this.query !== '') {
        this.resetLoading();
        this.$router.push(`/search/${this.query}`).catch(() => {});
      }
      this.query = null;
    },
  },
};
</script>
