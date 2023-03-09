<script>
import CardOptions from '../components/CardOptions.vue'
import NavBar from '../components/NavBar.vue'
import Header from '../components/HeaderPanier.vue'
import ButtonValider from '../components/ButtonValider.vue'


export default{
    components: {
        CardOptions,
        NavBar,
        Header,
        ButtonValider
    },


    data(){
        return{
            num: 0,
            option: [],
            res: {},
            article: {},
        }
    },

    async created() {
        let id = this.$route.params.id;
        let res = await fetch('https://mmi.unilim.fr/~longuechaux1/sae401_sla-back/public/index.php/api/produits/' + id);
        res = await res.json();
        this.option = res;
        this.res = res;
    },

    methods: {
        async handler_addtoPanier(id){
            let res = await fetch('https://mmi.unilim.fr/~longuechaux1/sae401_sla-back/public/index.php/api/produits/'+id);
            res = await res.json();
            this.article = res.produits;
        }
    }
    
    
    
}
</script>

<template>
    <Header></Header>
    <NavBar></NavBar>
    
    <div class="content1">
        <CardOptions :obj="res" ></CardOptions>
    </div>
    <ButtonValider :panier="article" @addtoPanier="handler_addtoPanier"></ButtonValider>

    
   
</template>

<style>
.content1{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
}
</style>