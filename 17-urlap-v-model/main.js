const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')

        return { name,
         }
    }
})

app.mount("#appdiv")