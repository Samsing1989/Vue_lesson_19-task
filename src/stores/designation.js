import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDesignationsStore = defineStore('designations', () => {
  const designationsList = ref([
    //  {
    //    id: 1,
    //    friendId: 2,
    //    giftId: 2
    //  }
  ])

  function addDesignation(designation) {
    designationsList.value.push({
      id: new Date().getTime(),
      ...designation
    })
  }
  function deleteDesignation(designationId) {
    designationsList.value = designationsList.value.filter(
      (designation) => designation.id !== designationId
    )
  }
  return { designationsList, addDesignation, deleteDesignation }
})
