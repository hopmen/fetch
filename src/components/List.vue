<template>
	<b-container>
		<b-row>
			<b-col v-for="poster of posters" cols="3">
				<Card :title="poster.Title" :url-img="poster.Poster" :year="poster.Year" ></Card>
			</b-col>
		
		</b-row>
	</b-container>
</template>

<script>
  import Card from "./Card";

  export default {
    name: "List",
    props: [`posters`],
    components: {
      Card
    },
    data: () => ({
      column: '0'
    })
  }
</script>
