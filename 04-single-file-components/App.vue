<template>
    <div id="app">
        <h1>App</h1>
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
h1 {
	text-align: center;
}
</style>
