<template>
  <header class="flex shadow  bg-gray-600  p-2">
    
        <cx-icon class="m-1 rounded bg-gray-300" v-bind:path="logoHeader"/>
        <div class="flex-col">
            <h5 class="text-gray-300 flex text-2xl">Spl-Measurment</h5>
            <h5 class="text-gray-300 flex text-lg">Subtitel</h5>
        </div>  
        <div class="ml-auto flex my-auto pr-10 text-end">
            <router-link class="flex-1 p-3 text-end" :to="{name: 'Home'}">Home</router-link>
            <router-link class="flex-1 p-3 text-end" to="/about">about</router-link>
            <router-link class="flex-1 p-3 text-end" to="/about">github</router-link>
            <router-link class="flex-1 p-3 text-end" to="/about">wiki</router-link>
        </div>
 
  </header>    
</template>

<script>

import CxIcon from './CxIcon.vue'

export default {
    name: 'CxHeader',
    components:{
        CxIcon,
        
    },
    data(){
        return{
            logoHeader:"M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z",
            width:"width:50px;",
            height:"width:50px;",
        }
    }
}

</script>

<style>

</style>