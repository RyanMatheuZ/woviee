<template>
	<main>
		<h1 class="is-size-2-desktop is-size-3-mobile has-text-weight-semibold has-text-centered">
			Olá novamente!
		</h1>

		<p class="is-size-5 has-text-centered mb-4">
			Entre em sua conta
		</p>

		<FormLogin />
	</main>
</template>

<script>
export default {
	layout: 'form',

	head() {
		return {
			title: 'Woviee - Faça seu login!',

			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Faça seu login e adentre nesse mundo de possibilidades!'
				},
				{
					name: 'url',
					content: 'https://woviee.vercel.app/login'
				},

				// Open Graph
				{
					property: 'og:title',
					content: 'Woviee - Faça seu login!'
				},
				{
					property: 'og:description',
					content: 'Faça seu login e adentre nesse mundo de possibilidades!'
				},
				{
					property: 'og:url',
					content: 'https://woviee.vercel.app/login'
				}
			]
		}
	}
}
</script>

<style scoped>
	main h1 {
		color: #F5C618;
	}

	main p {
		color: #131313;
	}
</style>