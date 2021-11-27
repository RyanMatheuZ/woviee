<template>
	<div class="is-flex is-flex-direction-column is-align-items-center p-3">
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
	</div>
</template>

<style scoped>
	div {
		background-color: var(--yellow-color);
	}

	div .button {
		border: none;
		width: 220px;
	}

	div .button-register {
		color: var(--black-color);
	}

	div .button-login {
		background-color: var(--black-color);
		color: var(--white-color);
	}
</style>