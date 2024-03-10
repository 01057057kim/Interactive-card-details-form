<script setup>
import { inject } from 'vue';
let displayName = inject('displayName')
let displayNumber = inject('displayNumber');
let displayMM = inject('displayMM')
let displayYY = inject('displayYY')
</script>

<template>
    <div class="shadow-xl">
        <img class="fixed -z-5" src="../assets/images/bg-card-front.png" alt="front card">
        <div class="w-[445px] h-[240px] px-6 pt-6">
            <img class="relative z-10" src="../assets/images/card-logo.svg" alt="logo">
            <label class="fixed z-10 mt-[70px]" for="">
                <p class="font-bold text-2xl text-white tracking-[7px]  text-start whitespace-nowrap">
                    {{ displayNumber }}
                </p>
            </label>
            <div class="relative z-10 flex justify-between top-[100px] mt-5">
                <p class="font-light  text-white tracking-widest">{{ displayName }}</p>
                <p class="font-semibold  text-white">{{ displayMM }}/{{ displayYY }}</p>
            </div>
        </div>
    </div>
</template>
