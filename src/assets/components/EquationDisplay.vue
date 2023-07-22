<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    equation: Array,
    caretPos: Number,
    shake: Boolean
});

const emit = defineEmits(['changeCaretPos', 'openGuessesModal'])

const moveCaret = (e, i) => {
    i = parseInt(i);
    const {left, right} = e.target.getBoundingClientRect();
    const mouseX = e.clientX;

    if (Math.abs(left - mouseX) < Math.abs(right - mouseX))
        emit('changeCaretPos', i);
    else 
        emit('changeCaretPos', i + 1);
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && props.caretPos > 0) {
        emit('changeCaretPos', props.caretPos - 1);
    }
    else if (e.key === 'ArrowRight' && props.caretPos < props.equation.length) {
        emit('changeCaretPos', props.caretPos + 1);
    }
});

</script>

<template>
<div class="equation-display" :class="{ 'shake': shake }">
    <div class="func">f(x)<div class="space"></div>=</div>
    <div class="equation">
        <span
            v-if="props.equation.length === 0"
            class="part leftCaret"
        >
            &nbsp
        </span>
        <span 
            v-for="i in Object.keys(props.equation)"
            @click="(e) => moveCaret(e, i)"
            class="part"
            :class="{
                'leftCaret': parseInt(i) === 0 && props.caretPos === 0,
                'rightCaret': parseInt(i) === props.caretPos - 1
            }"
        >
            {{ props.equation[i] }}
        </span>
    </div>
    <button class="history-btn" @click="() => emit('openGuessesModal')">
        <FontAwesomeIcon icon="fa-solid fa-list"/>
    </button>
</div>
</template>

<style scoped>
.equation-display {
    display: flex;
    width: 100%;
    font-size: medium;
    flex-direction: row;
    border-radius: var(--base-border-radius);
}

.shake {
    animation: shake .33s ease-in;
}

@keyframes shake {
    0% { transform: translateX(0) }
    20% { transform: translateX(-0.25rem) }
    40% { transform: translateX(0.25rem) }
    60% { transform: translateX(-0.5rem) }
    80% { transform: translateX(0.5rem) }
    100% { transform: translateX(0) }
}

.func {
    font-weight: bold;
    background-color: var(--light-gray);
    height: var(--equation-height);
    width: var(--equation-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--base-border-thickness) solid;
    border-right: none;
    border-radius: var(--base-border-radius) 0 0 var(--base-border-radius);
}
.func .space {
    width: .25rem;
}

.equation {
    flex: 2;
    padding: 0 var(--base-padding);
    height: var(--equation-height);
    display: flex;
    align-items: center;
    font-size: large;
    letter-spacing: -1.5px;
    border: var(--base-border-thickness) solid;
    border-left: none;
    border-right: none;
}

.part {
    border-right: 2px solid transparent;
    height: 1.5rem;
}

.part:first-of-type {
    border-left: 2px solid transparent;
}

.part:first-of-type.leftCaret {
    border-left-color: black;
    animation: blink .8s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
    
}

.rightCaret {
    border-right-color: black;
    animation: blink .8s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
}

@keyframes blink { 50% { border-color: transparent; } }

.history-btn {
    height: var(--equation-height);
    width: var(--equation-height);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    border: none;
    background-color: white;
    color: var(--gray);
    position: relative;
    border: var(--base-border-thickness) solid black;
    border-left: none;
    border-radius: 0 var(--base-border-radius) var(--base-border-radius) 0;
}

.history-btn:hover {
    color: black;
}

.history-btn::after {
    content: 'Open guess history';
    color: white;
    position: absolute;
    background-color: black;
    width: max-content;
    border-radius: var(--base-border-radius);
    padding: .25rem .5rem;
    font-size: x-small;
    top: -14px;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    pointer-events: none;
}

.history-btn:hover::after {
    opacity: 1;
}

@media screen and (max-width: 500px) {
    .func {
        font-size: small;
    }
    .func .space {
        width: 0;
    }
    .history-btn {
        font-size: small;
    }
    .equation {
        font-size: small;
    }
    .part {
        height: 1rem;
    }
}

</style>