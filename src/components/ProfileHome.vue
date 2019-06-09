<template>
  <v-app>
    <template v-if="logged">
      <v-layout class="text-xs-center" column>
      <v-card class="rounded-card">
        <v-card-text>
          <v-avatar size="96" >
            <img @click="$refs.file.click()" class="rounded-card"
              :src="user.avatar || require('../assets/myAvatar.png')"
              alt="avatar"
            >
            <input @change="openAvatarPicker" type="file" ref="file" style="display: none">
          </v-avatar>
        </v-card-text>
      </v-card>
    </v-layout>
    </template>
    <UserDetail />
  </v-app>
</template>
<script>
import UserDetail from './users/UsersDetail'
import * as Profiles from '@/services/profiles'
export default {
  data() {
    return {
      user: {
      },
      logged:false
    };
  },
  components:{
    UserDetail
  },
  methods: {
    openAvatarPicker() {
        
    }
  },
  beforeMount(){
    this.user=Profiles.getProfile();
  }
};
</script>
<style scoped>
</style>

