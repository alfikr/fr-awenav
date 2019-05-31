import Vue from 'vue'
import accounting from 'accounting'
Vue.filter('currency',function(val){
    return accounting.formatMoney(val,'Rp.',0)
})