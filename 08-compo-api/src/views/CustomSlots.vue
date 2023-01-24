<template>
  <h1>Aprendiendo Slots</h1>
  <button>Abrir Modal</button>

  <modal title="Hola mundo">
    <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
    <h2>Titulo del modal</h2>
    <button>Salir</button> -->
    <template v-slot:footer>
      <button>Salir</button>
    </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
    </template>
    <template v-slot:header>
      <h2>Titulo del modal</h2>
    </template>
  </modal>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  setup() {},
};
</script>

<style></style>
