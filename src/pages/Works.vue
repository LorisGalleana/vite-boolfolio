<script>
    import axios from 'axios';
    import { store } from '../store/store';
    import Loader from '../components/partials/Loader.vue';

    export default{
        name: 'Works',
        components:{
            Loader
        },
        data() {
            return {
                projects:[],
                isLoading: true,
                paginatorData:{
                    current_page:1,
                    links:[]
                }
            }
        },
        methods:{
            getApi(apiUrl){
                this.isLoading = true;

                axios.get(apiUrl)
                .then(response => {
                    this.projects = response.data.data;
                    this.paginatorData.current_page = response.data.current_page;
                    this.paginatorData.links = response.data.links;
                    this.isLoading = false
                })
                .catch(error => {
                    console.log(error.message);
                })
            }
        },
        mounted(){
            this.getApi(store.apiUrl + 'projects')
        }
    }
</script>


<template>
  <div>
    <h1>I miei progetti</h1>
    <div v-if="isLoading" class="loading"> 
       <Loader /> 
    </div>
    <div v-else>
        <ul>
           <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
        </ul>
        <div class="paginator">
            <button v-for="(link, index) in paginatorData.links" :key="index" v-html="link.label" :disabled="link.active || !link.url" @click="getApi(link.url)"></button>   
        </div> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading{
    display: flex;
    justify-content: center;
    padding: 30px 0;
}
.paginator{
    display: flex;
    justify-content: center;
    button{
        margin: 0 3px;
    }
}
</style>