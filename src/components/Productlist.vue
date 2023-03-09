<script>
    export default{
        components :  {
        },
        props : {
            prod :{
                type: Array,
                required: true,
            },
            

        }
        
}

</script>

<template>
    <ul class="content">
        <li class="item"  v-for='item in prod' :key="item.id" @click="$emit('catOption', item.id)">
            <router-link :to="'/~longuechaux1/sae401_sla/O-tacos/dist/Options/'+item.id">
                <div class="product">
                    <img class="image" v-bind:src="item.image" alt="">
                    <p class="name">{{item.name}}</p>
                    <p class="description">{{item.description}}</p>
                    <p class="price">{{item.price}} €</p>
                </div>
            </router-link>
        </li>
    </ul>
    
        
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/veneer-2");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unica+One&display=swap");

:root{
    --clr-orange: #E54315;
    --clr-blanc: #F1F6F9;
    --ff-veneer: 'Veneer', 'sans-serif';
    --ff-roboto-condensed: 'Roboto Condensed', 'sans-serif';
    --fs-30: 30px;
    --fs-20: 20px; 
}

.content{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
}
.product{
    border: .15rem solid var(--clr-blanc);
    border-radius: 20px;
}
.item{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
}
.name {
  color: var(--clr-orange);
  font-family: var(--ff-veneer);
  font-size: var(--fs-30);
  text-align: center;
  width: 300px;
}


.price {
  color: var(--clr-orange);
  font-family: var(--ff-veneer);
  font-size: var(--fs-30);
  text-align: center;
}

.description {
  color: var(--clr-blanc);
  font-family: var(--ff-roboto-condensed);
  font-size: var(--fs-20);
  text-align: center;
  padding: 0.5rem;
  width: 300px;
}


.image {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  max-width: 300px;
  
}


</style>
