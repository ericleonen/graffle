<script setup>
import Modal from './Modal.vue';

const props = defineProps({
    open: Boolean,
    guesses: Array,
    win: Boolean,
    answer: String
});

const emit = defineEmits(['close']);

</script>

<template>
<Modal :open="props.open"  @close="() => emit('close')" :confetti="props.win" :id="'game-over'">
    <h2>{{ win ? 'Well done!' : 'Next time!'}}</h2>
    <p v-if="!win">The correct answer was f(x)={{ props.answer }}</p>
    <p v-if="win">You solved the Graffle in {{ props.guesses.length }} guess{{ props.guesses.length > 1 ? 'es' : '' }}!</p>
    <ul>
        <li v-for="guess of props.guesses" :class="{ 'correct': guess.diff === 0 }">
            <strong>Guess #{{ guess.count }}: </strong><i>f(x)={{ guess.expression }}</i> was off by {{ guess.diff }}
        </li>
    </ul>
</Modal>
</template>

<style scoped>
h2 {
    font-size: xx-large;
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