const app = Vue.createApp({
    setup() {
        const message = "Hello Vue.js!"
        return { message }
    }
})

app.mount("#appdiv")