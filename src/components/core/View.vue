<template>
    <v-content>
        <div id="core-view" >
            <v-fade-transition mode="out-in">
                <router-view class="konten"/>
            </v-fade-transition>
        </div>
    </v-content>
</template>

<script>
export default {
    metaInfo(){
        return{
            title: 'Title page'
        }
    }
}
</script>
<style scoped>
.konten{
    margin-top: 80px;
}
</style>
