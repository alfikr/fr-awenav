<template>
  <v-carousel @click.native="click" fixed hide-delimiters hide-controls class="banner">
    <v-carousel-item
      class="itemcr"
      v-for="(img,index) in gambar"
      :key="index"
      :src="img.src"
      height="100%"
      @click="click(img.link)"
    />
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      gambar: [
        {
          src:
            "https://png.pngtree.com/element_origin_min_pic/17/09/08/1fec506af4e58677aeb0f091e5dd56f0.jpg",
          link: "/promo/50%januari"
        },
        {
          src:
            "https://cdn6.f-cdn.com/contestentries/559575/687365/577a35db9aef3_thumb900.jpg",
          link: "/promo/sms"
        }
      ]
    };
  },
  methods: {
    click(e) {
      console.log(e);
    }
  }
};
</script>
<style scoped>
.banner {
  max-height: 100px;
}
.itemcr {
  max-height: 80px;
}
</style>
