<script setup>
import { watch } from 'vue';

const props = defineProps({
    guesses: Array
});

// watch(props, ({ guesses }) => console.log(guesses))
</script>

<template>
    <div>
        <h2>Guesses</h2>
        <ul>
            <li v-for="guess in props.guesses" :key="guess.guessCount" :class="{ green: guess.diff === 0 }">
                <span class="guess"><strong>f(x) =</strong> {{ guess.equation }}</span>
                <span class="diff"><strong>&#x222b(|f(x) - g(x)|)dx &#8776</strong> {{ Math.round(guess.diff * 100) / 100 }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
div {
    display: flex;
    width: 80vw;
    max-width: 500px;
    margin-top: 1.5rem;
    flex-direction: column;
    overflow-y: hidden;
    flex: 2;
}

h2 {
    font-size: large;
    margin-bottom: .5rem;
}

ul {
    list-style-type: none;
    overflow-y: scroll;
}

li {
    padding: .75rem 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
}

.green {
    color: seagreen;
}

li:hover {
    background-color: lightgray;
}
</style>