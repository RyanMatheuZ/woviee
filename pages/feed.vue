<template>
	<main>
		<Post />
	</main>
</template>

<script>
export default {
	layout: 'header',

	head() {
		return {
			title: 'Woviee - Olá!',

			meta: [
				{
					hid: 'description',
					name: 'description',
					content: ''
				},
				{
					name: 'url',
					content: 'https://woviee.vercel.app'
				},

				// Open Graph
				{
					property: 'og:title',
					content: ''
				},
				{
					property: 'og:description',
					content: ''
				},
				{
					property: 'og:url',
					content: 'https://woviee.vercel.app'
				}
			]
		}
	}
}
</script>