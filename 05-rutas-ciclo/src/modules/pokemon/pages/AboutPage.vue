<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>

export default {

    data() {
        return {
            name: 'Aitor'
        }
    },
    methods: {
        onChangeName() {
            // console.log('se cambiará el nombre a Bruce');
            this.name = 'Bruce'
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        this.name = 'Juan Carlos'
        console.log('created');
        // Peticiones HTTP
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    update() {
        console.log('update');
    },
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
    errorCaptured() {
        console.log('errorCaptured');
    },
    renderTracked() {
        console.log('renderTracked');
    },
    renderTriggered() {
        console.log('renderTriggered');
    },
}
</script>
