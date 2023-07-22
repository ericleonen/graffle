<script setup>
import { onMounted, ref, watch } from 'vue';
import { resetGraph, drawLine } from "../graphing/draw";

const props = defineProps({
    userPoints: Array,
    origPoints: Array
});

const canvas = ref(null);
const ctx = ref(null);

const reset = () => resetGraph(ctx.value, canvas.value, props.origPoints, 'gray');

onMounted(() => {
    canvas.value = document.getElementById('graph-canvas');
    ctx.value = canvas.value.getContext('2d');

    reset();
});

watch(props, ({userPoints}) => {
    reset();
    for (let i = 0; i < userPoints.length - 1; i += 1) {
        setTimeout(() => {
            drawLine(ctx.value, userPoints[i], userPoints[i + 1], 25, canvas.value, {
                color: 'limegreen',
                lineWidth: 8
            });
        }, 20);
    }
});

</script>

<template>
    <canvas id="graph-canvas" height="1000" width="1000" />
</template>

<style scoped>
canvas {
    height: var(--app-width);
    width: var(--app-width);
    max-width: var(--max-app-width);
    max-height: var(--max-app-width);
    border: var(--base-border-thickness) solid;
    background-color: white;
    margin-top: var(--base-v-margin);
    border-radius: var(--base-border-radius);
}

</style>