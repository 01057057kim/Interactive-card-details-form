<script setup>

import { ref, watch } from 'vue'
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
const succeed = ref(false)
let formattedCardNumber = ref('')
let showMM = ref(false)
let showCardNumber = ref(false)
let showYY = ref(false)
let showCVC = ref(false)
let showName = ref(false)


watch(MM, (newVal) => {
    displayMM.value = newVal
    let value = parseInt(newVal)
    if (isNaN(value) || value < 1 || value > 12) {
        MM.value = ''
    }
});
watch(YY, (newVal) => {
    displayYY.value = newVal
});
watch(CVC, (newVal) => {
    displayCVC.value = newVal
});
watch(Name, (newVal) => {
    displayName.value = (newVal).toUpperCase()
});
watch(cardNumber, (newVal) => {
    displayNumber.value = newVal.replace(/(.{4})/g, '$1 ').trim()
});
watch(formattedCardNumber, (newVal) => {
    let value = newVal.replace(/\D/g, '')
    cardNumber.value = newVal.replace(/\W/gi, '')
    formattedCardNumber.value = cardNumber.value.replace(/(.{4})/g, '$1 ').trim()
    formattedCardNumber.value = value.replace(/(.{4})/g, '$1 ').trim()
});

watch(MM, () => {
    showMM.value = MM.value == ''
});
watch(formattedCardNumber, () => {
    showCardNumber.value = formattedCardNumber.value == ''
});
watch(YY, () => {
    showYY.value = YY.value == ''
});
watch(CVC, () => {
    showCVC.value = CVC.value == ''
});
watch(Name, () => {
    showName.value = Name.value.trim() == ''
});

const Check = (event) => {
    event.preventDefault()
    showMM.value = MM.value == ''
    showCardNumber.value = formattedCardNumber.value == ''
    showYY.value = YY.value == ''
    showCVC.value = CVC.value == ''
    showName.value = Name.value.trim() == ''

    if (MM.value == '' || formattedCardNumber.value == '' || YY.value == '' || CVC.value == '' || Name.value.trim() == '') {
        succeed.value = false
    }
    else {
        succeed.value = true
    }
}

const reloadPage = () => {
    location.reload()
}

</script>

<template>
    <main
        class="m-0 p-0 box-border min-w-[375px] w-full min-h-screen font-space text-[13px] mx-auto flex justify-center relative">
        <img class="object-cover w-screen h-[250px] fixed mx-auto -z-10" src="./assets/images/bg-main-mobile.png"
            alt="left-img">
        <section class="mt-[108px] -ml-20 absolute z-10 ">
            <img class="fixed -ml-[150px] w-[310px] -z-5" src="./assets/images/bg-card-front.png" alt="front card">
            <div class="w-[310px] h-[170px] fixed -ml-[150px] px-6 pt-3">
                <img class="fixed z-10 w-[50px]" src="./assets/images/card-logo.svg" alt="logo">
                <label class="fixed z-10 mt-[80px]" for="">
                    <p class="font-bold text-lg text-white tracking-[3px] text-start whitespace-nowrap">
                        {{ displayNumber }}
                    </p>
                </label>
                <div class="fixed z-10 flex justify-between w-[255px] translate-y-[120px]">
                    <p class="font-light text-white tracking-widest">{{ displayName }}</p>
                    <p class="font-semibold text-white">{{ displayMM }}/{{ displayYY }}</p>
                </div>
            </div>
        </section>
        <section class="mt-3 ml-10 fixed z-5">
            <img class="fixed w-[310px] -z-5" src="./assets/images/bg-card-back.png" alt="Back card">
            <div class="w-[230px] ml-11 -mt-1">
                <label class="relative z-10 " for="">
                    <p class="font-bold text-white tracking-[3px] mt-20 text-end">
                        {{ displayCVC }}
                    </p>
                </label>
            </div>
        </section>
        <section>
            <form v-if="!succeed" class=" w-[380px] flex flex-col mt-[300px] gap-3">
                <label class="uppercase tracking-wider font-semibold" for="">Cardholder Name</label>
                <input v-model="Name" class="border border-black  rounded-lg px-4 py-3"
                    :class="{ 'border-2 border-red-500 border-opacity-100': showName, 'border border-black': true }"
                    inputmode="text" pattern="[a-z]*" maxlength="25" type="text" placeholder="e.g. Jane Appleseed" required>
                <p v-if="showName" class="text-RED -mt-2 font-semibold text-[13px]">Can't be blank</p>
                <label class="uppercase tracking-wider font-semibold" for="">Card Number</label>
                <input v-model="formattedCardNumber" type="text" inputmode="numeric" pattern="\d*" maxlength="19"
                    class="border rounded-lg px-4 py-3"
                    :class="{ 'border-2 border-red-500 border-opacity-100': showCardNumber, 'border border-black': true }"
                    placeholder="e.g. 1234 5678 9123 0000" required>
                <p v-if="showCardNumber" class="text-RED -mt-2 font-semibold text-[13px]">Wrong format, numbers only</p>
                <div class="flex gap-5 mt-2">
                    <div class="flex flex-col">
                        <label class="uppercase tracking-wider font-semibold" for="">Exp. Date (MM/YY)</label>
                        <div class="flex gap-2">
                            <input v-model="MM" class="border rounded-lg px-4 py-3 w-[80px] mt-2"
                                :class="{ 'border-2 border-red-500 border-opacity-100': showMM, 'border border-black': true }"
                                type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="MM" required>
                            <input v-model="YY" class="border rounded-lg px-4 py-3 w-[80px] mt-2"
                                :class="{ 'border-2 border-red-500 border-opacity-100': showYY, 'border border-black': true }"
                                type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="YY" required>
                        </div>
                        <p v-if="showYY || showMM" class="text-RED mt-1 font-semibold text-[13px]">Can't be blank</p>
                    </div>
                    <div class="flex flex-col">
                        <label class="uppercase tracking-wider font-semibold " for="">CVC</label>
                        <input v-model="CVC" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3"
                            class="border rounded-lg px-4 py-3 w-[192px] mt-2"
                            :class="{ 'border-2 border-red-500 border-opacity-100': showCVC, 'border border-black': true }"
                            placeholder="e.g. 123" required>
                        <p v-if="showCVC" class="text-RED mt-1 font-semibold text-[13px]">Can't be blank</p>
                    </div>
                </div>
                <button @click="Check" class="text-white bg-v-d-violet py-3 mt-3 rounded-lg hover:scale-105 hover:bg-opacity-70 ">Confirm</button>
            </form>
            <section v-else class="w-[460px] h-[350px] flex flex-col px-10 translate-y-[300px] relative z-20 gap-3 justify-center items-center">
                <img class=" w-[70px]" src="./assets/images/icon-complete.svg" alt="complete">
                <h1 class="font-bold uppercase tracking-widest text-xl">Thank you!</h1>
                <p>We've added your card details</p>
                <button @click="reloadPage" class="w-[380px] text-white bg-v-d-violet py-3 mt-3 rounded-lg hover:scale-105 hover:bg-opacity-70 ">Confirm</button>
            </section>
        </section>
    </main>
</template>
