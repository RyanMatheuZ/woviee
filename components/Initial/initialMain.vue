<template>
	<section class="is-flex is-flex-direction-column p-4">
		<header class="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-space-around mt-6 mb-6">
			<div class="m-5">
				<h1 class="is-size-3-mobile is-size-2-desktop has-text-weight-semibold pl-4">
					O Woviee ajuda você a se conectar <br>
					com as pessoas que fazem <br>
					parte da sua vida!
				</h1>
			</div>

			<div class="m-5">
				<img 
					src="@/static/img/main-image.svg" 
					alt="Entre ou faça seu cadastro!"
					title="Entre ou faça seu cadastro!"
					draggable="false"
					width="350"
					class="image"
				>
			</div>
		</header>

		<div class="is-flex is-align-self-center is-flex-direction-column is-align-items-center">
			<img 
				src="@/static/icon/mouse-icon.svg" 
				alt="Role para baixo"
				title="Role para baixo"
				draggable="false"
				width="45"
				height="45"
			>

			<p>
				Role para baixo
			</p>
		</div>
	</section>
</template>

<style scoped>
	section {
		background-color: var(--black-color);
	}

	section h1 {
		border-left: 8px solid var(--yellow-color);
		color: var(--white-color);
	}

	section p {
		color: var(--yellow-color);
	}
</style>