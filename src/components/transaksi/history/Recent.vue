<template>
    <v-list-tile>
        <v-list-tile-content>
            <v-list-tile-title>{{trx.produk}}</v-list-tile-title>
            <v-list-tile-sub-title>{{trx.keterangan}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{trx.nominal | currency}}</v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        cetak(val){
            //popup muncul
            console.log(val)
        }
    },
    props:{
        trx:{
            type: Object,
            default: () =>({})
        }
    },
    
}
</script>
