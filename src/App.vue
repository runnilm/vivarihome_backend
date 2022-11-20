<template>
  <div class="app">
    <SideBar />
    <router-view/>
  </div>

  <!-- <div v-if= "showModal">
    <Modal :theme="dark" @close="toggleModal" >
      <h1>Header</h1>
      <p>Paragraph</p>
    </Modal>
  </div>
  <button class="noselect" @click="toggleModal">Open Modal</button> -->
</template>


<script setup>
// import Modal from './components/ModalPopup.vue';
import SideBar from './components/SideBar.vue';
</script>


<style lang="scss">
h1, h2 {
  font-family: 'Barriecito', cursive;
  font-size: 15vh;
  color: var(--magentaDark);
  text-transform: uppercase;
  border: none;
  padding: 0;
  text-align: center;
}

h3 {
  font-family: 'Barriecito', cursive;
  font-size: 4vw;
  color: var(--greenLight);
  text-transform: uppercase;
  border: none;
  padding: 0;
}

h4 {
  font-size: 2vw;
}

h5, h6 {
  font-family: 'Barriecito', cursive;
  color: var(--magentaLight);
  text-transform: uppercase;
  border: none;
  padding: 0;
}

:root {
  --magentaDark: #a32273;
  --magentaLight: #e364a4;
  --greenDark: #00603d;
  --greenLight: #00a457;
  --bgColor: #05181d;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Syne', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

body {
  background: var(--bgColor);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding-top: 0.5rem;
    padding-left: 1rem;
    margin-left: 0;

    @media (max-width: 768px) {
      padding-top: 0.5rem;
      padding-left: 5rem;
    }
  }
}

@media (max-width: 768px) {
  .h1Small {
    font-size: 20vw;
  }

  .h1Medium {
    font-size: 19vw;
  }

  .h1Large {
    font-size: 16vw;
  }
}
</style>
