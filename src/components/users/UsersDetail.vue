<template>
  <v-app>
    <template v-if="mode=='editMode'">
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          ref="nik"
          single-line
          v-model="profil.nik"
          label="NIK"
          counter=16
          mask="## #### ###### ####"
          :rules="aturan.nikRules"
          required
        />
        <v-text-field
          ref="nama"
          type="text"
          single-line
          v-model="profil.nama"
          label="Nama"
          :rules="aturan.namaRules"
          required
        />
        <v-text-field
          ref="hp"
          :rules="aturan.hpRules"
          single-line
          v-model="profil.hp"
          label="Nomor HP"
          mask="(####) #### - ####"
          required
        />
        <v-text-field
          ref="email"
          type="email"
          single-line
          v-model="profil.email"
          label="Email"
          :rules="aturan.emailRules"
        />
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" @click="validate">Simpan</v-btn>
            <v-btn @click="resetForm">Reset</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </template>
    <template v-else-if="mode=='login'">
      <v-layout row>
        <v-flex class="text-xs-center dua">
          <v-btn color="primary">Login</v-btn>
          <p/>
          <label>
            or
            <strong @click="registerClick">Register with</strong>
          </label>
          <br>
          <p/>
          <div class="register">
            <v-btn>
              <v-icon>fa fa-facebook</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>fa fa-twitter</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>fa fa-google</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </template>
    <template v-else>
      <v-layout column>
        <v-card class="informasi">
          <v-card-title>{{this.profil.koin | currency}}</v-card-title>
        </v-card>
        <v-card @click="aturProfil" ripple class="informasi">
          <v-card-title>
            Pengaturan Profil
          </v-card-title>
        </v-card>
        <v-card ripple class="informasi">
          <v-card-title>
            History Topup
          </v-card-title>
        </v-card>
        <v-card ripple class="text-xs-center informasi">
          <v-card-title>Keluar</v-card-title>
        </v-card>
      </v-layout>
    </template>
  </v-app>
</template>
<script>
//import * as locationService from "@/services/location";
import * as profile from "@/services/profiles"
export default {
  data() {
    return {
      mode: "login",
      valid: true,
      profil:{},
      emailTest: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      emailAw: /.+@/,
      aturan: {
        nikRules:[
          v => !!v || "NIK tidak boleh kosong",
          v => v.length ==16 || "NIK harus 16 digit"
        ],
        emailRules: [
          v => !!v || "Email dibutuhkan",
          v => this.emailTest.test(v) || "Email tidak valid"
        ],        
        namaRules:[
          v => !!v || "Nama tidak boleh kosong"
        ],
        hpRules:[
          v => !!v || "No HP tidak boleh kosong"
        ]
      },
      password: {
        oldPassword: "",
        newPassword: "",
        retypePassword: ""
      },
      address: {},
      errorMessage: [],
      formHashErrors: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //kirim data
        this.simpanProfil();
      }
    },
    aturProfil(){
      this.mode='editMode'
    },
    simpanProfil(){
      this.mode='logged'
    },
    historyTopup(){

    },
    resetForm() {
      this.errorMessage = [];
      this.formHashErrors = false;
      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    registerClick() {},
    loginClick() {}
  },
  computed: {
    form() {
      return {
        nik: this.profil.nik,
        hp: this.profil.hp,
        nama: this.profil.nama,
        email: this.profil.email
      };
    }
  },
  beforeMount() {
    this.profil=profile.getProfile()
  }
};
</script>
<style scoped>
.form {
  padding: 20px;
}
.dua {
  margin-top: 20px;
}
.informasi{
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
