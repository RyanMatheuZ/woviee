<template>
	<form class="is-flex is-align-items-center is-flex-direction-column">
		<b-field 
			class="field-block my-3"
			:type="{ 'is-danger': $v.email.$error }"	
		>
            <b-input
				v-model="$v.email.$model"
				placeholder="Seu e-mail:"
				title="Seu e-mail:"
                type="text"
                icon="email"
				class="input-block"
			>
            </b-input>
        </b-field>

		<span v-if="$v.email.$error" class="has-text-danger">
			Informe um E-mail válido!
		</span>

        <b-field 
			class="field-block my-3"
			:type="{ 'is-danger': $v.password.$error }"
		>
            <b-input 
				v-model="$v.password.$model"
				placeholder="Sua senha:"
				title="Sua senha:"
				type="password"
				icon="lock"
				class="input-block"
			>
            </b-input>
        </b-field>

		<span v-if="$v.password.$error" class="has-text-danger">
			Senha incorreta!
		</span>

		<span v-if="!$v.password.minLength" class="has-text-danger">
			O mínimo de caracteres é {{ $v.password.$params.minLength.min }}!
		</span>		

		<small class="has-text-centered my-4">
			Não possui uma conta ainda? <br>
			<NuxtLink
				to="/register"
				class="has-text-weight-medium"
			>
				Crie uma agora
			</NuxtLink>
		</small>

		<button 
			@click.prevent.stop="checkLogin"
			title="Entrar"
			class="button-login button are-medium has-text-weight-medium is-rounded my-2"
		>
			Entrar
		</button>
	</form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},

	mixins: [ validationMixin ],

	validations: {
		email: { required, email },
		password: { required, minLength: minLength(8) }
	},

	methods: {
		checkLogin() {
			this.$v.$touch()

			if (this.$v.$invalid) return

			this.email = ''
			this.password = ''			

			this.$router.push('/feed')

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

	form > small a {
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