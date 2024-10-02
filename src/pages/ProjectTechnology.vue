<script>
import { store } from '../store/store';
import axios from 'axios';

  export default {
    name: 'ProjectTechnology',
    data(){
      return{
        projects: [],
        technologyName: '',
      }
    },
    methods:{
      getApi(slug){

        axios.get(store.apiUrl + 'projects-by-technology/' + slug)
          .then(res => {
            if(res.data.success){
              this.projects = res.data.technology.projects;
              this.technologyName = res.data.technology.name;
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
  <h1>Elenco progetti per tecnologia: {{ technologyName }}</h1>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <router-link :to="{name: 'projectDetail', params: {slug: project.slug}}">{{ project.title }}</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>