<template>
	<form class="is-flex is-align-items-center is-flex-direction-column">
		<b-field 
			class="field-block my-3"
			:class="{ 'is-danger' : $v.name.$error }"
		>
            <b-input 
				v-model="$v.name.$model"
				placeholder="Seu nome:"
                type="text"
                icon="account"
				class="input-block"
			>
            </b-input>
        </b-field>
		
		<small v-if="$v.name.$error" class="has-text-danger">
			Informe seu nome!
		</small>

		<small class="has-text-danger">
			O mínimo de caracteres é {{ $v.name.$params.minLength.min }}
		</small>

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

		<small v-if="$v.password.$error" class="has-text-danger">
			Informe uma senha!
		</small>

		<small v-if="!$v.password.minLength" class="has-text-danger">
			O mínimo de caracteres é {{ $v.password.$params.minLength.min }}!
		</small>

		<small class="has-text-centered my-4">
			<span class="has-text-weight-medium">Ao cadastrar, você concorda com nossos</span> termos de <br> uso
			<span class="has-text-weight-medium">e</span> política de privacidade
		</small>

		<button 
			@click.prevent.stop="checkRegister"
			class="button-login button is-medium has-text-weight-medium is-rounded my-2"
		>
			Cadastrar-se
		</button>
	</form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			name: '',
			email: '',
			password: ''
		}
	},

	validations: {
		name: { required, minLength: minLength(4) },
		email: { required,email },
		password: { required, minLength: minLength(8) }
	},

	methods: {
		checkRegister() {
			this.$v.$touch()

			if (this.$v.$invalid) return

			// this.$router.push()

			this.$v.$reset()
		}
	}
}
</script>

<style scoped>
	form .field-block {
		width: 100%;
	}

	form .input-block {
		max-width: 400px;
	}

	form > small {
		cursor: default;
		user-select: none;
	}

	form > small > span {
		color: var(--yellow-dark-color);
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