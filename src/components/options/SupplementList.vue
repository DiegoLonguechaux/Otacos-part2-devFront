<script>
        
    import SupplementItem from "./supplementItem.vue"

    export default {
        components: {
            SupplementItem,
        },
        props: ['supplements']
    }
</script>



<template id="vue_supplement_list">
    <div class="card__list">
        <SupplementItem v-for="supplement in supplements" :supplement="supplement" class="list__options"></SupplementItem>
    </div>
</template>
