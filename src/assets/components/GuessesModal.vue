<script setup>
import Modal from './Modal.vue';

const props = defineProps({
    open: Boolean,
    guesses: Array
});

const emit = defineEmits(['close']);
</script>

<template>
<Modal :open="props.open" @close="() => emit('close')" :id="'guesses'">
    <h2>Your guesses</h2>
    <p v-if="props.guesses.length === 0">It's pretty empty in here...</p>
    <p v-if="props.guesses.length">Here {{ props.guesses.length === 1 ? 'is' : 'are' }} your {{ props.guesses.length }} guess{{ props.guesses.length > 1 ? 'es' : '' }}.</p>
    <ul v-if="props.guesses.length">
        <li v-for="guess of props.guesses" :class="{ 'correct': guess.diff === 0 }">
            <strong>Guess #{{ guess.count }}: </strong><i>f(x)={{ guess.expression }}</i> was off by {{ guess.diff }}
        </li>
    </ul>
</Modal>
</template>

<style scoped>
h2 {
    font-size: x-large;
}
p {
    font-size: large;
    opacity: 0.6;
}

ul {
    padding: 1rem;
    padding-top: 1.5rem;
    list-style-type: none;
    display: flex;
    align-items: left;
    flex-direction: column;
    background-color: var(--light-gray);
    border-radius: var(--base-border-radius);
    margin-top: var(--base-v-margin);
}

ul li {
    margin-bottom: .5rem;
    padding: .25rem;
    border-radius: var(--base-border-radius);
    width: fit-content;
}

.correct {
    background-color: rgba(144, 238, 144, 0.75);
}
</style>