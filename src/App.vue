<template>
  <v-app >
    <transition name="fade" mode="out-in" overflow-y-hidden>
      <router-view />
    </transition>
    <v-dialog v-model="this.$store.state.dialog" persistent>
      <v-card>
        <v-card-text>
          {{this.$store.state.dialogText}}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="tutup()" flat>Tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
  },
  methods:{
    tutup(){
      this.$store.commit("hideDialog")
    }
  }
};
</script>
<style>
html{
  overflow-y: auto;
}
</style>
