import { defineStore } from 'pinia'
import axios from 'axios'

export const useHuntStore = defineStore({
  id: 'hunt',
  state: () => ({
    hunts: []
  }),
  getters: {
  },
  actions: {
    fetchHunts() {
      axios
        .get('https://sbraitsch.dev:8080/v1/hunts')
        .then( response => this.hunts = response.data)
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
