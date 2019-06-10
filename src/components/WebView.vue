<template>
  <v-app>
    <SectionParalax class="fullwidth"/>
    <SectionPotensi/>
    <SectionAnggaran/>
  </v-app>
</template>
<script>
import SectionAnggaran from "./web/SectionAnggaran";
import SectionParalax from "./web/SectionParalax";
import SectionPotensi from "./web/SectionPotensi";
export default {
  components: {
    SectionParalax,
    SectionAnggaran,
    SectionPotensi
  }
};
</script>
<style>
.fullwidth {
  min-width: 100%;
  width: 100%;
}
</style>
