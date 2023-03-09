<script>
    export default{
        components :  {
        },
        props : {
            menu :{
                type: Array,
                required: true,
            },
            

        }
        
    }
</script>

<template>
   <div>
        <ul class="categorie">
            <li class="categorie__item">
                <span class="categorie__font" @click="$emit('catSelectedAll')">ALL</span>
            </li>
            <li class="categorie__item" v-for='item in menu' :key="item.id" @click="$emit('catSelected', item.id)">
                <span class="categorie__font" >{{item.name}}</span>
            </li>
        </ul>
    </div> 
        
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/veneer-2");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unica+One&display=swap");
:root{
    --clr-blanc: #F1F6F9;
    --ff-roboto-condensed: 'Roboto Condensed', 'sans-serif';
}

.categorie{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    padding: 1rem;
}
.categorie__item{
    border: .1rem solid var(--clr-blanc);
    border-radius: 20px ;
    display: flex;
    justify-content: center;
    width: fit-content;
}

.categorie__font{
    color: var(--clr-blanc);
    padding: .5rem 1rem .5rem 1rem;
    cursor: pointer;
}

</style>
