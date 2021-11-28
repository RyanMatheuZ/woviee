<template>
	<section class="background is-flex is-align-items-center is-flex-direction-column">
		<!-- POST -->
		<article 
			v-for="(post, index) of posts"
			:key="index"
			class="post p-4 my-3"
		>
			<div class="is-flex is-align-items-center p-2">
				<figure class="profile-picture image is-48x48 mr-2">
					<img 
						:src="require(`@/static/img/profile/${post.profilePicture}`)" 
						:alt="post.profileName"
						:title="post.profileName"
						draggable="false"
						width="48"
						height="48"
					>
				</figure>

				<div class="is-flex is-flex-direction-column">
					<div class="is-flex is-align-items-center">
						<span class="has-text-weight-semibold">
							{{ post.profileName }}
						</span>

						<figure class="image is-16x16 ml-1">
							<img 
								src="@/static/icon/check-profile.svg" 
								:alt="post.profileName"
								:title="post.profileName"
								draggable="false"
								width="16"
								height="16"
							>
						</figure>
					</div>

					<span class="is-size-7">
						{{ post.postTime }}
					</span>
				</div>
			</div>

			<p class="pl-2 my-3">
				{{ post.postTitle }}
			</p>

			<figure class="post-image">
				<img 
					@click="getPicture(index)"
					:src="require(`@/static/img/post/${post.postImage}`)" 
					alt="Imagem do post"
					title="Imagem do post"
					draggable="false"
					width="100%"
				>
			</figure>

			<div>
				<p class="mt-3 mb-4">
					Comentários:
				</p>

				<b-field class="m-0">
            		<b-input 
						v-model="comment"
						placeholder="Insira aqui seu comentário:"
						maxlength="200" 
						type="textarea"
						class="m-0"
					></b-input>
        		</b-field>

				<b-button
					type="is-danger"
					rounded
				>
					Limpar
				</b-button>

				<b-button
					type="is-success"
					rounded
					class="ml-2"
				>
					Enviar
				</b-button>
			</div>
		</article>

		<!-- MODAL -->
		<b-modal 
			v-model="isImageModalActive"
		>
            <p class="image is-4by3">
                <img
					:src="require(`@/static/img/post/${imageModal}`)"
					alt="Imagem do post"
					title="Imagem do post"
					draggable="false"
				>
            </p>
        </b-modal>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isImageModalActive: false,
			imageModal: 'fatec-post.jpg',

			comment: '',

			posts: [
				{
					profileName: 'Fatec Taquaritinga',
					profilePicture: 'fatec-profile.png',
					postImage: 'fatec-post.jpg',
					postTitle: 'Você sabia que uma das profissões que mais está em alta é a de desenvolvedor de sistemas para internet? 📱💻 #fatectq #sistemasparainternet',
					postTime: '1 d • Patrocinado'
				},
				{
					profileName: 'Linus Torvalds',
					profilePicture: 'linus-profile.png',
					postImage: 'linus-post.png',
					postTitle: 'Uncle Bill didn´t like it!! 🤣🤣🤣',
					postTime: '2 min • Finlândia'
				},
				{
					profileName: 'UOL',
					profilePicture: 'uol-profile.png',
					postImage: 'uol-post.png',
					postTitle: 'Doença já causou 614.185 óbitos em todo o país dese o início dapandemia (via UOL Notícias). #brasil #COVID19',
					postTime: '43 min • Patrocinado'
				},
				{
					profileName: 'Brendan Eich',
					profilePicture: 'brendan-profile.png',
					postImage: 'brendan-post.png',
					postTitle: 'OMG!! 😮😮',
					postTime: '6 h • Pensilvânia'
				},
				{
					profileName: 'Microsoft',
					profilePicture: 'microsoft-profile.png',
					postImage: 'microsoft-post.png',
					postTitle: 'Está no ar a nova edição do DigiGirlz, programa mundial da Microsoft para capacitação gratuita de mulheres nas áreas de tecnologia, ciência, matemática e engenharia. #MicrosoftMaisBrasil',
					postTime: '2 d • Patrocinado'
				},
			]
		}
	},

	methods: {
		getPicture(index) {
			this.imageModal = this.posts[index].postImage
			this.isImageModalActive = true
		}
	}
}
</script>

<style scoped>
	.background {
		background-color: var(--black-medium-color);
	}

	.background > .post {
		background-color: var(--white-color);
		border-radius: 5px;
		border: 0.5px solid var(--black-color);
		max-width: 600px;
		width: 100%;
	}

	.background > .post .profile-picture {
		border-radius: 50%;
		outline: 2px solid var(--yellow-dark-color);
	}

	.background > .post .profile-picture img {
		border-radius: 50%;
	}
</style>