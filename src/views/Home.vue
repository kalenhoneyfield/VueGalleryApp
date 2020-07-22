<template>
  <b-jumbotron>
    <template v-slot:header>Vue Flickr</template>

    <template v-slot:lead>
      A simple Vue.js app to search Flickr photos.
    </template>

    <hr class="my-4" />

    <b-img
      src="https://live.staticflickr.com/65535/25178161934_0843e529d9_c.jpg"
      thumbnail
      alt="Palouse Detailing"
    ></b-img>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Home',
};
</script>
