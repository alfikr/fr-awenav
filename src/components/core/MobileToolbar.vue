<template>
    <v-toolbar flat>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-autocomplete v-if="cari"
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-3"
        flat hide-no-data
        hide-details
        label="Cari data"
        solo-inverted></v-autocomplete>
        <v-toolbar-items>
            <v-btn @click="mulaicari" icon>
                <v-icon>fa fa-search</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            cari:false,
            loading: false,
            items:[],
            search: null,
            select: null,
            states:[]
        }
    },
    watch:{
        search(val){
            console.log(val)
        }
    },
    methods:{
        mulaicari(){
            this.cari = !this.cari
        },
        cariData(v){
            this.loading=true 
            setTimeout(()=>{
                console.log(v)
                this.loading=false
            },500)
        }
    }
}
</script>

