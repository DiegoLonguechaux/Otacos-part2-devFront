<script>
   
</script>

<template>
   <div class="header">
                <router-link to="/~longuechaux1/sae401_sla/O-tacos/dist/">
                  <img class="return" src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-22-700x368.png" alt="accueil">
                </router-link>
                <div class="header_content">
                    <h1 class="header_title">Takeaway</h1>
                </div>
                <img src="https://tripper.imgix.net/large-taco-drankje-otacos-korting/0c3f7b.jpg?auto=format&w=175&fit=clip" alt="">
    </div>
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/veneer-2");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unica+One&display=swap");
:root{
    --clr-blanc: #F1F6F9;
    --ff-roboto-condensed: 'Roboto Condensed', 'sans-serif';
    --fs-40: 40px;
    --ff-unica-one: 'Unica One', 'cursive';

}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 1.5rem;
  padding-left: 9rem;
}

.header_acceuil {
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 1.5rem;
  padding-bottom: 10rem;
}

.header_title {
  text-transform: uppercase;
  font-family: var(--ff-unica-one);
  font-size: var(--fs-40);
  color: var(--clr-blanc);
  margin-left: 7rem;
}
.header_content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.return {
  cursor: pointer;
  margin-left: 3rem;
  width: 50px;
  height: 50px;
}
</style>
