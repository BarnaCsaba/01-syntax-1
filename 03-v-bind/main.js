const app = Vue.createApp({
    setup() {
        const title_ = "Vue is so cool!"
        return { title_ }
    }
})

app.mount("#appdiv")