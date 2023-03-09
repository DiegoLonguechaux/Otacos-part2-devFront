<script>
import Produitpanier from '../components/Produitpanier.vue'
import Header from '../components/HeaderPanier.vue'
import NavBar from '../components/NavBar.vue'

export default{
    components :{
        Produitpanier,
        Header,
        NavBar
    },    
    data(){
            return{
                produit :
                [
                    {edited:false, id: 1, produit: 'Tacos Normal', content: 'viande hachée, poulet, sauce algérienne, sauce fromagère', price: 7},
                    {edited:false, id: 1, produit: 'Frite Normal', content: 'Des frites quoi', price: 2},
                    {edited:false, id: 1, produit: 'Fanta', content: 'Boisson fraîche', price: 2.5},
                ],
            }
        },

    methods: {
    removeProduit(obj) {
      this.produit.splice(this.produit.indexOf(obj), 1);
    },

    editProduit(obj){
      obj.edited = !obj.edited;
    },

  }
}
  

    

</script>

<template>
    <Header></Header>
    <NavBar></NavBar>
    <produitpanier :donnees="produit" :trash="true" :edit="true" @edition="editProduit" @delete="removeProduit"></produitpanier>

</template>

<style>

.list__panier{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list__panier-item{
  padding: 1rem;
}
.panier__title{
  font-family: var(--ff-unica-one);
  color: var(--clr-blanc);
  font-size: var(--fs-40);
  text-transform: uppercase;
  padding-bottom: 1rem;
}

.btn__panier{
  width: 255px;
  height: 48px;
  background-color: var(--clr-orange);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(--clr-blanc);
}

.police{
  font-size: var(--fs-24);
  font-family: var(--ff-unica-one);
  text-transform: uppercase;
}


.btn{
  padding-top: 3rem;
  margin: 0 auto;
  user-select: none;
  cursor: pointer;
}

.content__panier{
  display: flex;
  flex-direction: column;
  
}

.title__panier{
  font-size: var(--fs-30);
  font-family: var(--ff-veneer);
}

.content__panier{
  font-size: var(--fs-12);
  font-family: var(--ff-roboto-condensed);
  padding-left: 1rem;
}

.price__panier{
  font-size: var(--fs-24);
  font-family: var(--ff-unica-one);
}
 
.modified{
  cursor: pointer;
  display: flex;
  gap: 1rem;
  filter: brightness(0) invert(1);
}

.panier__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  border: solid var(--clr-blanc);
  color: var(--clr-blanc);
  border-radius: 15px;
  padding: .5rem .5rem .5rem 2rem;
}

</style>