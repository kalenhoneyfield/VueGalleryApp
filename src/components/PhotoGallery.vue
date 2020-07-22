<template>
  <b-container fluid>
    <div>
      <b-img
        v-for="(image, index) in images"
        :src="`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`"
        fluid
        alt="Responsive image"
        :key="index"
      ></b-img>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    images: Array,
  },
};
</script>
