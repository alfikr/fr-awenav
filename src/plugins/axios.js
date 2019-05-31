import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http=axios
const accessToken = localStorage.getItem('mytoken')

if(accessToken){
    Vue.prototype.$http.defaults.headers.common['Authorization']=accessToken
}
