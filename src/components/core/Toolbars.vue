<template>
  <v-toolbar height="80px" light id="core-toolbar" :flat="warna" :absolute="isAbsolute" dark>
    <v-toolbar-side-icon @click="backHome" v-if="!isMobile">
      <!--v-icon>fa fa-bank fa-3x</v-icon-->
      <v-img :src="logo"></v-img>
    </v-toolbar-side-icon>
    <v-toolbar-side-icon v-else></v-toolbar-side-icon>
    <v-toolbar-title @click="backHome" class="tertiary--text font-weight-light">
      <router-link to="/">{{desa.nama}}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <menu-service>
        <div class="pa-3" slot-scope="{data: menuItem, error, loading}">
          <label v-if="error" class="error">Koneksi sedang terganggu mohon coba kembali.</label>
          <template v-if="loading">
            <menu-item loading/>
          </template>
          <template v-else>
            <v-menu v-for="menu in menuItem" :key="menu.id" open-on-hover top offset-y>
              <template v-slot:activator="{on}">
                <v-btn flat v-on="on">{{menu.title}}</v-btn>
              </template>
              <v-list>
                <v-list-tile v-for="(m,idx) in menu.child" :key="idx">
                  <template v-if="m.child.length==0">
                    <v-list-tile-title>{{m.title}}</v-list-tile-title>
                  </template>
                  <template v-else>
                    <v-list-tile-title>
                      {{m.title}}
                    </v-list-tile-title>
                    <v-list-tile-avatar>
                      
                    </v-list-tile-avatar>
                  </template>
                </v-list-tile>
              </v-list>
            </v-menu>
          </template>
        </div>
      </menu-service>
      <v-btn v-if="!cari" @click="cari=!cari" flat icon>
        <v-icon>fa fa-search</v-icon>
      </v-btn>
      <v-text-field
        clearable
        v-if="cari"
        hide-details
        prepend-icon="fa fa-search"
        append-outer-icon="fa fa-ban"
        @click:append-outer="() =>{cari=!cari}"
        single-line
      ></v-text-field>
      <v-menu v-if="isAuth">
        <template v-slot:activator="{on}">
          <v-btn flat icon v-on="on">
            <v-icon>fa fa-user</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(menu,idx) in accountMenu"
            :key="idx"
            @click="accountClick(menu.tujuan)"
          >
            <v-list-tile-avatar>
              <v-icon>{{menu.icon}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-title>{{menu.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import * as ProfileService from "@/services/profiles";
import MenuService from "@/services/MenuService";
import MenuItem from "../shared/MenuItem";
export default {
  components: {
    MenuService,
    MenuItem
  },
  data() {
    return {
      desa: {
        nama: "Test Desa"
      },
      isAbsolute: true,
      warna: true,
      cari: false,
      isAuth: false,
      isMobile: false,
      logo: require("./../../assets/logo.png"),
      accountMenu: [
        {
          title: "Pengaturan",
          icon: "fa fa-gear",
          tujuan: "/account/settings"
        },
        {
          title: "History Transaksi",
          icon: "fa fa-exchange",
          tujuan: "/account/history"
        },
        { title: "Ganti Password", icon: "fa fa-key", tujuan: "gantipassword" },
        { title: "Logout", icon: "fa fa-lock", tujuan: "/logout" }
      ]
    };
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    accountClick(v) {
      if (v == "gantipassword") {
        console.log("ganti password");
      } else {
        this.$router.push(v);
      }
    },
    cariData(e) {
      console.log(e);
    }
  },
  beforeMount() {
    this.isAuth = ProfileService.isLogged();
  }
};
</script>
<style scoped>
.logotoolbar {
  height: 50px;
  width: 50px;
}
</style>
