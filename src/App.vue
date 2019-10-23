<template>
	<div id="app">
		
    <b-container class="bv-example-row pt-3">
      
        <Search></Search>
        
    </b-container>
	</div>
</template>

<script>
  import Search from "./components/Search.vue";

  export default {
    name: 'app',
    components: {
      Search
    }
  }
</script>

<style>

</style>
