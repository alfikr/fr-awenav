<template>
    <v-list-tile>
        <v-list-tile-content>
            <v-card flat color="light">
                <v-card-title>{{trx.produk}}</v-card-title>
                <v-card-text>{{trx.keterangan}}</v-card-text>
                <v-card-text>{{trx.nominal | currency }}</v-card-text>
            </v-card>
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
