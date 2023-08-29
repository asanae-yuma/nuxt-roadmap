<template>
    <v-card
        :color="color"
    >
        <v-card-title>{{ step }}</v-card-title>
        <v-divider class="mx-3"></v-divider>
        <v-row>
            <v-col cols="12" sm="6" md="3" lg="3" xl="3" v-for="(item, index) in Object.values(area)" :key="index">
                <item 
                    :item="item"
                />
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
import Item from '../atoms/Item.vue';

export default {
    props: {
        area: Object,
        color: String,
        step: String
    },
    components: {
        Item
    },
}
</script>
