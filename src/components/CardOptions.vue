<script>
    import SupplementList from './options/SupplementList.vue'
	

	export default {
		components: {
			SupplementList,
		},
		props: {
			obj :{
                type: Object,
                required: true,
            },
		}
	}

</script>

    <template id="vue_supplement_template">
		<div class="card">
			<img class="card__header" :src="obj.image">
			<div class="info__option">
				<div class="group_title_card">
					<h1 class="card__title">{{obj.name}}</h1>
					<h1 class="card__title">{{obj.price}}€</h1>
				</div>
				<p class="card__info">{{obj.description}}</p>
				<p class="choice">Make your choice :</p>
				
				<div class="card__content" >
					<!-- <SupplementList :supplements='options.supplements'></SupplementList> -->
				</div>
			</div>
    	</div>

    </template>


<style>

@import url("https://fonts.cdnfonts.com/css/veneer-2");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unica+One&display=swap");
:root{
    --clr-orange: #E54315;
    --clr-blanc: #F1F6F9;
    --ff-roboto-condensed: 'Roboto Condensed', 'sans-serif';
	--ff-veneer: 'Veneer', 'sans-serif';
}
.card {
	margin:0 .75em 3em;
	background-color: #fff;
	border-color: #fff;
	border-radius: 20px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card__header {
	display: grid;
	justify-content: center;
	align-items: center;
	margin: .2rem;
	border-radius: 20px 0px 0px 20px;
	min-height: 18rem;
	max-height: 18rem;
}

.info__option {
	display: block;
	margin: 1rem;
}

.group_title_card{
  display: grid;
}

.card__food {
	 color: #E54315;
	 font-weight: normal;
	 text-transform: uppercase;
	 margin: .6em .6em .3em .6em;
	 text-align: center;
	 font-size: 1.5em;
	 height: 2rem;
}



.card__title {
	color: #E54315;
	font-family: var(--ff-veneer);
}

.card__content {
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-family: var(--ff-roboto-condensed);
}

.card__list {
	display: flex;
}

.list__options {
	margin: .5rem;
	padding: .5rem;
	display: flex;
	flex-direction: row;
	border: solid;
	border-color: #212129;
	border-radius: 30px;
	text-transform: uppercase;
	list-style: none;
}

.choice {
  font-size: var(--fs-24);
  font-family: var(--ff-unica-one);
  margin-top: .2rem;
  margin-bottom: .2rem;
}






</style>
