const app = Vue.createApp({
    setup() {
        const price = Vue.ref(0)

        function increasePrice() {
            price.value++
        }

        function decreasePrice() {
            price.value--
        }

        return { price, increasePrice, decreasePrice }
    }
})

app.mount("#appdiv")