<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const emit = defineEmits(['openHelpModal']);
</script>

<template>
    <div class="top-bar">
        <div class="left"></div>
        <h1>Graffle</h1>
        <div class="right">
            <button class="help-btn" @click="() => emit('openHelpModal')">
                <FontAwesomeIcon icon="fa-solid fa-question-circle"/>
            </button>
        </div>
    </div>
</template>

<style scoped>
.top-bar {
    width: 100%;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
}

h1 {
    font-size: xx-large;
    margin: auto;
    width: min-content;
}

.help-btn {
    font-size: xx-large;
    background-color: transparent;
    border: none;
    color: var(--gray);
    position: relative;
}

.help-btn:hover {
    color: black;
}

.help-btn::after {
    content: 'How to play';
    color: white;
    position: absolute;
    background-color: black;
    width: max-content;
    border-radius: var(--base-border-radius);
    padding: .25rem .5rem;
    font-size: x-small;
    bottom: -20px;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    pointer-events: none;
    left: 50%;
    translate: -55%;
}

.help-btn:hover::after {
    opacity: 1;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: large;
    }

    .help-btn {
        font-size: large;
    }
}
</style>