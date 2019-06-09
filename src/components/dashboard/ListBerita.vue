<template>
  <v-app>
    <template v-if="loading">
      <skeleton-box />
      <skeleton-box />
      <skeleton-box />
      <skeleton-box />
    </template>
    <template v-else>
      <v-layout column>
        <template v-for="(news,idx) in newsFeed">
          <v-flex :key="idx">
            <v-card @click="beritaClick(news.route)">
              <v-card-title class="text-sm-left">{{news.title}}</v-card-title>
              <v-card-text class="text-xs-left">
                <v-responsive>
                  <v-img :src="news.img"></v-img>
                </v-responsive>
                {{news.content}}
                <v-layout row>
                  <v-spacer></v-spacer>
                  <span class="semi-bold author">{{news.author}}</span>
                  {{news.tanggal}}
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </template>
  </v-app>
</template>
<script>
import SkeletonBox from "../skeleton/WebSkeleton";
export default {
  components: {
    SkeletonBox
  },
  methods: {
    beritaClick(beritaID) {
      console.log(beritaID);
    }
  },
  data() {
    return {
      newsFeed: [
        {
          title: "Perdes Anggaran Desa 2019",
          route: "berita/perdes/2019",
          id: 3801280,
          content:
            "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya....",
          img: "https://tixpdf.com/themes/mone/assets/img/tixpdf_logo.png",
          author: "Admin",
          tanggal: "20 Juni 2019"
        }
      ]
    };
  }
};
</script>
<style scoped>
.author {
  margin-right: 10px;
}
</style>
