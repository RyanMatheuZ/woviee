<template>
	<form>
		<FormLogin />
	</form>
</template>

<script>
export default {
	layouts: 'form',

	head() {
		return {
			title: 'Woviee - Faça seu login!',

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
					content: 'Woviee - Faça seu login!'
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