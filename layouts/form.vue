<template>
	<div class="background">
		<section class="p-5 mx-auto">
			<NuxtLink 
				to="/"
				class="back-button image is-48x48 my-3"
			>
				<img 
					src="@/static/icon/back-icon.svg" 
					alt="Voltar"
					title="Voltar"
					draggable="false"
					width="30"
					height="30"
					class="is-rounded"
				>
			</NuxtLink>

			<figure class="image is-64x64 my-3">
				<img 
					src="@/static/logo/woviee-white-black.svg" 
					alt="Woviee"
					title="Woviee"
					draggable="false"
					width="50"
					height="50"
				>
			</figure>
		</section>

		<div class="is-flex is-align-items-center is-justify-content-center p-5">
			<Nuxt />
		</div>
	</div>
</template>

<style scoped>
	.background {
		background-color: var(--black-color);
	}

	.background > section {
		background-color: var(--black-color);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		max-width: 1300px;
	}

	.background > section > .back-button {
		justify-self: start;
	}

	.background > section > .back-button > img {
		background-color: var(--white-color);
	}

	.background > section > figure {
		justify-self: center;
	}

	.background div {
		background-color: var(--white-color);
		border-top-left-radius: 100px;
	}
</style>