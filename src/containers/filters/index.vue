<template>
    <div>
        <form v-on:submit.prevent="getDistrict()">
            <div>
                <!-- <select v-model="district">
                    <option v-for="value in data">
                        {{ value }}
                    </option>
                </select> -->

                <input type="text">
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
                district: "",
                data: []
            }
        },

        created() {
            this.getDistrict()
        },

        methods: {

            getDistrict () {
                const url = `/api/public/districts`
                
                get(url)
                    .then((response) => {
                        this.data = response.districts
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>