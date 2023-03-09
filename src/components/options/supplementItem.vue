<script>

    export default {
        props: {
            options:{
                type: Array,
                required: true,
            }
        }
    }


</script>

<template id="vue_supplement_template" v-for="item in options">
    <li><span class="supplement">{{item.name}}</span><span class="prix"></span></li>
</template>

