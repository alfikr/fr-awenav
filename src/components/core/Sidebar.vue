<template>
  <v-navigation-drawer absolute light id="core-sidebar" app v-model="drawer" 
  :mini-variant.sync="mini" 
  hide-overlay stateless>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile-avatar>
          <img :src="user.avatar || require('../../assets/myAvatar.png')"/>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{user.nama}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>fa-angle-left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" 
      :key="item.title" @click="menuClick(item.to)">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import * as Profiles from '@/services/profiles'
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "fa-th", to:'/' },
        { title: "About", icon: "fa-columns", to:'/about' },
        { title: "Test", icon: "fa-columns", to:'/test' }
      ],
      mini: true,
      right: null,
      user:{}
    };
  },
  methods:{
      menuClick(route){
          console.log(route)
          this.$router.push(route);
      }
  },  
  beforeMount(){
      this.user = Profiles.getProfile();
  }
};
</script>
