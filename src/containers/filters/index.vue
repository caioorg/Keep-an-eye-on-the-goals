<template>
    
        <div class="filter-container__form">
            <form>
                <select v-model="district" @change="selectGoals(district)">
                    <option value="595">Anhanguera</option>
                    <option v-for="(value, index) in data" :value="value.id" :key="index">
                        {{ value.name }}
                    </option>
                </select>
            </form>

            <GoalsResults :goals="goals"/>
        </div>
</template>

<script>
    import { get, endpoint } from '@/services'
    import GoalsResults from '@/components/goals'

    export default {
        name: `SearchDistrict`,

        components: {
            GoalsResults
        },

        data() {
            return {
                district: "",
                data: [],
                goals: [],
            }
        },

        mounted() {
            this.getDistrict()
        },

        methods: {
            
            //created to search all districts
            getDistrict () {
                const url = `api/public/districts`
                get(url)
                .then((response) => {
                    this.data = response.districts
                })
                .catch((error) => {
                    console.log(error)
                })
            },
    
            //created pursuing all goals according to the selected district
            selectGoals(goals) {
                const url = `/api/public/goals?region_id=${goals}`
                get(url)
                .then((response) => {
                    if(response.goals) {
                        this.goals = response.goals
                    }else {
                        this.message = 'Não foi encontrado nenhuma meta para esse distrito.'
                    }
                    
                })
            }
        }
    }
</script>