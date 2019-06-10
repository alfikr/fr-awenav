<template>
  <v-app class="header">
    <div class="overlay">
      <v-container style="height: 100%;">
        <v-layout row wrap align-center justify-center>
          <v-flex align-self-center xs12>
            <v-parallax light :src="banner">
              <!-- animated panel -->
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      banner: require("../../assets/background/wal.jpg")
    };
  }
};
</script>
