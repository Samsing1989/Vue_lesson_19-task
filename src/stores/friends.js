import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFriendStore = defineStore('friends', () => {
  const friendsList = ref([
    {
      id: 1,
      name: 'Баба Галя'
    },
    {
      id: 2,
      name: 'Дід Петро'
    },
    {
      id: 3,
      name: 'Онука Олена'
    }
  ])

  function addFriends(friend) {
    friendsList.value.push({
      id: new Date().getTime(),
      ...friend
    })
  }
  function deleteFriend(friendId) {
    friendsList.value = friendsList.value.filter((friend) => friend.id !== friendId)
  }
  return { friendsList, addFriends, deleteFriend }
})
