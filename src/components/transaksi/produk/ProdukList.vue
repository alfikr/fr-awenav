<template>
    <v-app>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mr-4">
                            <img :src="user.photo" alt="avatar"/>
                        </v-avatar>
                        <v-btn @click="openAvatarPicker">Change Avatar</v-btn>
                    </v-flex>
                    
                </v-card-text>
            </v-card>
        </v-layout>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            user:{
                photo:''
            }
        }
    },
    methods:{
        openAvatarPicker(){
            
        }
    },
}
</script>
