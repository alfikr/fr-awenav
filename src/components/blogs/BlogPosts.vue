<template>
  <v-card class="tp">
    <v-layout row>
      <skeleton-box v-if="loading" width="100px" height="80px"/>
      <slot v-else name="figure"/>
      <v-layout column>
        <v-card-title>
          <h3 class="headline">
            <skeleton-box v-if="loading" :min-width="50" :max-width="70"/>
            <slot v-else name="headline"/>
          </h3>
        </v-card-title>
        <v-card-text class="konten">
          <skeleton-box v-if="loading">
            <skeleton-box/>
            <skeleton-box/>
            <skeleton-box/>
          </skeleton-box>
          <slot v-else/>
          <p/>
          <v-layout row class="metadata">
            <skeleton-box v-if="loading" width="70px"/>
            <slot v-else name="author"/>
            <v-spacer></v-spacer>
            <skeleton-box v-if="loading" width="70px"/>
            <slot v-else name="meta"/>
          </v-layout>
        </v-card-text>
      </v-layout>
    </v-layout>
  </v-card>
</template>
<script>
import SkeletonBox from "../skeleton/WebSkeleton";
export default {
  components: {
    SkeletonBox
  },
  props: {
    loading: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style scoped>
.metadata {
  margin-right: 10px;
  margin-left: 10px;
}
.konten{
  margin-top: 0%;
}
.headline {
  padding: 2px;
  margin-bottom: 0%;
  margin-top: 0%;
}
.tp{
  margin-bottom: 20px;
}
</style>
