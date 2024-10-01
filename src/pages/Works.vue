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
                },
                types:[],
                technologies:[]
            }
        },
        methods:{
            getApi(apiUrl, type = 'projects'){
                this.isLoading = true;

                axios.get(apiUrl)
                .then(response => {
                   
                    if(type == 'projects'){
                        this.isLoading = false
                        this.projects = response.data.data;
                        this.paginatorData.current_page = response.data.current_page;
                        this.paginatorData.links = response.data.links;
                    }
                    else{
                        this[type] = response.data;
                    }
                    
                    /* switch (type) {
                        case 'projects':
                            this.isLoading = false
                            this.projects = response.data.data;
                            this.paginatorData.current_page = response.data.current_page;
                            this.paginatorData.links = response.data.links;
                            break;
                        case 'types':
                            this.types = response.data;
                            break;
                        case 'technologies':
                            this.technologies = response.data;
                            break;
                    } */

                })
                .catch(error => {
                    console.log(error.message);
                })
            }
        },
        mounted(){
            this.getApi(store.apiUrl + 'projects', 'projects')
            this.getApi(store.apiUrl + 'types', 'types')
            this.getApi(store.apiUrl + 'technologies', 'technologies')
        }
    }
</script>


<template>
  <div>
    <h1>I miei progetti</h1>
    <div v-if="isLoading" class="loading"> 
       <Loader /> 
    </div>
    <div class="content" v-else>
        <div>
            <ul>
            <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
            </ul>
            <div class="paginator">
                <button v-for="(link, index) in paginatorData.links" :key="index" v-html="link.label" :disabled="link.active || !link.url" @click="getApi(link.url)"></button>   
            </div> 
        </div>
        <div class="box-container">
            <div class="box">
                <button v-for="type in types" :key="type.id">{{ type.name }}</button>
            </div>
            <div class="box">
                <button v-for="technology in technologies" :key="technology.id">{{ technology.name }}</button>
            </div>
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
.content{
    display: flex;
    .box{
        border-radius: 5px;
        border: 1px solid black;
        padding: 15px;
        margin: 15px;
        max-width: 200px;
        button{
            margin: 3px;
        }
    }
}
</style>