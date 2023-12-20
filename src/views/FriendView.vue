<script setup>
import { reactive } from 'vue'
import { useFriendStore } from '../stores/friends.js'

const friendStore = useFriendStore()
const friendReactive = reactive({})

function onDelete(friend) {
  const dlt = friendStore.deleteFriend(friend.id)
  return dlt
}
function onAdd() {
  const add = friendStore.addFriends(friendReactive)
  return add
}
</script>

<template>
  <main>
    <h1>Список друзів</h1>
    <div class="container-friend">
      <div v-for="friend in friendStore.friendsList" :key="friend.id" class="friend">
        {{ friend.name }}
        <v-btn size="x-large" @click="onDelete(friend)">Видалити</v-btn>
      </div>
    </div>
    <div>
      <label class="lable">
        <v-text-field
          v-model="friendReactive.name"
          label="Новий друг"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>

        <v-btn size="x-large" @click="onAdd">Додати</v-btn>
      </label>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container-friend {
  margin-bottom: 20px;
}
.friend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid #000;
}
.lable {
  display: flex;
  gap: 20px;
}
</style>
