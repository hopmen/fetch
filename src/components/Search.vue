<template>
	<b-row>
		
		<b-col cols="10">
			<b-form-input placeholder="Enter your name" v-model="text"></b-form-input>
		</b-col>
		
		<b-col>
			<b-button @click="getData" block variant="outline-primary">Поиск</b-button>
		</b-col>
	</b-row>
</template>

<script>
  import request from "../request";

  export default {
    name: 'Search',
    data: () => ({
      text: ``,
      result: ``
    }),
    methods: {
      async getData () {
        this.result = await request.getData(this.text);
        this.$emit('example', this.result);
      }
    }
  }
</script>
