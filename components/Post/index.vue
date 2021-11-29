<template>
	<section class="background is-flex is-align-items-center is-flex-direction-column">
		<div class="menu px-5 py-4">
			<div class="container is-flex is-align-items-center is-justify-content-space-between">
				<NuxtLink to="/">
					<img 
						src="@/static/icon/exit-icon.svg" 
						alt="Sair"
						title="Sair"
						draggable="false"
						width="40"
						height="40"
					>
				</NuxtLink>

				<span 
					class="has-text-weight-semibold"
					title="Data"
				>
					Data: {{ currentDay }} / {{ currentMonth }} / {{ currentYear }}
				</span>
			</div>
		</div>

		<!-- POSTS -->
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
								alt="Verificado"
								title="Verificado"
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

			<!-- COMMENTS -->
			<div>
				<p class="mt-3 mb-4">
					Comentários:
				</p>

				<!-- TEXTAREA -->
				<b-field class="m-0">
            		<b-input 
						v-model="comments[index].comment"
						placeholder="Insira aqui seu comentário:"
						maxlength="200" 
						type="textarea"
					></b-input>
        		</b-field>

				<!-- BUTTON CLEAR -->
				<b-button
					@click="clearComment(index)"
					type="is-danger"
					rounded
				>
					Limpar
				</b-button>

				<!-- BUTTON SEND -->
				<b-button
					@click="sendComment(index)"
					type="is-success"
					rounded
					class="ml-2"
				>
					Enviar
				</b-button>
			</div>

			<hr class="my-5">

			<!-- SUBMITTED COMMENTS -->
			<div
				v-for="(comment, index) of submittedComments[index].comment"
				:key="index"
				class="is-flex mt-4"
			>
				<!-- ACCOUNT IMAGE -->
				<figure>
					<img 
						src="@/static/icon/account-icon.svg" 
						alt="Você"
						title="Você"
						draggable="false"
						width="50"
						height="50"
					>
				</figure>

				<!-- COMMENT -->
				<div
					class="comment p-2 ml-3"
				>
					{{ comment }}
				</div>
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
			currentDay: new Date().getDate(),
			currentMonth: new Date().getMonth() + 1,
			currentYear: new Date().getFullYear(),

			isImageModalActive: false,
			imageModal: 'fatec-post.jpg',

			comments: [
				{
					comment: ''
				},
				{
					comment: ''
				},
				{
					comment: ''
				},
				{
					comment: ''
				},
				{
					comment: ''
				},
			],

			submittedComments: [
				{
					comment: []
				},
				{
					comment: []
				},
				{
					comment: []
				},
				{
					comment: []
				},
				{
					comment: []
				}
			],

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
		},

		clearComment(index) {
			this.comments[index].comment = ''
		},

		sendComment(index) {
			if (!this.comments[index].comment) return

			this.submittedComments[index].comment.push(this.comments[index].comment)
			this.comments[index].comment = ''
		}
	}
}
</script>

<style scoped>
	.background {
		background-color: #222;
	}

	.background > .menu {
		background-color: #F5C618;
		width: 100%;
	}

	.background > .post {
		background-color: #FFF;
		border-radius: 5px;
		border: 0.5px solid #131313;
		max-width: 650px;
		width: 100%;
	}

	.background > .post .profile-picture {
		border-radius: 50%;
		outline: 2px solid #FDBD18;
	}

	.background > .post .profile-picture img {
		border-radius: 50%;
	}

	.background > .post .comment {
		border: 1px solid #B5B5B5;
		border-radius: 5px;
		width: 100%;
	}

	.background > .post hr {
		background-color: #F0F0F0;
	}

	.background .warning {
		bottom: 2%;
		position: fixed;
		right: 2%;
	}
</style>