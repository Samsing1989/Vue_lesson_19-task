import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGiftStore = defineStore('giftі', () => {
  const giftsList = ref([
    {
      id: 1,
      title: 'Торт'
    },
    {
      id: 2,
      title: 'Листівка'
    },
    {
      id: 3,
      title: 'Шовдарь'
    }
  ])

  function addGifts(gift) {
    giftsList.value.push({
      id: new Date().getTime(),
      ...gift
    })
  }
  function deleteGifts(giftsId) {
    giftsList.value = giftsList.value.filter((gift) => gift.id !== giftsId)
  }
  return { giftsList, addGifts, deleteGifts }
})
