<script setup>
const props = defineProps({
    open: Boolean,
    message: String
});
</script>

<template>
    <div class='dialogue' :class="{ open: props.open && props.message.length }">
        {{ props.message }}
    </div>
</template>

<style scoped>
.dialogue {
    opacity: 0;
    transition: .7s ease-in;
    pointer-events: none;
    position: absolute;
    color: white;
    background-color: black;
    padding: var(--base-padding) 1rem;
    border-radius: var(--base-border-radius);
    left: 50%;
    top: 4rem;
    translate: -50%;
}

.dialogue.open {
    opacity: 1;
    transition: 0s;
}
</style>