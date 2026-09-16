const app = Vue.createApp({
    setup() {
        const counter = Vue.ref(0)

        function increaseCounter() {
            counter.value++
        }

        function decreaseCounter() {
            counter.value--
        }

        return { counter, increaseCounter, decreaseCounter }
    }
})

app.mount("#appdiv")