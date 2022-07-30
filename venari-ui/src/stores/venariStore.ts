import { defineStore } from 'pinia'
import { Venari } from '@/model/venari'
import axios from 'axios'
import { Task } from '@/model/task'

export const useVenariStore = defineStore({
  id: 'hunt',
  state: () => ({
    venari: {} as Venari
  }),
  actions: {
    fetchVenari() {
      /*
      axios
        .get('https://sbraitsch.dev:8080/v1/hunts')
        .then( response => this.hunts = response.data)
        .catch((error) => {
          console.log(error)
        })
      */
      this.venari = new Venari(
        "Venari Test", 
        [
          new Task("First Task", "Description of the First Task."),
          new Task("Second Task", "Description of the Second Task."),
          new Task("Third Task", "Description of the Third Task.")
        ]
      )

    }
  }
})
