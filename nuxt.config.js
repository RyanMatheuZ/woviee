export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Woviee',

		htmlAttrs: {
			lang: 'pt-br'
		},

		meta: [
			{ 
				charset: 'utf-8' 
			},
			{ 
				name: 'viewport', 
				content: 'width=device-width, initial-scale=1' 
			},
			{
				name: 'robots',
				content: 'index, follow'
			},
			{ 
				name: 'format-detection', 
				content: 'telephone=no' 
			},
			{
				name: 'author',
				content: 'Ryan Matheus de Oliveira'
			},
			{
				name: 'generator',
				content: 'Visual Studio Code'
			},
			{
				name: 'theme-color',
				content: '#131313'
			}
		],

		link: [
			// Favicon
			{ 
				rel: 'icon', 
				type: 'image/x-icon', 
				href: '/faicon.ico' 
			},

			// Font
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com'
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap'
			}
		]		
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/buefy
		'nuxt-buefy',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}