<script setup>
import { ref, reactive } from 'vue'
import { useGiftStore } from '../stores/gifts.js'
import { useFriendStore } from '../stores/friends.js'
import { useDesignationsStore } from '../stores/designation.js'

const designationStore = useDesignationsStore()
const friendStore = useFriendStore()
const giftStore = useGiftStore()

const designation = reactive({})
const message = ref('')

function onAddDesignation() {
  if (designation.friendId && designation.giftId) {
    designationStore.addDesignation(designation)
    Object.keys(designation).forEach((key) => {
      designation[key] = null
    })
    message.value = null
  } else {
    message.value = 'Виберіть подарунки і друзів'
  }
}
</script>

<template>
  <main>
    <div class="container-des">
      <h3>Розприділити подарунки</h3>
      <div
        v-for="designation in designationStore.designationsList"
        :key="designation.id"
        class="designation"
      >
        {{ designation.friendId }} - {{ designation.giftId }}
        <button class="button" @click="designationStore.deleteDesignation(designation.id)">
          Видалити
        </button>
      </div>
    </div>
    <div class="container-select">
      <v-select
        v-model="designation.friendId"
        label="Друг"
        :items="friendStore.friendsList"
        item-value="name"
        variant="solo"
        item-title="name"
        clearable
      >
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :value="item.raw.id"></v-list-item>
        </template>
      </v-select>
      <v-select
        v-model="designation.giftId"
        label=" Подарунок"
        :items="giftStore.giftsList"
        item-value="title"
        variant="solo"
        item-title="title"
        clearable
      >
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :value="item.raw.id"></v-list-item>
        </template>
      </v-select>

      <v-btn size="x-large" @click="onAddDesignation">Додати</v-btn>
    </div>

    <div v-if="message">{{ message }}</div>
  </main>
</template>

<style lang="scss" scoped>
.container-select {
  display: flex;
  gap: 20px;
}
.select {
  padding: 9px 10px;
  font-size: 20px;
}
.container-des {
  max-width: 500px;

  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.designation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  &:not(:last-child) {
    border-bottom: 2px solid #000;
  }
}
</style>
