<script>
export default{
    props: {
        donnees : {
            type: Array,
            required: true,
            validator(value) {
                return value.length <= 100;
            },
            edit:{
                type:Boolean,
                default: false
            },
            trash:{
                type:Boolean,
                default: false
            }
        }
    }
}
</script>

<template>

    <body>
            
        <ul class="list__panier">
            <h1 class="panier__title">My cart</h1>
            <li class="list__panier-item" v-for="item in donnees" :key="item.id">
                <div class="panier__content">
                    <div class="panier__about">
                
                        <span v-if="item.edited==false" class="content__panier">
                            <span class="title__panier">{{ item.produit }}</span>
                            <span class="content__panier">{{ item.content }}</span>
                            <span class="price__panier">{{ item.price }} €</span>
                        </span>


                    <!-- <span v-if="item.edited==true" class="who">
                        <input type="text" v-model="item.email">
                        <input style="width:6em" type="text" v-model="item.firstname">
                        <input style="width:5em" type="text" v-model="item.name">
                    </span> -->

                    </div>

                    <div class="modified">
                        <div  @click="$emit('edition', item)">
                            <img src="/src/assets/edit.svg" alt="">
                        </div>

                        <div @click="$emit('delete', item)">
                            <img src="/src/assets/bin.svg">
                        </div>

                    </div>
                </div>
            </li>

            <div class="btn">
                <div class="btn__panier">
                    <h1 class="police">Validate my cart</h1>
                </div>
            </div>
            
        </ul> 

        


        
    </body>
    </template>




