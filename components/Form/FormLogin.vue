<template>
	<form class="is-flex is-align-items-center is-flex-direction-column">
		<b-field 
			class="field-block my-3"
			:class="{ 'is-danger' : $v.email.$error }"	
		>
            <b-input
				v-model="$v.email.$model"
				placeholder="Seu e-mail:"
                type="text"
                icon="email"
				class="input-block"
			>
            </b-input>
        </b-field>

		<small v-if="$v.email.$error" class="has-text-danger">
			Informe um E-mail válido!
		</small>

        <b-field 
			class="field-block my-3"
			:class="{ 'is-danger' : $v.password.$error }"
		>
            <b-input 
				v-model="$v.password.$model"
				placeholder="Sua senha:"
				type="password"
				icon="lock"
                password-reveal
				class="input-block"
			>
            </b-input>
        </b-field>

		<small class="has-text-danger">
			Senha incorreta!
		</small>

		<small v-if="!$v.password.minLength" class="has-text-danger">
			O mínimo de caracteres é {{ $v.password.$params.minLength.min }}!
		</small>		

		<button 
			@click.prevent.stop="checkLogin"
			class="button-login button is-medium has-text-weight-medium is-rounded my-2"
		>
			Entrar
		</button>
	</form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},

	validations: {
		email: { required, email },
		password: { required, minLength: minLength(8) }
	},

	methods: {
		checkLogin() {
			this.$v.touch()

			if (this.$v.$invalid) return

			// this.$router.push()

			this.$v.reset()
		}
	}
}
</script>

<style scoped>
	form .field-block {
		width: 100%;
	}

	form .input-block {
		border-radius: 5px;
		border: 1px solid var(--yellow-color);
		max-width: 400px;
	}

	form button {
		background-color: var(--black-color);
		border: none;
		color: var(--white-color);
		transition: 0.2s ease-in-out;
		width: 220px;
	}

	form button:hover {
		background-color: var(--white-color);
		color: var(--black-color);
		outline: 2px solid var(--black-color);
		transition: 0.2s ease-in-out;
	}
</style>