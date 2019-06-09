<template>
  <v-toolbar :flat="warna" :absolute="isAbsolute" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{desa.nama}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>fa fa-search</v-icon>
        </v-btn>
    </v-toolbar>
</template>
<script>
export default {
    data(){
        return{
            desa:{
                nama: 'Test Desa'
            },
            isAbsolute: true,
            warna: true,
        }
    }
}
</script>
