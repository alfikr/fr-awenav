<template>
  <v-app>
    <transition name="fade" mode="out-in">
      <Dashboard v-if="nav == 'dashboard'"/>
      <RecentHome v-if="nav == 'recent'" />
      <TransaksiHome v-if="nav == 'transaksi'"/>
      <ProfileHome v-if="nav == 'profile'"/>
      <ProductHome v-if="nav == 'produk'"/>
      <SettingHome v-if="nav == 'setting'" />
    </transition>
    <div>
      <BottomNav @changeRoute="gantiInterface" fixed/>
    </div>
  </v-app>
</template>

<script>
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import RecentHome from '../components/RecentHome';
import TransaksiHome from '../components/TransaksiHome'
import ProductHome from '../components/ProductHome'
import ProfileHome from '../components/ProfileHome'
import SettingHome from '../components/SettingHome'
import { mapState } from "vuex";
export default {
  methods:{
    gantiInterface(val){
      this.nav=val;
    }
  },
  components: {
    BottomNav, SettingHome,
    Dashboard,ProfileHome,  RecentHome,
    TransaksiHome, ProductHome
  },
  data() {
    return {
      image: "https://awenav.com/img/awenav.ef3d3dbb.png",
      nav: "dashboard"
    };
  },
  computed: {
    ...mapState("app", ["navigasi"]),
    inputValue: {
      get() {
        return this.$store.state.app.nav;
      }
    }
  }
};
</script>
