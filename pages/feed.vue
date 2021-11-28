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
					content: 'Olá usuário, agora que entrou nesse mundo de possibilidade, apenas APROVEITE!'
				},
				{
					name: 'url',
					content: 'https://woviee.vercel.app/feed'
				},

				// Open Graph
				{
					property: 'og:title',
					content: ''
				},
				{
					property: 'og:description',
					content: 'Olá usuário, agora que entrou nesse mundo de possibilidade, apenas APROVEITE!'
				},
				{
					property: 'og:url',
					content: 'https://woviee.vercel.app/feed'
				}
			]
		}
	}
}
</script>