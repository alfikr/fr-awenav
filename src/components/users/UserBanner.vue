<template>
  <v-app class="userInfo">
    <v-layout row>
      <v-flex xs8>
        <v-card flat>
          <v-card-title>{{user.name}}</v-card-title>
          <v-card-text>Saldo : {{user.saldo | currency}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-btn color="success" flat @click="topup"> Topup
              <v-icon>fa fa-cc-visa</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "Test",
        saldo: 50000
      }
    };
  },
  methods:{
    topup(){
      console.log('topup clicked')
    }
  }
};
</script>
<style scoped>
.userInfo{
    max-height: 100px;
}
</style>

