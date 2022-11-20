<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ dark: theme == 'dark' }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 5vw;
}

.modal {
    width: 80%;
    height: 80%;
    padding: 20px;
    margin: 100px auto;
    background: var(--bgColor);
    border-radius: 10px;

    -webkit-box-shadow: 0 0 20px var(--magentaLight);
    -moz-box-shadow: 0 0 20px var(--magentaLight);
    box-shadow: 0 0 20px var(--magentaLight);
}

.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
</style>