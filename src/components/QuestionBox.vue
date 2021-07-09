<template>
    <div>
        <input v-model="text" placeholder="Enter your name">
        <div class="mt-2">Value: {{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'QuestionBox',
    data() {
      return {
        text: ''
      }
    }
}
</script>
