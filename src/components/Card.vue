<template>
	<b-card
					:img-src="urlImg"
					:title="title"
					class="mb-2"
					img-alt="Image"
					img-top
					style="max-width: 20rem;"
					tag="article"
	>
		<b-card-text>
			<time>{{year}}</time>
		</b-card-text>
		
		<b-button href="#" variant="primary">Go somewhere</b-button>
	</b-card>
</template>

<script>
  export default {
    name: "Card",
    props: [`title`, `urlImg`, `year`],
  }
</script>
