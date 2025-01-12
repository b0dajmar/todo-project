import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usetodoStore = defineStore('task', () => {
    const tasks = ref([
        {
            title: "12",
            decs: "dsfsd",
            finished: false,
            deadline : ""
        },
        {
            title: "12",
            decs: "dsfsd",
            finished: false,
            deadline : ""
        },
        {
            title: "12",
            decs: "dsfsd",
            finished: false,
            deadline : ""
        },
        {
            title: "12",
            decs: "dsfsd",
            finished: false,
            deadline : ""
        }
    ])

})
