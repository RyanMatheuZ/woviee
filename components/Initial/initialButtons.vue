<template>
	<section class="is-flex is-flex-direction-column is-align-items-center p-3">
		<NuxtLink 
			to="/register"
			class="button-register button is-medium is-rounded my-2"
		>
			Cadastrar-se
		</NuxtLink>

		<NuxtLink 
			to="/login"
			class="button-login button is-medium is-rounded my-2"
		>
			Entrar
		</NuxtLink>
	</section>
</template>

<style scoped>
	section {
		background-color: #F5C618;
	}

	section .button {
		border: none;
		width: 220px;
	}

	section .button-register {
		color: #131313;
	}

	section .button-login {
		background-color: #131313;
		color: #FFF;
	}
</style>