<template>
    <Navigation />
    <AnswerChart />
</template>

<script>
import AnswerChart from '../components/AnswerChart.vue'
import Navigation from '../components/Navigation.vue'

export default {
    name: 'Dashboard',
    components: {
        AnswerChart, Navigation
    },
}
</script>