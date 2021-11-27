<template>
	<div>
		<h1 class="is-size-2-desktop is-size-3-mobile has-text-weight-semibold has-text-centered">
			Olá novamente!
		</h1>

		<p class="is-size-5 has-text-centered mb-4">
			Entre em sua conta
		</p>

		<FormLogin />
	</div>
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
					content: 'https://woviee.vercel.app'
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