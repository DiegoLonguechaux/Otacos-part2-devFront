<script>
   
</script>

<template>
  <div class="barredenav">
    <div class="sidebar">
        <div class="selection__lang">
            <img class="flag" src="../assets/drapeau-anglais.png" alt="">
            <a class="langue" href="">EN</a>
        </div>
        <div class="selection-nav">
            <nav class="primary-nav">
                <ul class="primary-nav__list">
                    <li class="primary-nav__item active">
                        <router-link class="primary-nav__link" to="/~longuechaux1/sae401_sla/O-tacos/dist/">Home</router-link>
                    </li>
                    <li class="primary-nav__item">
                        <router-link class="primary-nav__link" to="/~longuechaux1/sae401_sla/O-tacos/dist/click&collect">Click & Collect</router-link>
                    </li>
                </ul>
            </nav>
        </div>
      <footer class="footer">
          <img class="logotacos" src="https://tripper.imgix.net/large-taco-drankje-otacos-korting/0c3f7b.jpg?auto=format&w=175&fit=clip" alt="">
          <div class="socialmedia">
              <img class="fb" src="https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-bleu-officiel-facebook.png" alt="">
              <img class="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="">
          </div>
          <div class="info">
              <ul class="info__list">
                  <li class="info__item">
                      <a class="info__font" href="">Contact</a>
                  </li>
                  <li class="info__item">
                      <a class="info__font" href="">Legal Mentions</a>
                  </li>
                  <li class="info__item">
                      <a class="info__font" href="">Cookie Policy</a>
                  </li>
              </ul>
          </div>
      </footer>
    </div>
  </div>
        
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/veneer-2");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unica+One&display=swap");
:root{
    --clr-blanc: #F1F6F9;
    --clr-grisclair: #292C31;
    --clr-gris: #262626;
    --clr-hoverlogofb: brightness(0) saturate(100%) invert(11%) sepia(25%) saturate(7133%) hue-rotate(227deg) brightness(106%) contrast(130%);
    --clr-hoverlogoinsta: invert(12%) sepia(54%) saturate(6995%) hue-rotate(292deg) brightness(79%) contrast(107%);
    --ff-roboto-condensed: 'Roboto Condensed', 'sans-serif';
    --ff-unica-one: 'Unica One', 'cursive';
    --fs-70: 70px;
    --fs-50: 50px;
    --fs-45: 45px;
    --fs-40: 40px;
    --fs-30: 30px;
    --fs-25: 25px;
    --fs-24: 24px;
    --fs-23: 23px;
    --fs-20: 20px;
    --fs-18: 18px;
    --fs-16: 16px;
    --fs-12: 12px;
}

.sidebar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  background-color: var(--clr-grisclair);
  min-height: 100vh;
  position: fixed;
}
.barredenav{
  width: 16.25rem;
  height: 100%;
  background-color: var(--clr-grisclair);
  font-family: var(--ff-roboto-condensed);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
}

.selection__lang {
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  top: 0;
}
.flag{
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 100%;
  margin-top: .1rem;
}
.selection-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.langue {
  color: var(--clr-blanc);
}

.primary-nav__link{
  text-transform: uppercase;
  color: var(--clr-blanc);
  font-size: var(--fs-23);
}
.primary-nav__item {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.info {
  width: 16.25rem;
  background-color: var(--clr-gris);
  padding: 0.5rem 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
}

.info__font {
  font-family: var(--ff-roboto-condensed);
  color: var(--clr-gris50);
}

.info__list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.info__item {
  display: inline;
  font-size: var(--fs-12);
}

.bgimage {
  position: absolute;
  background-size: cover;
  bottom: 0;
  right: 10px;
}
.footer {
  display: flex;
  flex-direction: column;
  
}
.logotacos {
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.socialmedia {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.fb{
  width: 30px;
  height: 30px;
}
.instagram{
  width: 30px;
  height: 30px;
}
</style>
