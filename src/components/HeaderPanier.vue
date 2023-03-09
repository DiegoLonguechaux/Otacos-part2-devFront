<script>
   
</script>

<template>
   <div class="header">
                <router-link to="/~longuechaux1/sae401_sla/O-tacos/dist/Click&Collect">
                  <img class="return" src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-22-700x368.png" alt="accueil">
                </router-link>
                <div class="header__content">
                    <h1 class="header__title">Takeaway</h1>
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
  justify-content: space-between;
  padding: 2rem 1.5rem;
}

.header__acceuil {
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 1.5rem;
  padding-bottom: 10rem;
}

.header__title {
  text-transform: uppercase;
  font-family: var(--ff-unica-one);
  font-size: var(--fs-40);
  color: var(--clr-blanc);
  padding-left: 5rem;
}
.header__content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
.return {
  cursor: pointer;
  margin-left: 3rem;
}
</style>
