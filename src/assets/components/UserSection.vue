<script setup>
import EquationDisplay from "./EquationDisplay.vue";
import Keyboard from "./Keyboard.vue";
import { ref } from 'vue';

const equation = ref([]);
const caretPos = ref(0);

const props = defineProps({
    shake: Boolean,
    gameOver: Boolean
});

const onKeyPress = req => {
    if (props.gameOver) return;

    if (req[0] === 'clear') {
        equation.value = [];
        caretPos.value = 0;
    }
    else if (req[0] === 'delete') {
        if (caretPos.value === 0) return;
        
        equation.value.splice(caretPos.value - 1, 1);
        caretPos.value -= 1;
    }
    else if (req[0] === 'add' && equation.value.length < 11) {
        if (req[1] === '') return;
        if (req[1] === '||') req[1] = '|';

        equation.value.splice(caretPos.value, 0, req[1]);
        caretPos.value += 1;
    }
}

const emit = defineEmits(['submit', 'openGameOverModal', 'openGuessesModal'])

</script>

<template>
    <div class="user-section">
        <EquationDisplay 
            :equation="equation"
            @changeCaretPos="newCaretPos => caretPos = newCaretPos"
            :caretPos="caretPos"
            :shake="shake"
            @openGuessesModal="() => emit('openGuessesModal')"
        />
        <Keyboard 
            @keyPress="onKeyPress" 
            @submit="() => emit('submit', equation)"
            @openGameOverModal="() => emit('openGameOverModal')"
            :gameOver="gameOver"
        />
    </div>
</template>

<style scoped>
.user-section {
    display: flex;
    width: var(--app-width);
    max-width: var(--max-app-width);
    flex-direction: column;
    align-items: center;
    margin-top: var(--base-v-margin);
}
</style>