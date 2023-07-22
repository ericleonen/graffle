<script setup>
import Key from "./Key.vue";

const emit = defineEmits(['keyPress', 'submit', 'openGameOverModal']);

const leftKeys = ['(', ')', 'abs', 'x', 'sin', 'cos', 'tan', 'ln'];
const midKeys = ['0', 'e', 'π', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const rightKeys = ['AC', '⌫', '^', '', '+', '-', '*', '/'];

const emitKeyPress = req => emit('keyPress', req);

const props = defineProps({
    gameOver: Boolean
});

</script>

<template>
<div class="keyboard">
    <div class="section-left">
        <Key 
            v-for="key in leftKeys"
            :value="key"
            @click="emitKeyPress"
        />
    </div>
    <div class="section-mid">
        <Key 
            v-for="key in midKeys"
            :value="key"
            @click="emitKeyPress"
        />
    </div>
    <div class="section-right">
        <Key 
            v-for="key in rightKeys"
            :value="key"
            @click="emitKeyPress"
        />
    </div>
    <button v-if="!props.gameOver" class="submit" @click="() => emit('submit')">Submit</button>
    <button v-if="props.gameOver" class="submit" @click="() => emit('openGameOverModal')">See results</button>
</div>
</template>

<style scoped>
.keyboard {
    display: flex;
    width: var(--app-width);
    max-width: var(--max-app-width);
    border-radius: var(--base-border-radius);
    overflow: hidden;
    margin-top: var(--base-v-margin);
    flex-wrap: wrap;
}
.section-mid {
    display: flex;
    width: calc(3/7 * 100%);
    flex-wrap: wrap;
}
.section-left, .section-right {
    display: flex;
    width: calc(2/7 * 100%);
    flex-wrap: wrap;
}
.submit {
    width: 100%;
    padding: .5rem;
    font-size: medium;
    background-color: lightgreen;
    border: none;
    margin-top: 1px;
    color: darkgreen;
}
.submit:hover {
    background-color: limegreen;
}

@media screen and (max-width: 500px) {
    .submit {
        font-size: small;
        padding: .25rem;
    }
}
</style>