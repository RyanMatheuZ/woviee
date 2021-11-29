<template>
	<form class="is-flex is-align-items-center is-flex-direction-column">
		<b-field 
			class="field-block my-3"
			:type="{ 'is-danger': $v.name.$error }"
		>
            <b-input 
				v-model="$v.name.$model"
				placeholder="Seu nome:"
				title="Seu nome:"
                type="text"
                icon="account"
				class="input-block"
			>
            </b-input>
        </b-field>
		
		<span v-if="$v.name.$error" class="has-text-danger">
			Informe seu nome!
		</span>

		<span v-if="!$v.name.minLength" class="has-text-danger">
			O mínimo de caracteres é {{ $v.name.$params.minLength.min }}!
		</span>

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
			Informe sua senha!
		</span>

		<span v-if="!$v.password.minLength" class="has-text-danger">
			O mínimo de caracteres é {{ $v.password.$params.minLength.min }}!
		</span>

		<small class="has-text-centered my-4">
			<span class="has-text-weight-medium">Ao cadastrar, você concorda com nossos</span> termos de <br> uso
			<span class="has-text-weight-medium">e</span> política de privacidade
		</small>

		<span class="has-text-success has-text-weight-semibold">
			{{ registerMessage }}
		</span>

		<button 
			@click.prevent.stop="checkRegister"
			title="Cadastrar-se"
			class="button-login button are-medium has-text-weight-medium is-rounded my-2"
		>
			Cadastrar-se
		</button>
	</form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			name: '',
			email: '',
			password: '',

			registerMessage: ''
		}
	},

	mixins: [ validationMixin ],

	validations: {
		name: { required, minLength: minLength(4) },
		email: { required, email },
		password: { required, minLength: minLength(8) }
	},

	methods: {
		checkRegister() {
			this.$v.$touch()

			this.registerMessage = ''

			if (this.$v.$invalid) return

			this.name = ''
			this.email = ''
			this.password = ''

			this.registerMessage = 'Cadastro realizado!'

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

	form > small span {
		color: #FDBD18;
	}

	form button {
		background-color: #131313;
		border: none;
		color: var(--white-color);
		transition: 0.2s ease-in-out;
		width: 220px;
	}

	form button:hover {
		background-color: #FFF;
		color: #131313;
		outline: 2px solid #131313;
		transition: 0.2s ease-in-out;
	}
</style>