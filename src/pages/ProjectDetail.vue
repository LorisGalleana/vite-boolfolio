<script>

  import axios from 'axios';
  import { store } from '../store/store';
  import { getType, getTechnology, formatData } from '../data/utils' ;
  


  export default {
    name: 'ProjectDetail',
    data(){
      return {
        project:{
          title: '',
          text: '',
          path_image: '',
          image_original_name: '',
          created_at: '',
          type: {},
          technologies: [],
        }
      }
    },
    computed:{
      infoProject(){
        const typology = getType(this.project)
        const techs = getTechnology(this.project)
        const date = formatData(this.project.created_at)
        return `
        By Loris 
        | Tipologia: ${typology}
        | Tecnologie: ${techs}
        | ${date}
        `
      }
    },
    methods:{
      getApi(slug){
        axios.get(store.apiUrl + 'project-by-slug/' + slug )
          .then(res => {
            if(res.data.success){
              this.project = res.data.project;
            }
            else{
              console.log('error 404');
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
  <h1>Dettaglio progetto: {{ project.title }}</h1>
  <p>{{ infoProject }}</p>
  <p>{{ project.text }}</p>
  <img :src="project.path_image" :alt="project.title">
</template>

<style lang="scss">

</style>