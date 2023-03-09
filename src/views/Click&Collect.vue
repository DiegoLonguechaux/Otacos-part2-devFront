<script>
import Productlist from '../components/Productlist.vue'
import Categorie from '../components/Categorie.vue'
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
import ButtonVoirMonPanier from '../components/ButtonVoirMonPanier.vue'

export default {

  components :  {
    Productlist,
    Categorie,
    NavBar,
    Header,
    ButtonVoirMonPanier,
  },

    data(){
      return{
      Categorie : [],
      products :[],
      Option :[],
      }
    },

    async created() {
        let res = await fetch('https://mmi.unilim.fr/~longuechaux1/sae401_sla-back/public/index.php/api/produits_categories');
        this.Categorie =  await res.json();
    },


    methods: {
      async handler_catOption(id){
        let res = await fetch('https://mmi.unilim.fr/~longuechaux1/sae401_sla-back/public/index.php/api/produits/'+id);
        res = await res.json();
        this.Option = res.options;
      },
      

      async eventCategorie(id) {
        let res = await fetch('https://mmi.unilim.fr/~longuechaux1/sae401_sla-back/public/index.php/api/produits_categories/' + id);
        res = await res.json();
        this.products = res.produits;
      },

      async mounted() {
        let res = await fetch('https://mmi.unilim.fr/~longuechaux1/sae401_sla-back/public/index.php/api/produits');
        this.products =  await res.json();
    },
  }

}

</script>

<template>
    <Header></Header>
    <Categorie :menu="Categorie" @catSelected="eventCategorie" @catSelectedAll="mounted"></Categorie>
    <Productlist :prod="products"></Productlist>
    <NavBar></NavBar>
    <ButtonVoirMonPanier></ButtonVoirMonPanier>
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



</style>
