<script>

</script>


<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'works'}">Progetti</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
ul{
  width: 10%;
  margin: 0 auto;
  display: flex;
  list-style: none;
  justify-content: space-between;
}

</style>