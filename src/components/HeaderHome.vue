<script>
   
</script>

<template>
   <div class="header__home">
                <div class="header__content">
                    <h1 class="header__titlehome">42 ingredients</h1>
                    <img class="logo" src="https://tripper.imgix.net/large-taco-drankje-otacos-korting/0c3f7b.jpg?auto=format&w=175&fit=clip" alt="">
                    <h1 class="header__titlehome">40 000 combinations</h1>
                </div>
                
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

.header__home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 1.5rem;
}

.header__titlehome {
  text-transform: uppercase;
  font-family: var(--ff-unica-one);
  font-size: var(--fs-40);
  color: var(--clr-blanc);
}
.header__content{
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-around;
}
.return {
  cursor: pointer;
  margin-left: 3rem;
}
.logo{
  padding: 0rem 5rem 0rem 5rem;
}
</style>
