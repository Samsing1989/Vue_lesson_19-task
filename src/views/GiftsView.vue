<script setup>
import { reactive } from 'vue'
import { useGiftStore } from '../stores/gifts.js'

const giftStore = useGiftStore()
const giftReactive = reactive({})

function onDelete(gift) {
  const dlt = giftStore.deleteGifts(gift.id)
  return dlt
}
function onAdd() {
  const add = giftStore.addGifts(giftReactive)
  return add
}
</script>

<template>
  <h1>Список подарунків</h1>
  <div class="container">
    <div v-for="gift in giftStore.giftsList" :key="gift.id" class="gift">
      {{ gift.title }}

      <v-btn size="x-large" @click="onDelete(gift)">Видалити</v-btn>
    </div>
  </div>
  <div>
    <label class="lable">
      <v-text-field
        v-model="giftReactive.title"
        label="Новий подарунок"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>

      <v-btn size="x-large" @click="onAdd">Додати</v-btn>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.gift {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  &:not(:last-child) {
    border-bottom: 2px solid #000;
  }
}
.lable {
  display: flex;
  gap: 20px;
}
</style>
