<template>
  <v-app>
    <v-container fluid>
      <Banner />
      <UserBanner />
      <v-layout row wrap class="konten">
        <v-flex xs4 v-for="(serv,i) in service"
          :key="i">
          <v-card :to="serv.path" class="text-xs-center" ripple flat>
            <v-responsive>
                <v-icon>{{serv.icon}}</v-icon>
            </v-responsive>
            <v-card-text class="text-xs-center" >
                {{serv.title}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Banner from './core/Banner'
import UserBanner from './users/UserBanner'
export default {
  components:{UserBanner,Banner},
  data() {
    return {
      service: [
        {
          path: "/transaksi/listrik",
          icon: "fa fa-bolt fa-3x",
          title: "PLN"
        },{
          path:'/transaksi/pulsa',
          icon: "fa fa-mobile fa-3x",
          title:'Pulsa'
        },{
          path:'/transaksi/telkom',
          icon:"fa fa-tty fa-3x",
          title:'Telkom'
        },{
          path:'/transaksi/paketdata',
          icon: "fa fa-wifi fa-3x",
          title: 'Paket Data'
        },{
          path:'/transaksi/multifinance',
          icon: 'fa fa-car fa-3x',
          title:'Multifinance'
        },{
          path:'/transaksi/voucher',
          icon: 'fa fa-ticket fa-3x',
          title: 'Voucher'
        },{
          path:'/transaksi/tiket',
          icon: 'fa fa-film fa-3x',
          title: 'Tiket'
        },{
          path:'/transaksi/transfer',
          icon: 'fa fa-university fa-3x',
          title: 'Transfer'
        },{
          path: '/transaksi/pdam',
          icon: 'fa fa-tint fa-3x',
          title: 'PDAM'
        }
      ]
    };
  }
};
</script>
<style>
 .konten{
     margin-top: 0px;
     background-color: transparent;
 }
</style>
