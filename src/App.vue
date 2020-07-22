<template>
  <div id="app">
    <NavBar :wordList="randomWordList" />
    <router-view />
  </div>
</template>

<script>
import _ from 'lodash';
import NavBar from './components/NavBar.vue';
import wordsList from './assets/wordlist/wordList';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      words: null,
    };
  },
  computed: {
    randomWordList() {
      return _.sampleSize(wordsList, 3);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
