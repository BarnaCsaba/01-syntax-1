const app = Vue.createApp({
    setup() {
        const price = Vue.ref(0)

        const myMoney = Vue.ref(5)
        const errorMessage = Vue.ref(null)
        function increasePrice() {
            price.value++
        }
        const watch = Vue.watch
        function decreasePrice() {
            price.value--
        }
        const formattedPrice = Vue.computed(() => {
            return price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
        })

        watch(price, () => {
            errorMessage.value = price.value > myMoney.value ? "You don't have enough money!" : null
        })
        // return { price, increasePrice, decreasePrice }
    // return { price, increasePrice, decreasePrice, formattedPrice     
    
    return { price, increasePrice, decreasePrice, formattedPrice, myMoney, errorMessage, watch }
    }
})

app.mount("#appdiv")