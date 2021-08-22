<template>
    <div>
        <Navigation />
        <QuestionBox />
    </div>
</template>

<script>
import QuestionBox from '../components/QuestionBox.vue'
import Navigation from '../components/Navigation.vue'

export default {
    name: 'Questions',
    components: {
        QuestionBox,
        Navigation
    },
}
</script>
