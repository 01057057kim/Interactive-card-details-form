<script setup>
import { inject } from 'vue';
let displayCVC = inject('displayCVC')
</script>

<template>
    <div class="shadow-xl">
        <img class="fixed -z-5" src="../assets/images/bg-card-back.png" alt="Back card">
        <div class="w-[350px] h-[240px] ml-12 pt-7">
        <label class="relative z-10 " for="">
            <p class="font-bold text-white tracking-[3px] mt-20 text-end">
                {{ displayCVC }}
            </p>
        </label>
        </div>
    </div>
</template>
s