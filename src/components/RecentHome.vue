<template>
    <v-list two-line>
        <template v-for ="(item,index) in items">
            <Recent :trx="item" :key="index"  />
        </template>
    </v-list>
</template>

<script>
import Recent from './transaksi/history/Recent'
export default {
    components:{
        Recent,
    },
    data(){
        return{
            items:[{
                produk:'PLN POSTPAID',
                keterangan:'Pembayaran listrik dengan ID Pelanggan xxxxx',
                nominal: 232500,
                faktur: 'XDA809182'
            },{
               produk:'PLN POSTPAID',
                keterangan:'Pembayaran listrik dengan ID Pelanggan xxxxx',
                nominal: 232500,
                faktur: 'XDA809182' 
            }]
        }
    },methods:{
        itemClick(faktur,produk){
            console.log(faktur + ':'+ produk)
        }
    }
}
</script>
