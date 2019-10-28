<template>
	<div id="app">
		
		<b-container class="bv-example-row mt-3 ">
			
			<Search class="mb-3" @example="methodName"></Search>
			<List :posters="posters"></List>
		</b-container>
	</div>
</template>

<script>
  import Search from "./components/Search.vue";
  import List from "./components/List";
  

  export default {
    name: 'app',
	  data: ()=>({
      posters: ''
	  }),
    components: {
      Search, List
    },
    methods: {
      methodName(variable){
        this.posters = variable;
        console.log(this.posters);
      }
    }
  }
</script>

<style>

</style>
