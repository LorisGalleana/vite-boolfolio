<script>
export default {
    name: 'Paginator',
    props:{
        data: Object
    },
    methods:{
        callApi(link){
            this.$emit('callApi', link)
        }
    }
}
</script>


<template>
   <div>
        <div class="paginator">
            <button v-for="(link, index) in data.links" :key="index" v-html="link.label" :disabled="link.active || !link.url" @click="callApi(link.url)"></button>   
        </div> 
   </div>
</template>

<style lang="scss" scoped>
    .paginator{
        display: flex;
        justify-content: center;
        button{
            margin: 0 3px;
        }
    }
</style>