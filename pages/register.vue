<template>
	<div>
		<h1 class="is-size-2-desktop is-size-3-tablet has-text-weight-semibold has-text-centered">
			Cadastre-se!
		</h1>

		<p class="is-size-5 has-text-centered mb-4">
			Crie sua nova conta
		</p>

		<FormRegister />
	</div>
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
					content: 'https://woviee.vercel.app'
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
					content: 'https://woviee.vercel.app'
				}
			]
		}
	}
}
</script>

<style scoped>
	div h1 {
		color: var(--yellow-color);
	}

	div p {
		color: var(--black-color);
	}
</style>