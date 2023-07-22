<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { updateConfettis, createConfettis } from '../graphing/confetti';

const emit = defineEmits(['close']);
const props = defineProps({
    open: Boolean,
    confetti: Boolean,
    id: String
});

const close = () => emit('close');

const canvas = ref(null);
const ctx = ref(null);
const burstId = ref(null);

const resizeCanvas = () => {
    canvas.value.height = window.screen.height;
    canvas.value.width = window.screen.width;
};

onMounted(() => {
    canvas.value = document.getElementById(props.id + '-confetti');
    ctx.value = canvas.value.getContext('2d');
});

onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas);
});

watch(props, ({open, confetti}) => {
    if (open && confetti) {
        resizeCanvas();
        const confettis = createConfettis(250);

        burstId.value = setInterval(() => {
            updateConfettis(confettis, ctx.value, canvas.value);
            if (confettis.length === 0) clearInterval(burstId.value);
        }, 1);
    }
    if (!open) {
        clearInterval(burstId.value);
        burstId.value = null;
    }
})
</script>

<template>
<div class="shade" @click="close" :class="{ open: props.open }"></div>
<canvas 
    :id="props.id + '-confetti'"
    class="confetti"
    :class="{ open: props.open }"
>
</canvas>
<div class="modal" :class="{ open: props.open }">
    <div class="content">
        <button class="close-btn" @click="close">×</button>
        <slot></slot>
    </div>
</div>
</template>

<style scoped>
.confetti {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    opacity: 0;
    pointer-events: none;
    z-index: 40;
}
.confetti.open {
    opacity: 1;
    transition: 0.3s;
}
.shade {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    pointer-events: none;
    z-index: 20;
}
.shade.open {
    opacity: 1;
    transition: 0.3s;
    pointer-events: all;
}

.modal {
    position: absolute;
    top: calc(50% + 5rem);
    left: 50%;
    translate: -50% -50%;
    background-color: white;
    border-radius: var(--base-border-radius);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    pointer-events: none;
    opacity: 0;
    z-index: 20;
    width: 30rem;
}
.modal.open {
    opacity: 1;
    transition: 0.2s;
    pointer-events: all;
    top: 50%;
}
.modal > .content {
    position: relative;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.close-btn {
    position: absolute;
    top: 0rem;
    left: .5rem;
    background-color: transparent;
    border: none;
    font-size: x-large;
    color: var(--light-gray);
    padding: var(--base-padding);
}

.close-btn:hover {
    color: var(--gray);
}

@media screen and (max-width: 500px) {
  .modal {
      height: calc(100% - 5rem);
      width: calc(100% - 5rem);
  }
}

@media screen and (max-width: 300px) {
  .modal {
    height: calc(100% - 1rem);
      width: calc(100% - 1rem);
  }
}
</style>