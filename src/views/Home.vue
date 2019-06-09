<template>
  <v-app>
    <template v-if="!isMobile">
      <Toolbars/>
      <v-container style="margin-top: 50px;">
        <WebView/>
      </v-container>
    </template>
    <template v-else>
      <v-container>
        <transition name="fade" mode="out-in">
          <Dashboard v-if="nav == 'dashboard'"/>
          <RecentHome v-if="nav == 'recent'"/>
          <TransaksiHome v-if="nav == 'transaksi'"/>
          <ProfileHome v-if="nav == 'profile'"/>
          <ProductHome v-if="nav == 'produk'"/>
          <SettingHome v-if="nav == 'setting'"/>
        </transition>
      </v-container>
      <div>
        <BottomNav absolute @changeRoute="gantiInterface" fixed/>
      </div>
    </template>
  </v-app>
</template>

<script>
import Toolbars from "../components/core/Toolbars";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import RecentHome from "../components/RecentHome";
import TransaksiHome from "../components/TransaksiHome";
import ProductHome from "../components/ProductHome";
import ProfileHome from "../components/ProfileHome";
import SettingHome from "../components/SettingHome";
import { mapState } from "vuex";
import WebView from "../components/WebView";
export default {
  methods: {
    gantiInterface(val) {
      this.nav = val;
    },
    mobileCheck() {
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
  components: {
    BottomNav,
    SettingHome,
    Dashboard,
    ProfileHome,
    RecentHome,
    TransaksiHome,
    ProductHome,
    Toolbars,
    WebView
  },
  data() {
    return {
      image: "https://awenav.com/img/awenav.ef3d3dbb.png",
      nav: "dashboard",
      isMobile: false
    };
  },
  computed: {
    ...mapState("app", ["navigasi"]),
    inputValue: {
      get() {
        return this.$store.state.app.nav;
      }
    }
  },
  beforeMount() {
    this.mobileCheck();
  },
  mounted(){
    window.addEventListener("resize", this.mobileCheck);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.mobileCheck);
  }
};
</script>
