<template>
		<b-row>
   
			<b-col cols="10">
				<b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
				<div class="mt-2">Value: {{ text }}</div>
			</b-col>
   
			<b-col>
				<b-button block variant="outline-primary">Поиск</b-button>
			</b-col>
   
		</b-row>
</template>

<script>
  export default {
    name: 'Search',
    data: () => ({
      text: `Ведите название фильма`
    })
  }
</script>
