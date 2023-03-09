<script>
    
</script>

<template>
    <div class="button" >
        <router-link class="text" to="/~longuechaux1/sae401_sla/O-tacos/dist/Panier">See my cart</router-link>
    </div>
        
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/veneer-2");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unica+One&display=swap");
:root{
    --clr-orange: #E54315;
    --clr-blanc: #F1F6F9;
    --ff-roboto-condensed: 'Roboto Condensed', 'sans-serif';
}

.button{
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 2rem;
    cursor: pointer;
    
}
.text{
    font-family: var(--ff-roboto-condensed);
    text-transform: uppercase;
    color: var(--clr-blanc);
    padding: .5rem 1.5rem .5rem 1.5rem;
    background-color: var(--clr-orange);
    border-radius: 20px;
}
</style>
