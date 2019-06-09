<template>
  <v-app>
    <v-bottom-nav fixed :active.sync="activeBtn" 
    :value="showNav" color="white">
        <v-btn v-if="isAuth" @click="selectedNav('recent')" ripple flat color="teal">
            <span>Recents</span>
            <v-icon>fa fa-history</v-icon>
        </v-btn>
        <v-btn v-if="isAdmin" @click="selectedNav('transaksi')" ripple flat>
            <span>Transaksi</span>
            <v-icon>fa fa-money</v-icon>
        </v-btn>
        <v-btn @click="selectedNav('dashboard')" ripple flat color="teal">
            <span>Dashboard</span>
            <v-icon>fa fa-shopping-cart</v-icon>
        </v-btn>
        <v-btn @click="selectedNav('profile')" flat ripple color="teal">
            <span>Profile</span>
            <v-icon>fa fa-user</v-icon>
        </v-btn>
        <v-btn v-if="isAdmin" @click="selectedNav('produk')" flat ripple>
            <span>Produk</span>
            <v-icon>fa fa-archive</v-icon>
        </v-btn>
        <v-btn v-if="isAdmin" @click="selectedNav('setting')" flat ripple color="teal">
            <span>Setting</span>
            <v-icon>fa fa-wrench</v-icon>
        </v-btn>
    </v-bottom-nav>
  </v-app>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            activeBtn: 1,
            showNav: true,
            selectNav: 'dashboard',
            isAdmin: false,
            isAuth: false,
        }
    },
    computed:{

    },
    methods:{
        ...mapMutations("app",['setNav','dashboard']),
        selectedNav(val){
            this.$emit('changeRoute',val)
        }
    }
}
</script>
