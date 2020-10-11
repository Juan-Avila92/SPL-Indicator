<template>

  <svg class="icon stroke-current text-gray-700 " :style=width+height viewBox="0 0 20 20">
    <path :d=path />  
  </svg>

</template>

<script>
export default {
    name:'CxIcon',
    props:{
        path:{ 
            type: String,
            default: "",
        },
        width:{
            type: String,
            default: "width:50px;",
        },
        height:{
            type: String,
            default: "height:55px",
        }
    }
}
</script>

<style>

</style>