<template>
    <div class="filter-container__result" v-if="goals.length != 0">
        <div class="card-goal" v-for="( goal, index ) in goals" :key="index" v-on:click="clickOpen(index)" :class="{ active: isActive(index) }">
            <div class="card-goal__name">
                {{ goal.name }}
            </div>
            <div class="card-goal__informations">
                <div class="card-goal__description">
                    {{ goal.description }}
                </div>
                <div class="card-goal__be_delivered">
                    {{ goal.will_be_delivered }}
                </div>

                <div class="card-goal__expect_start_date" v-if=" goal.expect_start_date != null">
                    {{ goal.expect_start_date }}
                </div>
                <div class="card-goal__expect_start_date" v-else>
                    Não existe data prevista de inicio.
                </div>

                <div class="card-goal__expect_end_date" v-if=" goal.expect_end_date != null ">
                    {{ goal.expect_end_date }}
                </div>
                <div class="card-goal__expect_end_date" v-else>
                    Não existe data prevista de conclusão.
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoalsResult",
        props:['goals'],

        data () {
            return {
                activeItem: false
            }
        },

        methods: {

            clickOpen (isActive) {
                return this.activeItem = isActive
            },

            isActive (isActive) {
                return this.activeItem === isActive
            }
        }
    }
</script>