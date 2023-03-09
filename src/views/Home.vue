<script>
import Productlist from '../components/Productlist.vue'
import ButtonValider from '../components/ButtonValider.vue'
import Categorie from '../components/Categorie.vue'
import NavBar from '../components/NavBar.vue'
import Header from '../components/HeaderHome.vue'

export default{
  components :  {
    Productlist,
    ButtonValider,
    Categorie,
    NavBar,
    Header
  }
}
  
</script>

<template>
    <Header></Header>
    <NavBar></NavBar>
    <div class="clavier">
        <img src="../assets/bg.png" alt="">
    </div>
</template>


<style>
:root{
  --clr-linear: linear-gradient(#2D0C1D, #4D1715);
}
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  width: 100vw;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  background-repeat: no-repeat;
  background-size: cover;
  
}
body{
  background-color: var(--clr-linear);
}

.clavier{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}


</style>
