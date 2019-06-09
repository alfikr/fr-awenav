import Axios from 'axios'
import config from '@/config/AppConfig'
//import { resolve } from 'any-promise';

export function getProfile(){
    //const data= Axios.get(config.url.account);
    let data={
        nik: '3322101306850003',
        nama: "Danang Puspito Jati",
        email: "awal.baru77@gmail.com",
        hp: "082133693119",
        koin:50000,
        avatar:'https://www.clipartmax.com/png/middle/175-1757746_savage-gaming-gaming-avatar-png.png',
    }
    return data;
}
export function getHistoryTopup(){
    let data=[]
    return data;
}
export function getUsaha(){
    const data=Axios.get(config.url.usaha)
    return data;
}
