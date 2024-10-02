<script>
import { store } from '../store/store';
import axios from 'axios';

  export default {
    name: 'ProjectType',
    data(){
      return{
        projects: [],
        typeName: ''
      }
    },
    methods:{
      getApi(slug){

        axios.get(store.apiUrl + 'projects-by-type/' + slug)
          .then(res => {
            if(res.data.success){
              this.projects = res.data.type.projects;
              this.typeName = res.data.type.name
            }
            else{
              this.$router.push({name: '404'})
            }
          })

      }
    },
    mounted(){
      const slug = this.$route.params.slug;
      this.getApi(slug);
    }
  }
</script>


<template>
  <h1>Elenco progetti per la tipologia: {{ typeName }} </h1>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <router-link :to="{name: 'projectDetail', params: {slug: project.slug}}">{{ project.title }}</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  a{
    color: black;
  }
  li{
    margin-top: 5px;
  }
</style>