<template>
  <v-app>
    <template v-if="!isMobile">      
      <core-toolbar/>
      <core-sidebar v-if="isAuth"/>
      <core-view />
    </template>
    <template v-else>
      <core-view />
    </template>
    <v-dialog v-model="this.$store.state.dialog" persistent>
      <v-card>
        <v-card-text>{{this.$store.state.dialogText}}</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="tutup()" flat>Tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import CoreToolbar from "@/components/core/Toolbars";
import CoreSidebar from "@/components/core/Sidebar";
import CoreView from '@/components/core/View'
export default {
  name: "App",
  data() {
    return {
      //
      isMobile: false,
      isAuth: false
    };
  },
  components: {
    CoreToolbar,
    CoreSidebar,
    CoreView,
  },
  methods: {
    tutup() {
      this.$store.commit("hideDialog");
    },
    cekMobile() {
      if (
        screen.width < 500 ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/WebOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)
      ) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  },
  beforeMount() {
    this.cekMobile();
    window.addEventListener("resize", this.cekMobile());
  },
  beforeDestroy() {
    window.addEventListener("resize", this.cekMobile());
  }
};
</script>
<style>
html {
  overflow-y: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
