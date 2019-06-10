<template>
    <v-parallax light :src="vbanner">
        <!-- animated panel -->
    </v-parallax>
</template>
<script>
export default {
    data(){
        return{
            vbanner:require('../../assets/background/umbul.jpg')
        }
    }
}
</script>
