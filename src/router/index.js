import Vue from "vue";
import Router from 'vue-router'
import path from './path'


let router = new Router({
    mode:'history',
    path
})

Vue.router(router);