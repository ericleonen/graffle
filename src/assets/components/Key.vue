<script setup>
const props = defineProps({
    value: String
});
const emit = defineEmits(['click'])

const onClick = () => {
    if (props.value === 'AC')
        emit('click', ['clear']);
    else if (props.value === '⌫')
        emit('click', ['delete']);
    else
        emit('click', ['add', props.value]);
};
</script>

<template>
<button 
    :class="{empty: value.length === 0}"
    @click="onClick"
>
    {{ props.value }}
</button>
</template>

<style scoped>
button {
    height: calc(var(--app-width) / 7);
    width: calc(var(--app-width) / 7);
    max-width: calc(var(--max-app-width) / 7);
    max-height: calc(var(--max-app-width) / 7);
    background-color: var(--light-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
}

button:hover {
    background-color: var(--gray);
}

@media screen and (max-width: 500px) {
    button {
        height: calc(var(--app-width) / 10);
        font-size: x-small;
    }
}

</style>