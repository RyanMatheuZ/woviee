<template>
	<main>
		<h1 class="is-size-2-desktop is-size-3-tablet has-text-weight-semibold has-text-centered">
			Cadastre-se!
		</h1>

		<p class="is-size-5 has-text-centered mb-4">
			Crie sua nova conta
		</p>

		<FormRegister />
	</main>
</template>

<script>
export default {
	layout: 'form',

	head() {
		return {
			title: 'Woviee - Faça seu cadastro!',

			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Faça seu cadastro, para estar conectado com as pessoas que fazem parte da sua vida!'
				},
				{
					name: 'url',
					content: 'https://woviee.vercel.app/register'
				},

				// Open Graph
				{
					property: 'og:title',
					content: 'Woviee - Faça seu cadastro!'
				},
				{
					property: 'og:description',
					content: 'Faça seu cadastro, para estar conectado com as pessoas que fazem parte da sua vida!'
				},
				{
					property: 'og:url',
					content: 'https://woviee.vercel.app/register'
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