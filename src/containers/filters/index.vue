<template>
    <div>
        <form v-on:submit.prevent="getDistrict()">
            <div>
                <input type="text" v-model.lazy="searchDistrict">
            </div>
            <div>
                <button>Buscar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { get, endpoint } from '@/services'


    export default {
        name: "SearchDistrict",

        data() {
            return {
                searchDistrict: "",
                data: []
            }
        },

        // created() {
        //     this.getDistrict()
        // },

        methods: {

            getDistrict () {
                
                

            }
        }
    }
</script>