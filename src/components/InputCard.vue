<script setup>
import Success from './Successful.vue'
import { ref, inject, watch, provide } from 'vue'

const succeed = ref(false)
const show = ref(false)
let Name = inject('Name')
let displayName = inject('displayName')
let cardNumber = inject('cardNumber')
let displayNumber = inject('displayNumber')
let formattedCardNumber = ref('')
let MM = inject('MM')
let displayMM = inject('displayMM')
let YY = inject('YY')
let displayYY = inject('displayYY')
let CVC = inject('CVC')
let displayCVC = inject('displayCVC')
let showMM = ref(false);
let showCardNumber = ref(false);
let showYY = ref(false);
let showCVC = ref(false);
let showName = ref(false);


watch(MM, (newVal) => {
    displayMM.value = newVal
    let value = parseInt(newVal);
    if (isNaN(value) || value < 1 || value > 12) {
        MM.value = '';
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
    let value = newVal.replace(/\D/g, '');
    cardNumber.value = newVal.replace(/\W/gi, '')
    formattedCardNumber.value = cardNumber.value.replace(/(.{4})/g, '$1 ').trim();
    formattedCardNumber.value = value.replace(/(.{4})/g, '$1 ').trim();
});

watch(MM, () => {
    showMM.value = MM.value == '';
});
watch(formattedCardNumber, () => {
    showCardNumber.value = formattedCardNumber.value == '';
});
watch(YY, () => {
    showYY.value = YY.value == '';
});
watch(CVC, () => {
    showCVC.value = CVC.value == '';
});
watch(Name, () => {
    showName.value = Name.value.trim() == '';
});

const Check = (event) => {
    event.preventDefault();

    showMM.value = MM.value == '';
    showCardNumber.value = formattedCardNumber.value == '';
    showYY.value = YY.value == '';
    showCVC.value = CVC.value == '';
    showName.value = Name.value.trim() == '';

    if (MM.value == '' || formattedCardNumber.value == '' || YY.value == '' || CVC.value == '' || Name.value.trim() == '') {
        succeed.value = false
    }
    else {
        succeed.value = true
    }
}
</script>

<template>
    <form v-if="!succeed"
        class="w-[460px] h-auto flex flex-col px-10 translate-x-[790px] -translate-y-[210px] relative z-20 gap-3">
        <label class="uppercase tracking-wider font-semibold" for="">Cardholder Name</label>
        <input v-model="Name" class="border border-black  rounded-lg px-4 py-3"
            :class="{ 'border-2 border-red-500 border-opacity-100': showName, 'border border-black': true }" inputmode="text"
            pattern="[a-z]*" maxlength="25" type="text" placeholder="e.g. Jane Appleseed" required>
        <p v-if="showName" class="text-RED -mt-2 font-semibold text-[13px]">Can't be blank</p>
        <label class="uppercase tracking-wider font-semibold" for="">Card Number</label>
        <input v-model="formattedCardNumber" type="text" inputmode="numeric" pattern="\d*" maxlength="19"
            class="border rounded-lg px-4 py-3"
            :class="{ 'border-2 border-red-500 border-opacity-100': showCardNumber, 'border border-black': true }"
            placeholder="e.g. 1234 5678 9123 0000" required>
        <p v-if="showCardNumber" class="text-RED -mt-2 font-semibold text-[13px]">Wrong format, numbers only</p>
        <div class="flex justify-between gap-5 mt-2">
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
                <p v-if="showYY || showMM " class="text-RED mt-1 font-semibold text-[13px]">Can't be blank</p>
            </div>
            <div class="flex flex-col">
                <label class="uppercase tracking-wider font-semibold " for="">CVC</label>
                <input v-model="CVC" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3"
                    class="border rounded-lg px-4 py-3 w-[190px] mt-2"
                    :class="{ 'border-2 border-red-500 border-opacity-100': showCVC, 'border border-black': true }"
                    placeholder="e.g. 123" required>
                <p v-if="showCVC" class="text-RED mt-1 font-semibold text-[13px]">Can't be blank</p>
            </div>
        </div>
        <button @click="Check" class="text-white bg-v-d-violet py-3 mt-3 rounded-lg transform hover:scale-105 hover:bg-opacity-70 ">Confirm</button>
    </form>
    <Success v-else />
</template>

