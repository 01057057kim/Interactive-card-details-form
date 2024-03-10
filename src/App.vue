<script setup>
import { ref, provide } from 'vue';
import FrontCard from './components/FrontCard.vue'
import BackCard from './components/BackCard.vue'
import InputCard from './components/InputCard.vue'


let Name = ref('')
let displayName = ref('JANE APPLESEED')
let cardNumber = ref('')
let displayNumber = ref('0000 0000 0000 0000')
let MM = ref('')
let displayMM = ref('00')
let YY = ref('')
let displayYY = ref('00')
let CVC = ref('')
let displayCVC = ref('000')
let Succeed = ref('false')

provide('Name', Name)
provide('displayName', displayName)
provide('cardNumber', cardNumber)
provide('displayNumber', displayNumber)
provide('MM', MM)
provide('displayMM', displayMM)
provide('YY', YY)
provide('displayYY', displayYY)
provide('CVC', CVC)
provide('displayCVC', displayCVC)
provide('Succeed', Succeed)
</script>

<template>
  <main class="m-0 p-0 box-border min-w-[1440px] min-h-screen font-space text-[16px]">
    <img class="object-cover w-[480px] h-screen fixed -z-10" src="./assets/images/bg-main-desktop.png" alt="left-img">
    <div class="translate-x-[165px] translate-y-[190px] w-[447px]">
      <FrontCard />
    </div>
    <div class="translate-x-[260px] translate-y-[230px] w-[447px]">
      <BackCard />
    </div>
    <div>
      <InputCard/>
      
    </div>
  </main>
</template>

