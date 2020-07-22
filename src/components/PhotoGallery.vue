<template>
  <b-container fluid>
    <div>
      <div>
        <b-img
          v-for="(image, index) in images"
          :src="`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`"
          thumbnail
          :alt="image.title"
          v-bind="mainProps"
          :key="index"
          @click="handleModal(image)"
        ></b-img>
      </div>
    </div>

    <b-modal hide-footer size="lg" v-model="modalShow">
      <template v-slot:modal-title> {{ foto.title }} </template>
      <div class="d-block text-center">
        <b-img
          :src="`https://live.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}_c.jpg`"
          thumbnail
          rounded
          fluid
          :alt="foto.title"
        ></b-img>
      </div>
      <b-button class="mt-3" block @click="modalShow = !modalShow">Close Me</b-button>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      modalShow: false,
      mainProps: { blankColor: '#777', width: 175, height: 175, class: 'm-1' },
      foto: {},
    };
  },
  methods: {
    handleModal(image) {
      this.foto = image;
      this.modalShow = true;
    },
  },
};
</script>
