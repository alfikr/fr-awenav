<template>
  <v-app>
    <v-layout class="text-xs-center" column>
      <v-card class="rounded-card">
        <v-card-text>
          <v-avatar size="96" >
            <img class="rounded-card"
              :src="user.photo || require('../assets/myAvatar.png')"
              alt="avatar"
            >
            <v-btn style="z-index: 100"></v-btn>
          </v-avatar>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-layout row>
      <v-form></v-form>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      user: {
        photo: ""
      }
    };
  },
  methods: {
    openAvatarPicker() {}
  }
};
</script>
<style scoped>
.bordered{
    border-style: solid;
    
}
.myavatar{
    z-index: 1;
    margin-top: 40px;
}
</style>

