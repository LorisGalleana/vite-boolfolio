<script>

  import axios from 'axios';
  import { store } from '../store/store';
  


  export default {
    name: 'ProjectDetail',
    data(){
      return {
        project:{}
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
  <h1>Dettaglio progetto</h1>
</template>

<style lang="scss">

</style>