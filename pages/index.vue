<template>
	<main>
		<InitialMain />

		<InitialShape />

		<InitialButtons />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: 'Woviee - Bem Vindo!',

			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'O Woviee ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida!'
				},
				{
					name: 'url',
					content: 'https://woviee.vercel.app'
				},

				// Open Graph
				{
					property: 'og:title',
					content: 'Woviee - Bem Vindo!'
				},
				{
					property: 'og:site_name',
					content: 'Woviee - Bem Vindo!'
				},
				{
					property: 'og:description',
					content: 'O Woviee ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida!'
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