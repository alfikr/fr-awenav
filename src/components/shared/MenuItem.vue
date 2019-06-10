<template>
    <v-card>
        <v-layout row>
            <skeleton-box v-if="loading" width="80px" height="40px" />
            <slot v-else></slot> 
        </v-layout>
    </v-card>
</template>
<script>
import SkeletonBox from '../skeleton/WebSkeleton'
export default {
    components:{
        SkeletonBox,
    },
    props:{
        loading:{
            default: false,
            type: Boolean
        }
    }
}
</script>
