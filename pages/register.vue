<template>
	<form>
		<FormRegister />
	</form>
</template>

<script>
export default {
	layouts: 'form',

	head() {
		return {
			title: 'Woviee - Faça seu cadastro!',

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
					content: 'Woviee - Faça seu cadastro!'
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