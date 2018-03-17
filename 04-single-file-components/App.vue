<template>
    <div id="app">
        <h1>App</h1>
        <Paragraph />
    </div>
</template>

<script>
import Paragraph from './components/Paragraph.vue'

export default {
    name: 'App',
    components: {
        Paragraph
    }
}
</script>

<style>
h1 {
	text-align: center;
}
</style>
