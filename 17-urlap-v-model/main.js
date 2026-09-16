const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')

        // setTimeout(() => {
        //     name.value = 'Szabolcs'
        // }, 2000)

        

        return { name }
    }
})

app.mount("#appdiv")