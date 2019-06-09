<template>
  <v-app>
    <SectionParalax/>
    <SectionAnggaran/>
  </v-app>
</template>
<script>
import SectionAnggaran from './web/SectionAnggaran'
import SectionParalax from './web/SectionParalax'
export default {
    components:{
        SectionParalax,SectionAnggaran
    }
}
</script>
