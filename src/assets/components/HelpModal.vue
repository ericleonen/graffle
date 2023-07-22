<script setup>
import Modal from './Modal.vue';

const props = defineProps({
    open: Boolean
});

const emit = defineEmits(['close'])

</script>

<template>
<Modal :open="open" @close="() => emit('close')" :id="'help'">
    <h2>How to play</h2>
    <p>Guess the Graffle in 5 tries.</p>
    <ul>
        <li>Each guess, <i class="green">f(x)</i>, must be a <u>valid</u> expression.</li>
        <li>Your guess is measured against the Graffle, <i class="gray">g(x)</i>, with the approximate <u>integral of the absolute difference</u> between the two functions within the graph's domain: <i>(-20, 20)</i>.</li>
    </ul>
</Modal>
</template>

<style scoped>
.green {
    background-color: rgba(50, 205, 50, 0.8);
    padding: 0 .25rem;
}

.gray {
    background-color: rgba(128, 128, 128, 0.8);
    padding: 0 .25rem;
}

h2 {
    font-size: x-large;
}
p {
    font-size: large;
    opacity: 0.6;
}
ul {
    padding: 1rem 1rem 1rem 2rem;
    padding-top: 1.5rem;
    display: flex;
    align-items: left;
    flex-direction: column;
    background-color: var(--light-gray);
    border-radius: var(--base-border-radius);
    margin-top: var(--base-v-margin);
    max-width: 25rem;
}

ul li {
    margin-bottom: .5rem;
    padding: .25rem;
    border-radius: var(--base-border-radius);
    width: fit-content;
}
</style>