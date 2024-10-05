<script>
    import axios from 'axios';
    import { store } from '../store/store';
    import Loader from '../components/partials/Loader.vue';
    import Paginator from '../components/partials/Paginator.vue';
    import { getType, getTechnology, formatData } from '../data/utils' ;

    export default{
        name: 'Works',
        components:{
            Loader,
            Paginator
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
                technologies:[],
                getType,
                getTechnology,
                formatData
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
            },
            
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
                <li v-for="project in projects" :key="project.id">
                   <p class="title">
                    <router-link :to="{name: 'projectDetail', params:{slug: project.slug}}">{{ project.title }}</router-link>
                   </p>
                   <div class="caption">
                    <small>
                        Tipologia: {{ getType(project) }}
                        | Tecnologie: {{ getTechnology(project) }}
                        | {{ formatData(project.created_at) }}
                        
                    </small>
                </div> 
                </li>
            </ul>

            <Paginator :data="paginatorData" @callApi="getApi" />

            
        </div>
        <div class="box-container">
            <div class="box">
                <router-link class="badge" v-for="type in types" :key="type.id" :to="{name: 'projectType', params:{ slug: type.slug}}">
                    {{ type.name }}
                </router-link>
            </div>
            <div class="box">
                <router-link class="badge" v-for="technology in technologies" :key="technology.id" :to="{name: 'projectTechnology', params:{ slug: technology.slug}}">
                    {{ technology.name }}
                </router-link>
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

.content{
    display: flex;
    .title, .caption{
        line-height: 5px;
    }
    a{
        color: black;
        
        &:hover{
            color: red;
        }
    }
    .caption{
        font-size: 0.8rem;
    }
    .box{
        border-radius: 5px;
        border: 1px solid black;
        padding: 15px;
        margin: 15px;
        max-width: 200px;
        button{
            margin: 3px;
        }
        .badge{
            display: inline-block;
            margin: 5px 7px;
            padding: 3px 5px;
            border-radius: 5px;
            border: 1px solid black;
            background-color: lightgray;
            color: black;
            text-decoration: none;
            font-size: .8rem;
            &:hover{
                background-color: yellow;
            }
        }
    }
}
</style>